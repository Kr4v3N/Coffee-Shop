// ide preloader
// all the images scripts links have finished loading

// window event list
window.addEventListener('load', function() {
    document.querySelector('.preloader').style.display = 'none';
})
// nav btn
document.querySelector('.navBtn').addEventListener('click', function(){
    document.querySelector('.nav').classList.toggle('nav--show')
})