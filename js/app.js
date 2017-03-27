requirejs.config({
    paths: {
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'view': {
            deps: ['model']
        },
        'cotroller': {
            deps: ['model', 'view']
        }
    }
});

require(
    [
        'jquery',
        'tmpl',
        'model',
        'view',
        'controller'
    ],

    function($, tmpl, model, view, controller) {
    }
);
