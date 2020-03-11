if (!window["SITE_CONFIG"]) window["SITE_CONFIG"] = {};
window.SITE_CONFIG["baseUrl"] = "http://dev.owler.cn:11803/dev/waterServer/";
window.SITE_CONFIG["manager"] = "http://dev.owler.cn:11803/dev/waterAdmin/";

//街道地图
window.SITE_CONFIG.map_vec_url =
  "http://t" +
  Math.round(Math.random() * 7) +
  ".tianditu.gov.cn/vec_c/wmts?tk=130848df3ff662dcd33b45f5dcfbad21&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles" +
  "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}";
//街道注记
window.SITE_CONFIG.map_cva_url =
  "http://t" +
  Math.round(Math.random() * 7) +
  ".tianditu.gov.cn/cva_c/wmts?tk=130848df3ff662dcd33b45f5dcfbad21&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles" +
  "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}";
//影像地图
SITE_CONFIG.map_img_url =
  "http://t" +
  Math.round(Math.random() * 7) +
  ".tianditu.gov.cn/img_c/wmts?tk=130848df3ff662dcd33b45f5dcfbad21&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles" +
  "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}";
//影像注记
SITE_CONFIG.map_cia_url =
  "http://t" +
  Math.round(Math.random() * 7) +
  ".tianditu.gov.cn/cia_c/wmts?tk=130848df3ff662dcd33b45f5dcfbad21&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles" +
  "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}";
//地形地图
window.SITE_CONFIG.map_ter_url =
  "http://t" +
  Math.round(Math.random() * 7) +
  ".tianditu.gov.cn/ter_c/wmts?tk=130848df3ff662dcd33b45f5dcfbad21&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles" +
  "&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}";

if (!window["baseMap"])
  window["baseMap"] = {
    center: [119, 25.8],
    zoom: 7
  };


