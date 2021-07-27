const tap = (id, func) => {
  return (document.getElementById(id).onclick = func);
};

function openNav() {
  document.getElementById("nav-side").style.width = "250px";
}

function closeNav() {
  document.getElementById("nav-side").style.width = "0";
}

try {
    document.querySelector('.hide-nav').onclick = function(){
        document.getElementById("nav-side").style.width = "0";
    } 
} catch (error) {
    
}


document.querySelector('nav').onclick = function(e){
    if(e.target !== this) return
    document.getElementById("nav-side").style.width = "0";
}

document.querySelector('.closebtn').onclick = function(){
    closeNav();
}

document.getElementById("nav-burger").onclick = function(){
    openNav();
}