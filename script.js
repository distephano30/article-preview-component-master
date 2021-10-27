// getting the share element
var share = document.querySelector(".share-btn");
var shareLinks = document.querySelector(".socials");
console.log(share);

//function show and hide socials icons
share.addEventListener("click", function() {
  shareLinks.classList.toggle("show");
})
