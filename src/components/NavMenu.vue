<template>
      <el-menu  
        mode="vertical"
        :show-timeout="200"
        :default-active="highLightPath"
        unique-opened
        router
        background-color="#181c61"
        text-color="#fff" 
        active-text-color="#ffd04b">
        <!-- 没有子菜单 -->
         <el-menu-item 
           :index="item.path" 
           v-for="item in noChildrenMenu" 
           :key="item.path"
           @click="selectMenu(item)"
           >
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.name}}</span>
            </template>
         </el-menu-item>
        <!-- 包含子菜单 -->
        <el-submenu v-for="(item,index) in hasChildrenMenu" :key="index" :index="item.name">
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item-group class="over-hide"  >
            <el-menu-item v-for="(sub,subindex) in item.children" :key="subindex" :index="sub.path" @click="selectMenu(sub)">{{sub.name}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</template>

<script>
  import menus from '@/config/menu-config';
  import router from '@/router';
  export default {
    name:'navMenu',
    data(){
        return {
            menus,
            highLightPath:'',
        }
    }, 
    computed:{
      noChildrenMenu(){
        return this.menus.filter(item=>!item.children)
      },
       hasChildrenMenu(){
        return this.menus.filter(item=>item.children)
      }
    },
    watch:{
      $route(val,oldVal){
          this.routeDeepSelf(val.path,this.menus);
      }
    },
    created() {
      console.log(this.$route)
      this.routeDeepSelf(this.$route.path,this.menus);
    },
    methods: {
      routeDeepSelf(path,arr){
          if(!path) return;
          for(let i = 0;i<arr.length;i++){
              if(arr[i].children){
                  for(let k = 0;k < arr[i].children.length; k++){
                      if(path.includes(arr[i].children[k].path)){
                           return this.highLightPath = arr[i].children[k].path;
                      }else{
                          this.routeDeepSelf(path,arr[i].children);
                      }
                  }
              }else{
                 if(path.includes(arr[i].path)){
                      return this.highLightPath = arr[i].path;
                  }
              }
          }
      },
      selectMenu(item){
        console.log(item);
        const {name} = item;
        console.log(router.options.routes)
        this.$router.push({
           name
        })
      },
    }
  }
</script>
<style scoped>
  .over-hide{
    overflow: hidden;
  }
  .el-submenu__title i{
    color: #fff;
  }
</style>