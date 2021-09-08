<template>
  <div :class="navShow ? 'navOn' : 'navOff'">
    navbar
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
</style>