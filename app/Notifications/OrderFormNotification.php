<?php

namespace App\Notifications;

use App\QueryBuilder\NotificationBuilder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderFormNotification extends Notification
{
    use Queueable;

    private array $data;
    private Request $request;

    /**
     * Create a new notification instance.
     */
    public function __construct($request)
    {
        $this->request = $request;
        $this->data[] = ['label'=>'Клиент','value'=>'name'];
        $this->data[] = ['label'=>'Компания','value'=>'company'];
        $this->data[] = ['label'=>'Телефон','value'=>'tel'];
        $this->data[] = ['label'=>'Email','value'=>'email'];
        $this->data[] = ['label'=>'Бюджет','value'=>'price'];
        $this->data[] = ['label'=>'От куда узнали про нас','value'=>'desc'];
        $this->data[] = ['label'=>'Страница','value'=>'pages'];
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $notificationBuilder = new NotificationBuilder();
        $mails = (new MailMessage)->subject('Заявка с сайта')
            ->greeting('Здравствуйте!')
            ->line('На сайте была оставлена заявка.<br>')
            ->line($notificationBuilder->setData($this->data,$this->request->all()));
        return $notificationBuilder->setFiles($this->request->file('attach'), $mails);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
