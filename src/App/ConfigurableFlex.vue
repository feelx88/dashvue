<template>
    <v-flex
        :md1="size == 1"
        :md2="size == 2"
        :md3="size == 3"
        :md4="size == 4"
        :md5="size == 5"
        :md6="size == 6"
        :md7="size == 7"
        :md8="size == 8"
        :md9="size == 9"
        :md10="size == 10"
        :md11="size == 11"
        :md12="size == 12"
        >
        <slot></slot>
    </v-flex>
</template>

<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ConfigurableFlex extends Vue {
    @Prop({ default: '12' }) size: String;
}

</script>