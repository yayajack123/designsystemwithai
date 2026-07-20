<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({
  sidebarRoute: 'students',
})

const route = useRoute()
const activeTab = ref<'details' | 'session'>('details')
const snackbar = ref(false)
const snackbarText = ref('')

// Student details data model
const student = ref({
  id: (route.query.id as string) || '1',
  name: 'Cristofer mango',
  initials: 'JS',
  countryFlag: '🇮🇩',
  countryName: 'Indonesia',
  username: 'PH20220102001',
  branch: 'Philipine ASIA',
  fullname: 'Cristofer mango',
  nickname: 'Cristofer',
  birthday: 'January 28, 2022',
  age: '11',
  gender: 'Male',
  phoneNumber: '08918298392',
  school: '-',
  status: 'Active',
  startDate: 'Oct 11, 2023',
  course: 'Beginner Intermediete'
})

const copyUsername = async () => {
  try {
    await navigator.clipboard.writeText(student.value.username)
    snackbarText.value = 'Username copied to clipboard!'
    snackbar.value = true
  } catch (err) {
    // Fallback if clipboard API fails
    snackbarText.value = `Username: ${student.value.username}`
    snackbar.value = true
  }
}
</script>

<template>
  <div class="student-detail-page">
    <!-- Header Section -->
    <div class="d-flex align-center gap-4 mb-4">
      <VBtn
        icon="ri-arrow-left-line"
        variant="outlined"
        color="secondary"
        size="small"
        class="back-btn"
        :to="{ name: 'students' }"
      />

      <div class="d-flex align-center gap-3">
        <VAvatar
          size="34"
          color="#F0EFF0"
          class="student-avatar"
        >
          <span class="text-body-1 font-weight-regular text-high-emphasis">
            {{ student.initials }}
          </span>
        </VAvatar>

        <div class="d-flex flex-column">
          <h1 class="student-name text-h6 font-weight-medium mb-0">
            {{ student.fullname }}
          </h1>
          <span class="student-country text-caption text-medium-emphasis">
            {{ student.countryFlag }} {{ student.countryName }}
          </span>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="custom-tabs-container mb-6">
      <div class="d-flex gap-2 border-b">
        <button
          class="custom-tab-btn"
          :class="{ active: activeTab === 'details' }"
          @click="activeTab = 'details'"
        >
          Student Details
        </button>
        <button
          class="custom-tab-btn"
          :class="{ active: activeTab === 'session' }"
          @click="activeTab = 'session'"
        >
          Session
        </button>
      </div>
    </div>

    <!-- Main Content Area -->
    <div v-if="activeTab === 'details'">
      <VRow>
        <!-- Left Column: Basic Info -->
        <VCol
          cols="12"
          md="8"
          lg="8"
        >
          <VCard
            variant="outlined"
            class="detail-card pa-6 pb-3"
          >
            <!-- Card Title -->
            <div class="d-flex align-center gap-3 mb-3">
              <div class="icon-wrapper">
                <VIcon
                  icon="ri-contacts-line"
                  color="primary"
                  size="20"
                />
              </div>
              <h2 class="card-title text-h6 font-weight-medium mb-0">
                Basic Info
              </h2>
            </div>

            <!-- Data List -->
            <div class="basic-info-list pl-md-11">
              <!-- Item: Username -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Username
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.username }}
                </div>
                <VBtn
                  icon="ri-checkbox-multiple-blank-line"
                  variant="text"
                  density="compact"
                  color="secondary"
                  size="small"
                  class="copy-btn"
                  @click="copyUsername"
                >
                  <VIcon icon="ri-checkbox-multiple-blank-line" size="18" />
                  <VTooltip activator="parent" location="top">
                    Copy Username
                  </VTooltip>
                </VBtn>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Branch -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Branch
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.branch }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Fullname -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Fullname
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.fullname }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Nickname -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Nickname
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.nickname }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Birthday -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Birthday
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.birthday }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Age -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Age
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.age }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Gender -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Gender
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.gender }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: Phone number -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  Phone number
                </div>
                <div class="info-value flex-grow-1 font-weight-regular">
                  {{ student.phoneNumber }}
                </div>
              </div>
              <VDivider class="my-0" />

              <!-- Item: School -->
              <div class="info-row d-flex align-center py-4">
                <div class="info-label font-weight-medium">
                  School
                </div>
                <div class="info-value flex-grow-1 font-weight-regular text-secondary-emphasis">
                  {{ student.school }}
                </div>
              </div>
            </div>
          </VCard>
        </VCol>

        <!-- Right Column: Settings -->
        <VCol
          cols="12"
          md="4"
          lg="4"
        >
          <VCard
            variant="outlined"
            class="detail-card pa-6"
          >
            <!-- Card Title -->
            <div class="d-flex align-center gap-3 mb-6">
              <div class="icon-wrapper">
                <VIcon
                  icon="ri-settings-2-line"
                  color="primary"
                  size="20"
                />
              </div>
              <h2 class="card-title text-h6 font-weight-medium mb-0">
                Settings
              </h2>
            </div>

            <!-- Settings Fields -->
            <div class="settings-list d-flex flex-column gap-5">
              <!-- Field: Student status -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Student status
                </div>
                <div class="d-flex align-center gap-2">
                  <span class="status-dot green-dot" />
                  <span class="settings-value text-body-1 text-high-emphasis">
                    {{ student.status }}
                  </span>
                </div>
              </div>

              <!-- Field: Country -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Country
                </div>
                <div class="settings-value text-body-1 text-high-emphasis">
                  {{ student.countryName }}
                </div>
              </div>

              <!-- Field: Start Date -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Start Date
                </div>
                <div class="settings-value text-body-1 text-high-emphasis">
                  {{ student.startDate }}
                </div>
              </div>

              <!-- Field: Course -->
              <div class="settings-item">
                <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                  Course
                </div>
                <div class="settings-value text-body-1 text-high-emphasis">
                  {{ student.course }}
                </div>
              </div>
            </div>
          </VCard>
        </VCol>
      </VRow>
    </div>

    <!-- Session Tab Placeholder Content -->
    <div v-else-if="activeTab === 'session'">
      <VCard
        variant="outlined"
        class="detail-card pa-6"
      >
        <div class="text-center py-8">
          <VIcon icon="ri-calendar-event-line" size="48" color="medium-emphasis" class="mb-3" />
          <h3 class="text-h6 font-weight-medium text-high-emphasis mb-1">
            Student Sessions
          </h3>
          <p class="text-body-2 text-medium-emphasis mb-0">
            Session history for {{ student.fullname }} will appear here.
          </p>
        </div>
      </VCard>
    </div>

    <!-- Toast Notification -->
    <VSnackbar
      v-model="snackbar"
      timeout="2000"
      color="success"
      location="bottom right"
    >
      {{ snackbarText }}
    </VSnackbar>
  </div>
