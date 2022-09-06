<template>

  <NuxtLayout v-if="$route.name !== 'index'">
    <NuxtPage />
  </NuxtLayout>
 <NuxtPage v-else />
</template>

<script>

</script>