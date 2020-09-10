<template>
  <section id="home" class="flex justify-between items-center p-10 lg:p-20 xl:p-32">
    <div>
      <p
        v-for="word in ['Hello,','I\'m Venki,','web developer.']"
        :key="word"
        class="font-heading text-3xl md:text-4xl text-white select-none"
      >
        <span
          v-for="(letter,index) in word"
          :key="index"
          class="letter inline-block whitespace-pre-wrap transition-all duration-75"
        >{{letter}}</span>
      </p>
      <p
        class="font-heading text-xl md:text-2xl text-white select-none"
      >I build things that live on the web.</p>
      <small class="font-key text-base md:text-lg text-gray-light select-none">Front End / Freelance</small>
    </div>
    <div class="hidden sm:block">
      <p class="text-red-600">IGNORE: Image/SVG goes here</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style lang="scss" scoped>
.letter:hover {
  @apply text-teal-primary;
  transform: scale(1.5);
}
</style>