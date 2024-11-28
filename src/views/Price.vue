<template>
  <div class="price">
    <h1>产品价格</h1>
    <div class="price-content">
      <div class="price-card">
        <h2>基础版</h2>
        <div class="price-amount">¥99/月</div>
        <ul>
          <li>基础功能支持</li>
          <li>每月5GB流量</li>
          <li>基础技术支持</li>
        </ul>
      </div>
      
      <div class="price-card">
        <h2>专业版</h2>
        <div class="price-amount">¥299/月</div>
        <ul>
          <li>全部功能支持</li>
          <li>每月50GB流量</li>
          <li>7*24技术支持</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.price-content {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
}

.price-card {
  border: 1px solid var(--color-border);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
}

.price-amount {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
  color: var(--color-heading);
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 10px 0;
}
</style>