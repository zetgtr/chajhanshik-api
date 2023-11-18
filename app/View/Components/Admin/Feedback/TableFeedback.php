<?php

namespace App\View\Components\Admin\Feedback;

use App\QueryBuilder\Admin\FeedBack\FeedBackBuilder;
use Closure;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\View\Component;

class TableFeedback extends Component
{
    private Collection $feedbacks;
    /**
     * Create a new component instance.
     */
    public function __construct(FeedBackBuilder $feedBackBuilder)
    {
        $this->feedbacks = $feedBackBuilder->getAll();
    }

    /**
     * Get the view / contents that represent the component.
     */
    public function render(): View|Closure|string
    {
        return view('components.admin.feedback.table-feedback', ['feedbacks' => $this->feedbacks]);
    }
}
