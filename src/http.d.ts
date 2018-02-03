import Vue from 'vue';
import axios, { AxiosStatic } from 'axios';

declare module 'vue/types/vue' {
    // Global properties can be declared
    // on the `VueConstructor` interface
    interface VueConstructor {
      $http: AxiosStatic
    }
  }