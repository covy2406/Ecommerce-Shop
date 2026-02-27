import {mount } from '@vue/test-utils'
import CounterButton from '@/views/HomeView.vue'
import { describe, it, expect } from "vitest";

describe('CounterButton', () => {
  it('increase count when button is clicked', async () => {
    const wrapper = mount(CounterButton);
    await wrapper.get('button').trigger('click');
    expect(wrapper.text()).toContain('counter: 1');
  });
});

