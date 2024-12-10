import { mount } from "@vue/test-utils";
import Counter from "../../components/Counter.vue";

describe("Counter.vue", () => {
  it("renders the initial count", () => {
    const wrapper = mount(Counter);

    expect(wrapper.text()).toContain("Count: 0");
  });

  it("increments the count when the Increment button is clicked", async () => {
    const wrapper = mount(Counter);
    const incrementButton = wrapper.find("button:first-child");

    await incrementButton.trigger("click");
    expect(wrapper.text()).toContain("Count: 1");
  });

  it("decrements the count when the Decrement button is clicked", async () => {
    const wrapper = mount(Counter);
    const decrementButton = wrapper.find("button:last-child");

    await decrementButton.trigger("click");
    expect(wrapper.text()).toContain("Count: -1");
  });
});
