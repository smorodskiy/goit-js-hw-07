import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
var lightbox = new SimpleLightbox(".gallery", {
  /* options */
});

// Append all images from array to html
galleryItems.forEach((imgData) => {
  const img = createElement(imgData.preview, imgData.original, imgData.description);
  gallery.append(img);
});

// Version with JS
// Create box of image
function createElement(preview, original, description) {
  const link = document.createElement("a");
  const img = document.createElement("img");
  link.classList.add("gallery__item");
  link.setAttribute("href", original);

  img.classList.add("gallery__image");
  img.setAttribute("src", preview);
  img.setAttribute("alt", description);

  link.appendChild(img);
  return link;
}

console.log(lightbox);

lightbox.on('show.simplelightbox', function () {
	// do something…
    console.log('show');
});