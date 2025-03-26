function previewImage(event) {
    const imagePreview = document.getElementById('imagePreview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            imagePreview.innerHTML = `<img src="${reader.result}" alt="Uploaded Plant Image" style="max-width: 200px; border-radius: 10px; border: 2px solid white;">`;
        };
        reader.readAsDataURL(file);
    }
}

function identifyPlant() {
    const plantDetails = document.getElementById('plantDetails');
    const randomPlants = ["Neem", "Tulsi", "Aloe Vera", "Mint", "Lavender"];
    const identifiedPlant = randomPlants[Math.floor(Math.random() * randomPlants.length)];

    plantDetails.innerHTML = `<p><strong>AI Identified:</strong> ${identifiedPlant} 🌿</p>`;
}
