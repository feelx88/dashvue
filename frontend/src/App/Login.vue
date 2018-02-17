<template>
  <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex md4 md-offset4>
            <v-card class="elevation-20">
                <v-card-title>Login</v-card-title>
                <v-card-text>
                    <v-text-field v-model="username" label="Username" append-icon="person"></v-text-field>
                    <v-text-field type="password" v-model="password" label="Password" append-icon="lock" @keyup.enter="_login"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn :loading="loading" flat color="primary" @click="_login">Ok</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script lang="ts">

import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Login extends Vue {

    username: string = '';
    password: string = '';
    loading: boolean = false;

    _login(): void {
        this.loading = true;
        axios.post('/login', {
            username: this.username,
            password: this.password
        }).then((response) => {
            this.loading = false;
            axios.defaults.headers.Authorization = response.data.token;
            this.$cookie.set('token', response.data.token);
            this.$emit('login', response.data.success);
        }).catch(() => {
            this.loading = false;
            axios.defaults.headers.Authorization = '';
            this.$cookie.set('token', '');
            this.$emit('login', false);
        });
    }

    @Emit()
    login(loggedIn: boolean): boolean {
        return loggedIn;
    }
}

</script>