</template>

<style lang="scss" scoped>
.student-detail-page {
  font-family: 'Poppins', sans-serif;
}

.back-btn {
  border-color: rgba(var(--v-theme-on-surface), 0.12) !important;
  border-radius: 6px;
}

.student-avatar {
  border-radius: 500px;
}

.student-name {
  color: rgba(46, 38, 61, 0.9);
  letter-spacing: -0.36px;
  line-height: 28px;
}

.student-country {
  color: rgba(46, 38, 61, 0.55);
  letter-spacing: -0.26px;
  line-height: 20px;
}

.custom-tabs-container {
  .border-b {
    border-bottom: 1px solid rgba(46, 38, 61, 0.12);
  }

  .custom-tab-btn {
    padding: 8px 22px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(46, 38, 61, 0.9);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &.active {
      color: #10AF13;
      border-bottom-color: #10AF13;
    }
  }
}

.detail-card {
  border: 1px solid rgba(46, 38, 61, 0.12) !important;
  border-radius: 12px !important;
  background-color: #FFFFFF;
  box-shadow: none !important;
}

.icon-wrapper {
  background-color: rgba(16, 175, 19, 0.08);
  border-radius: 4px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  color: rgba(46, 38, 61, 0.9);
  letter-spacing: -0.36px;
}

.info-row {
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.3px;
  padding-top: 16px !important;
  padding-bottom: 16px !important;

  .info-label {
    width: 240px;
    min-width: 140px;
    color: rgba(46, 38, 61, 0.9);
  }

  .info-value {
    color: rgba(46, 38, 61, 0.9);
  }
}

.text-secondary-emphasis {
  color: rgba(46, 38, 61, 0.7) !important;
}

.copy-btn {
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}

.settings-list {
  .settings-label {
    color: rgba(46, 38, 61, 0.9);
    letter-spacing: -0.26px;
  }

  .settings-value {
    color: rgba(46, 38, 61, 0.9);
    letter-spacing: -0.3px;
  }
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;

  &.green-dot {
    background-color: #10AF13;
  }
}

.gap-5 {
  gap: 20px;
}
</style>
