<template>
  <div class="group-main">
    <div v-for="(item, index) in tableData"
         :key="item.categoryId"
         :style="randomBg(index)">
      <div class="group-container">
        <div class="group-title">
          <!-- <img src="https://www.topjava.cn/images/website/group/group-list-jzbx.png"> -->
          {{ item.categoryName }}
        </div>
        <div class="group-content">
          <el-row :gutter="20">
            <el-col :span="6" v-for="child in item.child" :key="child.categoryId">
              <div class="card" @click="queryPosts(child.categoryId)">
                <el-card :body-style="{ padding: '0px' }">
                  <img :src="child.thumbnail" class="image">
                  <div style="padding: 14px;">
                    <span>{{ child.categoryName }}</span>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { treeCategory } from '@/api/category'

export default {
  name: 'Category',
  data() {
    return {
      // 树形结构数据
      tableData: null,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 所有分类
    fetchData() {
      treeCategory().then(response => {
        this.tableData = response.data
        console.log(this.tableData)
      })
    },
    // 根据索引的数值，设置 div 的背景色
    randomBg(index) {
      let colorArray = ['#f6f7fa', '#ffffff'];
      let bgColor = index % 2 == 0 ? colorArray[0] : colorArray[1];
      return {
        background: bgColor
      };
    },
    // 根据分类ID获取分类下所有的文章
    queryPosts(categoryId) {
      this.$router.push({
        path: '/post/page',
        query: { categoryId: categoryId }
      })
    }
  }
}
</script>

<style scoped>
.group-main {
  background-color: #f7f7f7;
  width: 100%;
  padding-top: 60px;
}
.group-container {
  min-width: 1200px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
}
.group-title img {
    width: 180px;
    height: 36px;
}
.card {
  padding: 10px;
}
.image {
  height: 150px;
  display: block;
  object-fit: fill;
}
</style>