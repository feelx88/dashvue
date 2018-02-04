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

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
    props: {
        props: Object,
        size: {
            type: String,
            default: '1'
        }
    }
})
export default class Widget extends Vue {

    defaults(): any {
        return {};
    }

    created (): void {
        const defaults = this.defaults();
        for (const key of Object.keys(defaults)) {
            this.$props.props[key] = this.$props.props[key] || defaults[key];
        }
    }
}

</script>