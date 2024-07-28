//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)

        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 +  index;
            }, 500)

        }
    }
})

//contact me button when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

        setTimeout(() => {
            page.style.zIndex = 20 + index;  
        }, 500)
        }, (index +1) * 200 + 100)
    })
} 

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
    }
}

//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
       setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        }, 500)

    }, (index + 1) * 200 + 100) 
 })
}

//opening animation 
const coverRight = document.querySelector('.cover.cover-right');
const pageLeft = document.querySelector('.book-page.page-left');

//opening animation (cover right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
}, 2800)

//opening animation (page left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = 20;
}, 3200)

//opening animation (all page right animation)
pages.forEach((_, index) => {
    setTimeout(() => {
     reverseIndex();
     pages[pageNumber].classList.remove('turn');

     setTimeout(() => {
         reverseIndex();
         pages[pageNumber].style.zIndex = 10 + index;
     }, 500)

    }, (index + 1) * 200 + 2100)
}) 

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.btn');
    const popupBox = document.querySelector('.popup-box');
    const popupHeader = document.querySelector('.popup-header h3');
    const popupBody = document.querySelector('.popup-body');
    const popupCloseIcon = document.querySelector('.popup-close-icon');
    const popupCloseBtn = document.querySelector('.popup-close-btn');

    // Function to show the popup with the correct content
    function showPopup(serviceTitle, serviceContent) {
        popupHeader.textContent = serviceTitle;
        popupBody.innerHTML = serviceContent;
        popupBox.classList.add('open');
    }

    // Add event listeners to each "Read More" button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const serviceContentDiv = this.parentElement;
            const serviceTitle = serviceContentDiv.querySelector('h3').textContent;
            const serviceContent = serviceContentDiv.querySelector('.read-more-cont').innerHTML;
            showPopup(serviceTitle, serviceContent);
        });
    });

    // Add event listeners to close the popup
    function closePopup() {
        popupBox.classList.remove('open');
    }

    popupCloseIcon.addEventListener('click', closePopup);
    popupCloseBtn.addEventListener('click', closePopup);

    // Close the popup when clicking outside the popup content
    window.addEventListener('click', function (e) {
        if (e.target === popupBox) {
            closePopup();
        }
    });
});

