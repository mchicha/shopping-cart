var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];

  var updateCart = function () {
    // Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    var $cart = $('.cart-list');

    $cart.empty();
    $('.total').html(0);
    // turn our "template" into html
    var source = $('#store-template').html();

    // compile our template html using handlebars
    var template = Handlebars.compile(source);
    
		for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      var total = cart[i].price * cart[i].qte;
			var newHTML = template({name: item.name, price: total});
      $('.cart-list').append(newHTML);
    }
    $('.total').html(calcTotalCart());
  }

  var calcTotalCart = function () {
    var totalCart = 0;
    for (var i=0; i< cart.length; i++)
    {
      totalCart+=(cart[i].price * cart[i].qte);
    }

    return totalCart;
  }
  var _existItem = function(item) {
    var index = -1;
    for (var i= 0; i < cart.length; i++){
      if (item.name == cart[i].name)
      {
        index = i;
        break;
      }
    }
    return index;  
  }

  var addItem = function (item) {
    // Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest.
    var index = _existItem(item);
    if (index == -1)
    {
      item.qte = 1;
      cart.push(item);
    }
    else
    {
      cart[index].qte++;
    }
  }

  var clearCart = function () {
    //Write a function that clears the cart
    cart=[];
    updateCart(); 
  }
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  // Hide/Show the shopping cart!
  $('.shopping-cart').toggleClass('show');
  // the toggleClass('show') method acts like the code below
  /* var aValue = $('.shopping-cart').css('display');
  if (aValue == 'none')
  {
    $('.shopping-cart').css('display','initial');
  }
  else
  {
    $('.shopping-cart').css('display','none');
  } */
  

});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('.card').data();
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});