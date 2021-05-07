$(document).ready(function(){

    // smooth scroll links navbar
    $(".smoothScroll").click(function(event){
        if(this.hash !== ""){
            event.preventDefault();
            let hashtag = this.hash;

            $("html, body").animate({
                scrollTop: $(hashtag).offset().top
            }, 1000, function(){
                window.location.hash = hashtag;
            })
        }
    });

    //tooltips sobre iconos RRSS
    $('[data-toggle="tooltip"]').tooltip();
});