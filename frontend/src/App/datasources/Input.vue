<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  call(): void {}

  @Emit()
  update(data: any): void {}
}
</script>
