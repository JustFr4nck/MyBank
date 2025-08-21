<template>

  <div class="parent">
    <div class="magicpattern">

      <nav class="flex flex-row">
          <RouterLink :to="{ name: 'home' }" class="justify-start mt-2 ml-2 transition-transform duration-300 hover:scale-110 cursor-pointer">
            <Icon icon="mingcute:home-7-fill" class="w-10 h-10" />
          </RouterLink>
      </nav>

      <RouterView />
    </div>
  </div>

</template>


<script setup lang="ts">

import { Icon } from '@iconify/vue'

</script>