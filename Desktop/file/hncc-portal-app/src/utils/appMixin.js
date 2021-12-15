export default {
  beforeRouteLeave(to, from, next) {
    if (this.compId) {
      this.compEle = document.getElementById(this.compId);
      if (this.compEle) {
        this.scrollTop = this.compEle.scrollTop;
      }
    }
    next()
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (vm.compEle) {
        setTimeout(() => {
          vm.compEle.scrollTop = vm.scrollTop;
        },100)
      }
    })
  },
}