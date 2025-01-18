const navButton = document.querySelector('.nav_button');
const mainNav = document.querySelector('.main_nav ul');

navButton.addEventListener('click', () => {
    mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutITItem = document.querySelector(".main_nav ul li:first-child"); 
    const subjectsItem = document.querySelector(".main_nav ul li:nth-child(2)"); 
    const imgHome = document.querySelector(".img-home");
    const imgSub1 = document.querySelector(".img-sub1");
    const imgSub2 = document.querySelector(".img-sub2");

    // When the second <li> (subjects) is clicked
    subjectsItem.addEventListener("click", () => {
        imgHome.style.display = "none"; 
        imgSub1.style.display = "block";
        imgSub2.style.display = "block"; 
    });

    // When the first <li> (about IT) is clicked
    aboutITItem.addEventListener("click", () => {
        imgHome.style.display = "block"; 
        imgSub1.style.display = "none"; 
        imgSub2.style.display = "none"; 
    });
});
