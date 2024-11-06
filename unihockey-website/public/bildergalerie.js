// Liste der Bilder für die Galerie
const images = [
    {
      url: "Bilder/Ball.svg",
      title: "Ball",
      description: "Ist ein Unihockey Ball"
    },
    {
      url: "Bilder/Schleger.png",
      title: "Unihockey Stock",
      description: "Ist ein Unihockey Stock"
    },
    {
      url: "Bilder/Gool.jpg",
      title: "Tor",
      description: "Ist ein Unihockey Tor"
    },
    {
      url: "Bilder/chli.jpg",
      title: "kleines Tor",
      description: "Ist ein kleines Unihockey Tor"
    }
  ];
  
  // Funktion zum Erstellen der Galerie
  function loadGallery() {
    const galleryContainer = document.querySelector(".gallery");
    
    images.forEach((image) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
  
      galleryItem.innerHTML = `
        <img src="${image.url}" alt="${image.title}" />
        <h3>${image.title}</h3>
        <p>${image.description}</p>
      `;

      galleryContainer.appendChild(galleryItem);
    });
  }
  
  // Galerie laden, wenn das Dokument geladen ist
  document.addEventListener("DOMContentLoaded", loadGallery);
  