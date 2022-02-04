<template>
  <div class="error-message" v-if="error">
    <NAlert type="error">{{ error }}</NAlert>
  </div>
  <div class="find" v-if="!error">
    <MessageChain :id="id" :messages="messages" :can-submit="canSubmit" @submit="submit"/>
  </div>
  <span>ID:{{ this.id }}</span>
</template>

<script>
import MessageChain from "@/components/MessageChain";
import axios from "axios";

export default {
  name: 'Find',
  data() {
    return {
      id: undefined,
      error: null,
      messages: []
    };
  },
  components: {
    MessageChain
  },
  computed: {
    canSubmit() {
      return this.id !== undefined && !this.error
    }
  },
  mounted() {
    axios.get('/api/getRandomMessageChain')
        .then((response) => {
          if (!response.data) {
            console.log("Can not found any message chain");
            return
          }
          this.id = response.data.id
          this.messages = response.data.messages.map((message) => {
            return {
              id: message.id,
              who: message.who,
              text: message.text,
              time: new Date(Date.parse(message.time)),
            }
          });
        })
        .catch((error) => {
          this.error = error
          console.log(error);
        })
  },
  methods: {
    submit(data) {
      this.messages.push(
          {
            who: data.who,
            text: data.text,
            time: new Date()
          }
      )
      console.log(data.id)
      axios.post("/api/updateMessageChain", {
        id: data.id,
        firstTime: new Date(),
        messages: data.messages
      }).catch(error => {
        this.error = error;
      });
    }
  }
}

</script>