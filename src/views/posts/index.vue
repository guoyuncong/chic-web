<template>
  <div class="main-container">
    <div class="post-container">    
      
    </div>
    <!-- 分页 -->
    <pagination v-show="total > 0"
                :total="total"
                :current.sync="pageQuery.current"
                :size.sync="pageQuery.size"
                :keyword.sync="pageQuery.keyword"
                @pagination="fetchData" />
  </div>
</template>

<script>
import { pagePost } from '@/api/post'
import Pagination from '@/components/Pagination'

export default {
  name: 'Posts',
  components: {
    Pagination
  },
  data() {
    return {
      // 文章列表
      tableDate: [],
      // 文章总数
      total: 0,
      // 搜索/分页关键字
      pageQuery: {
        tagIds: '',
        categoryIds: '',
        keyword: '',
        current: 1,
        size: 10
      },
    }
  },
  // 获取请求中的分类ID
  created() {
    this.pageQuery.categoryIds = this.$route.query.categoryId
    console.log(this.pageQuery.categoryIds)
    this.fetchData()
  },
  methods: {
    // 获取文章列表
    fetchData() {
      pagePost({
        tagIds: this.pageQuery.tagIds,
        categoryIds: this.pageQuery.categoryIds,
        keyword: this.pageQuery.keyword,
        current: this.pageQuery.current,
        size: this.pageQuery.size
      }).then(response => {
        this.tableData = response.data.records
        this.total = response.data.total
        console.log(this.total)
      })
    }
  }
}
</script>

<style scoped>
.main-container {
  background-color: #f7f7f7;
  width: 100%;
  padding-top: 60px;
}
.post-container {
  background-color: yellow;
  min-width: 1000px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
}
</style>