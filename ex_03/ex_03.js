window.addEventListener('load', function () {
    let newParagraph = document.createElement('p');
    newParagraph.textContent = "Now featuring a headphone jack!";
    document.getElementById('description').appendChild(newParagraph);
});