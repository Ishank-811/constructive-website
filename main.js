$(document).ready(function (){


$('.intro').click(function(){
$('.our-company').hide();
$('.front').click(function(){
	
}); 
$('.slides').hide();
$('.contact').hide();
console.log("graphic show")
}); 



$('.product').click(function(){
$('.slides').show(10);
$('.front').hide();
$('.contact').hide();
$('.our-company').hide();

$("#wrap").toggleClass("toggled");
}); 


$('.comp').click(function(){
$('.front').hide();
$('.slides').hide();
$('.our-company').show(10);
$('.contact').hide();
$("#wrap").toggleClass("toggled");
console.log("work hidden")
 });

$('.contac').click(function(){
$('.front').hide();
$('.slides').hide();
$('.contact').show(10);
$('.our-company').hide();
$("#wrap").toggleClass("toggled");
console.log("work hidden")
 });



$('.intro').click(function(){
$('.contact').hide();
$('.slides').hide();
$('.front').show(70);
$('.our-company').hide();
$("#wrap").toggleClass("toggled");
console.log("work hidden")
 });

   $("#toggler").click(function(e) {
   e.preventDefault();
  
	 $("#wrap").toggleClass("toggled");
	  console.log("hey");
	});


// $('.burger').click(function(){
//  $('.side-bar').fadeToggle(1000);
//  $('.front').show(70);
//  $('.contact').hide(70);
//  $('.slides').hide(70);

// });


// $('.burger').click(function(){
// 	 // $('.side-bar').fadeToggle(1000);
// $('.w-class').fadeToggle(1000);	
//   $('.v-class').fadeToggle(1000);
//   console.log("hey");
//  });  


  
  // $('.side-div').css({'width': '50px', 'opacity':'1' })


});
AOS.init(); 