<template>
  <div>
    <div class="post-container">
      <div v-for="item in tableData"
           :key="item.postId"
           class="post-item">
        <div class="post-images">
          <img class="post-thumbnail"
               :src="item.thumbnail" />
        </div>
        <div class="post-data" @click="queryPostDetail(item.postId)">
          <div class="post-title">
            {{ item.title }}
          </div>
          <div class="post-digest">
            {{ item.digest }}
          </div>
          <div class="post-time">
            {{ item.publishTime }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- 分页 -->
      <pagination v-show="total > 0"
                  :total="total"
                  :current.sync="pageQuery.current"
                  :size.sync="pageQuery.size"
                  :keyword.sync="pageQuery.keyword"
                  @pagination="fetchData" />
    </div>
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
      tableData: [],
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
  // 获取请求参数中的分类ID，并执行方法获取文章列表
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
        this.tableData = response.data.records
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
.post-container {
  max-width: 1000px;
  max-height: 600px;
  padding: 80px 25px 20px;
  margin: 0 auto;
}

.post-item {
  display: flex;
  flex: 1;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 2, 4, 0.06),0 0 1px rgba(0, 2, 4, 0.11);
  padding-top: 0px;
  margin: 40px;
}

.post-thumbnail {
  width: 400px;
  height: 100%;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
  object-fit: cover;
}

.post-data {
  height: 100%;
  flex-direction: column;
  padding: 1.75rem;
}

.post-title {
  font-size: 1.375rem;
  font-weight: 400;
  vertical-align: middle;
  color: #343a40;
}

.post-digest {
  width: 100%;
  margin-top: 20px;
  line-height: 1.5;
  font-size: 0.8em;
  color: #949b9e;
}

.post-time {
  margin-top: 1.125rem;
  font-size: 0.825rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
</style>