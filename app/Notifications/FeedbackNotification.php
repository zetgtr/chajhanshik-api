<?php

namespace App\Notifications;

use App\QueryBuilder\NotificationBuilder;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class FeedbackNotification extends Notification
{
    use Queueable;

    private array $data;

    /**
     * Create a new notification instance.
     */
    public function __construct($dataAll)
    {
        $this->dataAll = $dataAll;
        $this->data[] = ['label'=>'Клиент','value'=>'name'];
        $this->data[] = ['label'=>'Email','value'=>'email'];
        $this->data[] = ['label'=>'Телефон','value'=>'tel'];
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
        return (new MailMessage)
            ->greeting('Здравствуйте!')
            ->subject('Обратная связь с сайта')
            ->line('На сайте была оставлена заявка на обратную связь.<br>')
            ->line($notificationBuilder->setData($this->data,$this->dataAll));
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
