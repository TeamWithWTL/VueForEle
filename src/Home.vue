<template>
  <div style="border-top-left-radius: 10px;border-top-right-radius: 10px;overflow: hidden;">
    <el-container style="height:100vh;">
      <!--  侧边  !-->
      <el-aside class="el-aside" width="24vh" style="background-color: white;width:200px">
        <el-menu @select="handleSelect">
          <div :key="sub.id" v-for="sub in notic">
            <div v-if="sub.children">
              <el-submenu :index="sub.index"><template slot="title"><i class="el-icon-message"></i>{{sub.name}}</template>
                <el-menu-item :key="item.id" v-for="item in sub.children" :index="item.index">{{item.name}}</el-menu-item>
              </el-submenu>
            </div>
            <div v-else>
              <el-menu-item :index="sub.index"><template slot="title"><i class="el-icon-message"></i>{{sub.name}}</template></el-menu-item>
            </div>
          </div>
        </el-menu>
      </el-aside>
      <el-container>
        <!--  头部  !-->
        <el-header
          style="text-align: left; font-size: 24px; background-color:#606266;height:80px;width:100%"
        >
          <p
            style="position: absolute; top:-6px;left: 42px;font-size: 23px;font-family: 微软雅黑;font-weight: bold; color: #f5f7f9; top: -10px;"
          >智能巡检系统</p>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="selectAsid"
            background-color="#606266"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item v-for="menu in topmenus" :key="menu.index" :index="menu.index">{{menu.name}}</el-menu-item>
          </el-menu>
          <div style="position:fixed;right:25px;top:10px">
            <i class="el-icon-info"></i>&nbsp;&nbsp;
            <i class="el-icon-view"></i>&nbsp;&nbsp;
            <i class="el-icon-setting"></i>
          </div>
        </el-header>
        <!--  主要区域内容  !-->
        <el-main style="right:200px;position:relative;left:230px;padding-left: 0px;">
          <el-tabs
            v-model="editableTabsValue"
            type="card"
            @tab-click="view"
            editable
            @edit="handleTabsEdit"
          >
            <el-tab-pane
              :key="item.name"
              v-for="(item) in editableTabs"
              :label="item.title"
              :name="item.name"
            ></el-tab-pane>
          </el-tabs>
          <br>
          <div class="layout-content">
            <div class="layout-content-main" style="width:60vh;height:70vh">
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
      // 顶部导航的文字，可以用json传输数据，数组每个都是对象，分别为name和index两个属性
      topmenus:[
        {
          name:"基础数据",
          index: "basedate"
        },
        {
          name:"消息中心",
          index:"notic"
        }
      ],
      //激活顶部导航的变量
      activeIndex: "basedate",

      basedate:[
        {
          name:"楼宇管理",
          index:"/home/test1"
        },
        {
          name:"小区管理",
          index:"/home/test2"
        }
      ],
      notic:[
        {
          name:"通知管理",
          index:"/home/test1",
          children:[
            {
              name:"添加通知",
              index:"/add"
            },
            {
              name:"查看通知",
              index:"/info"
            }
          ]
        },
        {
          name:"消息管理",
          index:"/home/test2"
        }
      ],

      //标签页用到的变量
      editableTabsValue: "/home", //用于激活标签的
      editableTabs: [//所有的标签都存在这里
        {
          title: "首页",
          name: "/home",
        }
      ],
      tabIndex: 1 //计数标签页的
    };
  },
  methods: {
    handleSelect(key, keypath) {
      if(keypath.length>1){
        key =  keypath[0]+keypath[1];
      }else{
        key = keypath[0]
      }
      console.log(key);
      let check = true;
      for (let i = 0; i < this.editableTabs.length; i++) {
        if (this.editableTabs[i].title == key) {
          check = false;
        }
      }
      if (check) {
        this.handleTabsEdit(key, "add");
        this.$router.push(key);
      }
    },
    selectAsid(key){
      console.log(key)
      this.activeIndex = key
    },
    handleTabsEdit(targetName, action) {
      // 添加标签页的方法
      if (action === "add") {
        let newTabName = argetName;
        this.editableTabs.push({
          title: targetName,
          name: newTabName,
        });
        this.editableTabsValue = newTabName;
      }
      // 删除标签页的方法
      if (action === "remove") {
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
    view(tar) {
      this.$router.push(tar.name);
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

