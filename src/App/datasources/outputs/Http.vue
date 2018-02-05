<template>
</template>

<script lang="ts">

import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import Output from "../Output.vue";
import axios, { AxiosRequestConfig } from 'axios';

@Component
export default class Http extends Output {
    @Prop() config: AxiosRequestConfig;

    call () : void {
        axios.request(this.config).then();
    }
}

</script>
