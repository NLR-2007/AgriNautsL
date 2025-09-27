// java.js

let lastScrollX = window.scrollX;
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollX = window.scrollX;
  let currentScrollY = window.scrollY;

  if (currentScrollY !== lastScrollY) {
    // Vertical scroll → set vertical background
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/3e/30/ee/3e30ee82a72ce0e3e2ed5ab309202cf8.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  } 

  if (currentScrollX !== lastScrollX) {
    // Horizontal scroll → set horizontal background
    document.body.style.backgroundImage = "url('https://i.pinimg.com/736x/89/38/ca/8938ca1e4c4c20343a906801971f1ee0.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
  }

  // update last values
  lastScrollX = currentScrollX;
  lastScrollY = currentScrollY;
});
