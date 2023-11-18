<?php

namespace App\Http\Controllers\Form;

use App\Http\Controllers\Controller;
use App\Mail\FeedbackMail;
use App\Mail\OrderMail;
use App\Models\Admin\Settings\Settings;
use App\Notifications\FeedbackNotification;
use App\Notifications\OrderFormNotification;
use Illuminate\Support\Facades\Notification;
use App\QueryBuilder\Admin\FeedBack\FeedBackBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $name, FeedBackBuilder $feedBackBuilder)
    {
        $feedBackBuilder->setForm($request->all());
        $email = Settings::first()->site_email;
        if(!$email)
            return ['status'=>false,'message'=>'Не указана почта в настройках'];
        try {
            match ($name) {
                'feedback' => Notification::route('mail', $email)->notify(new FeedbackNotification($request->all())),
                'orderForm' => Notification::route('mail', $email)->notify(new OrderFormNotification($request))
            };
            $feedBackBuilder->deleteTemp();
            return ['status'=>true,'message'=>"Письмо успешно отправлено"];
        } catch (\Throwable $e) {
            return ['status'=>false,'message'=>$e->getMessage()];
        }
    }
}
