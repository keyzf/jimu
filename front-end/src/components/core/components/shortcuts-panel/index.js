import componentButton from './component-button';

export default {
  components: { componentButton },
  props: {
    pluginsList: {
      required: false,
      type: Array,
      default: () => []
    },
    handleClickShortcut: {
      type: Function
    }
  },
  methods: {
  },
  render(h) {
    return (
      <div>22</div>
    );
  }
};
