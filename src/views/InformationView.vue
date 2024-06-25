<template>
  <div class="infor">
    <NavComponent />
    <InformationBannerComponent />
  </div>
</template>

<script>
import InformationBannerComponent from '@/components/information/InformationBannerComponent.vue'
import NavComponent from '@/components/NavComponent.vue'
export default {
  components: {
    NavComponent,
    InformationBannerComponent,
  },
}
</script>

<style></style>
