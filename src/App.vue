<script>
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <RouterView />
</template>

<style></style>
