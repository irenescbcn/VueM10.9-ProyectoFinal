<template>
  <div class="users">
    <UsersComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import UsersComponent from '@/components/UsersComponent.vue'

export default {
  name: 'Users',
  components: {
    UsersComponent
  }
}
</script>