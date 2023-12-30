const header = document.getElementById('header');
window.onscroll = function () { 
    if (document.documentElement.scrollTop >= 100 ) {
        header.style.backgroundColor = "white";
        header.style.marginTop = "0";
        header.style.boxShadow = "0 4px 2px -2px gray";
    } 
    else {
        header.style.backgroundColor = "transparent";
        header.style.marginTop = "35px";
        header.style.boxShadow = "none";
    }
};
