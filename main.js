

window.onload = function () {
    let poUp = document.querySelector('.popup-section');
    let poUpbtn = document.querySelector('.popUp-show-btn');
    let closeBtn = document.querySelector('.close-btn');
    let collectBtn = document.querySelector('.popup-section-container-body-btn');


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

}
function hidePopup(element) {

    element.classList.add('hide');
}

function showPopup(element) {

    element.classList.remove('hide');
}