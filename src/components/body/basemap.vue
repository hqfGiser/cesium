<template >
  <div :id="viewID" class="basemap" ></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    //地图viewID
    viewID: String,
    //地图高度
    viewHeight: Number,
    //地图宽度
    viewWidth: Number,
    //地图实例加载后回调函数
    afterload: Function,
    options: Object
  },
  mounted() {
    //事件绑定
    this.getMap();
  },
  computed: {
    //地图样式自适应
    // viewStyle: {
    //   get: function() {
    //     return { height: this.viewHeight + "px", width: this.viewWidth + "px" };
    //   }
    // }
  },
  methods: {
    getMap() {
      var m = L.map(this.viewID, {
        crs: L.CRS.EPSG4326,
        center: [baseMap.center[1], baseMap.center[0]],
        zoom: baseMap.zoom,
        zoomControl: false,
        attributionControl: false
      });
      // alert(baseMap.center[1]);// window.baseMap.center[1]
      var yx = L.tileLayer(SITE_CONFIG.map_img_url, { zoomOffset: 1 });
      yx.addTo(m);
      //地名标注
      var bz_yx = L.tileLayer(SITE_CONFIG.map_cia_url, {
        zoomOffset: 1
      });
      bz_yx.addTo(m);
      //为了解决图层切换时，超图发布的图层在底图的最下面的问题。设置底图的层级
      // yx.setZIndex(0);
      // bz_yx.setZIndex(1);
      // window["titleLayer_" + this.viewID] = {
      //   tileLayer: yx,
      //   bz_tileLayer: bz_yx
      // };
      // window[this.viewID] = map;
    }
  },
  components: {}
};
</script>

<style scoped>
.basemap {
  background-color: rgb(97, 97, 172);
  position: relative;
  top: 0;
  left: 0;
}
</style>>

