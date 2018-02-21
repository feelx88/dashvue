<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Page extends Vue {
  @Prop() props: Object;
  @Prop() type: string;
}
</script>