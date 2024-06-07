<template>
  <section class="container hotProducts">
    <h2>熱門商品區(貓狗專區)</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E8%B2%93%E5%8D%80%2F%E8%B2%93%E6%9C%A8%E5%A4%A9%E7%99%82.jpg?alt=media&token=4e227f7a-559b-425b-9830-496647325746"
          />
          <div class="card-body">
            <div>
              <h3 class="card-text">木天蓼</h3>
              <p>讓貓寶貝放鬆的好夥伴</p>
            </div>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E7%8B%97%E7%8B%97%E5%8D%80%2F%E7%B6%B2%E7%90%83.jpg?alt=media&token=2b366c64-7f40-41e6-8611-0c18db81e555"
          />
          <div class="card-body">
            <div>
              <h3 class="card-text">狗狗專用球球</h3>
              <p>讓狗寶貝消耗體力的最佳選擇</p>
            </div>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E7%8B%97%E7%8B%97%E5%8D%80%2F%E5%B8%B3%E6%A3%9A%E7%8B%97%E7%8B%97.jpg?alt=media&token=f44120be-9533-4229-af12-e9ef22241c5c"
          />
          <div class="card-body">
            <div>
              <h3 class="card-text">寵物專用帳篷</h3>
              <p>讓狗寶貝睡眠睡得安穩</p>
            </div>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.hotProducts h2 {
  color: #b95d3b;
  font-size: 32px;
  margin: 50px 0px;
}

@media (max-width: 768px) {
  .hotProducts h2 {
    text-align: center;
  }
}

.hotProducts .card-body {
  background-color: #fffff6;
}

.hotProducts .card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hotProducts .card-body i {
  font-size: 20px;
}

.hotProducts .card {
  border: none !important;
}

.hotProducts img {
  width: auto;
  height: 500px;
  border-radius: 20px;
  object-fit: cover;
}

.hotProducts .card-body {
  padding-top: 28px;
}

.hotProducts .card-body h3 {
  font-size: 24px;
  color: #924444;
}

.hotProducts .card-body p {
  margin: 0px;
  font-size: 20px;
  color: #7a6969;
}
</style>
