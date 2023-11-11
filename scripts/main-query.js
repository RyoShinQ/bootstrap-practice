$(document).ready(function(){
    $("#d1_op1").click(function(){
        $("#d1_card_img").attr("src", "imgs/img1_1.png");
        $("#d1_card_img").attr("alt", "This is the example image for option 1");
        $("#d1_card_title").text("Option 1");
        $("#d1_card_context").text("Introduction to option 1. Some quick example text to build on the card title and make up the bulk of the card's content.");
        $("#d1_card_detail").attr("data-bs-target", "#d1_op1_detail_modal")
    });

    $("#d1_op2").click(function(){
        $("#d1_card_img").attr("src", "imgs/img1_2.png");
        $("#d1_card_img").attr("alt", "This is the example image for option 2");
        $("#d1_card_title").text("Option 2");
        $("#d1_card_context").text("Introduction to option 2. Some quick example text to build on the card title and make up the bulk of the card's content.");
        $("#d1_card_detail").attr("data-bs-target", "#d1_op2_detail_modal")
    });

    $("#d1").on("change", function(){
        switch(this.value){
            case '1':
                $("#d1_card_img").attr("src", "imgs/img1_1.png");
                $("#d1_card_img").attr("alt", "This is the example image for option 1");
                $("#d1_card_title").text("Option 1");
                $("#d1_card_context").text("Introduction to option 1. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d1_card_detail").attr("data-bs-target", "#d1_op1_detail_modal")
                break;
            case '2':
                $("#d1_card_img").attr("src", "imgs/img1_2.png");
                $("#d1_card_img").attr("alt", "This is the example image for option 2");
                $("#d1_card_title").text("Option 2");
                $("#d1_card_context").text("Introduction to option 2. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d1_card_detail").attr("data-bs-target", "#d1_op2_detail_modal")
                break;

        }
    })

    $("#confirm").click(function(){
        op1 = $('#d1').val()
        alert(op1)
    });
 });