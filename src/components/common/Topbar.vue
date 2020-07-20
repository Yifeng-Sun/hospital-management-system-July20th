<template>
  <div class="topbar-container">
    <div class="btn" @click="Sidebar">
<!--      <i-->
<!--        style="font-size:30px"-->
<!--        :class="sharedState.state.isCollapse ?'el-icon-s-unfold':'el-icon-s-fold'"-->
<!--      >-->
        <i style="font-size:30px">
          Welcome to HIS, admin.
        </i>
<!--      </i>-->
    </div>
    <div class="user">
      <el-dropdown trigger="click" @command="handleCommand">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: require("../../../static/icons8-settings-64.png"),
      sharedState: this.$isCollapse
    };
  },
  methods: {
    Sidebar() {
      console.log(this.$isCollapse);
      if (this.sharedState.state.isCollapse == false) {
        this.sharedState.setAction(true);
      } else {
        this.sharedState.setAction(false);
      }
    },
    handleCommand(command) {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.topbar-container {
  height: 56px;
  background-image: linear-gradient(134deg, #00e2ff 0%, #bb00ff 100%);
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  color: white;
}
.user {
  position: absolute;
  right: 20px;
  top: 8px;
  display: inline-block;
}
</style>