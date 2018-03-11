<template>
</template>

<script lang="ts">
import { Component, Emit, Prop } from "vue-property-decorator";
import Output from "../Output.vue";
import { Client, connect } from "mqtt";

@Component
export default class MqttOutput extends Output {
  @Prop()
  config: {
    url: string;
    topic: string;
    message: string;
  };

  private client: Client;

  created(): void {
    this.client = connect(this.config.url);
  }

  call(): void {
    this.client.publish(this.config.topic, this.config.message);
  }
}
</script>