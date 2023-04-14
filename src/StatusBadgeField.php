<?php

namespace Wame\StatusBadgeField;


use Laravel\Nova\Contracts\FilterableField;
use Laravel\Nova\Fields\BelongsTo;


class StatusBadgeField extends BelongsTo implements FilterableField
{
    public $component = 'status-badge-field';

}
