<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import ApiTester from '../components/ApiTester.vue'
import { onMounted, ref } from 'vue'

const message = ref('')

onMounted(() => {
  // 初始化测试
})
</script>

<template>
  <main>
    <TheWelcome />
    <ApiTester />
  </main>
</template>