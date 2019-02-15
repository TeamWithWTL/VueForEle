<template>
  <div>
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>
<script>
import mock from '../../mocks/mock.js'
export default {
    data() {
      return {
        data: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    created:function(){
      this.getData();
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      getData(){
        this.data = mock.tree;
      }
    }
}
</script>

