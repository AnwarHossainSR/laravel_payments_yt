<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        $this->call([
            PlanSeeder::class,
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Developmnet Kit',
            'email' => 'dk@gmail.com',
            'password' => bcrypt('password'),
            'plan_id' => 1
        ]);
        \App\Models\User::factory(10)->create();
    }
}
