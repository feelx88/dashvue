<template>
    <v-flex md6>
        <v-card>
            <v-card-text>
                <v-switch :label="props.text" v-model="selected"></v-switch>
            </v-card-text>
        </v-card>
    </v-flex>
</template>

<script>
export default {
  data() {
      return {
          selected: false
      }
  },
  props: [
      'props'
  ]
}
</script>
