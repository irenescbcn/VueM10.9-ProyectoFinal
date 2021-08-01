<template>
  <div class="users">
    <DisplayUsers />
  </div>
</template>

<script>
// @ is an alias to /src
import DisplayUsers from '@/components/DisplayUsers.vue'

export default {
  name: 'Users',
  components: {
    DisplayUsers
  }
}
</script>