<template>
</template>

<script lang="ts">

import { Component, Prop } from "vue-property-decorator";
import Input from "../Input.vue";
import axios,{ AxiosRequestConfig } from 'axios';

@Component
export default class Http extends Input {

    @Prop() config: AxiosRequestConfig & { 
        interval: number, 
        extract: string 
    };

    _interval: number;

    call (): void {
        axios.request(this.config).then((response) => {
            let data = response.data;
            if (this.config.extract) {
                data = eval(`response.data${this.config.extract}`);
            }
            this.$emit('update', data);
        });
    }

    created (): void {
        this.call()
        this._interval = setInterval(this.call, this.config.interval);
    }

    destroyed () {
        clearInterval(this._interval);
    }
}

</script>

