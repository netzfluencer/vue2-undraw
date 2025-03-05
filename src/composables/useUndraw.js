import { computed, inject } from 'vue'

export function useUndraw(name, props) {
  const width = '100%'
  const globalColor = inject('$vueUndrawColor', null) // Inject global color

  const style = computed(() => ({
    fill: props.color || globalColor || 'currentColor'
  }))

  const classes = computed(() => [
    'vue-undraw',
    `vue-undraw--${name}`
  ])

  return {
    width,
    style,
    classes
  }
}