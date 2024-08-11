<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    // const CREATED_AT = 'created_at'; // overwrite column name
    // const UPDATED_AT = 'updated_at'; // overwrite column name

    // protected $table = 'users'; // auto-generated by Laravel
    // protected $primaryKey = 'id'; // auto-generated by Laravel
    // protected $keyType = 'int'; // overwrite primary key column type
    // public $incrementing = true; // disable auto-increment of primary key column

    protected $timestamps = false; // disable timestamp fields
}
