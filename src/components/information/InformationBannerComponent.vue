<template>
  <section class="inforBanner">
    <div class="album py-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3 my-4">
          <table class="table align-middle">
            <td>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#patchStaticBackdrop"
              >
                新增
              </button>
            </td>
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
                  <button
                    @click="updateCardItem(newProduct)"
                    type="button"
                    class="btn btncolor2"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    編輯
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <!-- Modal 註解的部分 -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">編輯資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <p>
              項目名稱：<input
                ref="titleInput"
                type="text"
                class=""
                :value="updateItem.title"
              />
            </p>
          </div>
          <div>
            <p>
              價錢：<input
                ref="priceInput"
                type="text"
                class=""
                :value="updateItem.price"
              />
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            返回
          </button>
          <button
            type="button"
            @click="savePatchButtonClick(updateItem._id)"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    id="patchStaticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">新增資料</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div>
            <p>
              圖片路徑：
              <input v-model="saveImageInput" type="text" class="" />
            </p>
          </div>
          <div>
            <p>
              項目名稱：
              <input v-model="saveTitleInput" type="text" class="" />
            </p>
          </div>
          <div>
            <p>
              價錢：
              <input v-model="savePriceInput" type="text" class="" />
            </p>
          </div>
          <div>
            <p>
              種類：
              <select v-model="saveVrietyInput" type="text" class="">
                <option>dog</option>
                <option>cat</option>
              </select>
            </p>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closePostButtonClick()"
          >
            返回
          </button>
          <button
            type="button"
            @click="savePostButtonClick()"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            儲存
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const url = 'https://pet-back.onrender.com/posts'

export default {
  setup() {
    const newProductList = ref([])
    const updateItem = ref({
      // 使用 ref 定義 updateItem
      title: '',
      price: 0,
      _id: '',
    })

    const titleInput = ref(null)
    const priceInput = ref(null)

    const saveImageInput = ref('')
    const savePriceInput = ref('')
    const saveTitleInput = ref('')
    const saveVrietyInput = ref('')

    onMounted(() => {
      axios
        .get(url)
        .then((response) => {
          response.data.data.forEach((element) => {
            newProductList.value.push(element)
          })
        })
        .catch((error) => {
          console.log('An error occurred:', error)
        })
    })

    const removeCardItem = (id) => {
      axios
        .delete(`https://pet-back.onrender.com/posts/${id}`)
        .then((response) => {
          console.log(response.data)
          newProductList.value = newProductList.value.filter(
            (item) => item._id !== id,
          )
          alert('刪除成功')
        })
        .catch((error) => {
          console.log('An error occurred:', error)
        })
      console.log(id)
    }

    const updateCardItem = (newProduct) => {
      updateItem.value.title = newProduct.title
      updateItem.value.price = newProduct.price
      updateItem.value._id = newProduct._id
      // console.log("updateItem",updateItem)
    }
    // console.log(newProductList)

    const savePatchButtonClick = (id) => {
      const updatedTitle = titleInput.value.value
      const updatedPrice = priceInput.value.value

      axios
        .patch(`https://pet-back.onrender.com/posts/${id}`, {
          title: updatedTitle,
          price: updatedPrice,
        })
        .then(() => {
          alert('更新成功')
          newProductList.value = newProductList.value.map((item) => {
            if (item._id === id) {
              return {
                ...item,
                title: updatedTitle,
                price: updatedPrice,
              }
            }
            return item
          })
          // console.log('更新成功:', response.data);
        })
        .catch(() => {
          alert('更新失敗')
          // console.log('更新失敗:', error);
        })
    }

    const savePostButtonClick = () => {
      const saveProduct = {
        image: saveImageInput.value,
        title: saveTitleInput.value,
        price: savePriceInput.value,
        vriety: saveVrietyInput.value,
      }

      console.log(saveProduct)

      axios
        .post(url, saveProduct)
        .then((res) => {
          newProductList.value.push(res.data.data)
          // console.log('res.data.data',res.data.data);
          alert('新增成功')
          saveImageInput.value = ''
          saveTitleInput.value = ''
          savePriceInput.value = ''
          saveVrietyInput.value = ''
          // console.log('newProductList301行:',newProductList);
        })
        .catch((error) => {
          console.log('An error occurred:', error)
        })
    }

    const closePostButtonClick = () => {
      saveImageInput.value = ''
      saveTitleInput.value = ''
      savePriceInput.value = ''
      saveVrietyInput.value = ''
    }

    return {
      newProductList,
      removeCardItem,
      updateCardItem,
      updateItem,
      titleInput,
      priceInput,
      savePatchButtonClick,
      savePostButtonClick,
      saveImageInput,
      savePriceInput,
      saveTitleInput,
      saveVrietyInput,
      closePostButtonClick,
    }
  },
}
</script>

<style>
.inforBanner {
  background-color: #fffff6;
}

.table > :not(caption) > * > * {
  background-color: #fffff6 !important;
}

.inforBanner img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.inforBanner .table-title {
  font-size: 20px;
  font-weight: bold;
  color: #b95d3b !important;
}

.inforBanner .table-title2 {
  font-size: 18px;
  font-weight: bold;
  color: #924444 !important;
}

.inforBanner .btncolor1 {
  background-color: #b95d3b !important;
  color: #fffff6 !important;
}

.inforBanner .btncolor1:hover {
  background-color: #ef8d6a !important;
  color: #fffff6 !important;
}

.inforBanner .btncolor2 {
  background-color: #ac2c2c !important;
  color: #fffff6 !important;
}

.inforBanner .btncolor2:hover {
  background-color: #e28e8e !important;
  color: #fffff6 !important;
}
</style>
