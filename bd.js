document.getElementById('showImageButton1').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const imageContainer2 = document.getElementById('imageContainer2');
    
    // Mostra a primeira imagem e oculta a segunda
    imageContainer.classList.remove('hidden');
    imageContainer2.classList.add('hidden');
});

document.getElementById('showImageButton2').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const imageContainer2 = document.getElementById('imageContainer2');
    
    // Mostra a segunda imagem e oculta a primeira
    imageContainer2.classList.remove('hidden');
    imageContainer.classList.add('hidden');
});

