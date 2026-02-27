import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from "vitest";
import { useCounterStore } from '@/stores/counter'
import { createPinia, setActivePinia } from 'pinia';

describe('CounterStore', () => {
  beforeEach(() => {
    // // Reset the store state before each test
    // const counterStore = useCounterStore();
    // counterStore.count = 0;

    // tạo pinia instance mới trước mỗi test để đảm bảo state được reset
    // const pinia = createPinia();
    setActivePinia(createPinia());
  });
  it('initial state should be 0', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('doubleCount should return double of count', () => {
    const store = useCounterStore()
    expect(store.doubleCount).toBe(0)
  })

  it('increment should increase count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('doubleCount should update after increment', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.doubleCount).toBe(2)
  })
});