<template>
  <div style="border-top-left-radius: 10px;border-top-right-radius: 10px;overflow: hidden;">
    <el-container style="height:100vh;">
      <!--  侧边  !-->
      <el-aside
        class="el-aside"
        width="24vh"
        style="background-color: white;width:200px"
      >
        <el-menu :default-openeds="['1', '3']" @select="handleSelect">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>导航一
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="test1">trst1</el-menu-item>
              <el-menu-item index="test2">test2</el-menu-item>
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
        <el-header style="text-align: left; font-size: 24px; background-color:#606266;height:80px;width:100%">
          <p style="position: absolute; top:-6px;left: 42px;font-size: 23px;font-family: 微软雅黑;font-weight: bold; color: #f5f7f9; top: -10px;">智能巡检系统</p>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#606266"
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
          <div style="position:fixed;right:25px;top:10px">
            <i class="el-icon-info"></i>&nbsp;&nbsp;
            <i class="el-icon-view"></i>&nbsp;&nbsp;
            <i class="el-icon-setting"></i>
          </div>
        </el-header>
        <!--  主要区域内容  !-->
        <el-main style="right:200px;position:relative;left:230px;padding-left: 0px;">
          <el-tabs v-model="editableTabsValue" type="card" @tab-click="view" editable @edit="handleTabsEdit"  >
            <el-tab-pane
              :key="item.name"
              v-for="(item) in editableTabs"
              :label="item.title"
              :name="item.name"
              lazy
            >
            </el-tab-pane>
          </el-tabs>
          <br>
          <div class="layout-content">
            <div class="layout-content-main" style="width:60vh;height:70vh"><router-view></router-view></div>
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
      activeIndex: "1",

      editableTabsValue: '1',
      editableTabs: [{
        title: '首页',
        name: '1',
      }],
      tabIndex: 1
    };
  },
  methods: {
    handleSelect(key) {
      console.log(this.editableTabs)
      let check = true;
      for(let i = 0; i< this.editableTabs.length; i++){
        if(this.editableTabs[i].title == key){
          check = false
        }
      }
      if(check){
        this.handleTabsEdit(key,'add')
        this.$router.push('/home/'+key)
      }
      console.log(this.editableTabsValue)
    },
    handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: targetName,
            name: '/home/'+targetName
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
    view(tar){
      this.$router.push(tar.name)
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
  min-width: 1150px;
  overflow: hidden;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
</style>

