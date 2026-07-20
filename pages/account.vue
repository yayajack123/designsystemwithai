<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  sidebarRoute: 'account',
})

const snackbar = ref(false)
const snackbarText = ref('')

// Account / Teacher Data Model
const teacher = ref({
  id: 'PH202201020',
  name: 'Cristofer Mango',
  location: 'Denpasar',
  avatar: '',
  initials: 'CM',
  fullname: 'Kristin Watson',
  generation: '2',
  email: 'harvey@email.com',
  phone: '089182983232',
  birthdayAndAge: '26 Aug 1999 & 24',
  npwp: '-',
  gender: 'Male',
  region: 'Denpasar, Bali, Indonesia',
  address: 'Jl. Segara Madu No.88, Kelan Abian',

  // Details
  branch: 'Branch Renon',
  program: 'Coding',
  language: 'English, Indonesia',
  skill: 'Coding',
  score: '20',
  baseTeacher: '20',
  note: '-',

  // Settings
  status: 'Active',
  registeredDate: 'January 01, 2023',
  level: 'Gold',
  username: 'kristinwatson',
})

const copyTeacherId = async () => {
  try {
    await navigator.clipboard.writeText(teacher.value.id)
    snackbarText.value = 'Teacher ID copied to clipboard!'
    snackbar.value = true
  } catch (err) {
    snackbarText.value = `Teacher ID: ${teacher.value.id}`
    snackbar.value = true
  }
}
</script>

