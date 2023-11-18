<?php

namespace App\QueryBuilder;

use Illuminate\Database\Eloquent\Collection;

class NotificationBuilder extends QueryBuilder
{

    public function setData(array $data,$dataAll)
    {
        $string = "";
        foreach ($data as $item)
        {
            $string .= "<br>".$item['label'].": ".$dataAll[$item['value']];
        }
        return $string;
    }
    public function setFiles($files,$mails)
    {
        if($files)
            foreach ($files as $file)
            {
                $fileName = $file->getClientOriginalName();
                $filePath = 'app/public/temp/' . $fileName;
                $file->storeAs('public/temp', $fileName);
                $mails->attach(storage_path($filePath));
            }
        return $mails;
    }
    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }
}
