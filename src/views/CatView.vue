<template>
  <div class="cat">
    <NavComponent />
    <CatBannerComponent />
    <CatCommodityComponent />
    <FooterConponentVue />
  </div>
</template>

<style></style>

<script>
import NavComponent from '@/components/NavComponent.vue'
import CatBannerComponent from '@/components/cat/CatBannerComponent.vue'
import CatCommodityComponent from '@/components/cat/CatCommodityComponent.vue'
import FooterConponentVue from '@/components/FooterConponent.vue'

export default {
  components: {
    NavComponent,
    CatBannerComponent,
    CatCommodityComponent,
    FooterConponentVue,
  },
}
</script>

<style>
.cat {
  background-color: #fffff6;
}
</style>
