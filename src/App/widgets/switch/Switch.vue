<template>
    <v-flex md6>
        <v-card>
            <v-card-text>
                <v-switch :label="props.text" v-model="selected"></v-switch>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: [
    'props'
  ]
})
export default class Switch extends Vue {
  selected: boolean = false;
}
</script>
