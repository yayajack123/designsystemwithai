<script setup lang="ts">
// eslint-disable-next-line no-restricted-imports
import type { VAutocomplete } from 'vuetify/components'

export interface UiAutoCompleteCallbackResponse {
  data: any[]
  meta: {
    current_page: number
    last_page: number
  }
}

interface UiAutoCompleteProps {
  callback: (data: any) => Promise<UiAutoCompleteCallbackResponse>
}

const props = defineProps<UiAutoCompleteProps>()

const modelValue = defineModel<any>()

const UiAutoCompleteRef = ref<InstanceType<typeof VAutocomplete>>()
const search = ref<string>('')

const items = ref<any[]>([])
const isLoading = ref(false)
const isOpen = ref(false)
const debounceSearch = useDebounce(search, 500)
const page = ref(1)
const hasNextPage = ref(false)

// ↓↓↓ Actions
const fetchData = async () => {
  try {
    /**
     * If you need to pass other data to the fetchDataCallback function,
     * you can do it here by adding them to the "data" object.
     */
    const response = await props.callback({ search: search.value, page: page.value })
    const { data, meta } = response

    if (meta)
      hasNextPage.value = meta.last_page > meta.current_page

    /** Push new items to the list if they are not already present */
    items.value.push(...data)
  }
  catch (error) {
    console.error(error)
  }
  finally {
    isLoading.value = false
  }
}

/**
 * This function is called when the user scrolls to the bottom of the dropdown.
 * It checks if there are more pages to load and fetches the next page if so.
 */
const onScroll = async (e: any): Promise<void> => {
  const el = e.target
  const scrollToBottom = el.scrollTop + el.clientHeight >= el.scrollHeight
  if (scrollToBottom && hasNextPage.value) {
    page.value++
    await fetchData()
  }
}

// ↓↓↓ Handle data
const onMenuOpen = async (status: boolean) => {
  isOpen.value = status

  if (!status)
    return

  /** It only runs right after the menu is opened. */
  items.value = []
  page.value = 1
  await fetchData()

  // Get the dropdown's scrollable content and add onscroll event listener
  if (UiAutoCompleteRef.value) {
    const menuContent = UiAutoCompleteRef.value!.querySelector('.v-list')
    if (menuContent)
      menuContent.addEventListener('scroll', onScroll)
  }
}

watch(debounceSearch, async () => {
  if (isOpen.value) {
    items.value = []
    page.value = 1
    await fetchData()
  }
}, { deep: true })

watch(modelValue, async () => {
  if (!modelValue.value) {
    UiAutoCompleteRef.value?.focus()
    await nextTick()
    UiAutoCompleteRef.value?.blur()
  }
})

const attrs = useAttrs()
</script>

<template>
  <VAutocomplete
    ref="UiAutoCompleteRef"
    v-model="modelValue"
    v-model:search="search"
    v-bind="attrs"
    :items="items"
    @update:menu="onMenuOpen"
  >
    <template #no-data>
      <VListItem>
        <VListItemContent>
          <VListItemTitle>
            <VProgressCircular
              v-if="isLoading"
              indeterminate
              :size="20"
            />
            {{ isLoading ? 'Loading...' : 'No data available' }}
          </VListItemTitle>
        </VListItemContent>
      </VListItem>
    </template>
  </VAutocomplete>
</template>
