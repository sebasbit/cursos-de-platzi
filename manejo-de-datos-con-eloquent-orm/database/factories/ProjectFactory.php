<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // 'city_id' => , // set in DatabaseSeeder::run()
            // 'company_id' => , // set in DatabaseSeeder::run()
            // 'user_id' => , // set in DatabaseSeeder::run()
            'name' => fake()->words(5, true),
            'execution_date' => now()->addDays(fake()->numberBetween(1, 365)),
            'is_active' => fake()->boolean(75),
        ];
    }
}
