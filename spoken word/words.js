const button = document.getElementById('button');
var scroll = false;

function toggleScroll() {
    console.log("test");
    scroll = !scroll;
    autoScroll();
};

function autoScroll() {
    if (scroll != true) {
        return;
    };

    setTimeout(function() {
        window.scrollBy(0,2);
        autoScroll();
    }, 20);
};

window.addEventListener('keypress', function(press) {
    if (press.key = 'k') {
        toggleScroll()
    }
});

autoScroll();