<template>
  <div id="app" class="flex flex-col sm:flex-row h-screen overflow-hidden">
    <TheSideBar />
    <router-view class="flex-auto overflow-auto bg-gray" />
  </div>
</template>

<script>
import TheSideBar from "@/components/TheSideBar";
export default {
  components: { TheSideBar },
};
</script>
