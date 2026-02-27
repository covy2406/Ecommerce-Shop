import { ref, computed } from 'vue'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonOptions {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  label?: string
}

export function useCustomButton(options: ButtonOptions = {}) {
  const isLoading = ref(options.loading ?? false)
  const isDisabled = ref(options.disabled ?? false)
  const label = ref(options.label ?? 'Button')
  const variant = ref<ButtonVariant>(options.variant ?? 'primary')
  const size = ref<ButtonSize>(options.size ?? 'md')

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
  }

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const buttonClasses = computed(() => {
    return [
      'rounded font-semibold transition-colors duration-200 focus:outline-none',
      variantClasses[variant.value],
      sizeClasses[size.value],
      isDisabled.value || isLoading.value ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ].join(' ')
  })

  const isClickable = computed(() => !isDisabled.value && !isLoading.value)

  function handleClick(event: MouseEvent, callback?: () => void) {
    if (!isClickable.value) {
      event.preventDefault()
      return
    }
    callback?.()
  }

  function setLoading(value: boolean) {
    isLoading.value = value
  }

  function setDisabled(value: boolean) {
    isDisabled.value = value
  }

  function setLabel(value: string) {
    label.value = value
  }

  function setVariant(value: ButtonVariant) {
    variant.value = value
  }

  function setSize(value: ButtonSize) {
    size.value = value
  }

  return {
    isLoading,
    isDisabled,
    isClickable,
    label,
    variant,
    size,
    buttonClasses,
    handleClick,
    setLoading,
    setDisabled,
    setLabel,
    setVariant,
    setSize,
  }
}
