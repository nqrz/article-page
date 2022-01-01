<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Nizar Baihaqi',
      meta: $seoMeta({}, false)
    }
  }
}
</script>

<template>
  <div class="bg-pastel-gray dark:bg-night-black dark:text-dark-primary">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>
