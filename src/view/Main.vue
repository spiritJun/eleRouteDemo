<template>
    <el-container>
      <el-header class="header">
         <Header />
      </el-header>
      <el-container>
        <el-aside style="width:200px">
           <navMenu />
        </el-aside>
        <el-main>
           <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
import navMenu from '@/components/NavMenu';
import Header from '@/components/Header';
export default {
  name: 'App',
  components:{navMenu,Header}
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%; 
}
.header{
  background-color: #409EFF;
  color: #fff;
  line-height: 60px;
}
.el-menu{
  height:100%;
}
.el-container{
  height: 100%;
}
</style>
