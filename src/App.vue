<template>
  <div>
    <div class="header">
      <router-link to="/">BIGTIGER.ME</router-link>
    </div>
    <p class="links">
      <a href="https://twitter.com/jinyang1994" target="_blank">
        <img src="./assets/images/twitter.png" />
      </a>
      <a href="https://github.com/liujinyang1994" target="_blank">
        <img src="./assets/images/github.png"/>
      </a>
    </p>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="loading" v-if="loading">
      <div class="loader-inner ball-pulse">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style>
  body {
    font-family: "Roboto", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, serif;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-size: 16px;
    word-spacing: 1px;
    color: #666;
    margin: 0;
    padding: 0;
  }

  .loading {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(237, 85, 101, 0.9);
    vertical-align: middle;
  }

  .loader-inner {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -33px;
    margin-left: -11px;
  }

  @-webkit-keyframes scale {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    45% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
      opacity: 0.7;
    }

    80% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }
  @keyframes scale {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }

    45% {
      -webkit-transform: scale(0.1);
      transform: scale(0.1);
      opacity: 0.7;
    }

    80% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 1;
    }
  }

  .ball-pulse > div:nth-child(0) {
    -webkit-animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08);
  }

  .ball-pulse > div:nth-child(1) {
    -webkit-animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
  }

  .ball-pulse > div:nth-child(2) {
    -webkit-animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
  }

  .ball-pulse > div:nth-child(3) {
    -webkit-animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
    animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
  }

  .ball-pulse > div {
    background-color: #fff;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
  }

  img {
    border: none;
  }
  a {
    color: #666;
    text-decoration: none;
    transition: color 0.2s ease, border-color 0.2s ease;
  }
  .header {
    letter-spacing: 5px;
    margin: 50px auto 15px;
    text-align: center;
  }
  .header a {
    font-size: 15px;
    color: #444;
  }
  .links {
    text-align: center;
    font-family: "Roboto", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, serif;
    color: #999;
    font-size: 24px;
    margin: 0;
  }
  .links a {
    cursor: pointer;
    padding: 2px;
    margin: 0 3px;
  }
  .links img {
    width: 15px;
    height: 15px;
  }
  .main {
    max-width: 600px;
    margin: 50px auto;
    padding: 0 30px 50px;
    position: relative;
  }
  .header,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Montserrat", "Helvetica Neue", "Hiragino Sans GB", "LiHei Pro", Arial, sans-serif;
    font-weight: 400;
    color: #444;
  }
  @media screen and (max-width: 420px) {
    .header {
      margin: 40px auto 10px;
    }
    .header a {
      font-size: 14px;
    }
  }
</style>

