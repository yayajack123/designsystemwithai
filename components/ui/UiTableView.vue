<script setup lang="ts">
import UiSectionHeader from './UiSectionHeader.vue'

interface TabItem {
  label: string
  value: string
  count?: number
  icon?: string
  badgeColor?: string
}

const props = withDefaults(defineProps<{
  title: string
  description?: string
  tabs?: TabItem[]
  headers?: any[]
  items?: any[]
  loading?: boolean
  itemsPerPage?: number
  showViewToggle?: boolean
  back?: any
}>(), {
  tabs: () => [],
  headers: () => [],
  items: () => [],
  loading: false,
  itemsPerPage: 10,
  showViewToggle: false,
})

const emit = defineEmits<{
  (e: 'reset-filters'): void
}>()

const activeTab = defineModel<string>('activeTab')
const viewType = defineModel<string>('viewType', { default: 'list' })
</script>

<template>
  <section class="ui-table-view">
    <!-- Page Header Title & Description -->
    <UiSectionHeader
      v-if="props.title"
      :title="props.title"
      :description="props.description"
      :back="props.back"
      class="mb-5"
    >
      <template #actions>
        <slot name="header-actions" />
      </template>
    </UiSectionHeader>

    <!-- Tab navigation -->
    <VTabs
      v-if="props.tabs && props.tabs.length"
      v-model="activeTab"
      class="v-tabs-bordered mb-6"
    >
      <VTab
        v-for="tab in props.tabs"
        :key="tab.value"
        :value="tab.value"
      >
        <VIcon
          v-if="tab.icon"
          start
          :icon="tab.icon"
          class="me-2"
        />
        {{ tab.label }}
        <span
          v-if="tab.count !== undefined"
          class="count-badge ms-2"
          :class="activeTab === tab.value ? 'bg-primary text-white' : 'bg-secondary text-white'"
        >
          {{ tab.count }}
        </span>
      </VTab>
    </VTabs>

    <!-- Main Card View -->
    <VCard>
      <!-- Filter Inputs section (up to 2 rows filter) -->
      <VCardText class="d-flex align-center justify-space-between flex-wrap gap-4 py-4">
        <div class="d-flex align-center flex-wrap gap-4 flex-grow-1">
          <slot name="filters" />
          
          <slot name="filter-actions">
            <VBtn
              variant="text"
              color="primary"
              @click="emit('reset-filters')"
            >
              Reset Filter
            </VBtn>
          </slot>
        </div>

        <!-- Toggle view inside filter section -->
        <div v-if="props.showViewToggle" class="d-flex align-center gap-2">
          <slot name="view-toggle">
            <VBtnToggle
              v-model="viewType"
              mandatory
              class="custom-toggle-group"
            >
              <VBtn
                value="list"
                icon="ri-list-unordered"
              />
              <VBtn
                value="team"
                icon="ri-team-line"
              />
              <VBtn
                value="room"
                icon="ri-door-closed-line"
              />
            </VBtnToggle>
          </slot>
        </div>
      </VCardText>

      <VDivider />

      <!-- Loading State -->
      <template v-if="props.loading">
        <div class="pa-6">
          <VSkeletonLoader
            v-for="n in 3"
            :key="n"
            type="table-row-divider@4"
            class="mb-2"
          />
        </div>
      </template>

      <!-- Data Table or Custom views -->
      <template v-else>
        <!-- Standard list view using VDataTable -->
        <div v-if="viewType === 'list'">
          <slot name="table-content">
            <VDataTable
              :headers="props.headers"
              :items="props.items"
              :items-per-page="props.itemsPerPage"
              class="text-no-wrap"
            >
              <!-- Forward all dynamic slots (like #item.status, #no-data, etc.) to parent -->
              <template
                v-for="(_, slotName) in $slots"
                #[slotName]="slotData"
              >
                <slot
                  v-if="slotName.startsWith('item.') || slotName === 'no-data'"
                  :name="slotName"
                  v-bind="slotData"
                />
              </template>
            </VDataTable>
          </slot>
        </div>

        <!-- Slot for custom viewTypes (e.g. view-team, view-room, etc.) -->
        <div v-else>
          <slot :name="`view-${viewType}`" :items="props.items" />
        </div>
      </template>
    </VCard>
  </section>
</template>

<style lang="scss" scoped>
.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 500px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1;
  min-width: 24px;
  height: 18px;
}

// Custom styles for the toggle button group matching assessment page
:deep(.custom-toggle-group) {
  border: 1px solid rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 8px !important;
  padding: 7px !important;
  background-color: rgb(var(--v-theme-surface)) !important;
  height: 50px !important;
  align-items: center;
  display: inline-flex;
  box-shadow: none !important;

  .v-btn {
    border-radius: 4px !important;
    height: 36px !important;
    min-width: 36px !important;
    width: 36px !important;
    margin: 0 !important;
    border: none !important;
    background-color: transparent !important;
    color: rgba(var(--v-theme-on-surface), 0.7) !important;
    box-shadow: none !important;

    // Active state styles
    &.v-btn--active {
      background-color: rgba(var(--v-theme-on-surface), 0.08) !important;
      color: rgba(var(--v-theme-on-surface), 0.9) !important;
      
      .v-btn__overlay {
        opacity: 0 !important;
      }
    }

    // Inactive state styles (non-active hover)
    &:not(.v-btn--active):hover {
      background-color: rgba(var(--v-theme-on-surface), 0.04) !important;
    }
  }

  // Remove default divided borders if any
  &.v-btn-group--divided .v-btn:not(:last-child) {
    border-inline-end-color: transparent !important;
  }
}
</style>
