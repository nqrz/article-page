<template>
  <div class="flex justify-between w-full mb-6">
    <div>
      <NuxtLink v-if="prev" :to="{ name: 'projects-slug', params: { slug: prev.slug } }">
        &larr; <span class="hover:underline">{{ prev.title }}</span>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div>
      <NuxtLink v-if="next" :to="{ name: 'projects-slug', params: { slug: next.slug } }">
        <span class="hover:underline">{{ next.title }}</span> &rarr;
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  scrollToTop: true
}
</script>