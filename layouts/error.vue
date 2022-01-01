<template>
  <Hero>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <p class="text-sm mb-3">404 Not Found</p>
    <NuxtLink class="btn rounded-md" to="/">Home page</NuxtLink>
  </Hero>
</template>

<script>
export default {
  props: ['error']
}
</script>
