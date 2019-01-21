<template>
  <div>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-plus"
    >添加</el-button>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-edit"
    >修改</el-button>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-delete"
    >删除</el-button>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-view"
    >查看</el-button>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-refresh"
    >刷新</el-button>
    <el-button
      size="small"
      type="primary"
      icon="el-icon-search"
    >搜索</el-button>
    <div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column
            label="日期"
            sortable
          >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            show-overflow-tooltip
            sortable
          >
          </el-table-column>
        </el-table>
      </div>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄6"
        },
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄5"
        },
        {
          date: "2016-05-04",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518 弄4"
        },
        {
          date: "2016-05-01",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1518 弄3"
        },
        {
          date: "2016-05-08",
          name: "王小虎33",
          address: "上海市普陀区金沙江路 1518 弄2"
        },
        {
          date: "2016-05-06",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1518 弄1"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        }
      ],
      multipleSelection: [],
      currentPage4: 4
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        console.log(rows);
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

