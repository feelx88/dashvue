<template>
</template>

<script lang="ts">
import { Component, Emit, Prop } from "vue-property-decorator";
import Input from "../Input.vue";
import { Client, connect } from "mqtt";

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
    this.client = connect(this.config.url);
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