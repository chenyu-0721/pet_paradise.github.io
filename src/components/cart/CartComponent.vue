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
                <td class="table-title">數量</td>
                <td class="table-title text-end">編輯/刪除</td>
              </tr>
              <tr v-for="item in cartItems" :key="item._id">
                <td>
                  <img :src="item.image" class="table-image" alt="商品圖片" />
                </td>
                <td class="table-title2">{{ item.title }}</td>
                <td class="table-title2">{{ item.price }}</td>
                <td class="table-title2">{{ item.quantity || 1 }}</td>
                <td class="text-end">
                  <button
                    type="button"
                    class="btn btncolor1"
                    @click="removeFromCart(item._id)"
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
import Cookies from 'js-cookie'

const url = 'https://pet-back.onrender.com/users'

export default {
  setup() {
    const cartItems = ref([])

    onMounted(async () => {
      const token = Cookies.get('token')

      try {
        const response = await axios.get(`${url}/getCart`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        cartItems.value = response.data.cart
        console.log(response.data.cart)
      } catch (error) {
        console.error('An error occurred:', error)
      }
    })

    const removeFromCart = async (id) => {
      try {
        const token = Cookies.get('token')
        await axios.delete(`${url}/cart/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
        alert('商品已刪除')
        cartItems.value = cartItems.value.filter((item) => item._id !== id)
      } catch (error) {
        console.error('An error occurred:', error)
      }
    }

    return {
      cartItems,
      removeFromCart,
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
