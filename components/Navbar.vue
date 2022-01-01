<template>
  <div class="sticky top-0 z-50 bg-pastel-blue dark:bg-night-purple">
    <div class="flex justify-center max-w-full">
      <div class="container max-w-screen-lg flex justify-between items-center">
        <NuxtLink to="/" class="flex ml-2 nav-link">
          <img src="~assets/logo-light-24x24.png" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
          <img src="~assets/logo-dark-24x24.png" alt="logo" class="w-6" v-else />
          <span class="ml-2 font-bold">
            Articles
          </span>
        </NuxtLink>
        <div class="flex">
          <button class="nav-link" @click="toggleColor()">
            <i class="fas fa-sun transition-all" v-if="$colorMode.preference == 'light'"></i>
            <i class="fas fa-moon" v-else></i>
          </button>
          <!-- <div class="hidden sm:flex">
            <NuxtLink class="nav-link" to="/projects">Projects</NuxtLink>
            <NuxtLink class="nav-link" to="/about">About me</NuxtLink>
          </div>
          <button @click="toggleSidebar" class="sm:hidden nav-link">
            <i class="fas fa-bars"></i>
          </button> -->
        </div>
      </div>
    </div>
    <!-- <transition name="slide-fade">
      <div v-show="sidebar" class="sm:hidden flex flex-col">
        <NuxtLink to="/projects">
          <button @click="toggleSidebar" class="nav-link-xs">
            Projects
          </button>
        </NuxtLink>
        <NuxtLink to="/about">
          <button @click="toggleSidebar" class="nav-link-xs">
            About me
          </button>
        </NuxtLink>
      </div>
    </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false
    }
  },
  methods: {
    toggleColor () {
      if (this.$colorMode.preference == "dark") {
        this.$colorMode.preference = "light"
      } else {
        this.$colorMode.preference = "dark"
      }
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar
    }
  }
}
</script>