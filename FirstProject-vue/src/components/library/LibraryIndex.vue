<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <side-menu @indexSelect="listByCategory" ref="sideMenu"></side-menu>
      <!--<SideMenu></SideMenu>-->
    </el-aside>
    <el-main>
      <books class="books-area" ref="booksArea"></books>
    </el-main>
  </el-container>
</template>

<script>
  import SideMenu from './SideMenu'
  import Books from './Books'
  export default {
    name: 'AppLibrary',
    components: {SideMenu, Books},
    methods: {
      listByCategory () {
        let _this = this
        let cid = this.$refs.sideMenu.cid
        let url = 'categories/' + cid + '/books'
        this.$axios.get(url).then(resp => {
          if (resp && resp.status === 200) {
            _this.$refs.booksArea.books = resp.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  .books-area {
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
