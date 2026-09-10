<script setup lang="ts">
import { computed, ref } from 'vue'
import ThemeCard from '@/components/themes/ThemeCard.vue'
import farmerImage from '@images/themes/theme-farmer.png'
import spaceImage from '@images/themes/theme-space.png'
import deepSeaImage from '@images/themes/theme-deep-sea.png'
import springImage from '@images/themes/theme-spring.png'
import summerImage from '@images/themes/theme-summer.png'
import autumnImage from '@images/themes/theme-autumn.png'

definePageMeta({
  sidebarRoute: 'themes',
})

interface ThemeItem {
  id: string
  name: string
  updatedAt: string
  image: string
  category: string
  visibility: string
}

const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)
const selectedSort = ref('Recently updated')
const page = ref(1)
const itemsPerPage = ref(10)
const selectedTheme = ref<ThemeItem | null>(null)
const showSelectionMessage = ref(false)

const categoryOptions = ['Nature', 'Space', 'Ocean', 'Seasonal']
const sortOptions = ['Recently updated', 'Name: A-Z', 'Name: Z-A']

const themes = ref<ThemeItem[]>([
  {
    id: 'farmer',
    name: 'Farmer Theme',
    updatedAt: '24 Aug 2026',
    image: farmerImage,
    category: 'Nature',
    visibility: 'Public',
  },
  {
    id: 'space',
    name: 'Space Theme',
    updatedAt: '24 Aug 2026',
    image: spaceImage,
    category: 'Space',
    visibility: 'Private',
  },
  {
    id: 'deep-sea',
    name: 'Deep Sea Theme',
    updatedAt: '24 Aug 2026',
    image: deepSeaImage,
    category: 'Ocean',
    visibility: 'Public',
  },
  {
    id: 'spring',
    name: 'Spring Theme',
    updatedAt: '24 Aug 2026',
    image: springImage,
    category: 'Seasonal',
    visibility: 'Private',
  },
  {
    id: 'summer',
    name: 'Summer Vibes',
    updatedAt: '12 Jul 2026',
    image: summerImage,
    category: 'Seasonal',
    visibility: 'Public',
  },
  {
    id: 'autumn',
    name: 'Autumn Colors',
    updatedAt: '18 Oct 2026',
    image: autumnImage,
    category: 'Seasonal',
    visibility: 'Public',
  },
])

