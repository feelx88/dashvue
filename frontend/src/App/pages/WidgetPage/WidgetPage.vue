<template>
    <v-container grid-list-md>
        <v-layout row wrap v-for="(row, rowIndex) in props.widgets" :key="rowIndex">
            <component v-for="(widget, widgetIndex) in props.widgets[rowIndex]" :key="`${props.title}_${rowIndex}_${widgetIndex}`" :is="`widget-${widget.type}`" :props="widget.props" :size="widget.size">
            </component>
        </v-layout>
    </v-container>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Page from "../Page.vue";

@Component
export default class WidgetPage extends Page {}
</script>
