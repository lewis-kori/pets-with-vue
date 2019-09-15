<template>
    <div>
        <b-table striped hover :items="cats">
            <template v-slot:cell(name)="data">
                <a :href="`/pets/cats/${data.index}`">
                {{ data.value }}
                </a> 
            </template>
        </b-table>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data() {
    return{
    }
    },
    computed:{
      ...mapState([
          'cats',
      ])
  }
}
</script>
