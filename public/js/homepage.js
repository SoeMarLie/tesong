$(window).scroll(function(){$(window).scrollTop()>=50?$(".header").addClass("menu-fixed"):$(".header").removeClass("menu-fixed")});const copybtn=document.getElementById("copy-refer-link"),referlink=document.getElementById("refer-link");copybtn.addEventListener("click",function(){referlink.focus(),referlink.select(),document.execCommand("copy")});