<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <h3>{{ item.iso8601Date | formatDate }}</h3>
      <h2>
        <router-link :to="{ name: 'post', params: { id: item.basename }}">{{ item.title }}</router-link>
      </h2>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$http.get('/static/posts/list.json').then((res) => {
      this.list = res.body;
      setTimeout(() => this.$store.dispatch('loadingClose'), 1500);
    });
  },
};
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
    padding-top: 4px;
  }
  ul li {
    position: relative;
    padding: 30px 0 30px;
    border-bottom: 1px solid #e6e6e6;
  }
  ul li:first-child {
    margin-top: -30px;
  }
  h2,
  h3 {
    letter-spacing: 1px;
    margin: 0;
    text-transform: uppercase;
  }
  h2 {
    font-size: 20px;
    letter-spacing: 1px;
    margin-left: 120px;
  }
  h2 a {
    color: #444;
  }
  h2 a:hover {
    color: #f33;
  }
  h3 {
    font-size: 13px;
    color: #999;
    position: absolute;
    left: 0;
    top: 33px;
  }
  @media screen and (max-width: 420px) {
    h2 {
      font-size: 16px;
      margin-left: 0;
    }
    h2 a:hover {
      color: #f66;
    }
    h3 {
      font-size: 11px;
      position: static;
      margin-bottom: 10px;
    }
    ul li {
      padding: 18px 0 20px;
    }
    ul li:first-child {
      margin-top: -35px;
    }
  }
</style>
