<template>
  <div>
    <h1>这是子组件内容</h1>
    <button v-on:click="sendMsg()">向父组件传值</button>  
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  components: {},

  props: [],

  watch: {},

  computed: {},

  mounted () {},

  methods: {
      sendMsg(){
          this.$emit("ctest","message from child component");
      }
  }
}

</script>
<style  scoped>
</style>