<template>
  <div class="post-detail-container">
    <div class="post-detail-header">
      <h1 class="post-detail-title">
        {{ postDetail.title }}
      </h1>
      <div class="post-detail-data">
        Published on {{ postDetail.publishTime }}
      </div>
      <p class="post-detail-tags"></p>
    </div>
    <div class="post-detail-content" v-html="postDetail.formatContent">
    </div>
  </div>
</template>

<script>
import { detailPost } from '@/api/post'

export default {
  name: 'Post-Detail',
  data() {
    return {
      // 文章ID
      postId: '',
      // 文章内容
      postDetail: null
    }
  },
  // 获取请求参数中的分类ID，并执行方法获取文章列表
  created() {
    this.postId = this.$route.query.postId
    this.fetchData()
  },
  methods: {
    // 获取文章列表
    fetchData() {
      detailPost({
        postId: this.postId
      }).then(response => {
        this.postDetail = response.data
      })
    }
  }
}
</script>
