<!--
 * @Author: your name
 * @Date: 2020-03-05 10:47:36
 * @LastEditTime: 2020-03-05 11:04:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \lin-cms-vue\src\views\active\activeAdd.vue
 -->
<template>
  <div class="lin-container">
    <div class="lin-title">发布活动</div>
    <div class="lin-wrap"><tinymce @change="change" upload_url="http://dev.lin.colorful3.com/cms/file/" /></div>
  </div>
</template>

<script>
import Tinymce from '@/components/base/tinymce'

export default {
  data() {
    return {
      text: 'this is default content',
    }
  },
  components: {
    Tinymce,
  },
  methods: {
    change(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped lang="scss"></style>
