var wiw = document.body.offsetWidth;
if(wiw < 600){
$("#nav-links").slideUp(0);
}


/* navbar toggling */
$("#nav-toggler").click(function(){
var x = $("#nav-links");
if(x.is(":hidden")){
x.slideDown(200);
}
else{
x.slideUp(200);
}
});



const details =
document.querySelectorAll("[data-detail]"); 
details.forEach((targetDetail) => { 
targetDetail.addEventListener("click", () => { 
details.forEach((detail) => { 
if (detail !== targetDetail) { 
detail.removeAttribute("open");
} }); }); });




if(wiw < 600){
$(document).mouseup(function(e){
var container = $("#nav-links");
if(!container.is(e.target) && container.has(e.target).length === 0){
container.slideUp(200);
}
});
}
