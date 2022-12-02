<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function createPlan(Request $request)
    {
        \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

        $plan = \Stripe\Price::create([
            'unit_amount' => $request->price * 100,
            'currency' => 'usd',
            'recurring' => [
                'interval' => $request->interval,
                'trial_period_days' => $request->trial_period_days,
            ],
            'lookup_key' => str()->snake($request->name),
            'transfer_lookup_key' => true,
            'product_data' => [
                'name' => $request->name,
            ],
        ]);

        $newPlan = new Plan();
        if ($plan && $plan->active === true) {
            $newPlan->st_plan_id = $plan->id;
            $newPlan->name = $request->name;
            $newPlan->price = $request->price;
            $newPlan->interval = $request->interval;
            $newPlan->trial_period_days = $request->trial_period_days;
            $newPlan->lookup_key = str()->snake($request->name);
            $newPlan->save();
        }

        return response()->json([
            'status' => true,
            'data' => $newPlan,
        ]);
    }

    public function getPlans()
    {
        $plans = Plan::all();
        return response()->json([
            'status' => true,
            'data' => $plans,
        ]);
    }
}
