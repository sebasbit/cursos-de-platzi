<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $fakeTitle = $this->faker->sentence();

        return [
            'slug' => Str::slug($fakeTitle),
            'title' => $fakeTitle,
            'content' => $this->faker->text(2048)
        ];
        // Alternative using fake() function
        // return [
        //     'slug' => fake()->slug(),
        //     'title' => fake()->sentence(),
        //     'content' => fake()->text(2048)
        // ];
    }
}
