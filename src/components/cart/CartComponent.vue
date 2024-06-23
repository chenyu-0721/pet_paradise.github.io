<template>
  <section class="cartBanner">
    <div class="album py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <table class="table align-middle">
            <tbody>
              <tr>
                <td class="table-title">圖片</td>
                <td class="table-title">名稱</td>
                <td class="table-title">價錢</td>
                <td class="table-title text-end">編輯/刪除</td>
              </tr>
              <tr v-for="newProduct in newProductList" :key="newProduct.id">
                <td>
                  <img :src="newProduct.image" class="table-image" alt="" />
                </td>
                <td class="table-title2">{{ newProduct.title }}</td>
                <td class="table-title2">{{ newProduct.price }}</td>
                <td class="text-end">
                  <button
                    type="button"
                    class="btn btncolor1"
                    @click="removeCardItem(newProduct._id)"
                  >
                    刪除
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const url = 'https://pet-back.onrender.com/posts'

export default {
  setup() {
    const newProductList = ref([])
    onMounted(() => {
      axios
        .get(url)
        .then((response) => {
          response.data.data.forEach((element) => {
            newProductList.value.push(element)
          })
        })
        .catch((error) => {
          console.error('An error occurred:', error)
        })
    })

    return {
      newProductList,
    }
  },
}
</script>

<style>
.cartBanner {
  background-color: #fffff6;
}

.table > :not(caption) > * > * {
  background-color: #fffff6 !important;
}

.cartBanner img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.cartBanner .table-title {
  font-size: 20px;
  font-weight: bold;
  color: #b95d3b !important;
}

.cartBanner .table-title2 {
  font-size: 18px;
  font-weight: bold;
  color: #924444 !important;
}

.cartBanner .btncolor1 {
  background-color: #b95d3b !important;
  color: #fffff6 !important;
}

.cartBanner .btncolor1:hover {
  background-color: #ef8d6a !important;
  color: #fffff6 !important;
}

.cartBanner .btncolor2 {
  background-color: #ac2c2c !important;
  color: #fffff6 !important;
}

.cartBanner .btncolor2:hover {
  background-color: #e28e8e !important;
  color: #fffff6 !important;
}
</style>
