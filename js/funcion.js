$(document).ready(function () {
    $('#formulario').on('submit', function (event) {
        event.preventDefault();
        var usuario = $('#usuario').val();
        var contrasena = $('#contrasena').val();
        if (usuario === "MERCADO" && contrasena === "FORQUERAS") {
            window.location.href = "inicio.html"
        } else {
            $('#alerta').html('<div class="alert alert-danger">acceso denegado</div>')
        }
    });
    $('.needs-validation').on('submit', function (event) {
        var form = $(this);
        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
            form.find(':invalid').first().focus()
        }
        form.addClass('was-validated')
    })
    $('[data-bs-toggle="popover"]').each(function () {
        new bootstrap.Popover(this)
    })
    $('[data-bs-toggle="tooltip"]').tooltip()
})
$('#livetoastbtn').click(function() {
    const toast = new bootstrap.Toast($('#livetoast')[0])
    toast.show()
})