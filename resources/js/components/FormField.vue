<template>
  <DefaultField :field="field" :errors="errors" :show-help-text="showHelpText">
    <template #field>
      <input
          :id="field.attribute"
          type="text"
          class="w-full form-control form-input form-input-bordered"
          :class="errorClasses"
          :placeholder="field.name"
          v-model="value"
          v-maska="field.mask"
      />
    </template>
  </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'
import {maska} from "maska";

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  directives: {maska},

  methods: {
    /*
     * Set the initial, internal value for the field.
     */
    setInitialValue() {
      this.value = this.field.value || ''
    },

    /**
     * Fill the given FormData object with the field's internal value.
     */
    fill(formData) {
      // if set to use raw value (no mask), remove mask chars from value
      let rawValue = this.value || "";
      if (this.field.raw) {
        for (let i = 0; i < this.field.mask.length; i++) {
          rawValue = rawValue.replace(this.field.mask[i], "");
        }
      }

      formData.append(this.field.attribute, rawValue);
    },

    /**
     * Update the field's internal value.
     */
    handleChange(value) {
      this.value = value;
    }
  },
}
</script>
