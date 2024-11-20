<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import { onMounted, ref } from 'vue'

const message = ref('')

const callHelloWorld = async () => {
  try {
    const response = await fetch('/functions/helloworld')
    const data = await response.json()
    message.value = data
  } catch (error) {
    console.error('调用接口出错:', error)
  }
}

onMounted(() => {
  callHelloWorld()
})


</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
