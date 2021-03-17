$(function(){
$('#form1').on('submit', function(e){
 e.preventDefault();
 var fd = new FormData( this );
 $.ajax({
 url: 'send.php',
 type: 'POST',
 contentType: false, 
 processData: false, 
 data: fd,
 success: function(msg){
if(msg == 'ok') {
 alert('Отправлено');
} else {
 alert('Ошибка')
}
 }
 });
 });
});

$( "#result-polzunok" ).val($( "#polzunok" ).slider( "value" ));  

$( "#polzunok" ).on( "slidechange", function( event, ui ) { 
	$( "#result-polzunok" ).val($( "#polzunok" ).slider( "value" )); 
} );
$( "#result-polzunok" ).on('change', function(){
	let value = +$( "#result-polzunok" ).val();
	$( "#polzunok" ).slider( "value", value );
})

$( "#result-polzunokfoot" ).val($( "#polzunokfoot" ).slider( "value" ));  

$( "#polzunokfoot" ).on( "slidechange", function( event, ui ) { 
	$( "#result-polzunokfoot" ).val($( "#polzunokfoot" ).slider( "value" )); 
} );
$( "#result-polzunokfoot" ).on('change', function(){
	let value = +$( "#result-polzunokfoot" ).val();
	$( "#polzunokfoot" ).slider( "value", value );
})
function toggle(e) {
	e.target.classList.toggle('toggled')
}