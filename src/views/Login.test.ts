import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import { describe, it, expect } from 'vitest'

// describe để nhóm các test case liên quan đến component Login
describe('Login.vue', () => {
  // it để định nghĩa một test case cụ thể, trong trường hợp này là kiểm tra xem component Login có render đúng các trường input hay không
  it('emits submit event with username and password', async () => {
    // mount để render component Login trong môi trường test
    const wrapper = mount(Login)

    // wrapper.get('input[id="username"]')
    // wrapper để tìm phần tử input có id là "username" và "password" trong component Login
    expect(wrapper.get('input[id="username"]')).toBeTruthy()
    expect(wrapper.get('input[id="password"]')).toBeTruthy()
  })

  it('shows error messages when fields are empty', async () => {
    const wrapper = mount(Login)

    await wrapper.get('form').trigger('submit.prevent')

    // wrapper để kiểm tra xem có xuất hiện lỗi khi submit form mà không nhập gì vào username và password
    // toContain để kiểm tra xem text của wrapper có chứa chuỗi lỗi hay không
    expect(wrapper.text()).toContain('Username is required')
    expect(wrapper.text()).toContain('Password must be at least 6 characters')
  })

  it('emits submit event with correct payload', async () => {
    const wrapper = mount(Login)

    // wrapper để nhập giá trị vào các trường username và password
    await wrapper.get('input[id="username"]').setValue('testuser')
    await wrapper.get('input[id="password"]').setValue('testpass')

    await wrapper.get('form').trigger('submit.prevent')

    // wrapper để kiểm tra xem có phát ra sự kiện "submit" với payload đúng khi submit form
    expect(wrapper.emitted()).toHaveProperty('submit')
    const submitEvent = wrapper.emitted('submit')
    // expect là hàm để kiểm tra giá trị của submitEvent có được định nghĩa hay không và có chứa payload đúng hay không
    expect(submitEvent).toBeDefined()
    expect(submitEvent?.[0]?.[0]).toEqual({
      username: 'testuser',
      password: 'testpass',
    })
  })
})
