<template>
    <form @submit.prevent="handleSubmit" class="form-new">
        <h1>Cadastro de talento</h1>
        <label for="name">Nome Completo:</label>
        <input id="name" v-model="name">

        <label for="email">Email:</label>
        <input id="email" v-model="email">

        <label for="dade">Data de Nascimento:</label>
        <input type="date" id="date" v-model="date_birth">

        <label for="phone">Telefone:</label>
        <input id="phone" v-model="phone">

        <label for="area">Area de Interesse</label>
        <select name="area" id="area" v-model="area">
            <option value="backend">Backend</option>
            <option value="frontend">Frontend</option>
            <option value="fullstack">Fullstack</option>
        </select>

        <label for="nivel">Nível</label>
        <select name="nivel" id="nivel" v-model="nivel">
            <option value="junior">Junior</option>
            <option value="pleno">Pleno</option>
            <option value="junior">Senior</option>

        </select>

        <p>Selecione suas Habilidades:</p>


        <div v-if="area === 'frontend' || area === 'fullstack'">

            <label><input type="checkbox" v-model="skills" value="HTML">HTML</label>
            <label><input type="checkbox" v-model="skills" value="CSS">CSS</label>
            <label><input type="checkbox" v-model="skills" value="JAVASCRIPT">JAVASCRIPT</label>
            <label><input type="checkbox" v-model="skills" value="VUE">VUE</label>
           
        </div>
        <div v-if="area === 'backend' || area === 'fullstack'">
            <label><input type="checkbox" v-model="skills" value="SQL">SQL</label>
            <label><input type="checkbox" v-model="skills" value="PHP">PHP</label>
            <label><input type="checkbox" v-model="skills" value="PYTHON">PYTHON</label>
            <label><input type="checkbox" v-model="skills" value="JAVA">JAVA</label>


        </div>

        <label for="carta">Carta de Apresentação:</label>
        <textarea name="carta" v-model="apresentation" cols="30" rows="10"></textarea>

        <button type="submit">Cadastrar</button>
    </form>
</template>


<script>
import * as yup from 'yup'
export default {
    data() {
        return {
            name: '',
            email: '',
            date_birth: '',
            phone: '',
            area: '',
            nivel: '',
            skills: [],
            apresentation: ''



        }

    },
    methods: {
    handleSubmit() {
      try {
      
        const schema = yup.object().shape({
          name: yup.string().required('O nome é obrigatório'),
          email: yup.string().email('Email não inválido').required('Email é obrigatório'),
          area: yup.string().required('A area é obrigatorio')
        })

      
        schema.validateSync({
          name: this.name,
          email: this.email,
          area: this.area
        })
        // .....................
      } catch (error) {
        alert("Error no formulario")
      }
    }
  },
  watch: {
    area(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.skills = []
      }
    }
  }
}
</script>

<style>
.form-new {
    display: flex;
    flex-direction: column;
    gap: 4px;
}


</style>
