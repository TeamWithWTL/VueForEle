<template>
  <div style="border-top-left-radius: 10px;border-top-right-radius: 10px;overflow: hidden;">
    <el-container style="height:100vh;">
      <!--  侧边  !-->
      <el-aside
        class="el-aside"
        width="24vh"
        style="background-color: white;height: 90vh;"
      >
        <el-menu
          :default-openeds="['1', '3']"
          @select="handleSelect"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">
                <router-link to="/home/test">选项1</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>导航二
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-setting"></i>导航三
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!--  头部  !-->
        <el-header style="text-align: left; font-size: 24px; background-color:#303133;height:80px">
          <p style="position: absolute; top:-6px;left: 42px;font-size: 23px;font-family: 微软雅黑;font-weight: bold; color: #f5f7f9; top: -6px;">智能巡检系统</p>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#303133"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">消息中心</el-menu-item>
            <el-menu-item index="3">订单管理</el-menu-item>
            <el-menu-item index="4">4</el-menu-item>
            <el-menu-item index="5">5</el-menu-item>
            <el-menu-item index="6">6</el-menu-item>
          </el-menu>
          <el-dropdown style="left:1750px;top:-57px;">
            <el-button
              type="primary"
              style="background-color:#ffd04b;"
            >
              菜单
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户</el-dropdown-item>
              <el-dropdown-item>皮肤</el-dropdown-item>
              <el-dropdown-item>设置</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <!--  主要区域内容  !-->
        <el-main style="right:200px;width:1678px;position:absolute;left:230px;top:90px;padding-left: 0px;">
          <el-breadcrumb>
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <br>
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(key);
      if (key == "1-1") {
      }
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  position: absolute;
  top: 80px;
}
.el-menu-demo {
  width: 1500px;
  left: 180px;
  top: 20px;
}
.layout-content {
  background-color: #d0d0d0;
  min-height: 540px;
  min-width: 1200px;
  overflow: hidden;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
a{
  text-decoration: none
}
</style>

