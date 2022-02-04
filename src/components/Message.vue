<template>
  <NCard :title="who +' on ' + formattedTime" size="huge" id="card">
    {{ text }}
  </NCard>
</template>

<script>
export default {
  name: "Message",
  props: {
    who: {
      type: String,
      required: false,
      default: "Anonymous"
    },
    time: {
      type: Date,
      required: true
    },
    text: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: false
    }
  },
  computed: {
    formattedTime: function () {
      return this.time.toLocaleDateString() + ' ' + this.time.toLocaleTimeString();
    }
  }
}
</script>

<style scoped>

#card {
  white-space: pre-wrap;
}

</style>