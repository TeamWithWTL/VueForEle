<template>
  <div style="border-top-left-radius: 10px;border-top-right-radius: 10px;overflow: hidden;">
    <el-container style="height:100vh;">
      <!--  侧边  !-->
      <el-aside class="el-aside" width="24vh" style="background-color: white;width:200px">
        <!-- 设置点击事件 -->
        <el-menu @select="handleSelect">
          <!-- 遍历侧栏数据 -->
          <div :key="sub.id" v-for="sub in notic">
            <!-- 存在下级 -->
            <div v-if="sub.children">
              <el-submenu :index="sub.index"><template slot="title"><i class="el-icon-message"></i>{{sub.label}}</template>
                <el-menu-item :key="item.id" v-for="item in sub.children" :index="item.index">{{item.label}}</el-menu-item>
              </el-submenu>
            </div>
            <!-- 不存在下级 -->
            <div v-else>
              <el-menu-item :index="sub.index"><template slot="title"><i class="el-icon-message"></i>{{sub.label}}</template></el-menu-item>
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
          <!-- 顶部导航栏的那些东西 -->
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="selectAsid"
            background-color="#606266"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
          <!-- 顶部导航栏的遍历 -->
            <el-menu-item v-for="menu in topmenus" :key="menu.index" :index="menu.index">{{menu.label}}</el-menu-item>
          </el-menu>
          <div style="position:fixed;right:25px;top:10px">
            <i class="el-icon-info"></i>&nbsp;&nbsp;
            <i class="el-icon-view"></i>&nbsp;&nbsp;
            <i class="el-icon-setting"></i>
          </div>
        </el-header>
        <!--  主要区域内容  !-->
        <el-main style="right:200px;position:relative;left:230px;padding-left: 0px;">
          <!-- 标签页 -->
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
              :closable="item.close"
            ></el-tab-pane>
          </el-tabs>
          <!--路由嵌套的地方，也就是这里是所有的页面显示的地方  -->
          <div class="layout-content" style="background-color:#fff">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import mock from './mocks/mock.js'
export default {
  data() {
    return {
      // 顶部导航的文字，可以用json传输数据，数组每个都是对象，分别为name和index两个属性
      topmenus:[],
      //激活顶部导航的变量
      activeIndex: "ledge",
      //侧导航栏
      notic:[],
      //标签页用到的变量
      editableTabsValue: "/home", //用于激活标签的
      editableTabs: [//所有的标签都存在这里
        {
          title: "首页",
          label: "/home",
          close:false
        }
      ],
      tabIndex: 1 //计数标签页的
    };
  },
  created:function(){
    this.createnav(),
    this.getData()
  },
  methods: {
    getData(){
      /*
       *
       *  注：
       *    每新建页面发送ajax请求必须获取localStorage中的数据并发送给服务端，
       *    服务端判数据是否为null，如果为null返回false跳转到登录页，如果不为null则跳出"欢迎访问你爸爸的网站"
       *    var token = localStorage.getItem('token');
       *    tokenStr:this.token
       *
       */
      //localStorage中获取缓存的token值
      let token = localStorage.getItem('token');
      console.log('token:' + token)
      this.$ajax({
        method:'post', //请求方式
        url:'/index/home', // 请求地址
        xhrFields: {
          withCredentials: true
        },
        data:{ //可以传参数
          tokenStr:token
        }
      })
      .then((response) => { //response里面返回了请求成功后的数据
        console.log(response.data.data.check)
        if(response.data.data.check){//服务端返回的boolean值
          console.log('欢迎访问你爸爸的网站')
        }else{//如果为false
          this.$router.push('/');
        }
      })
      .catch(function(error){// error里面返回了请求失败后的错误信息
        console.log(error)
      })
    },
    // 左侧导航栏选中后触发 keypath 包含上级和本级的地址
    handleSelect(key, keypath) {
      //这个参数是用来传标签名字名字
      let titlesub = "" ;
      //遍历左侧的数据找到相对应的名字进行赋值
      this.notic.forEach(names=>{
        //判断是否有下级
        if(names.children != undefined || names.children != null){
          //有下级就用下级的名称
          (names.children).forEach(childrenname=>{
            if(childrenname.index == key){
              titlesub = childrenname.name
            }
          })
        }else{
          //没有下级就用当前名称
          if(names.index == key){
            titlesub = names.name
          }
        }
      })
      //组合地址
      if(keypath.length>1){
        key =  keypath[0]+keypath[1];
      }else{
        key = keypath[0]
      }
      //判断是否已经产生了标签页，没有的话就产生一个有的话就算了
      let check = true;
      for (let i = 0; i < this.editableTabs.length; i++) {
        if (this.editableTabs[i].title == key) {
          check = false;
        }
      }
      if (check) {
        this.handleTabsEdit({'key':key,'name':titlesub}, "add");
        this.$router.push(key);
      }
    },
    //顶部导航栏选择后触发
    selectAsid(key){
      //激活点击位置
      this.activeIndex = key
      //根据点击的位置获取侧导航栏的数据
      if('ledger' === key){
        this.notic = mock.ledge
      }
      if('production' === key){
        this.notic = mock.production
      }
      if('sysytem' === key){
        this.notic = mock.sysytem
      }
      if('analysis' === key){
        this.notic = mock.analysis
      }
      if('together' === key){
        this.notic = mock.together
      }
    },
    handleTabsEdit(targetName, action) {
      // 添加标签页的方法
      if (action === "add") {
        let newTabName = targetName.key;
        this.editableTabs.push({
          title: targetName.name,
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
    //点击相应的标签页跳转相应的地方
    view(tar) {
      this.$router.push(tar.name);
    },
    //刚开始的时候给底部导航和侧栏导航进行初始化用的
    createnav(){
      this.topmenus = mock.topnav
      this.notic = mock.ledge
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

