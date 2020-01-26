export const undrawMixin = (name) => ({
  data: () => ({
    width: '100%'
  }),
  props: {
    color: {
      type: String,
      default: null
    }
  },
  computed: {
    style () {
      return {
        'fill': this.color ? this.color : (this.$vueUndrawColor ? this.$vueUndrawColor : 'currentColor')
      }
    },
    classes () {
      return [
        `vue-undraw`,
        `vue-undraw--${name}`
      ]
    }
  }
})
