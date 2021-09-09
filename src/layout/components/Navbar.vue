<template>
  <div :class="navShow ? 'navOn' : 'navOff'">
   <div class="navbar-container">
    <div class="navbar-log">
      匆匆那年
    </div>
    <div class="navbar-menu">
      <a>首页</a>
      <a>首页</a>
      <a>首页</a>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data() {
    return {
      top: 0,
      navShow: true
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      // top 的值为滑轮的顶端距离顶部的距离
      this.top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
    })
  },
  watch: {
    top(oldValue, newValue) {
      // 判断，如果滑轮距离顶部的距离 > 指定的距离，上部导航栏隐藏
      if (newValue > 80) {
        this.navShow = false
      } else {
          this.navShow = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// css样式
	.navOn {
		position: fixed;
    background-color: white;
    width: 100%;
    height: 70px;
		top: 0;
		left: 0;
		right: 0;
		transition: all 0.2s ease-in-out;
		transform: translateZ(0);
	}
	.navOff {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: all 0.2s ease-in-out;
		transform: translate3d(0,-100%,0);
	}
  .navbar-container {
  position: relative;
  width: 1040px;
  max-width: 100%;
  height: 70px;
  margin: 0 auto;
  display: block;
}
.navbar-log {
  font-size: 22px;
  line-height: 22px;
  position: absolute;
  top: 40%;
  left: 0;
  display: block;
  width: auto;
  max-width: 50%;
  height: 22px;
  margin-top: -10px;
  margin-left: 25px;
  text-decoration: none;
}
.navbar-menu {
  float: right;
  z-index: 10;
  width: auto;
  padding: 20px 15px;
}
.navbar-menu a {
  padding: 0 15px;
}
</style>