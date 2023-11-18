<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\UploadedFile;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OrderMail extends Mailable
{
    use Queueable, SerializesModels;

    private array $data;

    /**
     * Create a new message instance.
     *
     * @param array $data
     * @return void
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address(env('MAIL_FROM_REPLY'), env('MAIL_FROM_NAME')),
            replyTo: [
                new Address(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME')),
            ],
            subject: 'Заявка с сайта',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.order-mail',
            with: [
                'data' => $this->data,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        $attachment = [];
        $files = $_FILES['attach']['tmp_name'] ?? null;
        if (!empty($files)) {
            foreach ($_FILES['attach']['tmp_name'] as $key=>$file) {
                $uploadedFile = new UploadedFile($file, basename($file));
                if ($uploadedFile->isValid()) {
                    $attachment[] = Attachment::fromPath($file)->as($_FILES['attach']['name'][$key]);
                }
            }
        }
        return $attachment;
    }
}
