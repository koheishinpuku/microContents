<template>
  <div>
    <h2 class="title">プロフィール</h2>
    <div v-for="profile in profiles" v-bind:key="profile.id">
      <img class="profile_img" v-bind:src="profile.picture.url" alt="プロフィール写真">
      <table>
        <tr>
          <th>名前</th>
          <td>{{ profile.name }}</td>
        </tr>

        <tr>
          <th>年齢</th>
          <td>{{ profile.age }}</td>
        </tr>

        <tr>
          <th>経歴</th>
          <td v-html="profile.carrier"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { httpClient } from '../api/ApiRoot.js'

export default {
  name: "SelectProfile",
  data() {
    return {
      profiles: '',
    }
  },
  created: function() {
    let self = this
    httpClient.get('/profile')
    .then(function(response){
      self.profiles = response.data.contents
    })
  }
}
</script>
<style lang="scss" scoped>
.title{
  font-size: 2.5rem;
  text-shadow: 1px 1px 3px #000;
}
.profile_img{
  height: 100px;
  width: 100px;
}
table{
  margin: auto;
  th{
    vertical-align: middle;
    padding-right: 20px;
  }
}

</style>
