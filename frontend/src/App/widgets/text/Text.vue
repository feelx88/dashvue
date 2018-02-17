<template>
    <widget :props="props" :size="size">
        <v-card-text>
            {{ props.text }}
        </v-card-text>
    </widget>
</template>

<script lang="ts">


import { Vue, Component } from 'vue-property-decorator';
import Widget from '../Widget.vue';

@Component
export default class Text extends Widget {
}

</script>
