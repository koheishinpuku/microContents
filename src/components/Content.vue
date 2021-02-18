<template>
  <div>
    <div v-for="content in contents" v-bind:key="content.id">
      <div v-if="content.id == seach_content_id">
        <h1>{{ content.title }}</h1>
        <p v-html="content.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
import ContentStore from '../models/ContentStore.js'
export default {
  name: "Content",
  data: function(){
    return{
      contents: '',
      seach_content_id: ''
    }
  },
  created: function(){
    this.contents = ContentStore.getters.allContents
    this.seach_content_id = ContentStore.getters.keepContentID
  }
}
</script>
