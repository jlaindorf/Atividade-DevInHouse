<template>
  <body>
 
  <Menu />

  <router-view></router-view>
  
     
</body>

  <footer>
    <p>Todos os Direitos Reservados 2023 © banco de talentos</p>
</footer>
 
</template>


<script>
import Menu from './components/Menu/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>
