<template>
  <div class="home">
    <HelloWorld msg="APYC" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  mounted() {
    var subdir = window.location.host.split(".")[0];
    var domain = "localhost";
    var pageToLoad = "Home";
    console.log(subdir + domain + pageToLoad);
  },
};
</script>
