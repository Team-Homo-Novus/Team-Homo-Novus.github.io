// hide scrollmore indicator


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("gold-button")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.onscroll = function () {
  scrollIndicator = document.getElementsByClassName('scrollIndicator')[0];
  lenghtOfPage = document.getElementsByClassName('snappingpage').length-1;
  if (window.innerHeight + window.scrollY > lenghtOfPage * window.innerHeight) {
    console.log('end');
    scrollIndicator.style.visibility = 'hidden';
  } else {
    scrollIndicator.style.visibility = 'visible';
  }
}