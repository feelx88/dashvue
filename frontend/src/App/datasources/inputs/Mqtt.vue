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

  created(): void {
    const client: Client = connect(this.config.url);
    client.on("message", (topic: string, message: Uint8Array) => {
      let data = JSON.parse(message.toString());
      if (this.config.extract) {
        data = eval(`data${this.config.extract}`);
      }

      this.update(data);
    });

    client.subscribe(this.config.topic);
  }
  call(): void {}

  @Emit()
  update(data: any): void {}
}
</script>