<template>
  <div>
    <RouterLink class='router' to="/about">page for updater</RouterLink>
    <RouterView class="mt-3"></RouterView>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.router{
  font-size: 20px;
  color: red;
  border-bottom: 1px dotted black;
}
</style>