<template>
  <section class="container newProduct">
    <h2>新品上市(貓狗專區)</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
      <div
        class="col"
        v-for="newProduct in newProductList"
        :key="newProduct.id"
      >
        <div class="card">
          <img :src="newProduct.image" />
          <div class="card-body">
            <div>
              <h3 class="card-text">{{ newProduct.title }}</h3>
              <p>{{ newProduct.unit }}</p>
            </div>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const newProductList = ref([])

    const fetchNewProducts = async () => {
      try {
        const response = await axios.get('https://pet-back.onrender.com/posts')
        newProductList.value = response.data.data.filter(
          (product) => product.newproduct,
        )
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    onMounted(fetchNewProducts)

    return {
      newProductList,
    }
  },
}
</script>

<style>
.newProduct h2 {
  color: #b95d3b;
  font-size: 32px;
  margin: 50px 0;
}

@media (max-width: 768px) {
  .newProduct h2 {
    text-align: center;
  }
}

.newProduct .card {
  border: none;
}

.newProduct .card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fffff6;
  padding-top: 28px;
}

.newProduct img {
  width: auto;
  height: 450px;
  border-radius: 10px;
  object-fit: cover;
}

.newProduct .card-body h3 {
  font-size: 24px;
  color: #924444;
}

.newProduct .card-body p {
  margin: 0;
  font-size: 20px;
  color: #7a6969;
}

.newProduct {
  padding-bottom: 50px;
  margin-bottom: 50px;
}
</style>
