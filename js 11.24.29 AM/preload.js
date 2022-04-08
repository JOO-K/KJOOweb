var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "./imgs/bigrockalone.jpg",
    "./imgs/croppedbodyparts.jpg",
    "./imgs/daniellookingout.jpg"
)