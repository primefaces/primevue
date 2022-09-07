import { mount } from "@vue/test-utils";
import PrimeVue from "@/components/config/PrimeVue";
import MultiSelect from "./MultiSelect.vue";

describe("MultiSelect.vue", () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(MultiSelect, {
            global: {
                plugins: [PrimeVue],
                stubs: {
                    teleport: true,
                },
            },
            props: {
                modelValue: null,
                options: [
                    { name: "New York", code: "NY" },
                    { name: "Rome", code: "RM" },
                    { name: "London", code: "LDN" },
                    { name: "Istanbul", code: "IST" },
                    { name: "Paris", code: "PRS" },
                ],
                optionLabel: "name",
                placeholder: "Select Cities",
            },
        });
    });

    it("should close panel", async () => {
        await wrapper.vm.onCloseClick();

        expect(wrapper.find(".p-multiselect-panel").exists()).toBe(false);
    });

    it("should chip work", async () => {
        await wrapper.setProps({
            display: "chip",
            modelValue: [wrapper.vm.options[0]] ,
        });

        expect(wrapper.find(".p-multiselect-token").exists()).toBe(true);
        expect(wrapper.find(".p-multiselect-token-label").text()).toBe(
            "New York"
        );
    });
});
