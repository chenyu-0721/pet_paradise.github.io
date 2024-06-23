<template>
  <section class="dogImg">
    <div class="album py-5">
      <div class="container">
        <div class="category-buttons mb-4">
          <button
            type="button"
            class="btn-category"
            @click="setCategory('all')"
          >
            全部商品
          </button>
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            class="btn-category"
            @click="setCategory(category)"
          >
            {{ category }}
          </button>
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col" v-for="dog in filteredDogs" :key="dog.id">
            <div class="card">
              <a>
                <img :src="dog.image" class="card-img-top" alt="" />
              </a>
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <span class="card-title">{{ dog.title }}</span>
                  <span class="card-price">NT${{ dog.price }}</span>
                </div>
                <button @click="buttontest()" type="button" class="btn mt-auto">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import Cookies from 'js-cookie'
const url = 'https://pet-back.onrender.com/posts'

export default {
  setup() {
    const dogList = ref([])
    const categories = ['零食', '玩具', '小床', '其他']
    const currentCategory = ref('all')

    onMounted(() => {
      axios
        .get(url)
        .then((response) => {
          response.data.data.forEach((element) => {
            if (element.vriety === 'dog') {
              dogList.value.push(element)
            }
          })
        })
        .catch((error) => {
          console.error('An error occurred:', error)
        })
    })

    const setCategory = (category) => {
      currentCategory.value = category
    }

    const filteredDogs = computed(() => {
      if (currentCategory.value === 'all') {
        return dogList.value
      }
      return dogList.value.filter(
        (dog) => dog.classification === currentCategory.value,
      )
    })

    const buttontest = () => {
      if (Cookies.get('token') == '') {
        alert('請先登入')
        console.log('失敗')
      } else {
        alert('已加入購物車')
        console.log('成功')
      }
    }

    return {
      categories,
      setCategory,
      filteredDogs,
      buttontest,
    }
  },
}
</script>

<style scoped>
.card {
  width: auto;
  height: auto;
}

.card-img-top {
  object-fit: cover;
  height: 255px;
}

.card-price,
.card-title {
  color: #924444 !important;
  font-size: 24px;
  margin: 0px;
}

.btn {
  background-color: #ef8d6a !important;
  color: #fffff6 !important;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.btn:hover {
  background-color: #e67e5b !important;
}

.category-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.btn-category {
  color: #b95d3b;
  background-color: #fffff6;
  border: none;
  padding: 10px 20px;
  font-size: 24px;
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
}

.btn-category:hover {
  background-color: #b95d3b;
  color: #fffff6;
}
</style>
