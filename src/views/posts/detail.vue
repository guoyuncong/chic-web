<template>
  <div class="post-detail-container">
    <div class="post-detail-header">
      <h1 class="post-detail-title">
        {{ postDetail.title }}
      </h1>
      <div class="post-detail-data">
        Published on {{ postDetail.publishTime }}
      </div>
      <p class="post-detail-tags">
        <el-button v-for="item in postDetail.tags" :key="item.tagId" class="tagButton" size="mini" :type="btnType()" round>
            {{ item.tagName }}
        </el-button>
      </p>
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
      // 文章别名，客户端访问一律用别名
      abbr: '',
      // 文章内容
      postDetail: ''
    }
  },
  // 获取请求参数中的分类ID，并执行方法获取文章列表
  created() {
    this.abbr = this.$route.query.abbr
    this.fetchData()
  },
  methods: {
    // 按钮随机类型，类型不同颜色不同
    btnType() {
      return ['primary', 'success', 'warning', 'danger', 'info'][Math.floor((Math.random() * 4))]
    },
    // 获取文章列表
    fetchData() {
      detailPost({
        abbr: this.abbr
      }).then(response => {
        this.postDetail = response.data
      })
    }
  }
}
</script>

<style scoped >
.tagButton {
  margin-top:10px;
}
</style>