<template>
  <div class="home">
    <BannerComponent />
    <HotProductsComponent />
    <NewProductComponent />
    <OnSaleComponent />
    <PositiveFeedBackComponent />
  </div>
</template>

<style></style>

<script>
import BannerComponent from '@/components/home/BannerConponent.vue'
import HotProductsComponent from '@/components/home/HotProductsComponent.vue'
import NewProductComponent from '@/components/home/NewProductComponent.vue'
import OnSaleComponent from '@/components/home/OnSaleComponent.vue'
import PositiveFeedBackComponent from '@/components/home/PositiveFeedBackComponent.vue'

export default {
  components: {
    BannerComponent,
    HotProductsComponent,
    NewProductComponent,
    OnSaleComponent,
    PositiveFeedBackComponent,
  },
}
</script>

<style>
.home {
  background-color: #fffff6;
}
</style>
