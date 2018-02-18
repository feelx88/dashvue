<template>
  <widget :size="size" :props="props">
      <v-card-text v-if="nowPlaying">
        <v-container fluid>
            <v-layout md12 row>
                {{ nowPlaying }}
              </v-layout>
          </v-container>
      </v-card-text>
      <v-card-actions>
          <v-container fluid>
              <v-layout md12>
                <v-btn @click="call('Prev')" icon><v-icon>skip_previous</v-icon></v-btn>
                <v-btn @click="call('Play')" icon><v-icon>play_arrow</v-icon></v-btn>
                <v-btn @click="call('Stop')" icon><v-icon>stop</v-icon></v-btn>
                <v-btn @click="call('Next')" icon><v-icon>skip_next</v-icon></v-btn>
              </v-layout>
          </v-container>
      </v-card-actions>
      <component v-if="props.prev" :is="`output-${props.prev.type}`" ref="datasourcePrev" :config="props.prev.config"></component>
      <component v-if="props.play" :is="`output-${props.play.type}`" ref="datasourcePlay" :config="props.play.config"></component>
      <component v-if="props.stop" :is="`output-${props.stop.type}`" ref="datasourceStop" :config="props.stop.config"></component>
      <component v-if="props.next" :is="`output-${props.next.type}`" ref="datasourceNext" :config="props.next.config"></component>
      <component v-if="props.status" :is="`input-${props.status.type}`" ref="datasourceStatus" :config="props.status.config" @update="update"></component>
  </widget>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Widget from "../Widget.vue";
import Output from "../../datasources/Output.vue";
import Input from "../../datasources/Input.vue";

@Component
export default class MediaController extends Widget {
  $refs: Vue["$refs"] & {
    datasourcePrev: Output;
    datasourcePlay: Output;
    datasourceStop: Output;
    datasourceNext: Output;
    datasourceStatus: Input;
  };

  nowPlaying: String | null = null;

  call(datasourceName: string) {
    (this.$refs["datasource" + datasourceName] as Output).call();
    this.$refs.datasourceStatus.call();
  }

  update(data: any): void {
    this.nowPlaying = data;
  }
}
</script>
