<?php

namespace App\Models\Admin\Panel;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataPanel extends Model
{
    use HasFactory;
    protected $table = "panels_datahub";

    public function child(){
        return DataPanel::where('parent',$this->id)->get();
    }

    public function getContentParseAttribute(){
        $content = $this->attributes['content'];
        if($this->attributes['type'] === 'document'){
            $content = json_decode($content);
        }
        return $content;
    }
}
