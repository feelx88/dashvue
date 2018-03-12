<template>
</template>

<script lang="ts">
import { Component, Emit, Prop } from "vue-property-decorator";
import Output from "../Output.vue";
import { Client, connect } from "mqtt";
import Mqtt from "../Mqtt.ts";

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
    let client = Mqtt.clients[this.config.url];
    if (!client) {
      client = connect(this.config.url);
      Mqtt.clients[this.config.url] = client;
    }

    this.client = client;
  }

  call(): void {
    this.client.publish(this.config.topic, this.config.message);
  }
}
</script>