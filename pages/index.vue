<script>
export default {
  head({$seoMeta}){
    return {
      title: 'Articles',
      meta: $seoMeta({
        title: 'Articles',
        description: 'This is where i post my projects 👌',
        url: 'https://nizarbaihaqi.com/projects'
      }, false)
    }
  },
  data() {
    return {
      searchQuery: '',
      articles: [],
      category: []
    }
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      articles
    }
  },
  watch: {
    async searchQuery(searchQuery) {
      this.articles = await this.$content('articles')
        .search(searchQuery)
        .sortBy('createdAt', 'desc')
        .fetch()
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>

<template>
  <div>
    <h1 class="text-center mt-20">Articles</h1>
    <Container class="mb-20">
      <div class="mx-auto pl-4 lg:pl-0 ">
        <input class="" v-model="searchQuery" autocomplete="off" placeholder="Full text search">
        <button class="btn rounded-md" @click="searchQuery = 'nuxtjs'">Nuxtjs</button>
        <button class="btn rounded-md" @click="searchQuery = 'tailwindcss'">Tailwindcss</button>
        <button class="btn rounded-md" @click="searchQuery = 'vuex'">Vuex</button>
      </div>
    </Container>
    <Container v-if="articles[0] === undefined">
      <WarnBox class="sm:w-full">
        There's no article match.
      </WarnBox>
    </Container>
    <h6 v-else class="text-center">Newest article</h6>
    <Container v-for="article in articles" :key="article.slug">
      <Card :link="true" :url="article.path">
        <h4 class="text-center">{{ article.title }}</h4>
        <div class="flex justify-center gap-2">
          <p class="text-xs text-center inline-block" v-for="category in article.category" :key="category">
            {{ category }}
          </p>
        </div>
        <p class="text-sm mb-4">Created at: {{ formatDate(article.createdAt) }}</p>
        <p>{{ article.description }}</p>
        <NuxtLink class="link" :to="article.path">
          Check &rarr;
        </NuxtLink>
      </Card>
    </Container>
  </div>
</template>