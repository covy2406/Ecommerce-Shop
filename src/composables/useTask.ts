import { ref, computed, type Ref, watch } from 'vue'

export function useLocalStorage<T>(key: string, initialValue: T): {
  state: Ref<T>
  setValue: (value: T) => void
  remove: () => void
} {
  function readStorage(): T {
    if( typeof window === 'undefined') {
      return initialValue;
    }

    const item = localStorage.getItem(key);
    if(!item) return initialValue;

    try {
      return JSON.parse(item) as T;
    } catch (e) {
      return initialValue;
    }
  }
  const state = ref<T>(readStorage()) as Ref<T>;

  watch(state, (value) => {
    if(typeof window === 'undefined') return;
    localStorage.setItem(key, JSON.stringify(value));
  }, { deep: true })

  function setValue(value: T) {
    state.value = value;
  }

  function remove() {
    if(typeof window === 'undefined') return;
    localStorage.removeItem(key);
    state.value = initialValue;
  }

  return {
    state,
    setValue,
    remove
  }
}
