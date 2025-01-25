const navButton = document.querySelector('.nav_button');
const mainNav = document.querySelector('.main_nav ul');

navButton.addEventListener('click', () => {
    mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutITItem = document.querySelector(".main_nav ul li:nth-child(1)"); 
    const subjectsItem = document.querySelector(".main_nav ul li:nth-child(2)"); 
    const activitiesItem = document.querySelector(".main_nav ul li:nth-child(3)"); 

    const imgHome = document.querySelector(".img-home");
    const imgSub1 = document.querySelector(".img-sub1");
    const imgSub2 = document.querySelector(".img-sub2");
    const imgActivities1 = document.querySelector(".img-activities1");
    const imgActivities2 = document.querySelector(".img-activities2");

    const hideAllImages = () => {
        imgHome.style.display = "none";
        imgSub1.style.display = "none";
        imgSub2.style.display = "none";
        imgActivities1.style.display = "none";
        imgActivities2.style.display = "none";
    };

    aboutITItem.addEventListener("click", () => {
        hideAllImages();
        imgHome.style.display = "block"; 
    });

    subjectsItem.addEventListener("click", () => {
        hideAllImages();
        imgSub1.style.display = "block"; 
        imgSub2.style.display = "block";
    });

    activitiesItem.addEventListener("click", () => {
        hideAllImages();
        imgActivities1.style.display = "block"; 
        imgActivities2.style.display = "block";
    });

    hideAllImages();
    imgHome.style.display = "block"; 
});
