<template>
  <div>
    <div v-if="!showEdit" class="container">
      <div class="title">粉丝列表</div>
      <lin-table
        :tableColumn="tableColumn"
        :tableData="tableData"
        :operate="operate"
        @handleEdit="handleEdit"
        @handleDelete="handleDelete"
        @row-click="rowClick"
        v-loading="loading"
      ></lin-table>
    </div>
    <!-- 编辑页面 -->
    <book-edit v-else @editClose="editClose" :editBookID="editBookID"></book-edit>
  </div>
</template>

<script>
import book from '@/models/book'
import LinTable from '@/components/base/table/lin-table'
import BookEdit from './BookEdit'

export default {
  components: {
    LinTable,
    BookEdit,
  },
  data() {
    return {
      tableColumn: [
        { prop: 'title', label: '用户名' },
        { prop: 'author', label: '性别' },
        { prop: 'author', label: '年龄' },
        { prop: 'author', label: '余额' },
      ],
      tableData: [],
      operate: [],
      showEdit: false,
      editBookID: 1,
    }
  },
  async created() {
    this.loading = true
    await this.getBooks()
    this.operate = [
      { name: '编辑', func: 'handleEdit', type: 'primary' },
      {
        name: '删除',
        func: 'handleDelete',
        type: 'danger',
        auth: '删除用户',
      },
    ]
    this.loading = false
  },
  methods: {
    async getBooks() {
      try {
        const books = await book.getBooks()
        this.tableData = books
      } catch (error) {
        if (error.error_code === 10020) {
          this.tableData = []
        }
      }
    },
    handleEdit(val) {
      console.log('val', val)
      this.showEdit = true
      this.editBookID = val.row.id
    },
    handleDelete(val) {
      this.$confirm('此操作将永久删除该用戶, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(async () => {
        const res = await book.delectBook(val.row.id)
        if (res.error_code === 0) {
          this.getBooks()
          this.$message({
            type: 'success',
            message: `${res.msg}`,
          })
        }
      })
    },
    rowClick() {},
    editClose() {
      this.showEdit = false
      this.getBooks()
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 30px;
  .title {
    height: 59px;
    line-height: 59px;
    color: $parent-title-color;
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #dae1ec;
  }

  .wrap {
    padding: 20px;
  }

  .submit {
    float: left;
  }
}
</style>
