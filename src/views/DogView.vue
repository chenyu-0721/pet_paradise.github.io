<template>
  <div class="dog">
    <NavComponent />
    <DogBannerComponent />
    <DogCommodityComponent />
    <FooterConponentVue />
  </div>
</template>

<style></style>

<script>
import NavComponent from '@/components/NavComponent.vue'
import DogBannerComponent from '@/components/dog/DogBannerComponent.vue'
import DogCommodityComponent from '@/components/dog/DogCommodityComponent.vue'
import FooterConponentVue from '@/components/FooterConponent.vue'
export default {
  components: {
    NavComponent,
    DogBannerComponent,
    DogCommodityComponent,
    FooterConponentVue,
  },
}
</script>

<style>
.dog {
  background-color: #fffff6;
}
</style>
