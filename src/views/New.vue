<template>
  <MessageChain :messages="messages" @submit="submit"/>
</template>

<script>
import MessageChain from "@/components/MessageChain";
import axios from "axios";

export default {
  name: "New",
  data() {
    return {
      error: null,
      messages: []
    };
  },
  methods: {
    submit(data) {
      axios.post("/api/updateMessageChain", {
        firstTime: new Date(),
        messages: [{
          who: data.who,
          text: data.text,
          time: new Date()
        }]
      }).then(() => {
        this.messages.push(
            {
              who: data.who,
              text: data.text,
              time: new Date()
            }
        );
      }).catch(error => {
        this.error = error;
      });
    }
  },
  components: {
    MessageChain
  }
}
</script>

<style scoped>

</style>