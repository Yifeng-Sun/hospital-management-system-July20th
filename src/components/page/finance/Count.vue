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
      <el-button style="background-image:linear-gradient(134deg, #00e2ff 0%, #bb00ff 100%); color: white" @click="out">导出</el-button>
    </div>
    <br />
    <br />
    <el-table :data="tableData" style="width:100%">
      <el-table-column prop="part" label="部门"></el-table-column>
      <el-table-column prop="pnum" label="看诊人次"></el-table-column>
      <el-table-column prop="num" label="发票数量"></el-table-column>
      <el-table-column prop="price" label="西药费"></el-table-column>
      <el-table-column prop="price1" label="中药费"></el-table-column>
      <el-table-column prop="price2" label="挂号费"></el-table-column>
    </el-table>
    <br />
    <br />
    <img :src="img1" style="width:50%" />
    <img :src="img2" style="width:48%" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: require("../../../../static/icons8-puzzle-64.png"),
      img2: require("../../../../static/icons8-puzzle-64.png"),
      start: "",
      end: "",
      tableData: [
        {
          part: "内科",
          pnum: 20,
          num: 123,
          price: 4433,
          price1: 4400,
          price2: 330
        },
        {
          part: "外科",
          pnum: 433,
          num: 344,
          price: 11223,
          price1: 223,
          price2: 4220
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
</style>