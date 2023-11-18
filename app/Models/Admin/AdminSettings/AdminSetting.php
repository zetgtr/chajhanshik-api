<?php

namespace App\Models\Admin\AdminSettings;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminSetting extends Model
{
    use HasFactory;
    protected $fillable = ['footer','url','passed','developer','developer_site','developer_email','developer_phone'];
}
