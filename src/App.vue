<template>
  <div class="navBgColor">
    <nav class="container navbar navbar-expand-lg">
      <a class="navbar-brand router-link-exact-active" href="/">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85logo.png?alt=media&token=970ea71c-2085-44e6-9302-6198abbb803c"
          />
          <h1>毛孩樂園</h1>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarCollapse"
      >
        <ul class="navbar-nav align-items-center">
          <li class="nav-item">
            <router-link to="/dog" class="nav-router-link">
              <img
                class="dogNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E7%8B%97%E7%8B%97.png?alt=media&token=78900251-cc5e-45f2-b0e7-7e81788ef5bb"
              />
              <h2 class="ms-1">狗狗專區</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cat" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%B2%93.png?alt=media&token=691f9daf-af47-4a1b-ab84-232fc466f00a"
              />
              <h2 class="ms-1">貓貓專區</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%B3%BC%E7%89%A9%E8%BB%8A.png?alt=media&token=c4113e41-7088-4c3a-a7fc-a02a841cc171"
              />
              <h2 class="ms-1">購物車</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sign" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E6%9C%83%E5%93%A1.png?alt=media&token=b3e1293c-1b52-49cd-a08e-471c1527e10c"
              />
              <h2 class="ms-1">登入/註冊</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/back" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%85%B3%E5%8D%B0.png?alt=media&token=b5d7db56-a456-4a1c-99e2-7f8d99b76efd"
              />
              <h2 class="ms-1">後臺系統登入</h2>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view />

  <div class="footerBgColor">
    <footer class="container">
      <div class="content">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85logo.png?alt=media&token=970ea71c-2085-44e6-9302-6198abbb803c"
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/**
 * * 毛孩樂園 nav
 */

.navbar,
.navBgColor {
  background-color: #fffff2 !important;
  text-align: center;
}

nav a div h1,
.navbar-nav .nav-item .nav-router-link {
  color: #ac2c2c;
  margin: 0px;
}

nav .navbar-brand div {
  display: flex;
  align-items: end;
}

nav .navbar-brand img {
  width: 50px;
  height: 50px;
}

nav a div h1 {
  font-size: 32px;
}

a {
  text-decoration: none !important;
}

.nav-router-link {
  display: flex;
  align-items: center;
  padding: 0 10px;
}

nav .navbar-nav h2 {
  font-size: 16px;
  margin: 0px;
}

.dogNavImg {
  width: 40px;
  height: 40px;
}

.otherNavImg {
  width: 30px;
  height: 30px;
}

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
