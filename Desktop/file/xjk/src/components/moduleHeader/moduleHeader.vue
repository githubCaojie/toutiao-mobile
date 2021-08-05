<template>
  <div class="name">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <slot name="name"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.name {
  height: 48px;
  display: flex;
  align-items: center;
  font-size: var(--the-title-font-size);
  color: #415261;
  background: linear-gradient(90deg, rgba(214, 232, 243) 0%, rgba(247, 250, 252) 100%);
  .icon {
    margin: 0 8px;
  }
}
</style>