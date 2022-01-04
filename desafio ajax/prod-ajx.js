
    fetch('./wines.json')
    .then(promise => promise.json())
    .then(item => {
        item.forEach( product => {
            mainCards.innerHTML +=`
            <div class="mainCards_card" id="product_${product.indice+1}">
            <img class="mainCards_card_img" src="${product.img}" alt="">
            <div class="mainCards_card_txt">
                <h2 class="mainCards_card_txt_productName">${product.nombre}</h2>
                <h4 class="mainCards_card_txt_desc">${product.bodega}</h4>
                <h3 class="mainCards_card_txt_cepa">${product.cepa}
                <br>- ${product.cosecha}
                <p class="mainCards_card_txt_price">$${product.precio}</p>
            </div>
        </div>
            `
            console.log(product.nombre)
        });
    })

    $(document).ready(function() {
        // on click
        $('#back').click(function(e){
          // prevent default behavior
          e.preventDefault();
          // Go back 1 page 
          window.history.back();
          // can also use 
          // window.history.go(-1);
        });
      });