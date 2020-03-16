<!--
 * @Author: your name
 * @Date: 2020-03-05 10:47:36
 * @LastEditTime: 2020-03-16 11:52:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \lin-cms-vue\src\views\active\activeAdd.vue
 -->
<template>
  <div class="lin-container">
    <div class="lin-title">发布活动</div>
    <el-form :model="form" status-icon ref="form" label-width="110px" v-loading="loading" @submit.native.prevent>
      <el-form-item label="活动名称" prop="title">
        <el-input size="medium" v-model="form.name" placeholder="请填写活动名称"></el-input>
      </el-form-item>
      <el-form-item label="活动地址" prop="address">
        <el-input size="medium" v-model="form.address" placeholder="请填写活动地址"></el-input>
      </el-form-item>
      <!-- <el-form-item label="活动简介" prop="summary">
        <el-input size="medium" type="textarea" :rows="4" placeholder="请输入活动简介" v-model="form.testarea">
        </el-input>
      </el-form-item> -->
      <el-form-item label="活动时间" prop="summary">
        <!-- <el-input size="medium" placeholder="请输入活动时间" v-model="form.date"> </el-input> -->
        <el-date-picker
          v-model="form.date"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="活动规则" prop="summary">
        <el-input size="medium" placeholder="请输入活动规则" v-model="form.rule"> </el-input>
      </el-form-item>
      <el-form-item label="其他信息" prop="summary">
        <el-input size="medium" placeholder="请输入其他信息" v-model="form.message"> </el-input>
      </el-form-item>
      <el-form-item label="发起人" prop="summary">
        <el-input size="medium" placeholder="请输入发起人" v-model="form.initiator"> </el-input>
      </el-form-item>
      <el-form-item label="活动收费金额" prop="summary">
        <el-input size="medium" type="number" placeholder="请输入活动收费金额" v-model="form.money"> </el-input>
      </el-form-item>
      <!-- <el-form-item label="报名次数" prop="summary">
        <el-input size="medium" type="number" placeholder="请输入报名次数" v-model="form.num"> </el-input>
      </el-form-item> -->
      <el-form-item label="上传活动封面图片">
        <upload-imgs ref="uploadEle" :rules="rules" :multiple="true" />
        <div><el-button @click="getValue('uploadEle')">获取当前图像数据</el-button></div>
      </el-form-item>
      <el-form-item label="活动简介">
        <div class="lin-wrap"><tinymce @change="change" upload_url="http://dev.lin.colorful3.com/cms/file/" /></div>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="primary" @click="submitForm('form')">保 存</el-button>
        <el-button @click="resetForm('form')">重 置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/base/tinymce'
import book from '@/models/book'
import UploadImgs from '@/components/base/upload-imgs'
export default {
  data() {
    return {
      text: 'this is default content',
      form: {
        name: '',
        address: '',
        testarea: '',
        date: '',
        images: '',
        rule: '',
        message: '',
        initiator: '',
        money: '',
        num: '',
      },
      loading: false,
      rules: {
        minWidth: 100,
        minHeight: 100,
        maxSize: 1,
      },
    }
  },
  components: {
    Tinymce,
    UploadImgs,
  },
  methods: {
    change(val) {
      this.form.testarea = val
    },
    async submitForm() {
      var img = await this.$refs['uploadEle'].getValue()
      this.form.images = img[0].src
      const res = await book.addmanage(this.form)
      if (res.error_code === 0) {
        this.$message.success(`${res.msg}`)
      }
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async getValue(name) {
      var img = await this.$refs[name].getValue()
      // eslint-disable-next-line
      // alert('已获取数据, 打印在控制台中')
    },
  },
}
</script>

<style scoped lang="scss"></style>
