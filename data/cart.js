export let cart= JSON.parse(localStorage.getItem("cart"));

function local(){
  localStorage.setItem("cart",JSON.stringify(cart));
}
export function addToCart(){
  document.querySelectorAll('.addToCart')
  .forEach((button) => {
    let matchingItem = null;
    button.addEventListener('click', () => {
      const buttonId = button.dataset.id;
      
      cart.forEach((item) => {
        if (item.id === buttonId ) {
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
      console.log(cart);
      let cartNo = 0;
      cart.forEach((item) => {
        cartNo += item.quantity;
      });
      
      document.querySelector('.cart-quantity').innerHTML = cartNo;
    });
    
  });
}
export function remove(productId){
  let cartNew = [];
  cart.forEach((item) =>{
    if (item.id != productId){
      cartNew.push(item);
    }
  }
  
);
cart = cartNew;
}