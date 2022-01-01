<template>
  <div class="mb-2">
    <Container>
      <img class="rounded-b-md" :src="`https://nizarbaihaqi.com/banner/${article.img}`" alt="Project Banner Image">
    </Container>
    <Container>
      <div>
        <Card>
          <div class="w-full mt-6 mb-10">
            <h1 class="text-center">{{ article.title }}</h1>
            <p class="text-center">Updated : {{ formatDate(article.updatedAt) }}</p>
          </div>
          <article>
            <nuxt-content :document="article" />
          </article>
        </Card>
        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  head({$seoMeta}){
    return {
      title: this.article.title,
      meta: $seoMeta({
        title: this.article.title,
        description: this.article.description,
        image: `https://nizarbaihaqi.com/banner/${this.article.img}`,
        url: `https://nizarbaihaqi.com${this.article.path}`
      }, false)
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug ).fetch()

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next
    }
  }
}
</script>
