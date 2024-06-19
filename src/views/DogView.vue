<template>
  <div class="dog">
    <DogBannerComponent />
    <DogCommodityComponent />
    <FooterConponentVue />
  </div>
</template>

<style></style>

<script>
import DogBannerComponent from '@/components/dog/DogBannerComponent.vue'
import DogCommodityComponent from '@/components/dog/DogCommodityComponent.vue'
import FooterConponentVue from '@/components/FooterConponent.vue'
export default {
  components: {
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
