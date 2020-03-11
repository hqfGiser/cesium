<template>
  <div id="home">
    <Head ></Head>
    <Basemap :viewID="viewID" ></Basemap>
  </div>
</template>

<script>
import Head from "../components/head/head.vue";
import Basemap from "../components/body/basemap.vue";
export default {
  name: "Home",
  data() {
    return {
      viewID: "basemap",
      options: {}
    };
  },
  components: {
    Head,
    Basemap
  },
  methods: {

  },
  mounted() {}
};
</script>

<style>
html,
body,
#home {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
