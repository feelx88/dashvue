<template>
</template>

<script lang="ts">
import { Component, Emit, Prop } from "vue-property-decorator";
import Input from "../Input.vue";
import { Client, connect } from "mqtt";
import Mqtt from "../Mqtt.ts";

@Component
export default class MqttInput extends Input {
  @Prop()
  config: {
    url: string;
    extract: string;
    topic: string;
  };

  private client: Client;

  created(): void {
    let client = Mqtt.clients[this.config.url];
    if (!client) {
      client = connect(this.config.url);
      Mqtt.clients[this.config.url] = client;
    }

    this.client = client;

    this.client.on("message", (topic: string, message: Uint8Array) => {
      let data = JSON.parse(message.toString());
      if (this.config.extract) {
        data = eval(`data${this.config.extract}`);
      }

      this.update(data);
    });

    this.client.subscribe(this.config.topic);
  }
  call(): void {}

  @Emit()
  update(data: any): void {}
}
</script>