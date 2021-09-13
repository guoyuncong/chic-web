<template>
  <div class="post-container">
    <div class="post-header">
      <h1 class="post-title">
        {{ postDetail.title }}
      </h1>
      <div class="post-data">
        {{ postDetail.title }}
      </div>
    </div>
    <div class="post-content" v-html="postDetail.formatContent">
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
