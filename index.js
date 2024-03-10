// offerBar

var offerBar = document.querySelector(".offer-bar")

function close_offer(){
    offerBar.style.display = "none"
}

// side nav

var sidenav = document.querySelector( '.side-navbar' );

function showNavbar(){
    sidenav.style.left = "0"
}

function classNavbar(){
    sidenav.style.left = "-70%"
}

// heart

function showRed(clickedElement){
    var container = clickedElement.closest('.most-wanted-container');
    var blackheart = container.querySelector('.black-heart');
    var redheart = container.querySelector('.red-heart');

    redheart.style.display = "block";
    blackheart.style.display = "none";
}

function showBlack(clickedElement){
    var container = clickedElement.closest('.most-wanted-container');
    var blackheart = container.querySelector('.black-heart');
    var redheart = container.querySelector('.red-heart');

    redheart.style.display = "none";
    blackheart.style.display = "block";
}
