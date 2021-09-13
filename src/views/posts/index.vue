<template>
  <div>
    <div class="entries-container">
      <div class="post-entry"
           v-for="item in tableDate"
           :key="item.postId" @click="queryPostDetail(item.postId)">
        <div class="post-desc">
          <div class="post-title">
            {{ item.title }}
          </div>
          <div class="post-content">
            <p> {{ item.digest }} </p>
          </div>
          <div class="post-meta">
            {{ item.publishTime}}
          </div>
        </div>
      </div>
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
  name: 'Post-Page',
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
        this.tableDate = response.data.records
        this.total = response.data.total
      })
    },
    // 根据文章ID获取文章详情
    queryPostDetail(postId) {
      this.$router.push({
        path: '/post/detail',
        query: { postId: postId }
      })
    }
  }
}
</script>

<style scoped>
.entries-container {
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  padding-top: 50px;
}
.post-entry {
  min-width: 800px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding-top: 20px;
  border: 1px solid #ddd;
  border: 1px solid #ddd;
  box-shadow: 0 0 2px #ddd;
  box-shadow: 0 0 2px #ddd;
  background: white;
  color: #444;
  padding: 2%;
  position: relative;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>