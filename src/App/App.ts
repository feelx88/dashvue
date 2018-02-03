import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  dark: boolean = true;
  pages = [
    {
      icon: "home",
      title: "Home",
      widgets: [
        [
          { type: "widget-switch", props: { text: "btn1" } },
          { type: "widget-switch", props: { text: "btn2" } },
          { type: "widget-switch", props: { text: "btn3" } }
        ],
        [{ type: "widget-switch", props: { text: "btn1" } }]
      ]
    },
    {
      icon: "trending_up",
      title: "Second",
      widgets: [
        [
          { type: "widget-switch", props: { text: "#btn1" } }
        ],
        [
          { type: "widget-switch", props: { text: "#btn1" } },
          { type: "widget-switch", props: { text: "##btn1" } }
        ]
      ]
    }
  ];
  currentPage: any = null;
  menu: boolean = false;

  constructor() {
    super();
    this.currentPage = this.pages[0];
  };
};