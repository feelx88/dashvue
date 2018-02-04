<template>
  <widget :props="props" :size="size">
    <v-card-text>
        <v-switch :label="value ? props.textOn : props.textOff" v-model="value"></v-switch>
        <component v-if="props.on" :is="`output-${props.on.type}`" ref="datasourceOn" :config="props.on.config"></component>
        <component v-if="props.off" :is="`output-${props.off.type}`" ref="datasourceOff" :config="props.off.config"></component>
    </v-card-text>
  </widget>
</template>

<script lang="ts">


import { Vue, Component, Watch } from 'vue-property-decorator';
import Widget from '../Widget.vue';
import Output from '../../datasources/Output.vue';

@Component
export default class Switch extends Widget {
    value: boolean = false;
    defaults(): any {
        return {
            textOn: 'On',
            textOff: 'Off'
        }
    }

    @Watch('value') _value(val: boolean) {
        if (val && this.$refs.datasourceOn) {
            this.$refs.datasourceOn.call();
        } else if (this.$refs.datasourceOff) {
            this.$refs.datasourceOff.call();
        }
    }
}

</script>
