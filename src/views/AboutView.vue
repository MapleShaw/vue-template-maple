<script setup lang="ts">
import { onMounted, ref } from 'vue'

const message = ref('')

const callCheckout = async () => {
  try {
    const response = await fetch('/checkout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    message.value = data
  } catch (error) {
    console.error('调用接口出错:', error)
  }
}

onMounted(() => {
  callCheckout()
})


</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
