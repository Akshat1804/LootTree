
function toggleArrows() {
    var downArrow = document.querySelector('.down');
    var upArrow = document.querySelector('.up');
    const subs = document.querySelector('.subscription');
    if (downArrow.style.display === 'initial') {
        downArrow.style.display = 'none';
        upArrow.style.display = 'initial';
        subs.style.display= 'initial';
    } else {
        downArrow.style.display = 'initial';
        upArrow.style.display = 'none';
        subs.style.display= 'none';
    }
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("item");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "";  
    setTimeout(showSlides, 1000);
}

const join = document.querySelector(".join");
join.addEventListener("click", () => {
    alert("You do not match Our Requirements! Try Again Later")
});

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.x + 10 + "px";
    cursor.style.top = e.y + 5 + "px";

});