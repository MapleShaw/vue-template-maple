<template>
  <div class="product">
    <h1>产品介绍</h1>
    <div class="product-content">
      <div class="product-section">
        <h2>核心功能</h2>
        <ul>
          <li>高性能计算</li>
          <li>实时数据分析</li>
          <li>智能决策支持</li>
          <li>安全防护</li>
        </ul>
      </div>
      
      <div class="product-section">
        <h2>技术优势</h2>
        <ul>
          <li>分布式架构</li>
          <li>高可用设计</li>
          <li>弹性扩展</li>
          <li>低延迟响应</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 20px;
}

.product-section {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
}

li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-heading);
}
</style>