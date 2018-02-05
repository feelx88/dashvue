<template>
</template>

<script lang="ts">

import { Component, Prop } from "vue-property-decorator";
import Input from "../Input.vue";
import axios,{ AxiosRequestConfig } from 'axios';

@Component
export default class Http extends Input {

    @Prop() config: { interval: number } & AxiosRequestConfig;

    _interval: number;

    _intervalFn () {
        axios.request(this.config).then((response) => {
            this.$emit('update', response.data);
        });
    }

    created (): void {
        this._intervalFn()
        this._interval = setInterval(this._intervalFn, this.config.interval);
    }

    destroy () {
        clearInterval(this._interval);
    }
}

</script>

