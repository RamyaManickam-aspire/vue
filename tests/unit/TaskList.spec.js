import { mount } from '@vue/test-utils'
import TaskList from '@/components/TaskList.vue'

describe('TaskList.vue', () => {
  it('renders a task when added', async () => {
    const wrapper = mount(TaskList)

    // Directly manipulate the newTask ref
    wrapper.vm.newTask = 'Task 1' // Set the newTask directly
    await wrapper.vm.$nextTick() // Wait for the DOM to update

    await wrapper.find('input').trigger('keyup.enter') // Simulate the Enter key press

    // Assert that the task was added
    expect(wrapper.text()).toContain('Task 1')
  })

  it('removes a task when the remove button is clicked', async () => {
    const wrapper = mount(TaskList)

    // Set initial tasks directly
    wrapper.vm.tasks = ['Task 1', 'Task 2'] // Set the tasks directly
    await wrapper.vm.$nextTick() // Wait for the DOM to update

    await wrapper.findAll('button')[0].trigger('click') // Trigger the remove action

    // Assert that the task was removed
    expect(wrapper.text()).not.toContain('Task 1')
  })
})
