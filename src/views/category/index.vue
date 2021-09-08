<template>
  <div class="group-main">
    <div class="group-container">
      <div v-for="item in 10">
        <div class="group-title">
          123
        </div>
        <div class="group-content">
          <el-row :gutter="20">
            <el-col :span="6"
                    v-for="(o, index) in 12"
                    :key="o">
              <div class="card">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="https://www.cmsblogs.com/images/website/group/group-rediszhuanti.png"
                       class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time"></time>
                      <el-button type="text"
                                 class="button">操作按钮</el-button>
                    </div>
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

export default {
  name: 'Layout',

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
.group-title {
  display: flex;
  padding: 10px;
  line-height: 1.5em;
        font-family: "Times New Roman", Times, serif;
font-size: 14px;
        color: #000000;
}
.card {
  padding: 10px;
}
.image {
  width: 280px;
  height: 150px;
  display: block;
}
</style>