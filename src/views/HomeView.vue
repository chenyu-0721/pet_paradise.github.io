<template>
  <div class="home">
    <BannerComponent />
    <HotProductsComponent />
    <OnSaleComponent />
    <NewProductComponent />
    <PositiveFeedBackComponent />
    <FooterConponentVue />
  </div>
</template>

<style></style>

<script>
import BannerComponent from '@/components/home/BannerConponent.vue'
import HotProductsComponent from '@/components/home/HotProductsComponent.vue'
import NewProductComponent from '@/components/home/NewProductComponent.vue'
import OnSaleComponent from '@/components/home/OnSaleComponent.vue'
import PositiveFeedBackComponent from '@/components/home/PositiveFeedBackComponent.vue'
import FooterConponentVue from '@/components/FooterConponent.vue'

export default {
  components: {
    BannerComponent,
    HotProductsComponent,
    NewProductComponent,
    OnSaleComponent,
    PositiveFeedBackComponent,
    FooterConponentVue,
  },
}
</script>

<style scoped>
.home {
  background-color: #fffff6;
}
</style>
