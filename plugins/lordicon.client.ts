import { defineElement } from '@lordicon/element'

export default defineNuxtPlugin(() => {
  if (!customElements.get('lord-icon'))
    defineElement()
})
