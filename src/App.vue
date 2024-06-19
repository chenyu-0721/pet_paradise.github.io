<template>
  <div class="navBgColor">
    <nav class="container navbar navbar-expand-lg">
      <a class="navbar-brand router-link-exact-active" href="/">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85logo.png?alt=media&token=9a09684a-cda7-4295-9bda-f8dba5be1a74"
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
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E7%8B%97%E7%8B%97.png?alt=media&token=3237183f-1fe4-4bdb-89d8-834170c6c23b"
              />
              <h2 class="ms-1">狗狗專區</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cat" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%B2%93.png?alt=media&token=819c1b6c-85cb-4db2-a857-c2f671f143c5"
              />
              <h2 class="ms-1">貓貓專區</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%B3%BC%E7%89%A9%E8%BB%8A.png?alt=media&token=fb002bdf-d435-4b3b-9f34-533aa18f1c24"
              />
              <h2 class="ms-1">購物車</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/sign" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E6%9C%83%E5%93%A1.png?alt=media&token=d0c00c4d-3c00-4387-93ca-6a67b3bc00d2"
              />
              <h2 class="ms-1">登入/註冊</h2>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/back" class="nav-router-link">
              <img
                class="otherNavImg"
                src="https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/logo%2F%E7%B4%85%E8%85%B3%E5%8D%B0.png?alt=media&token=b0285986-cb18-4e95-9afc-406e09cb4676"
              />
              <h2 class="ms-1">後臺系統登入</h2>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view />
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
</style>
