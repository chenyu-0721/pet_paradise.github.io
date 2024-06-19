<template>
  <div class="footerBgColor">
    <footer class="container">
      <div class="content">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85logo.png?alt=media&token=9a09684a-cda7-4295-9bda-f8dba5be1a74"
          class="img-fluid"
        />
        <div class="content2">
          <p>台北市寵物區狗狗街貓貓巷9號</p>
          <p>手機電話：0912345678</p>
          <p>Gmail：xxxxxxx@gmail.com</p>
          <p>Copyright © c 2024.本網站內容僅用於非商業用途，純作品練習。</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style>
.footerBgColor {
  background-color: #fffff2;
  padding-bottom: 20px;
}

footer .content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

footer .content2 {
  padding-top: 30px;
}

@media (max-width: 768px) {
  footer .content {
    flex-direction: column;
    align-items: center;
  }
  footer .content2 {
    text-align: center;
  }
}

footer img {
  width: 180px;
  height: 180px;
}

footer p {
  margin: 3px 0px;
  font-size: 20px;
  color: #924444;
}
</style>
