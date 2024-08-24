<template>
  <div>
    <h1>Hello！Welcome to user page!</h1>
    <button class="custom-button" @click="logout()">退出登录</button>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    logout() {
      // 清除登录状态
      this.clearLoginStatus();
      // 使用 Vue Router 跳转到登录页面
      this.$router.push('/login');
    },
    clearLoginStatus() {
      // 清除 token 或其他登录状态
      localStorage.removeItem('token');
      // 如果使用 Vuex 存储登录状态，可以在这里调用 Vuex 的方法来清除状态
    }
  }
}

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