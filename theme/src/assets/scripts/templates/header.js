import 'headroom.js';

// grab an element
const header = document.querySelector(".site-header");
// construct an instance of Headroom, passing the element
const headroom  = new Headroom(header);
// initialise
headroom.init();