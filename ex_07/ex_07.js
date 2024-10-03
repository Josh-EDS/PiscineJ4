window.addEventListener('load', function () {
    const element = document.querySelector('#addToCart > a.cart-btn');
    element.innerHTML = "Change Color";
    const randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
      };
    element.addEventListener('click', function() {
        document.body.style.backgroundColor = randomHexColorCode();
    })
});

