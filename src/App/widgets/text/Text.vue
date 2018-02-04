<template>
    <widget :props="props" :size="size">
        <v-card-text>
            {{ props.text }}
        </v-card-text>
    </widget>
</template>

<script lang="ts">

import Vue from 'vue';
import Component from 'vue-class-component';
import Widget from '../Widget.vue';

@Component
export default class Text extends Widget {
}

</script>
