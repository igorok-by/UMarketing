
/*VARIABLES
===========*/

var smurf1 = {
	smurfBody: 'img/smurf_1/smurf_1.svg',
	smile1: 'img/smurf_1/smurf-smile_1.svg',
	smile2: 'img/smurf_1/smurf-smile_2.svg',
	smile3: 'img/smurf_1/smurf-smile_3.svg'
};

var smurf2 = {
	smurfBody: 'img/smurf_2/smurf_2.svg',
	smile1: 'img/smurf_2/smurf-smile_1.svg',
	smile2: 'img/smurf_2/smurf-smile_2.svg',
	smile3: 'img/smurf_2/smurf-smile_3.svg'
};

var smurf3 = {
	smurfBody: 'img/smurf_3/smurf_3.svg',
	smile1: 'img/smurf_3/smurf-smile_1.svg',
	smile2: 'img/smurf_3/smurf-smile_2.svg',
	smile3: 'img/smurf_3/smurf-smile_3.svg'
};

var sumSmile = $('.face-tabs').find('.face_img').length;
var blueDot = '<div class="point"></div>';


/*JQUERY FUNCTIONS
==================*/

$( function() {

/*MOVE SCROLLBOX
----------------*/
	$('#j-grade').click(function(){
	    $('.stroke_scrollbox').css('left', '13px');
	});
	$('#m-grade').click(function(){
	    $('.stroke_scrollbox').css('left', 'calc(50% - 7px)');
	});
	$('#s-grade').click(function(){
	    $('.stroke_scrollbox').css('left', 'calc(100% - 27px)');
	});


/*CHOOSE OF BODY AND CHANGE SET OF SMILES
-----------------------------------------*/

	$('#body1').append(blueDot).click(function(){
	    $('.smurf_body').attr('src', smurf1.smurfBody);

	    for ( var num = 1; num <= sumSmile; num++ ) {
	    	var img = 'smile' + num;
			$('#smile' + num).attr('src', smurf1[img]);
		}

	    $('.smurf_smile').attr('src', smurf1.smile1);
	    $('.smurf-body, .smurf-face').find('.point').remove();
	    $('#body1, #face1').append(blueDot);
	});


	$('#body2').click(function(){
	    $('.smurf_body').attr('src', smurf2.smurfBody);

	    for ( var num = 1; num <= sumSmile; num++ ) {
	    	var img = 'smile' + num;
			$('#smile' + num).attr('src', smurf2[img]);
		}

	    $('.smurf_smile').attr('src', smurf2.smile1);
	    $('.smurf-body, .smurf-face').find('.point').remove();
	    $('#body2, #face1').append(blueDot);
	});


	$('#body3').click(function(){
	    $('.smurf_body').attr('src', smurf3.smurfBody);

	    for ( var num = 1; num <= sumSmile; num++ ) {
	    	var img = 'smile' + num;
			$('#smile' + num).attr('src', smurf3[img]);
		}

	    $('.smurf_smile').attr('src', smurf3.smile1);
	    $('.smurf-body, .smurf-face').find('.point').remove();
	    $('#body3, #face1').append(blueDot);
	});


/*CHOOSE OF FACE
----------------*/
	$('#face1').append(blueDot).click(function(){
		switch( $('.smurf_body').attr('src') ) {
			case smurf1.smurfBody:
			$('.smurf_smile').attr('src', smurf1.smile1);
			break;

			case smurf2.smurfBody:
			$('.smurf_smile').attr('src', smurf2.smile1);
			break;
			
			case smurf3.smurfBody:
			$('.smurf_smile').attr('src', smurf3.smile1);
			break;
		}

		$('.smurf-face').find('.point').remove();
	  $(this).append(blueDot);
	});

	$('#face2').click(function(){
		switch( $('.smurf_body').attr('src') ) {
			case smurf1.smurfBody:
			$('.smurf_smile').attr('src', smurf1.smile2);
			break;

			case smurf2.smurfBody:
			$('.smurf_smile').attr('src', smurf2.smile2);
			break;
			
			case smurf3.smurfBody:
			$('.smurf_smile').attr('src', smurf3.smile2);
			break;
		}

		$('.smurf-face').find('.point').remove();
	    $(this).append(blueDot);
	});

	$('#face3').click(function(){
		switch( $('.smurf_body').attr('src') ) {
			case smurf1.smurfBody:
			$('.smurf_smile').attr('src', smurf1.smile3);
			break;

			case smurf2.smurfBody:
			$('.smurf_smile').attr('src', smurf2.smile3);
			break;
			
			case smurf3.smurfBody:
			$('.smurf_smile').attr('src', smurf3.smile3);
			break;
		}

		$('.smurf-face').find('.point').remove();
	    $(this).append(blueDot);
	});
});