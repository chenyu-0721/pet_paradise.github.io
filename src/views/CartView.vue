<template>
  <div class="cart">
    <NavComponent />
    <CartComponentVue />
  </div>
</template>

<script>
import NavComponent from '@/components/NavComponent.vue'
import CartComponentVue from '@/components/cart/CartComponent.vue'

export default {
  components: {
    NavComponent,
    CartComponentVue,
  },
}
</script>

<style></style>
