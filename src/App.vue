<template>
  <Badge :profileId='profile_id' :profile='profile'/>
</template>

<script>
import Badge from './components/Badge.vue'

export default {
  name: 'app',
  props: ['profile_id'],
  data() {
    return {
      profile: {}
    }
  },
  components: {
    Badge
  },
  mounted() {
    window.blockstack.lookupProfile(this.profile_id).then((data) => {
      this.profile = data;
    })
  }
}
</script>