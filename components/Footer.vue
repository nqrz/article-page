<template>
  <div class="block md:flex justify-center py-11 bg-pastel-blue dark:bg-black dark:text-dark-secondary">
    <div class="flex flex-col items-center md:items-end md:pr-2">
      <a href="https://nizarbaihaqi.com" target="_blank" title="Back to portofolio page" class="flex">
        <img src="~assets/logo-light-256x256.png" alt="logo" class="w-6" v-if="$colorMode.preference == 'light'" />
        <img src="~assets/logo-dark-256x256.png" alt="logo" class="w-6" v-else />
        <span class="ml-2 font-bold hover:text-light-primary dark:hover:text-dark-primary transition-all">Nizar Baihaqi</span>
      </a>
      <code class="mt-3 text-xs">Created in my home with</code>
      <code class="text-xs">Nuxtjs and Tailwind</code>
    </div>
    <div
      class="flex flex-col items-center mt-3 md:mt-0 md:items-start md:pl-2 md:border-l-2 border-light-secondary dark:border-dark-secondary">
      <a class="hover:text-light-primary dark:hover:text-dark-primary" target="_blank" href="mailto:nizarbaihaq@gmail.com">
        <i class="far fa-envelope"></i> nizarbaihaq@gmail.com
      </a>
      <a class="hover:text-light-primary dark:hover:text-dark-primary" target="_blank" href="https://www.linkedin.com/in/nizar-baihaqi/">
        <i class="fab fa-linkedin"></i> LinkedIn
      </a>
      <a class="hover:text-light-primary dark:hover:text-dark-primary" href="https://dribbble.com/ijaybaihaqi">
        <i class="fab fa-dribbble"></i> Dribbble
      </a>
    </div>
  </div>
</template>