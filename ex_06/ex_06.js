window.addEventListener('resize', function () {
    alert('Size matters');    
});

window.addEventListener('load', function () {
    const img = document.querySelector('[src="../Iphone22.png"]');
    img.addEventListener('mouseover', function() {
        alert("Pretty, isn't it?");
    });
});
