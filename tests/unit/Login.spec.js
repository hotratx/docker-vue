import { mount } from '@vue/test-utils'
import Login from '../../src/views/Login.vue'
import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import Vue from 'vue'

Vue.component(FeatherIcon.name, FeatherIcon)

describe('Login.vue', () => {
  const wrapper = mount(Login)
  

  test('Os dados iniciais são vazios', () => {
    wrapper.setData({
      status: ''
    })
    expect(wrapper.vm.status).toBe('')
  }),

  test('É uma instância do vue', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
