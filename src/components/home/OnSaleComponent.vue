<template>
  <section class="container marketing onSale">
    <div class="row featurette">
      <div class="col-md-6 order-md-2 sale">
        <h1 class="pt-5">20%OFF</h1>
        <h1>正在促銷中</h1>
        <h4>最低消費费 NT100 享 20% 折扣</h4>
        <h5>2024/5/1 ~ 2024/12/31</h5>
        <a class="btn" href="#" role="button">SHOP NOW</a>
      </div>

      <div class="col-md-6 order-md-1">
        <img
          class="img-fluid"
          src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E7%8B%97%E5%8D%80%2F%E5%B0%81%E9%9D%A21.jpg?alt=media&token=f4e03cc5-51b8-4e81-8aab-3418fbaae763"
        />
      </div>
    </div>
  </section>
</template>

<style>
.onSale {
  margin-top: 150px;
  padding-bottom: 100px;
}

.onSale .order-md-1 img {
  width: 600px;
  height: 500px;
  object-fit: cover;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .onSale .row {
    flex-direction: column-reverse;
  }
}

.onSale .row .sale {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 768px) {
  .onSale .row .sale {
    align-items: center;
  }
}

.onSale .row h1 {
  font-size: 60px;
  font-weight: bold;
  color: #b95d3b;
}

.onSale .row h4 {
  font-size: 32px;
  color: #b95d3b;
  padding-top: 25px;
}

.onSale .row h5 {
  font-size: 24px;
  color: #b95d3b;
  opacity: 0.4;
  padding-top: 15px;
}

.onSale .row a {
  margin-top: 50px;
  background-color: rgba(185, 93, 59, 0.8);
  color: white;
  font-size: 20px;
  width: 180px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
