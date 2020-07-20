<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/main' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>挂号收费</el-breadcrumb-item>
      <el-breadcrumb-item>门诊工作量统计</el-breadcrumb-item>
    </el-breadcrumb>
    <br />
    <br />
    <div class="head">
      <span>
        开始时间：
        <el-date-picker
          v-model="start"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="开始时间"
          :clearable="false"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </span>

      <span>
        结束时间：
        <el-date-picker
          v-model="end"
          value-format="yyyy-MM-dd"
          type="date"
          placeholder="结束时间"
          :clearable="false"
          :picker-options="pickerOptions"
        ></el-date-picker>
      </span>
      <el-button style="background-image:linear-gradient(134deg, #00e2ff 0%, #bb00ff 100%); color: white">查询</el-button>
    </div>
    <br />
    <br />
    <el-table :data="tableData" style="width:100%">
      <el-table-column prop="name" label="医生姓名"></el-table-column>
      <el-table-column prop="pnum" label="看诊人次"></el-table-column>
      <el-table-column prop="num" label="发票数量"></el-table-column>
      <el-table-column prop="price" label="西药费"></el-table-column>
      <el-table-column prop="price1" label="挂号费"></el-table-column>
      <el-table-column prop="price2" label="检验费"></el-table-column>
    </el-table>
    <br />
    <br />
    <el-button class="button" style="background-image:linear-gradient(134deg, #00e2ff 0%, #bb00ff 100%); color: white" @click="out">导出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: "",
      end: "",
      tableData: [
        {
          name: "李源源",
          pnum: 20,
          num: 30,
          price: 53,
          price1: 13,
          price2: 143
        },
        {
          name: "林飞飞",
          pnum: 25,
          num: 38,
          price: 33,
          price1: 33,
          price2: 53
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  methods: {
    out() {
      this.$message.success("导出成功");
    }
  }
};
</script>

<style>
.head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}
.button {
  width: 200px;
  position: absolute;
  right: 100px;
}
</style>