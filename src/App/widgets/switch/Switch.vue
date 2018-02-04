<template>
  <widget :props="props" :size="size">
    <v-card-text>
        <v-switch :label="value ? props.textOn : props.textOff" v-model="value"></v-switch>
    </v-card-text>
  </widget>
</template>

<script lang="ts">


import { Vue, Component } from 'vue-property-decorator';
import Widget from '../Widget.vue';

@Component
export default class Switch extends Widget {
    value: boolean = false;
    defaults(): any {
        return {
            textOn: 'On',
            textOff: 'Off'
        }
    }
}

</script>
