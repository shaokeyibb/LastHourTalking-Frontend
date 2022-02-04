<template>
  <div class="message-chain">
    <div class="no-message" v-if="messages.length===0">
      <NAlert type="info">No Message Found</NAlert>
    </div>
    <div class="message" v-for="message in messages" :key="message">
      <Message :who="message.who" :text="message.text" :time="message.time"/>
    </div>
    <NInput v-model:value="input" type="textarea" placeholder="Say something under this message chain..."
            @submit.prevent="submit"/>
    <div class="submit">
      <NInput v-model:value="who" placeholder="Enter your name..."></NInput>
      <NButton @click.prevent="submit" :disabled="!canSubmitInternal">Submit</NButton>
    </div>
  </div>
</template>

<script>
import Message from "@/components/Message";

export default {
  name: "MessageChain",
  components: {Message},
  data() {
    return {
      who: "Anonymous",
      input: ""
    };
  },
  props: {
    messages: {
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: false
    },
    firstTime: {
      type: Date,
      required: false
    },
    canSubmit: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  methods: {
    submit() {
      this.$emit("submit", {
        id: this.id,
        who: this.who,
        text: this.input,
        messages: this.messages,
        firstTime: this.firstTime
      });
      this.who = "Anonymous";
      this.input = "";
    }
  },
  computed: {
    canSubmitInternal() {
      return this.canSubmit && this.who.length > 0 && this.input.length > 0
    }
  },
  emits: ["submit"],
}
</script>

<style scoped>
.submit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
}

.message-chain {
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
  border-radius: 5px;
  background-color: #fafafa;
}
</style>