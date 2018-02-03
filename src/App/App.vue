<template>
  <v-app :dark="dark">
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
          v-for="(page, pageIndex) in pages"
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
        <v-layout row wrap v-for="(row, rowIndex) in currentPage.widgets" :key="rowIndex">
          <component v-for="(widget, widgetIndex) in currentPage.widgets[rowIndex]" :key="`${currentPage.title}_${rowIndex}_${widgetIndex}`" :is="widget.type" :props="widget.props"></component>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./App.ts"></script>
