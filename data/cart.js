export let cart = [
    
]

export function addToCart(){
  document.querySelectorAll('.addToCart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      let cartNo = 0;
      let matchingItem;
      cart.forEach((item) => {
        if (item.id === button.dataset.id) {
          matchingItem = item;
        }
      });
      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          id: button.dataset.id,
          quantity: 1
        });
      }

      cart.forEach((item) => {
        cartNo += item.quantity;
      })
      document.querySelector('.cart-quantity').innerHTML = cartNo;
    });
    
  });
}