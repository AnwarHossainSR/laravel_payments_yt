<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PaymentController extends Controller
{
    public function checkout(Request $request, $id)
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));
        $product = Product::find($id);
        $session = \Stripe\Checkout\Session::create([
            'payment_method_types' => ['card'],
            "customer_creation" => 'always',
            'phone_number_collection' => [
                'enabled' => true,
            ],
            'line_items' => [
                [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $product->name,
                        'images' => [$product->image]
                    ],
                    'unit_amount' => $product->price * 100,
                ],
                'quantity' => 1,
            ],
            'mode' => 'payment',
            'success_url' => route('checkout.success', [], true) . "?session_id={CHECKOUT_SESSION_ID}",
            'cancel_url' => route('checkout.cancel', [], true),
        ]);

        $order = new Order();
        $order->status = 'unpaid';
        $order->total_price = $product->price;
        $order->session_id = $session->id;
        $order->user_id = auth()->user()->id;
        $order->save();
        return redirect($session->url);
    }

    public function success(Request $request)
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
        $sessionId = $request->get('session_id');
        try {

            $session = $stripe->checkout->sessions->retrieve($sessionId);

            if (!$session) {
                throw new NotFoundHttpException();
            }
            $customer = $stripe->customers->retrieve($session->customer);
            $order = Order::where('session_id', $session->id)->first();
            if (!$order) {
                throw new NotFoundHttpException();
            }
            if ($order->status === 'unpaid') {
                $order->status = 'paid';
                $order->save();
            }

            return redirect()->away('http://localhost:3000/payment/success');
        } catch (\Exception $e) {
            throw new NotFoundHttpException();
        }
    }

    public function cancel()
    {
        return redirect()->away('http://localhost:3000/payment/cancellation');
    }
}
