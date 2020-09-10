<template>
  <!-- Wrapper for whole app -->
  <div id="app" class="flex flex-col sm:flex-row h-screen overflow-hidden"> 
    <TheSideBar />
    <router-view class="flex-auto overflow-auto bg-gray-mild" />
  </div>
</template>

<script>
import TheSideBar from "@/components/TheSideBar";
export default {
  components: { TheSideBar },
};
</script>

<style lang="scss">
</style>
