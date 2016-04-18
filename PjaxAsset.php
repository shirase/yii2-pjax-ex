<?php

namespace shirase\pjax;

use yii\web\AssetBundle;

class PjaxAsset extends AssetBundle
{
    public $js = [
        'pjax-ex.js',
    ];
    public $depends = [
        'yii\widgets\PjaxAsset',
    ];

    public function init() {
        $this->sourcePath = __DIR__.'/js';
    }
}