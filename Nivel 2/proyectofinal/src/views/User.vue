<template>
  <div class="user">
    <userCard></userCard>
  </div>
</template>

<script>
// @ is an alias to /src
import userCard from '@/components/userCard.vue'

export default {
  name: 'User',
  components: {
    userCard
  }
}
</script>