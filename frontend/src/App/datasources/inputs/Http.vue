<template>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Input from "../Input.vue";
import axios, { AxiosRequestConfig } from "axios";

@Component
export default class Http extends Input {
  @Prop()
  config: AxiosRequestConfig & {
    interval: number;
  };

  _interval: number;

  call(): void {
    axios.request<string>(this.config).then(response => {
      this.$emit("update", this.getData(response.data));
    });
  }

  created(): void {
    this.call();
    this._interval = setInterval(this.call, this.config.interval);
  }

  destroyed() {
    clearInterval(this._interval);
  }
}
</script>

