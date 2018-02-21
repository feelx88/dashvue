<template>
    <v-container grid-list-md fill-height>
        <v-layout row wrap>
            <v-flex md12>
                <iframe :src="props.src"></iframe>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style lang="scss">
iframe {
  width: 100%;
  height: 100%;
  border: 0px;
}
</style>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Page from "../Page.vue";

@Component
export default class EmbedPage extends Page {}
</script>
