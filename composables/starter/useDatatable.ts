import type { ResponseFormat } from '@/types'

const PAGE_OPTIONS = [
  {
    title: '10', value: 10,
  },
  {
    title: '25', value: 25,
  },
  {
    title: '50', value: 50,
  },
  {
    title: '100', value: 100,
  },

]

export interface TableParams {
  page: number
  itemsPerPage: number
}

export interface TableQuery {
  [key: string]: any
}

export const useDatatable = <T>(callback: (params: TableParams, queryParams: TableQuery) => Promise<ResponseFormat<T[]>>) => {
  const data: Ref<T[]> = ref([])
  const isLoading = ref(false)
  const itemsPerPage = ref(10)
  const totalItems = ref(0)
  const query: Ref<TableQuery> = ref({})

  const fetchItems = async (params: TableParams = { page: 1, itemsPerPage: 10 }) => {
    try {
      isLoading.value = true

      // Fetch data from API
      // Pass the params and query to the callback function
      // The callback function should return a Promise with the data and meta information
      const result = await callback(params, { ...query.value })

      data.value = result.data
      totalItems.value = result.meta.total || 0
    }
    catch (error) {
      console.error(error)
    }
    finally {
      isLoading.value = false
    }
  }

  watchDebounced(() => query.value, async () => {
    await fetchItems()
  }, { deep: true, debounce: 500 })

  const queryCounter = computed(() => {
    return Object.keys(query.value).length
  })

  return {
    // Variables
    data,
    query,
    itemsPerPage,
    isLoading,
    totalItems,
    itemPerPageOptions: PAGE_OPTIONS,

    // Computed
    queryCounter,

    // Function
    fetchItems,
  }
}
