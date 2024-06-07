<template>
  <section class="container newProduct">
    <h2>新品上市(貓狗專區)</h2>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
      <div class="col">
        <div class="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E8%B2%93%E5%8D%80%2F%E8%B2%93%E7%AA%A9.jpg?alt=media&token=5f513287-6727-49bc-bac0-0547e5926ad5"
          />
          <div class="card-body">
            <div>
              <h3 class="card-text">貓窩</h3>
              <p>讓貓寶貝享受休息的時光</p>
            </div>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E7%8B%97%E7%8B%97%E5%8D%80%2Fchewy%E9%A3%9B%E7%9B%A4.jpg?alt=media&token=84de32ed-0ab3-4690-b005-2721a042cfa0"
          />
          <div class="card-body">
            <div>
              <h3 class="card-text">狗狗飛盤</h3>
              <p>讓主人和狗寶貝傳接飛盤</p>
            </div>
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.newProduct h2 {
  color: #b95d3b;
  font-size: 32px;
  margin: 50px 0px;
}

@media (max-width: 768px) {
  .newProduct h2 {
    text-align: center;
  }
}

.newProduct .card-body {
  background-color: #fffff6;
}

.newProduct .card {
  border: none !important;
}

.newProduct {
  padding-bottom: 50px;
  margin-bottom: 50px;
}

.newProduct .card-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.newProduct img {
  width: auto;
  height: 450px;
  border-radius: 10px;
  object-fit: cover;
}

.newProduct .card-body {
  padding-top: 28px;
}

.newProduct .card-body h3 {
  font-size: 24px;
  color: #924444;
}

.newProduct .card-body p {
  margin: 0px;
  font-size: 20px;
  color: #7a6969;
}
</style>
