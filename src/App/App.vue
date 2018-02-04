<template>
  <main>
    <v-app :dark="dark" v-if="configuration.length">
      <v-toolbar app>
        <v-btn 
          icon
          @click="menu = !menu"
          >
          <v-icon>menu</v-icon>
        </v-btn>
        <v-icon>{{ currentPage.icon }}</v-icon>
        <v-toolbar-title v-text="currentPage.title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer
        fixed
        :clipped="true"
        :value="menu"
        app
      >
        <v-toolbar flat>
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                dashVue
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile 
            v-for="(page, pageIndex) in configuration"
            :key="pageIndex"
            :v-model="currentPage"
            value="true"
            @click="currentPage = page"
          >
            <v-list-tile-action>
              <v-icon v-html="page.icon"></v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="page.title"></v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container grid-list-md>
          <v-layout 
            row 
            wrap 
            v-for="(row, rowIndex) in currentPage.widgets" 
            :key="rowIndex"
            >
            <component 
              v-for="(widget, widgetIndex) in currentPage.widgets[rowIndex]" 
              :key="`${currentPage.title}_${rowIndex}_${widgetIndex}`" 
              :is="widget.type" 
              :props="widget.props"
              :size="widget.size"
              >
            </component>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
    <v-app v-else>
      <v-container fluid fill-height>
        <v-layout row wrap align-center>
          <v-flex text-md-center>
            <v-progress-circular text-md-center indeterminate></v-progress-circular>
            <br>
            Loading...
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </main>
</template>

<script lang="ts">

import Vue from 'vue';
import axios, { AxiosResponse } from 'axios';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  dark: boolean = true;
  menu: boolean = false;
  currentPage: any = null;
  configuration: any = [];

  created (): void {
    axios.get('/public/config.json').then((response: AxiosResponse) => {
      this.configuration = response.data.widgets;
      this.menu = response.data.menu !== undefined ? response.data.menu : this.menu;
      this.dark = response.data.dark !== undefined ? response.data.dark : this.dark;
      this.currentPage = this.configuration[0];
    });
  };
};

</script>
