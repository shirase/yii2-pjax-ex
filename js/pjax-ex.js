(function($) {
    $.pjax.submitForm = function(form, container, options) {
        $.pjax(
            $.extend(
                {},
                {url: $(form).attr('action'), container: container, history:false, type:"post"},
                window.FormData !== undefined
                    ? {data:new FormData(form[0]), processData:false, contentType:false}
                    : {data:form.serializeArray()},
                options
            )
        );
    }
})(jQuery);