<template>
</template>

<script lang="ts">
import { Component, Emit, Prop } from "vue-property-decorator";
import Input from "../Input.vue";
import { Client } from "mqtt";
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
    this.client = Mqtt.getClient(this.config.url);

    this.client.on("message", (topic: string, message: Uint8Array) => {
      if (topic !== this.config.topic) {
        return;
      }

      this.update(this.getData(message.toString()));
    });

    this.client.subscribe(this.config.topic);
  }
  call(): void {}

  @Emit()
  update(data: any): void {}
}
</script>