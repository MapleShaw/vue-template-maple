<script setup lang="ts">
import { ref } from 'vue'

const endpoints = [
  '/helloworld',
  '/checkout',
  '/test'
]

const results = ref({})
const loading = ref(false)
const error = ref('')

const testEndpoint = async (endpoint: string) => {
  try {
    loading.value = true
    const response = await fetch(endpoint)
    const data = await response.json()
    results.value = { ...results.value, [endpoint]: data }
  } catch (err: unknown) {
    error.value = err instanceof Error ? err.message : String(err)
  } finally {
    loading.value = false
  }
}

const testAll = () => {
  endpoints.forEach(testEndpoint)
}
</script>

<template>
  <div class="api-tester">
    <h2>Functions API 测试工具</h2>
    <div class="controls">
      <button @click="testAll">测试所有端点</button>
      <button 
        v-for="endpoint in endpoints" 
        :key="endpoint"
        @click="() => testEndpoint(endpoint)"
      >
        测试 {{ endpoint }}
      </button>
    </div>
    
    <div v-if="loading">测试中...</div>
    <div v-if="error" class="error">{{ error }}</div>
    
    <div v-for="(result, endpoint) in results" :key="endpoint" class="result">
      <h3>{{ endpoint }}</h3>
      <pre>{{ JSON.stringify(result, null, 2) }}</pre>
    </div>
  </div>
</template>

<style scoped>
.api-tester {
  padding: 20px;
}
.controls {
  margin: 20px 0;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
}
.result {
  margin: 10px 0;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 4px;
}
.error {
  color: red;
  margin: 10px 0;
}
</style>
