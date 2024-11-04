// Liste der Bilder für die Galerie
const images = [
    {
      url: "Bilder/Ball.svg",
      title: "Ball",
      description: "Isch en Unihockey Ball"
    },
    {
      url: "Bilder/Schleger.png",
      title: "Unihockey Schleger",
      description: "Isch en Unihockey Schleger"
    },
    {
      url: "Bilder/Gool.jpg",
      title: "Gool",
      description: "Isch es Unihockey Gool"
    },
    {
      url: "Bilder/chli.jpg",
      title: "chlines Gool",
      description: "Isch es chlises Unihockey Gool"
    }
  ];
  
  // Funktion zum Erstellen der Galerie
  function loadGallery() {
    const galleryContainer = document.querySelector(".gallery");
    
    images.forEach((image) => {
      // HTML für ein Bild-Item
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
  
      galleryItem.innerHTML = `
        <img src="${image.url}" alt="${image.title}" />
        <h3>${image.title}</h3>
        <p>${image.description}</p>
      `;
  
      // Bild-Item in die Galerie einfügen
      galleryContainer.appendChild(galleryItem);
    });
  }
  
  // Galerie laden, wenn das Dokument geladen ist
  document.addEventListener("DOMContentLoaded", loadGallery);
  