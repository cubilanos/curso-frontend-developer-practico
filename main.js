const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer= document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shopingCartContainer.classList.add('inactive');
            
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shopingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shopingCartContainer.classList.add('inactive');
            
    }
    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
            
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
            
    }
    shopingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
    shopingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
  }
  function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
  }
const productList =[];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

      function renderProducts(arr){
      for (product of arr){
       //Creamos el div y le añadimos la clase 
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

        //Creamos el img y le metemos el link de la imagen a representar que viene en el array
        // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    //creamos el div del detalle y le ponemos su clase
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    //Creamos el div donde van los detalles del producto 
    const productInfodiv = document.createElement('div');
    
    //creamos el p y en texto le ponemos el precio sacado del array
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    //productImg.addEventListener('click', console.log("hola"));
    //creamos el p y en texto le ponemos el nombre sacado del array
    const productName = document.createElement('p');
    productName.innerText = product.name;
    //productImg.addEventListener('click', console.log("hola"));
    //pasamos los datos creados de precio y nombre a la constante productInfoDiv
    productInfodiv.appendChild(productPrice);
    productInfodiv.appendChild(productName);
    
    //creamos los datos para poner el logo
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
// pasamos los datos creados del logo a la constante donde esta el figure como un hijo suyo
    productInfoFigure.appendChild(productImgCart)
    //unimos en una constante el div de los detalles y después el logo
    productInfo.appendChild(productInfodiv);
    productInfo.appendChild(productInfoFigure);

    //unimos la imagen y el resto en una constante
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    //lo añadimos a la posición seleccionada en el html en cardsContainer
    cardsContainer.appendChild(productCard);
    //console.log(cardsContainer);
}
}
renderProducts(productList);

