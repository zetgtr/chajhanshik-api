<?php

namespace App\Models\Admin\HeaderAndFooter;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeaderAndFooter extends Model
{
    use HasFactory;
    protected $table = 'header_and_footer';
    protected $fillable = [
        'header','footer'
    ];
}
