<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop()
  config: {
    json: bool;
    extract: string;
  };

  call(): void {}

  getData(data: any): string {
    if (this.config.json !== false && !(data instanceof Object)) {
      data = JSON.parse(data);
    }

    if (this.config.extract) {
      data = eval(`data${this.config.extract}`);
    }

    return data;
  }

  @Emit()
  update(data: any): void {}
}
</script>
