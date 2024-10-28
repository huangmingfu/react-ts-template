<template>
  <div :class="prefixCls">
    <h1 :class="`${prefixCls}__title`">
      Home
      <span :class="`${prefixCls}__title--span`">Home2</span>
      <a :class="createClass('__title--a')">Home3</a>
    </h1>
  </div>
</template>

<script setup lang="ts">
import { useDesign } from '@/hooks'
const { prefixCls, createClass } = useDesign('pg-home')
</script>

<style scoped lang="scss">
$prefix-cls: '#{$namespace}-pg-home';

.#{ $prefix-cls } {
  &__title {
    font-size: 50px;
    font-weight: bold;
    text-align: center;

    &--span {
      font-size: 16px;
      color: $color-test;
    }

    &--a {
      font-size: 16px;
      color: skyblue;
    }
  }
}
</style>
