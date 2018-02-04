<template>
  <c-flex :size="size">
        <v-card>
            <v-card-title primary-title>
                {{ props.title }}
            </v-card-title>
            <v-card-text>
                <v-switch :label="value ? props.textOn : props.textOff" v-model="value"></v-switch>
            </v-card-text>
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
export default class Switch extends Vue {
    value: boolean = false;
    defaults: any = {
        textOn: 'On',
        textOff: 'Off'
    }

    created (): void {
        for (const key of Object.keys(this.defaults)) {
            this.$props.props[key] = this.$props.props[key] || this.defaults[key];
        }
    }
}

</script>
