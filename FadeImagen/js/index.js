$(document).ready(function(){


	//opcion uno: hace fadeout y fadein en loop
	$('#clickme').on('click', function(){

		$('#imagen').fadeOut("slow", function(){
			url= $(this).data('img');
			url_actual=$('#imagen').attr('src');
			console.log(url);
			$('#imagen').attr('src',url);

			$('#imagen').fadeIn('slow', function(){
				$('#imagen').data('img', url_actual);
			});
		});
	});

	//opcion dos: con transition
	$('#img').on('mouseenter', function() {
		img=$(this).data('img');
		src=$(this).data('src');
		console.log(img);

		$('#img').fadeTo("ease", 0.2, function(){
			$('#img').attr('src', img);
			$('#img').css('opacity',1);
			$('#img').on('mouseleave', function(){
				$('#img').attr('src',src);
			});
		});	

	});

});