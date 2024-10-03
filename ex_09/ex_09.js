window.addEventListener('load', function () {
    const element = document.querySelector('body > div > div > footer > div:nth-child(3)')
    const water = document.querySelector('body > div > div > footer > div:nth-child(2)')
    water.innerHTML = '0 kg';

    let depht = 0
    element.style.marginTop = depht+'px';
    element.addEventListener('click', function() {
        if (depht < 720) {
        depht += 10
        element.style.marginTop = depht+'px';
        water.style.marginTop = -depht/10+'px';
        water.innerHTML = depht/10+' kg';
        } else {
            alert("You're at the bottom my friend.")
        }
    })
})
