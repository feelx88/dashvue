<template>
    <main>
        <v-app :dark="dark" v-if="configuration.length && loggedIn">
            <v-toolbar app>
                <v-btn icon @click="menu = !menu">
                    <v-icon>menu</v-icon>
                </v-btn>
                <v-icon>{{ currentPage.icon }}</v-icon>
                <v-toolbar-title v-text="currentPage.title"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon @click="logout">
                    <v-icon>exit_to_app</v-icon>
                </v-btn>
            </v-toolbar>
            <v-navigation-drawer fixed :clipped="true" :value="menu" app>
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
                    <v-list-tile v-for="(page, pageIndex) in configuration" :key="pageIndex" :v-model="currentPage" value="true" @click="currentPage = page">
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
                <component v-if="currentPage" :is="`page-${currentPage.type}`" :props="currentPage"></component>
            </v-content>
        </v-app>
        <v-app :dark="dark" v-else-if="loggedIn">
            <v-container fluid fill-height>
                <v-layout row wrap align-center>
                    <v-flex text-md-center>
                        <v-progress-circular text-md-center indeterminate></v-progress-circular>
                        <br> Loading...
                    </v-flex>
                </v-layout>
            </v-container>
        </v-app>
        <v-app :dark="dark" v-else>
            <login @login="login"></login>
        </v-app>
    </main>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";

@Component
export default class App extends Vue {
  dark: boolean = true;
  menu: boolean = this.$cookie.get("menu") == "true" ? true : false;
  currentPage: any = null;
  configuration: any = [];
  loggedIn: boolean = false;

  created(): void {
    this.loggedIn =
      this.$cookie.get("token") !== null && this.$cookie.get("token") !== "";
    axios.defaults.headers.Authorization = this.$cookie.get("token");

    if (this.loggedIn) {
      this.loadConfig();
    }
  }

  login(loggedIn: boolean): void {
    this.loggedIn = loggedIn;
    this.loadConfig();
  }

  logout(): void {
    this.$cookie.set("token", "");
    this.loggedIn = false;
  }

  loadConfig(): void {
    axios.get("/api/config").then((response: AxiosResponse) => {
      this.configuration = response.data.pages;
      this.dark =
        response.data.dark !== undefined ? response.data.dark : this.dark;
      this.currentPage = this.configuration[0];
    });
  }

  @Watch("menu")
  _menu(val: boolean): void {
    this.$cookie.set("menu", val);
  }
}
</script>
