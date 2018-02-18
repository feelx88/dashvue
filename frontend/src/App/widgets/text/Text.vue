<template>
    <widget :props="props" :size="size">
        <v-card-text>
            <p class="headline">
                {{ props.prefix }}{{ text }}{{ props.postfix }}
            </p>
        </v-card-text>
        <component v-if="props.text" :is="`input-${props.text.type}`" :config="props.text.config" @update="update"></component>
    </widget>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Widget from "../Widget.vue";

@Component
export default class Text extends Widget {
  text: string = "";

  update(data: string): void {
    this.text = data;
  }
}
</script>
