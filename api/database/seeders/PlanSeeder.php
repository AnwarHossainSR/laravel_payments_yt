<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $plans = [
            [
                'name'=>'Personal',
                'price'=> 47,
                'interval'=>'month',
                'trial_period_days'=> 7,
                'lookup_key'=>'personal',
                'st_plan_id'=>'price_1MAW4uCibmxzE7ibXvsyLiFO'
            ],
            [
                'name'=>'Business',
                'price'=> 99,
                'interval'=>'month',
                'trial_period_days'=> 15,
                'lookup_key'=>'business',
                'st_plan_id'=>'price_1MAW58CibmxzE7ib7MiYJ2Up'
            ],
            [
                'name'=>'Expert',
                'price'=> 197,
                'interval'=>'month',
                'trial_period_days'=> 30,
                'lookup_key'=>'expert',
                'st_plan_id'=>'price_1MAW5MCibmxzE7ibGpdWAgZv'
            ]
        ];

        foreach ($plans as $plan) {
            \App\Models\Plan::create($plan);
        }
    }
}
