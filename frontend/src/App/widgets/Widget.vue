<template>
  <c-flex :size="size">
      <v-card>
        <v-card-title v-if="props.title">
            {{ props.title }}
        </v-card-title>
        <slot></slot>
      </v-card>
  </c-flex>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Widget extends Vue {
  @Prop() props: Object;
  @Prop({ default: "1" })
  size: String;

  defaults(): any {
    return {};
  }

  created(): void {
    const defaults = this.defaults();
    for (const key of Object.keys(defaults)) {
      this.$props.props[key] = this.$props.props[key] || defaults[key];
    }
  }
}
</script>