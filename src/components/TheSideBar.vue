<template>
  <aside
    class="flex flex-col justify-between pt-4 pb-4 items-center bg-gray-dark absolute w-full sm:w-auto sm:static"
  >
    <TheIconsSprite />
    <!-- Logo and Ham menu-->
    <div class="flex w-full sm:w-auto justify-between pl-10 pr-10 sm:p-0">
      <router-link
        to="/"
        exact
        id="logo"
        class="text-teal-primary font-logo text-3xl sm:text-5xl leading-none select-none"
      >VV</router-link>
      <button class="block sm:hidden focus:outline-none" @click="toggleMenu">
        <svg class="icon text-gray-light fill-current large">
          <use :xlink:href="displayIcon" />
        </svg>
      </button>
    </div>
    <!-- Actual navigation bar -->
    <nav
      class="flex-row sm:flex-col w-full sm:w-auto justify-around relative sm:static sm:flex"
      :class="this.$store.state.isMenuOpen?'flex':'hidden'"
    >
      <router-link to="/" exact @click.native="toggleMenu">
        <Icon name="Home" primaryIcon="home" />
      </router-link>
      <router-link to="/works" @click.native="toggleMenu">
        <Icon name="Works" primaryIcon="works" />
      </router-link>
      <router-link to="/skills" @click.native="toggleMenu">
        <Icon name="Skills" primaryIcon="skills" />
      </router-link>
      <router-link to="/about" @click.native="toggleMenu">
        <Icon name="About" primaryIcon="about" />
      </router-link>
      <router-link to="/contact" @click.native="toggleMenu">
        <Icon name="Contact" primaryIcon="contact" />
      </router-link>
    </nav>
    <!-- Social bar -->
    <div id="social" class="sm:flex flex-col hidden">
      <a href="#">
        <Icon primaryIcon="github" secondaryIcon="github-color" />
      </a>
      <a href="#">
        <Icon primaryIcon="linkedin" secondaryIcon="linkedin-color" />
      </a>
      <a href="#">
        <Icon primaryIcon="whatsapp" secondaryIcon="whatsapp-color" />
      </a>
      <a href="#">
        <Icon primaryIcon="rss" secondaryIcon="rss-color" />
      </a>
    </div>
  </aside>
</template>
<script>
import TheIconsSprite from "./TheIconsSprite";
import Icon from "./Icon";
export default {
  name: "TheSideBar",
  components: {
    TheIconsSprite,
    Icon,
  },
  methods: {
    toggleMenu: function () {
      this.$store.commit("toggleMenu");
      this.showMobileNav = !this.showMobileNav;
    },
  },
  computed: {
    displayIcon: function () {
      return this.$store.state.isMenuOpen ? "#menu-close" : "#menu";
    },
  },
};
</script>

<style lang="scss" scoped>
aside {
  flex: 0 0 70px;
}
nav > a {
  position: relative;
  margin-top: 30px;
  padding: 3px;
  &:hover {
    /deep/ .icon {
      opacity: 0;
    }
    /deep/ span {
      opacity: 1;
    }
  }
}
#social > a {
  margin-top: 10px;
  padding: 3px;
}
.large {
  @apply w-5 h-5;
}
@screen sm{
  .large{
  @apply w-6 h-6;
  }
}
.router-link-exact-active,
.router-link-active {
  /deep/ svg {
    @apply text-teal-primary #{!important};
  }
}
</style>
