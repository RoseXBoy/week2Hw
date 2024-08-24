<template>
  <div class="header-content">
    <div class="des">曹楠第二周作业：管理员页面</div>
    <el-button @click="outlogin" size="small">退出登录</el-button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    outlogin() {
      // 删除token
      localStorage.setItem('state', {})
      // 跳页面
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scope>
.header-content {
  padding: 0 10px;
  background-color: #7E4263;
  line-height: 60px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>