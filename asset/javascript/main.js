const dragDropArea = document.getElementById("dragDropArea");
const fileInput = document.getElementById("fileInput");
const fileIcon = document.getElementById("fileIcon");
const fileText = document.getElementById("fileText");
const uploadBtn = document.getElementById("uploadBtn");

dragDropArea.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileText.textContent = fileName;
        fileIcon.src = "https://cdn-icons-png.flaticon.com/512/136/136524.png"; // Icône d'un fichier chargé
    }
});

uploadBtn.addEventListener("click", () => {
    fileInput.click();
});


/* --------------------------- -/ 
#Fonction pour afficher le popup
/----------------------------- */
function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

// Fonction pour fermer le popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Fonction pour supprimer un fichier
function deleteFile() {
    alert("File deleted!");
    closePopup(); // Ferme le popup après la suppression
}