<?php

namespace App\Models;

use App\Models\Scopes\NewestScope;
use Illuminate\Database\Eloquent\Attributes\ScopedBy;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[ScopedBy(NewestScope::class)]
class Project extends Model
{
    use HasFactory;

    // protected $table = 'projects'; // auto-generated by Laravel
    // protected $primaryKey = 'id'; // auto-generated by Laravel
    // protected $attributes = [
    //     'name' => 'NN' // default value for the column
    // ];

    protected $casts = [
        'execution_date' => 'date'
    ];

    // protected static function booted(): void // same as #[ScopedBy(NewestScope::class)]
    // {
    //     static::addGlobalScope(new NewestScope());
    // }

    public function scopeInactive(Builder $query): void
    {
        $query->where('is_active', '=', false);
    }
}
