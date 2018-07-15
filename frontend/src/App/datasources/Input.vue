<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() config: any;

  call(): void {}

  getData(data: any): string {
    if (this.config.json !== false && !(data instanceof Object)) {
      data = JSON.parse(data);
    }

    if (this.config.extract) {
      let extractor = this.config.extract;

      if (this.config.extract instanceof Object) {
        extractor = JSON.parse(JSON.stringify(extractor));
        this.evalObject(extractor, data);
        data = extractor;
      } else {
        data = eval(`${extractor}`);
      }
    }

    return data;
  }

  private evalObject(object: Object, data: any) {
    let self = this;
    Object.keys(object).forEach(key => {
      if (key.startsWith("$")) {
        object[key.substr(1)] = eval(object[key]);
        delete object[key];
      } else if (object[key] instanceof Object) {
        this.evalObject(object[key], data);
      }
    });
  }

  @Emit()
  update(data: any): void {}
}
</script>
