<template>
  <section class="container hotProducts">
    <h2>熱門商品區(貓狗專區)</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col" v-for="hot in hotList" :key="hot.id">
        <div class="card">
          <img :src="hot.image" alt="Hot Product Image" />
          <div class="card-body">
            <div>
              <h3 class="card-text">{{ hot.title }}</h3>
              <p>{{ hot.unit }}</p>
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
    const hotList = ref([])

    const fetchHotProducts = async () => {
      try {
        const response = await axios.get('https://pet-back.onrender.com/posts')
        hotList.value = response.data.data.filter((product) => product.popular)
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    onMounted(fetchHotProducts)

    return {
      hotList,
    }
  },
}
</script>

<style>
.hotProducts h2 {
  color: #b95d3b;
  font-size: 32px;
  margin: 50px 0;
}

@media (max-width: 768px) {
  .hotProducts h2 {
    text-align: center;
  }
}

.hotProducts .card {
  border: none;
}

.hotProducts .card-body {
  background-color: #fffff6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
}

.hotProducts img {
  width: auto;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
}

.hotProducts .card-body h3 {
  font-size: 24px;
  color: #924444;
}

.hotProducts .card-body p {
  margin: 0;
  font-size: 20px;
  color: #7a6969;
}

.hotProducts .card-body i {
  font-size: 20px;
}
</style>
