/** @format */

import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  interface Product {
    _cakeId: string;
    cakePrice: number;
    cakeDescription: string;
    cakeName: string;
    cakeQuantity?: number;
  }
const isShow = ref(false);
  // add to cart localstoreage
  // Product[] means an array of objects. the objects are the product interface

  const cart = ref<Product[]>(JSON.parse(localStorage.getItem("cart")) || []);

  function addToCart(product: Product) {
    const exist = cart.value.find((item) => item._cakeId === product._cakeId);

    if (exist) {
      exist.cakeQuantity++;
    } else {
      cart.value.push({ ...product, cakeQuantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function decreaseQuantity(product : Product) {
    product.cakeQuantity--;

    if (product.cakeQuantity === 0) {
      console.log("we should delete the product");

      deleteFromCart(product._cakeId);
      // localStorage.removeItem()

      //   const updatedArr = cart.value.filter(
      //     (item) => item.cakeId !== product.cakeId
      //   );
      //   cart.value = updatedArr;
      // }
      // localStorage.setItem("cart", JSON.stringify(cart.value));
    }
  }
  // onMounted(() => {
  // })

  console.log(cart.value);

  function deleteFromCart(id: string) {
    const updatedArr = cart.value.filter((item) => item._cakeId !== id);
    cart.value = updatedArr;

    localStorage.setItem("cart", JSON.stringify(cart.value));
  }


  const getTotalPrice = computed(() => {

    let total = 0
    cart.value.forEach(product => {
      total += product.cakePrice * product.cakeQuantity
    });
    return total
  })
  // const getTotalPrice = computed(() => {
  //   return cart.value.reduce((acc, curr) => acc += curr.cakePrice, 0)
  // })
  
const cartQuantity = computed(() => {
  // reduce all the quantities later
  return cart.value.reduce((acc, curr) => acc + curr.cakeQuantity, 0);
});
    
function toggleCart() {
  // if opened
  isShow.value = !isShow.value;
}
  // }
  // )
  return { cart, addToCart, decreaseQuantity, deleteFromCart, getTotalPrice, cartQuantity, isShow, toggleCart};
});
