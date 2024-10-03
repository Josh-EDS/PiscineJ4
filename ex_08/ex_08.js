window.addEventListener('load', function () {
    const elements = document.getElementsByClassName('wrapper');
    elements[0].innerHTML = '<div class="outer"><div class="content"><h2 id="productName">Samsung 22</h2><div id="description"><p>Never miss that perfect shot again</p><p>Designed to revolutionize video and photography, with beyond cinematic 16K resolution.</p><p>Get yours now!</p></div><div id="addToCart" class="button"><a id="price">890 €</a><a class="cart-btn" href="#">ADD TO CART</a></div><h2 id="incart">In cart: 0</h2></div><img src="./Samsung22.png" width="300px"></div>';
    
    let counter = 0
    document.querySelector('#addToCart > a.cart-btn').addEventListener('click', function() {
        counter += 1
        document.getElementById("incart").innerHTML = "In cart: "+counter;
    })


});
    