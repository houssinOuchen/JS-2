function previewImage(image) {
    var previewDiv = document.getElementById("preview");
    previewDiv.innerHTML = ""; // Clear previous content

    var previewImage = document.createElement("img");
    previewImage.src = image.src;
    previewImage.alt = image.alt;

    previewDiv.appendChild(previewImage);
}

function resetPreview() {
    var previewDiv = document.getElementById("preview");
    previewDiv.innerHTML = "<p>Hover over an image below to display here</p>";
}

function addTabFocus() {
    var galleryImages = document.querySelectorAll("#gallery img");

    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].setAttribute("tabindex", "0");
    }

    console.log("Tab Focus attributes added");
}
