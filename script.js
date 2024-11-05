let currentImageIndex = 0;
const galleryImages = document.querySelectorAll(".gallery-grid img");

function expandImage(imgElement) {
  // Get the fullscreen modal and image elements
  const modal = document.getElementById('fullscreen-modal');
  const fullscreenImage = document.getElementById('fullscreen-image');

  // Set the current image index based on the clicked image
  currentImageIndex = Array.from(galleryImages).indexOf(imgElement);

  // Set the src of the fullscreen image to the clicked image's src
  fullscreenImage.src = imgElement.src;

  // Display the modal
  modal.style.display = 'flex';
}

function closeImage() {
  // Get the fullscreen modal element
  const modal = document.getElementById('fullscreen-modal');

  // Hide the modal
  modal.style.display = 'none';
}

function nextImage(event) {
  event.stopPropagation(); // Prevents modal from closing when clicking on arrows

  // Increment the image index, loop back to the start if at the end
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;

  // Update the fullscreen image source
  document.getElementById('fullscreen-image').src = galleryImages[currentImageIndex].src;
}

function prevImage(event) {
  event.stopPropagation(); // Prevents modal from closing when clicking on arrows

  // Decrement the image index, loop back to the end if at the start
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;

  // Update the fullscreen image source
  document.getElementById('fullscreen-image').src = galleryImages[currentImageIndex].src;
}
