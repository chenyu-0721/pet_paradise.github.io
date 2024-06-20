<template>
    <div class="registerbg">
      <RegisterComponentVue />
    </div>
  </template>
  
  <style></style>
  
  <script>
  import RegisterComponentVue from '@/components/backrest/RegisterComponent.vue'
  
  export default {
    components: {
        RegisterComponentVue,
    },
  }
  </script>
  
  <style>
  .registerbg {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/dogcat-d363b.appspot.com/o/%E8%B2%93%E7%AA%A9.jpg?alt=media&token=229b9cb7-925c-4c4e-8930-d716182950ab');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: calc(100vh - 76px);
    display: flex;
    justify-content: center;
    align-items: end;
  }
  </style>
  