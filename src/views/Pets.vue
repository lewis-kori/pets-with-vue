<template>
    <div>
       <h1>( {{ this.$route.params.species }} ) : {{animal.breed}}</h1>
       <p>name: {{animal.name}}</p>
       <p>Age: {{animal.age}} years old</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default{
    data(){
        return{
            animal:{}
        }
    },
    mounted(){
        const animal = this[this.$route.params.species][this.$route.params.id]
        this.animal = animal
    },
    computed:{
      ...mapState([
          'dogs',
          'cats'
      ])
  }
}
</script>