<template>
  <section class="catImg">
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
          <div class="col" v-for="cat in filteredCats" :key="cat.id">
            <div class="card">
              <a>
                <img :src="cat.image" class="card-img-top" alt="" />
              </a>
              <div class="card-body d-flex flex-column">
                <div class="d-flex justify-content-between">
                  <span class="card-title">{{ cat.title }}</span>
                  <span class="card-price">NT${{ cat.price }}</span>
                </div>
                <button
                  @click="addToCart(cat)"
                  type="button"
                  class="btn mt-auto"
                >
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
const url2 = 'https://pet-back.onrender.com/users'

export default {
  setup() {
    const catList = ref([])
    const categories = ['零食', '玩具', '小床', '其他']
    const currentCategory = ref('all')

    onMounted(() => {
      axios
        .get(url)
        .then((response) => {
          response.data.data.forEach((element) => {
            if (element.vriety === 'cat') {
              catList.value.push(element)
            }
          })
        })
        .catch((error) => {
          console.log('An error occurred:', error)
        })
    })

    const setCategory = (category) => {
      currentCategory.value = category
    }

    const filteredCats = computed(() => {
      if (currentCategory.value === 'all') {
        return catList.value
      }
      return catList.value.filter(
        (cat) => cat.classification === currentCategory.value,
      )
    })

    const addToCart = (product) => {
      const token = Cookies.get('token')

      axios
        .post(
          `${url2}/addCart`,
          {
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: product.quantity,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(() => {
          alert('商品已加入購物車')
        })
        .catch((error) => {
          console.error('Error:', error) // 捕獲並打印任何錯誤
          alert('尚未登入，請先登入')
        })
    }

    return {
      categories,
      setCategory,
      filteredCats,
      addToCart,
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
