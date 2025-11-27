let cart = [];
let total = 0;

function addToCart(button) {
  const product = button.closest('.product');
  const name = product.dataset.name;
  const price = parseInt(product.dataset.price);

  cart.push({ name, price });
  total += price;

  const cartItems = document.getElementById('cart-items');
  const item = document.createElement('li');
  item.textContent = `${name} - Rp ${price.toLocaleString()}`;
  cartItems.appendChild(item);

  document.getElementById('total').textContent = total.toLocaleString();
}

function checkout() {
  if (cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }

  const message = cart.map(item => `${item.name} - Rp ${item.price.toLocaleString()}`).join('%0A');
  const totalMsg = `Total: Rp ${total.toLocaleString()}`;
  const fullMsg = encodeURIComponent(`Halo, saya ingin memesan:%0A${message}%0A${totalMsg}`);

  window.open(`https://wa.me/6282220676361?text=${fullMsg}`, '_blank');
}
