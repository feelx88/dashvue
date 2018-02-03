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