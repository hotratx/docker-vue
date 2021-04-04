import { shallowMount } from '@vue/test-utils'
import App from '../../src/views/Home.vue'

describe('App.vue', () => {
  test('É uma instância do vue', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
