import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const imgElements = document.createDocumentFragment();
let imgBox;

// Append all images from array to html
galleryItems.forEach((imgData) => {
  // Version with JS
  const img = createElement(imgData.preview, imgData.original, imgData.description);
  imgElements.appendChild(img);

  // Version with concat
  //const img = createDiv(imgData.preview, imgData.original, imgData.description);
  //gallery.insertAdjacentHTML("afterbegin", img);
});

gallery.append(imgElements);

// Version with JS
// Create box of image
function createElement(preview, original, description) {
  const div = document.createElement("div");
  const link = document.createElement("a");
  const img = document.createElement("img");
  div.classList.add("gallery__item");
  link.classList.add("gallery__link");
  link.setAttribute("href", original);
  img.classList.add("gallery__image");
  img.setAttribute("src", preview);
  img.setAttribute("data-source", original);
  img.setAttribute("alt", description);

  link.appendChild(img);
  div.appendChild(link);
  return div;
}

// Version with concat(Uncomment strings above)
function createDiv(preview, original, description) {
  const div = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  return div;
}

// Events on img preview
gallery.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName == "IMG") {
    const imgTarget = e.target;
    initImgBox(imgTarget);
    showImage();
  }
});

// Init lightBox
function initImgBox(imgTarget) {
  const src = imgTarget.getAttribute("data-source");
  imgBox = basicLightbox.create(`<img src="${src}"></img>`, {
    onClose: () => {
      gallery.removeEventListener("keydown", closeByEsc);
    },
    onShow: () => {
      gallery.addEventListener("keydown", closeByEsc);
    },
  });
}

// Show image on click
function showImage() {
  imgBox.show();
}

// Close imgBox by Esc
function closeByEsc(e) {
  if (e.key == "Escape") {
    imgBox.close();
  }
}
