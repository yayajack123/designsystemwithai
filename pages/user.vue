<script setup lang="ts">
import type { UiAutoCompleteCallbackResponse } from '@/components/ui/UiAutoComplete.vue'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import { useDatatable } from '@/composables/starter/useDatatable'
import type { AdminListItem } from '@/types/modules/admin'
import AddNewUserDrawer from '@/views/user/AddNewUserDrawer.vue'

const { $api } = useNuxtApp()

const roleList = ref([])

const {
  itemsPerPage,
  query,
  queryCounter,
  totalItems,
  fetchItems,
  data: adminList,
  isLoading,
  itemPerPageOptions,
} = useDatatable<AdminListItem>(async (params, queryParams) => {
  return await $api.admin.list({
    query: {
      page: params.page,
      limit: params.itemsPerPage,
      ...queryParams,
    },
  })
})

const resetFilter = () => {
  query.value = {}
}

const fetchRoleData = async (): Promise<UiAutoCompleteCallbackResponse> => {
  const response = await $api.auth.getRole()

  return {
    data: response.data.map((role: any) => ({
      id: role.id,
      name: role.name,
    })),
    meta: response.meta,
  }
}

await fetchRoleData()

// Headers
const headers = [
  { title: 'User', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Role', key: 'role_name' },
  { title: 'Actions', key: 'actions', sortable: false, width: '0' },
]

const isAddNewUserDrawerVisible = ref(false)

const addNewUser = async (userData: any) => {
  await $api.admin.store({
    body: {
      name: userData.name,
      email: userData.email,
      role: userData.role,
      password: userData.password,
      password_confirmation: userData.passwordConfirmation,
    },
  })

  await fetchItems()
}

definePageMeta({
  sidebarRoute: 'user',
})
</script>

<template>
  <section>
    <UiSectionHeader
      title="User List"
      description="List of all users"
    >
      <template #actions>
        <VBtn @click="isAddNewUserDrawerVisible = true">
          <VIcon
            start
            icon="ri-add-circle-line"
          />
          Add New
        </VBtn>
      </template>
    </UiSectionHeader>

    <VCard class="mb-6">
      <!-- SECTION datatable -->
      <VCardText>
        <div class="d-flex justify-between align-center ga-6">
          <VRow>
            <VCol
              cols="12"
              md="3"
            >
              <VTextField
                v-model="query.search"
                label="Search"
                placeholder="Search by name or email"
                append-inner-icon="ri-search-line"
              />
            </VCol>
            <VCol
              cols="12"
              md="3"
            >
              <VSelect
                v-model="query.gender"
                label="Gender"
                :items="[{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }]"
                item-title="text"
                item-value="value"
              />
            </VCol>
            <VCol
              cols="12"
              md="3"
            >
              <VSelect
                v-model="query.status"
                label="Status"
                :items="[{ text: 'Active', value: 'active' }, { text: 'Inactive', value: 'inactive' }]"
                item-title="text"
                item-value="value"
              />
            </VCol>
            <VCol
              cols="12"
              md="3"
            >
              <UiAutoComplete
                v-model="query.role"
                label="Role"
                :callback="fetchRoleData"
                item-title="name"
                item-value="id"
                placeholder="Select Role"
              />
            </VCol>
          </VRow>

          <VBtn
            color="error"
            variant="text"
            :loading="isLoading"
            :disabled="queryCounter <= 0"
            @click="resetFilter"
          >
            Reset Filter
          </VBtn>
        </div>
      </VCardText>

      <VDataTableServer
        v-model:items-per-page="itemsPerPage"
        class="text-no-wrap rounded-0"
        :items="adminList"
        :items-per-page-options="itemPerPageOptions"
        :items-length="totalItems"
        :headers="headers"
        :loading="isLoading"
        @update:options="fetchItems"
      >
        <!-- User -->
        <template #item.name="{ item }">
          <div class="d-flex align-center">
            <VAvatar
              size="34"
              class="me-3"
            >
              <VImg
                v-if="item.photo"
                :src="item.photo"
              />
              <span v-else>{{ avatarText(item.name) }}</span>
            </VAvatar>

            <div class="d-flex flex-column">
              <NuxtLink
                :to="{ name: 'user' }"
                class="text-h6 font-weight-medium user-list-name"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
        </template>

        <!-- Actions -->
        <template #item.actions="{ item }">
          <IconBtn
            color="error"
            size="small"
            @click="console.log('delete_items', item)"
          >
            <VIcon icon="ri-delete-bin-7-line" />
            <VTooltip
              activator="parent"
              location="top"
            >
              Delete
            </VTooltip>
          </IconBtn>

          <IconBtn
            size="small"
            @click="console.log('detail', item)"
          >
            <VIcon icon="ri-eye-line" />
            <VTooltip
              activator="parent"
              location="top"
            >
              Details
            </VTooltip>
          </IconBtn>

          <VMenu location="bottom">
            <template #activator="{ props }">
              <IconBtn
                v-bind="props"
                size="small"
              >
                <VIcon icon="ri-more-fill" />
                <VTooltip
                  activator="parent"
                  location="top"
                >
                  More
                </VTooltip>
              </IconBtn>
            </template>

            <VList density="compact">
              <VListItem @click="console.log('dummy', item)">
                <template #prepend>
                  <VIcon icon="ri-checkbox-multiple-blank-line" />
                </template>

                <VListItemTitle>Dummy Option 1</VListItemTitle>
              </VListItem>

              <VListItem @click="console.log('edit', item)">
                <template #prepend>
                  <VIcon icon="ri-pencil-line" />
                </template>

                <VListItemTitle>Edit</VListItemTitle>
              </VListItem>
            </VList>
          </VMenu>
        </template>
      </VDataTableServer>
    </VCard>
    <!-- 👉 Add New User -->
    <AddNewUserDrawer
      v-model:isDrawerOpen="isAddNewUserDrawerVisible"
      :role-list="roleList"
      @user-data="addNewUser"
    />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 24.0625rem;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}
</style>
