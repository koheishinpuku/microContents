<template>
  <div>
    <h2 class="title">記事一覧だよ！</h2>
    <div v-for="content in contents" v-bind:key="content.id">
      <h3 class="content_title" v-on:click="getContentID(content.id)">{{ content.title }} </h3>
    </div>
  </div>
</template>
<script>
import ContentStore from '../store/ContentStore.js'
import { httpClient } from '../api/ApiRoot.js'
export default {
  name: "ListContents",
  data() {
    return {
      contents: ''
    }
  },
  methods: {
    getContentID(content_id) {
      ContentStore.dispatch('keepContentID',content_id)
      this.$router.push('/content')
    }
  },
  created: function(){
    let self = this
    httpClient.get('/contents')
      .then(function(response){
        self.contents = response.data.contents
        ContentStore.dispatch('keepContents', response.data.contents)
      })
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px #000;
}

.content_title{
  cursor: pointer;
  &:hover{
    color: #a9a9a9;
  }
}
</style>
