<template>
<!-- :style="{height:navHeight+'px'}" -->
  <div id="nav" class="nav" >
    <div class="clearfix">
      <div class="logo">
        <img :src="logo" alt="商标正在加载中..." >
        <span>水利一张图应用服务平台</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo:require("@/assets/png/logo.png"),
      navs:[
        {name:"服务管理",src:require("@/assets/png/fwgl.png"),url:window.SITE_CONFIG["manager"]},
        {name:"三维展示",src:require("@/assets/png/sanwei.png")},
        {name:"二维展示",src:require("@/assets/png/erwei.png")},
      ],
      selectNavIndex:-1
    };
  },
  props: ["navHeight"],
  mounted() {
    // alert(this.navHeight);
  }
};
</script>

<style scoped>
.nav{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;  
  height: 100px; 
  background-color: darkturquoise;
  overflow:hidden;
}
.logo{
  background-color: rgb(228, 206, 210);
  position: absolute;
  top:0;
  left: 0;
  padding: 0;  
  margin: 0;
  width: 25%;
  height: 100%;  
  float: left;
}
img{    
  position: absolute;
  top:0;
  left: 0;
  padding: 10px;
  margin: 0;
  width: 15%;
  height:60px;
  float: left;
  background-color: darkblue;
}
span{
  position: absolute;
  top:0;
  left:80px;
  width: 85%;
  height: 60px;  
  padding: 10px 0;
  margin:0;
  float: right;
  font-size: 1.6em;
 
  background-color: lawngreen;

}
</style>