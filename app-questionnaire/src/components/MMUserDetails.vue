<template>
  <div class="box footer">
    {{ MMUserJson.nom }} {{ MMUserJson.prenom }}
  </div>
</template>

<script>
/* eslint-disable indent */
import userJson from '../jsons/user.json'

  export default {
    name: 'UserDetails',
    data () {
      return {
        MMUserJson: userJson
      }
    }
  }
</script>

<style scoped>

</style>
