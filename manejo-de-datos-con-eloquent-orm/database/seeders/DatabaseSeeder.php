<?php

namespace Database\Seeders;

use App\Models\City;
use App\Models\Company;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    const TABLE_RECORDS = 10;
    const PROJECT_TABLE_RECORDS = 20;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        City::factory(self::TABLE_RECORDS)->create();
        Company::factory(self::TABLE_RECORDS)->create();
        User::factory(self::TABLE_RECORDS)->create();

        for ($i=0; $i < self::PROJECT_TABLE_RECORDS; $i++) { 
            Project::factory()->create([
                'city_id' => fake()->numberBetween(1, self::TABLE_RECORDS),
                'company_id' => fake()->numberBetween(1, self::TABLE_RECORDS),
                'user_id' => fake()->numberBetween(1, self::TABLE_RECORDS),
            ]);
        }
    }
}