<template>
  <div class="account-page">
    <!-- Header Section -->
    <div class="d-flex align-center gap-4 mb-6">
      <VAvatar
        size="48"
        color="#F0EFF0"
        class="teacher-avatar"
      >
        <span class="text-h6 font-weight-medium text-high-emphasis">
          {{ teacher.initials }}
        </span>
      </VAvatar>

      <div class="d-flex flex-column">
        <h1 class="teacher-title text-h5 font-weight-medium mb-0">
          {{ teacher.name }}
        </h1>
        <span class="teacher-location text-body-1 text-medium-emphasis">
          {{ teacher.location }}
        </span>
      </div>
    </div>

    <!-- Main Content Area -->
    <VRow>
      <!-- Left Column: Teacher Information & Teacher Details -->
      <VCol
        cols="12"
        md="8"
        lg="8"
      >
        <!-- Card 1: Teacher Information -->
        <VCard
          variant="outlined"
          class="detail-card pa-6 pb-3 mb-6"
        >
          <!-- Card Title & Action -->
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="d-flex align-center gap-3">
              <div class="icon-wrapper">
                <VIcon
                  icon="ri-book-read-line"
                  color="primary"
                  size="20"
                />
              </div>
              <h2 class="card-title text-h6 font-weight-medium mb-0">
                Teacher Information
              </h2>
            </div>

            <VBtn
              variant="text"
              color="primary"
              class="text-capitalize font-weight-medium px-2"
            >
              <VIcon
                icon="ri-pencil-line"
                size="16"
                class="me-1"
              />
              Edit Teacher Info
            </VBtn>
          </div>

          <!-- Data List -->
          <div class="info-list pl-md-11">
            <!-- Item: Teacher ID -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Teacher ID
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.id }}
              </div>
              <VBtn
                icon="ri-file-copy-line"
                variant="text"
                density="compact"
                color="secondary"
                size="small"
                class="copy-btn"
                @click="copyTeacherId"
              >
                <VIcon icon="ri-file-copy-line" size="18" />
                <VTooltip activator="parent" location="top">
                  Copy Teacher ID
                </VTooltip>
              </VBtn>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Name -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Name
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.fullname }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Generation -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Generation
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.generation }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Email -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Email
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.email }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Phone -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Phone
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.phone }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Birthday & Age -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Birthday & Age
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.birthdayAndAge }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: NPWP -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                NPWP
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.npwp }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Gender -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Gender
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.gender }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Region -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Region
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.region }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Address -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Address
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.address }}
              </div>
            </div>
          </div>
        </VCard>

        <!-- Card 2: Teacher Details -->
        <VCard
          variant="outlined"
          class="detail-card pa-6 pb-3"
        >
          <!-- Card Title & Action -->
          <div class="d-flex align-center justify-space-between mb-3">
            <div class="d-flex align-center gap-3">
              <div class="icon-wrapper">
                <VIcon
                  icon="ri-contacts-line"
                  color="primary"
                  size="20"
                />
              </div>
              <h2 class="card-title text-h6 font-weight-medium mb-0">
                Teacher Details
              </h2>
            </div>

            <VBtn
              variant="text"
              color="primary"
              class="text-capitalize font-weight-medium px-2"
            >
              <VIcon
                icon="ri-pencil-line"
                size="16"
                class="me-1"
              />
              Edit Teacher Details
            </VBtn>
          </div>

          <!-- Data List -->
          <div class="info-list pl-md-11">
            <!-- Item: Branch -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Branch
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.branch }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Program -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Program
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.program }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Language -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Language
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.language }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Skill -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Skill
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.skill }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Score -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Score
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.score }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Base Teacher -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Base Teacher
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.baseTeacher }}
              </div>
            </div>
            <VDivider class="my-0" />

            <!-- Item: Note -->
            <div class="info-row d-flex align-center py-4">
              <div class="info-label font-weight-medium">
                Note
              </div>
              <div class="info-value flex-grow-1 font-weight-regular">
                {{ teacher.note }}
              </div>
            </div>
          </div>
        </VCard>
      </VCol>

      <!-- Right Column: Photo & Settings -->
      <VCol
        cols="12"
        md="4"
        lg="4"
      >
        <VCard
          variant="outlined"
          class="detail-card pa-6"
        >
          <!-- Photo Profile Section -->
          <div class="d-flex flex-column align-center justify-center mb-5">
            <span class="text-body-1 font-weight-medium text-high-emphasis mb-3">
              Photo Profile
            </span>

            <div class="profile-avatar-container relative">
              <VAvatar
                size="64"
                color="#F0EFF0"
              >
                <span class="text-h6 font-weight-medium text-high-emphasis">
                  {{ teacher.initials }}
                </span>
              </VAvatar>

              <button class="avatar-edit-badge d-flex align-center justify-center">
                <VIcon
                  icon="ri-pencil-line"
                  size="14"
                  color="high-emphasis"
                />
              </button>
            </div>
          </div>

          <VDivider class="my-5" />

          <!-- Settings Header -->
          <div class="d-flex align-center gap-3 mb-5">
            <div class="icon-wrapper">
              <VIcon
                icon="ri-settings-3-line"
                color="primary"
                size="20"
              />
            </div>
            <h2 class="card-title text-body-1 font-weight-medium mb-0">
              Settings
            </h2>
          </div>

          <!-- Settings Fields -->
          <div class="settings-list d-flex flex-column gap-4 mb-6">
            <!-- Status -->
            <div class="settings-item">
              <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                Status
              </div>
              <div class="d-flex align-center">
                <span class="status-badge active-badge">
                  {{ teacher.status }}
                </span>
              </div>
            </div>

            <!-- Registered date -->
            <div class="settings-item">
              <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                Registered date
              </div>
              <div class="settings-value text-body-1 text-medium-emphasis">
                {{ teacher.registeredDate }}
              </div>
            </div>

            <!-- Level -->
            <div class="settings-item">
              <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                Level
              </div>
              <div class="d-flex align-center gap-1">
                <VIcon
                  icon="ri-vip-crown-line"
                  size="18"
                  color="warning"
                />
                <span class="settings-value text-body-1 text-medium-emphasis">
                  {{ teacher.level }}
                </span>
              </div>
            </div>

            <!-- Username -->
            <div class="settings-item">
              <div class="settings-label text-caption font-weight-medium text-high-emphasis mb-1">
                Username
              </div>
              <div class="settings-value text-body-1 text-medium-emphasis">
                {{ teacher.username }}
              </div>
            </div>
          </div>

          <VDivider class="my-5" />

          <!-- Action Button: Change Password -->
          <VBtn
            variant="outlined"
            color="primary"
            block
            class="change-password-btn text-capitalize font-weight-medium rounded-pill"
          >
            <VIcon
              icon="ri-lock-password-line"
              size="16"
              class="me-1"
            />
            Change Password
          </VBtn>
        </VCard>
      </VCol>
    </VRow>

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
.account-page {
  font-family: 'Poppins', sans-serif;
}

.teacher-title {
  color: rgba(46, 38, 61, 0.9);
  letter-spacing: -0.36px;
  line-height: 28px;
}

.teacher-location {
  color: rgba(46, 38, 61, 0.55);
  letter-spacing: -0.26px;
  line-height: 20px;
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
    color: rgba(46, 38, 61, 0.7);
  }
}

.copy-btn {
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}

.profile-avatar-container {
  position: relative;
  display: inline-block;

  .avatar-edit-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    background-color: #FFFFFF;
    border: 1px solid rgba(46, 38, 61, 0.12);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}

.settings-list {
  .settings-label {
    color: rgba(46, 38, 61, 0.9);
    letter-spacing: -0.26px;
  }

  .settings-value {
    color: rgba(46, 38, 61, 0.7);
    letter-spacing: -0.3px;
  }
}

.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.26px;

  &.active-badge {
    background-color: rgba(86, 202, 0, 0.08);
    color: #10AF13;
  }
}

.change-password-btn {
  border-color: #10AF13 !important;
}

.gap-4 {
  gap: 16px;
}
</style>