const filteredThemes = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  const result = themes.value.filter(theme => {
    const matchesQuery = !query || theme.name.toLowerCase().includes(query)
    const matchesCategory = !selectedCategory.value || theme.category === selectedCategory.value

    return matchesQuery && matchesCategory
  })

  return [...result].sort((a, b) => {
    if (selectedSort.value === 'Name: A-Z') return a.name.localeCompare(b.name)
    if (selectedSort.value === 'Name: Z-A') return b.name.localeCompare(a.name)

    return b.updatedAt.localeCompare(a.updatedAt)
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = null
  selectedSort.value = 'Recently updated'
  page.value = 1
}

const handleCreateTheme = () => {
  // The create flow is intentionally kept as a local action until the backend route is available.
  selectedTheme.value = null
}

const handleSelectTheme = (theme: ThemeItem) => {
  selectedTheme.value = theme
  showSelectionMessage.value = true
}

const unwrapTheme = (item: ThemeItem | { raw?: ThemeItem }): ThemeItem => {
  return item.raw ?? item as ThemeItem
}
</script>

<template>
  <section class="themes-page">
    <header class="d-flex align-center gap-3 mb-5 themes-page__header">
      <VRow>
        <VCol cols="12" md="8">
          <h1 class="themes-page__title text-h4 font-weight-medium text-high-emphasis">
            Themes
          </h1>
          <p class="themes-page__description mb-0 text-body-1 text-medium-emphasis">
            Manage and organize visual themes for educational content.
          </p>
        </VCol>
        <VCol cols="12" md="4" class="d-flex align-center justify-end">
          <VBtn
            color="primary"
            height="38"
            class="themes-page__create"
            prepend-icon="ri-add-line"
            @click="handleCreateTheme"
          >
            Create Theme
          </VBtn>
        </VCol>
      </VRow>
    </header>

    <VCard class="themes-page__card" variant="outlined">
      <div class="themes-page__filters">
        <VTextField
          v-model="searchQuery"
          aria-label="Search theme name"
          placeholder="Search theme name...."
          prepend-inner-icon="ri-search-line"
          hide-details
          density="compact"
          variant="outlined"
          class="themes-page__search"
          @update:model-value="page = 1"
        />

        <div class="themes-page__filter-actions">
          <VSelect
            v-model="selectedCategory"
            :items="categoryOptions"
            label="Category"
            hide-details
            clearable
            density="compact"
            variant="outlined"
            class="themes-page__select"
            @update:model-value="page = 1"
          />
          <VSelect
            v-model="selectedSort"
            :items="sortOptions"
            label="Sort by"
            hide-details
            density="compact"
            variant="outlined"
            class="themes-page__select"
          />
          <VBtn
            variant="text"
            color="primary"
            class="themes-page__reset"
            @click="resetFilters"
          >
            Reset Filter
          </VBtn>
        </div>
      </div>

      <VDivider />

      <div v-if="filteredThemes.length" class="themes-page__table-wrap">
        <VDataTable
          v-model:page="page"
          v-model:items-per-page="itemsPerPage"
          :headers="[]"
          :items="filteredThemes"
          hide-default-header
          class="theme-grid-table"
        >
          <template #body="{ items }">
            <tbody>
              <tr>
                <td>
                  <div class="themes-page__grid">
                    <ThemeCard
                      v-for="item in items"
                      :key="unwrapTheme(item).id"
                      v-bind="unwrapTheme(item)"
                      @select="handleSelectTheme(unwrapTheme(item))"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </VDataTable>
      </div>

      <div v-else class="themes-page__empty">
        <VIcon icon="ri-palette-line" size="32" />
        <p>No themes match your filters.</p>
        <VBtn variant="text" color="primary" @click="resetFilters">
          Clear filters
        </VBtn>
      </div>

    </VCard>

    <VSnackbar v-model="showSelectionMessage" timeout="1800" color="primary">
      {{ selectedTheme?.name }} selected
    </VSnackbar>
  </section>
</template>

<style lang="scss" scoped>
.themes-page {
  padding-block-end: 32px;
}

.themes-page__header {
  min-height: 0;
}

.themes-page__title {
  color: rgba(var(--v-theme-on-surface), 0.9);
  letter-spacing: -0.48px;
}

.themes-page__description {
  color: rgba(var(--v-theme-on-surface), 0.55);
  letter-spacing: -0.3px;
}

.themes-page__create {
  flex: 0 0 auto;
  border-radius: 500px;
  box-shadow: 0 2px 4px rgba(var(--v-theme-on-surface), 0.16);
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-transform: none;
}

.themes-page__card {
  overflow: hidden;
  border-color: rgba(var(--v-theme-on-surface), 0.12);
  border-radius: 12px;
}

.themes-page__filters {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.themes-page__search {
  flex: 0 0 250px;
}

.themes-page__filter-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex: 1;
}

.themes-page__select {
  flex: 0 0 217px;
}

.themes-page__reset {
  flex: 0 0 auto;
  padding-inline: 14px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.3px;
  text-transform: none;
}

.themes-page__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  padding: 20px;
}

.themes-page__table-wrap {
  width: 100%;
  overflow: hidden;
}

.theme-grid-table {
  width: 100%;

  :deep(.v-table__wrapper) {
    overflow: visible;
  }

  :deep(table) {
    display: block;
    width: 100%;
  }

  :deep(tbody),
  :deep(tbody tr),
  :deep(tbody td) {
    display: block;
    width: 100%;
  }

  :deep(tbody tr:hover) {
    background: transparent !important;
  }

  :deep(td) {
    border: 0 !important;
    padding: 0 !important;
    width: 100%;
  }
}

.themes-page__empty {
  display: grid;
  justify-items: center;
  gap: 8px;
  padding: 72px 20px;
  color: rgba(var(--v-theme-on-surface), 0.7);
}

.themes-page__empty p {
  margin: 0;
}

@media (max-width: 1100px) {
  .themes-page__filters {
    align-items: stretch;
    flex-wrap: wrap;
  }

  .themes-page__search {
    flex-basis: 100%;
  }
}

@media (max-width: 760px) {
  .themes-page {
    padding-block: 12px 24px;
  }

  .themes-page__header {
    align-items: flex-start;
  }

  .themes-page__create {
    width: 100%;
  }

  .themes-page__filter-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .themes-page__select {
    flex-basis: auto;
  }

  .themes-page__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    padding: 16px;
  }

}

@media (max-width: 480px) {
  .themes-page__grid {
    grid-template-columns: 1fr;
  }
}
</style>
