import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {


  interface Product {
    cakeId: number, cakePrice: number, cakeDescription: string, cakeName: string
  }

   // add to cart localstoreage 
  const cart  = ref<Product[]>([])
  

  return { cart }
})
