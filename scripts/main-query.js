$(document).ready(function(){
    $("#d1").on("change", function(){
        switch(this.value){
            case '1':
                $("#d1_card_img").attr("src", "imgs/img1_1.png");
                $("#d1_card_img").attr("alt", "This is the example image for option 1");
                $("#d1_card_title").text("Option 1");
                $("#d1_card_context").text("Introduction to option 1. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d1_card_detail").removeAttr("hidden");
                break;
            case '2':
                $("#d1_card_img").attr("src", "imgs/img1_2.png");
                $("#d1_card_img").attr("alt", "This is the example image for option 2");
                $("#d1_card_title").text("Option 2");
                $("#d1_card_context").text("Introduction to option 2. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d1_card_detail").removeAttr("hidden");
                break;
        }
    })

    $("#d2").on("change", function(){
        switch(this.value){
            case '1':
                $("#d2_card_img").attr("src", "imgs/img1_1.png");
                $("#d2_card_img").attr("alt", "This is the example image for option 1");
                $("#d2_card_title").text("Option 1");
                $("#d2_card_context").text("Introduction to option 1. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d2_card_detail").removeAttr("hidden");
                break;
            case '2':
                $("#d2_card_img").attr("src", "imgs/img1_2.png");
                $("#d2_card_img").attr("alt", "This is the example image for option 2");
                $("#d2_card_title").text("Option 2");
                $("#d2_card_context").text("Introduction to option 2. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d2_card_detail").removeAttr("hidden");
                break;
        }
    })

    $("#d3").on("change", function(){
        switch(this.value){
            case '1':
                $("#d3_card_img").attr("src", "imgs/img1_1.png");
                $("#d3_card_img").attr("alt", "This is the example image for option 1");
                $("#d3_card_title").text("Option 1");
                $("#d3_card_context").text("Introduction to option 1. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d3_card_detail").removeAttr("hidden");
                break;
            case '2':
                $("#d3_card_img").attr("src", "imgs/img1_2.png");
                $("#d3_card_img").attr("alt", "This is the example image for option 2");
                $("#d3_card_title").text("Option 2");
                $("#d3_card_context").text("Introduction to option 2. Some quick example text to build on the card title and make up the bulk of the card's content.");
                $("#d3_card_detail").removeAttr("hidden");
                break;
        }
    })

    $("#confirm").click(function(){
        op1 = $('#d1').val();
        op2 = $('#d2').val();
        op3 = $('#d3').val();

        key = op1+'+'+op2+'+'+op3
        value = localStorage.getItem(key)
        value = Number(value)
        if(value != null){
            localStorage.setItem(key, value+1)
        }else{
            localStorage.setItem(key, 1)
        }
    });
 });