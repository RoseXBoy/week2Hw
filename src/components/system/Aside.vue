<template>
  <div class="aside-content">
    <el-menu background-color="#E9FDFF" text-color="#7E4263" active-text-color="#7E4263" :default-active="myPath" class="el-menu-vertical-demo" router unique-opened>
      <el-menu-item route="/home/user" index="/home/user">
        <i class="el-icon-user" style="font-size: 24px;"></i>
        <span>用户管理</span>
      </el-menu-item>
      <el-submenu index='/home/plan'>
        <template slot="title">
          <i class="el-icon-collection" style="font-size: 24px;"></i>
          <span>1</span>
        </template>
        <el-menu-item-group>
          <el-menu-item route="/home/select" index="/home/select">
            <span>2</span>
          </el-menu-item>
          <el-menu-item route="/home/add" index="/home/add">
            <span>3</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item route="/home/question" index="/home/question">
        <i class="el-icon-message" style="font-size: 24px;"></i>
        <span>4</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      myPath: ''
    }
  },
  watch: {
    $route: function () {
      this.myPath = this.$route.matched[1] ? this.$route.matched[1].path : this.$route.matched[0].path
    }
  },
  created() {
    this.myPath = this.$route.matched[1] ? this.$route.matched[1].path : this.$route.matched[0].path
  }
}
</script>

<style lang='scss' scope>
.aside-content {
  width: 200px;
  height: 100%;
  background-color: #E9FDFF ;
  color: #D7BDE2;
  text-align: center;
  .el-menu {
    border: 0;
  }
}
</style>