<template>
  <div class="about">
    <router-link :to="{ name: 'fixedTest' }">fixedTest</router-link>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'test'
}
</script>
