<template>
  <div>
    <router-view></router-view> <!-- 显示子路由的内容 -->
  </div>
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style lang='scss' scope>
body {
font-family: Arial, sans-serif;
text-align: center;
}


/* 按钮样式 */
.custom-button {
display: inline-block;
padding: 12px 24px;
font-size: 16px;
color: #ffffff;
background-color: #007bff;
border: none;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
/* 悬停效果 */
.custom-button:hover {
background-color: #0056b3;
}
/* 按下效果 */
.custom-button:active {
transform: translateY(2px);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 禁用状态 */
.custom-button:disabled {
opacity: 0.6;
cursor: not-allowed;
box-shadow: none;
}
</style>