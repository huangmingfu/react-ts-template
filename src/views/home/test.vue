<template>
  <div>
    <!-- 使用 v-if 控制元素的条件渲染 -->
    <p v-if="showMessage === 1">欢迎来到Vue 1!</p>
    <p v-else-if="showMessage === 2">欢迎来到Vue 2!</p>
    <p v-else>欢迎来到Vue 3!</p>

    <!-- 使用 v-for 渲染列表 -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>

    <!-- 使用 v-on 绑定点击事件 -->
    <button @click="handleClick">点击我showMessage++</button>

    <!-- 使用 v-html 插入HTML字符串 -->
    <div v-html="htmlContent"></div>

    <!-- 使用 v-model 双向绑定输入框的值 -->
    <input type="text" v-model="inputValue" placeholder="请输入文字" />
    <input type="checkbox" v-model="checkboxValue" true-value="yes" false-value="no" />

    <!-- 使用 v-once 只渲染一次 -->
    <p v-once>{{ initialText }}</p>

    <!-- 使用 v-bind -->
    <div v-bind="obj"></div>
  </div>
</template>

<script setup lang="ts">
// 查看vue编译结果
// https://play.vuejs.org/#eNp9kU1LAzEQhv9KnMtWqF1ET2VbUClYDyq14CWXsp3dpmaTkI9aWPa/O8naD0F6y8z7zMz7khYejBntAsIYCldaYTxz6IOZciUao61nLbNYDYPDJTZGrjwusGIdq6xuWEaTGVdclVo5zxpXs0nEB9kzSqnZp7ZyfZVdnxAS58T8XTfIhDKRKvLeA12nwv8SVDFWbG6nbZtOdF2RU5W6NBg82900eo1ywoF0DvEKvUnjkBNX5GerYAjekZlK1KOt04qSt3EVh1I3Rki0b8YLMsthzJIStRXF+X5JPW8DDg/9coPl1z/9rdvHHod3iw7tDjkcNb+yNfpenn284p7eR5GCBEn0BXGBTssQPfbYY1Brsn3GJbfz9H9C1Us323tU7hAqGo1kl3gO9IlPF6Kf7N6N7tMcVx10P3Z3vi4=
import { ref } from 'vue'

// 数据
const showMessage = ref(1)
const items = ['Item 1', 'Item 2', 'Item 3']
const htmlContent = ref('<strong>这是HTML内容</strong>')
const inputValue = ref('')
const checkboxValue = ref('')
const initialText = '初始文本'
const obj = {
  a: '1',
  b: '12',
  c: '123'
}

// 方法
const handleClick = () => {
  showMessage.value++
}
const { test2 = 'hhhhh' } = defineProps<{ test2: string; test3?: number }>()
console.log(`test2 -->`, test2)

defineExpose({
  showMessage
})
// @ts-ignore
const mod = defineModel('value', { type: String, default: 'hello' })
// @ts-ignore
const slots = defineSlots()
defineOptions({
  name: 'Test'
})
// @ts-ignore
const emits = defineEmits<{
  (event: 'update:value', value: number): void
  (event: 'ok', type?: 'add'): void
}>()
</script>
