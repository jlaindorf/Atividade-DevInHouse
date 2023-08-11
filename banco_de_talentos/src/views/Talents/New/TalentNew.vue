<template>
    <form @submit.prevent="handlerSubmit" class="form-new">
        <h1>Cadastro de talento</h1>
      <label for="name">Nome Completo:</label>
      <input id="name" v-model="name">

      <label for="email">Email:</label>
      <input id="email" v-model="email">

      <label for="dade">Data de Nascimento:</label>
      <input type="date" id="date" v-model="date_birth">

      <label for="phone">Telefone:</label>
      <input id="phone" v-model="phone">
    </form>
</template>


<script>
import * as yup from 'yup'
export default{
data(){
    return{
        name:'',
        email:'',
        date_birth:'',
        phone:'',
        area:'',
        nivel:'',
        skills:[],
        apresentation:''



    }

},
methods:{
    mostraValores(){
        console.log(this.skills)
    }

},
watch :{
    

}



}

</script>
<style>

.form-new{
    display: flex;
    flex-direction: column;
}
</style>