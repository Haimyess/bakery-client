/** @format */

import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", () => {
  interface Product {
    _id: string;
    price: number;
    description: string;
    name: string;
    quantity?: number;
  }
const isShow = ref(false);
  // add to cart localstoreage
  // Product[] means an array of objects. the objects are the product interface

  const cart = ref<Product[]>(JSON.parse(localStorage.getItem("cart")) || []);


  // create a function to check if exist to be able to use it multiple times


  function addToCart(product: Product, qtty = 1) {
    const exist = cart.value.find((item) => item._id === product._id);

    if (exist) {
      exist.quantity++;
    } else {
      cart.value.push({ ...product, quantity: qtty });
    }

    localStorage.setItem("cart", JSON.stringify(cart.value));
  }

  function decreaseQuantity(product : Product) {
    product.quantity--;

    if (product.quantity === 0) {
      console.log("we should delete the product");

      deleteFromCart(product._id);
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
    const updatedArr = cart.value.filter((item) => item._id !== id);
    cart.value = updatedArr;

    localStorage.setItem("cart", JSON.stringify(cart.value));
  }


  const getTotalPrice = computed(() => {

    let total = 0
    cart.value.forEach(product => {
      total += product.price * product.quantity
    });
    return total
  })
  // const getTotalPrice = computed(() => {
  //   return cart.value.reduce((acc, curr) => acc += curr.cakePrice, 0)
  // })
  
const cartQuantity = computed(() => {
  // reduce all the quantities later
  return cart.value.reduce((acc, curr) => acc + curr.quantity, 0);
});
    
function toggleCart() {
  // if opened
  isShow.value = !isShow.value;
}
  // }
  // )
  return { cart, addToCart, decreaseQuantity, deleteFromCart, getTotalPrice, cartQuantity, isShow, toggleCart};
});
