$(function(){

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $(".receta h2").on( "dblclick", function() {
        $(this).css({"color":"#DC3545"});
      });

    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente..");
    });

    $(".card .card-title").click(function(){
        $(".card .card-text").toggle("slow");
    })

    });