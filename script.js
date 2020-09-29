const showBtn = document.getElementById('show-btn');
const hideBtn = document.getElementById('hide-btn');

showBtn.addEventListener('click', function(){
    document.querySelector('.side-nav').classList.add('navToggle');
    document.querySelector('.top-head').style.filter = "blur(2px)";
    document.querySelector('.bottom-head').style.filter = "blur(2px)";
});

hideBtn.addEventListener('click', function(){
    document.querySelector('.side-nav').classList.remove('navToggle');
    document.querySelector('.top-head').style.filter = "blur(0px)";
    document.querySelector('.bottom-head').style.filter = "blur(0px)";
});