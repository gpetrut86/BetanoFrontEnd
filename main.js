

window.onload = function () {
    let poUp = document.querySelector('.popup-section');
    let poUpbtn = document.querySelector('.popUp-show-btn');
    let closeBtn = document.querySelector('.close-btn');
    let collectBtn = document.querySelector('.popup-section-container-body-btn');

    let standingsNavItems = [...document.querySelectorAll(".standings-section-nav-item")];
    let standingsFilterItems = [...document.querySelectorAll(".standings-section-filters-item")];
    let standingsFilterDisplayItems = [...document.querySelectorAll(".standings-section-filters-display-item")];
    let tabelHamburgers = [document.querySelector(".tabel-hamburger1"), document.querySelector(".tabel-hamburger2")];
    let head2headFilterItems = [...document.querySelectorAll(".head2head-section-filter-item")];
    let head2headFilterScrollItems = [...document.querySelectorAll(".head2head-section-filterScroll-item")];

    // show popup after 5 seconds
    setTimeout(function () {
        showPopup(poUp);
    }, 5000);



    poUpbtn.addEventListener('click', function () {
        showPopup(poUp);
    });

    closeBtn.addEventListener('click', function () {
        hidePopup(poUp);
    });
    collectBtn.addEventListener('click', function () {
        hidePopup(poUp);

    });

    handleActiveElements(standingsNavItems);
    handleActiveElements(standingsFilterItems);
    handleActiveElements(standingsFilterDisplayItems);
    handleActiveElements(tabelHamburgers);
    handleActiveElements(head2headFilterItems);
    handleActiveElements(head2headFilterScrollItems);

}
function hidePopup(element) {

    element.classList.add('hide');
}

function showPopup(element) {

    element.classList.remove('hide');
}


function handleActiveElements(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', function () {

            for (let j = 0; j < elements.length; j++) {
                elements[j].classList.remove('active');
            }
            elements[i].classList.add('active');
        });
    }
}