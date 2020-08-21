$(document).ready(function(){

    $('body').on('click','#first, #first_chosen, #link1',function(){
	if ($("#one").prop("checked")){
	$('#first_chosen').attr('id','first');
    $('#one').prop('checked', false);
    $('#first').css('background-image', 'url("../img/cat.png")');
    $('#circle_first').css({'background-color':'#1698d9'});
    $('#text_below1').html("Чего сидишь? Порадуй котэ,<button  id=\"link1\" class=\"link\" >купи</button><font color=\"#1698d9\">.</font>");}
	else{
	$('#first').attr('id','first_chosen');
    $('#one').prop('checked', true);
    $('#first_chosen').css('background-image', 'url("../img/cat_selected.png")');
    $('#circle_first').css({'background-color':'#D91667'});
    $('#text_below1').html("<p>Печень утки разварная с артишоками</p>");
}
})

	$('body').on('click','#second, #second_chosen, #link2',function(){
	if ($("#two").prop("checked")){
	$('#second_chosen').attr('id','second');
    $('#two').prop('checked', false);
    $('#second').css('background-image', 'url("../img/cat.png")');
    $('#circle_second').css({'background-color':'#1698d9'});
    $('#text_below2').html("Чего сидишь? Порадуй котэ, <button class=\"link\"  id=\"link2\">купи</button><font color=\"#1698d9\">.</font>");}
	else{
	$('#second').attr('id','second_chosen');
    $('#two').prop('checked', true);
    $('#second_chosen').css('background-image', 'url("../img/cat_selected.png")');
    $('#circle_second').css({'background-color':'#D91667'});
    $('#text_below2').html("<p>Головы щучьи с чесноком да свежайшая сёмгушка.</p>");}
})

    $('body').on('click','#third, #third_chosen, #link3',function(){
	if ($("#three").prop("checked")){
	$('#third_chosen').attr('id','third');
    $('#three').prop('checked', false);
    $('#third').css('background-image', 'url("../img/cat.png")');
    $('#circle_third').css({'background-color':'#1698d9'});
    $('#text_below3').html("Чего сидишь? Порадуй котэ, <button class=\"link\"   id=\"link3\">купи</button><font color=\"#1698d9\">.</font>");}
	else{
	$('#third').attr('id','third_chosen');
    $('#three').prop('checked', true);
    $('#third_chosen').css('background-image', 'url("../img/cat_selected.png")');
    $('#circle_third').css({'background-color':'#D91667'});
    $('#text_below3').html("<p>Филе из цыплят с трюфелями в бульоне.</p>");}
})

    if ($("#one").prop("disabled")) {
    $('#first').css('background-image', 'url("../img/cat_disabled.png")');
    $("#link1").attr("disabled", true);
    $('#first').attr('id','non-click');
    $('#text_below1').html("<p class=\"golden\">Печалька, с фуа-гра закончился.</p>");
    }

    if ($("#two").prop("disabled")) {
    $('#second').css('background-image', 'url("../img/cat_disabled.png")');
    $("#link2").attr("disabled", true);
    $('#second').attr('id','non-click');
    $('#text_below2').html("<p class=\"golden\">Печалька, с рыбой закончился.</p>");
    }

    if ($("#three").prop("disabled")) {
    $('#third').css('background-image', 'url("../img/cat_disabled.png")');
    $("#link3").attr("disabled", true);
    $('#third').attr('id','non-click');
    $('#text_below3').html("<p class=\"golden\">Печалька, с курой закончился.</p>");
    }
    
    $('body').on('mouseover','#first',function(){
    $('#circle_first').css('background-color', '#2EA8E6');
    })
    $('body').on('mouseout','#first',function(){
    $('#circle_first').css('background-color', '#1698d9');
    })
    $('body').on('mouseover','#first_chosen',function(){
    $('#circle_first').css('background-color', '#D91667');
    $('#first_text').html("Сказочное заморское яство")
    $('#first_text').css('color', '#666666');
    })
    $('body').on('mouseout','#first_chosen',function(){
    $('#circle_first').css('background-color', '#E62E7A');
    $('#first_text').html("Котэ не одобряет?")
    $('#first_text').css('color', '#EA7CA3');
    })



    $('body').on('mouseover','#second',function(){
    $('#circle_second').css('background-color', '#2EA8E6');
    })
    $('body').on('mouseout','#second',function(){
    $('#circle_second').css('background-color', '#1698d9');
    })
    $('body').on('mouseover','#second_chosen',function(){
    $('#circle_second').css('background-color', '#D91667');
    $('#second_text').html("Сказочное заморское яство");
    $('#second_text').css('color', '#666666');
    })
    $('body').on('mouseout','#second_chosen',function(){
    $('#circle_second').css('background-color', '#E62E7A');
    $('#second_text').html("Котэ не одобряет?")
    $('#second_text').css('color', '#EA7CA3');
    })

    $('body').on('mouseover','#third',function(){
    $('#circle_third').css('background-color', '#2EA8E6');
    })
    $('body').on('mouseout','#third',function(){
    $('#circle_third').css('background-color', '#1698d9');
    })
    $('body').on('mouseover','#third_chosen',function(){
    $('#circle_third').css('background-color', '#D91667');
    $('#third_text').html("Сказочное заморское яство");
    $('#third_text').css('color', '#666666');
    })
    $('body').on('mouseout','#third_chosen',function(){
    $('#circle_third').css('background-color', '#E62E7A');
    $('#third_text').html("Котэ не одобряет?")
    $('#third_text').css('color', '#EA7CA3');
    })

});

