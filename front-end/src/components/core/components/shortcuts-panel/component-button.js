export default {
  functional: true,
  props: {
    faIcon: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    clickFn: {
      required: false,
      type: Function
    }
  },
  render: (h, { props }) => {
    const onClick = props.clickFn || function() {};
    return (
      <div
        class='shortcut-button'
        onClick={onClick}
      >
        i
        <i
          class={['shortcut-icon', props.faIcon]}
        />
        <span>{ props.title }</span>
      </div>
    );
  }
};
