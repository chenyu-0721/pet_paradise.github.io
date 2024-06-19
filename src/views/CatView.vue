<template>
  <div class="cat">
    <CatBannerComponent />
    <CatCommodityComponent />
    <FooterConponentVue />
  </div>
</template>

<style></style>

<script>
import CatBannerComponent from '@/components/cat/CatBannerComponent.vue'
import CatCommodityComponent from '@/components/cat/CatCommodityComponent.vue'
import FooterConponentVue from '@/components/FooterConponent.vue'

export default {
  components: {
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
