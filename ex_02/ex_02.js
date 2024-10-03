window.addEventListener('load', function () {
    let count = 0;
    document.querySelectorAll('p').forEach(function(paragraph) {
        paragraph.textContent = count;
        count += 1;
    });
});