<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  sidebarRoute: 'my-attendance',
})

// Filter state
const dateRange = ref('June 17, 2026 - June 24, 2026')

const resetFilter = () => {
  dateRange.value = 'June 17, 2026 - June 24, 2026'
}

// Mock Attendance Data
interface AttendanceSession {
  id: string
  time: string
  className: string
  branch: string
  status: 'Attend' | 'Absent'
  approvalStatus: 'On Review' | 'Approved' | 'Rejected'
}

interface AttendanceDayGroup {
  id: string
  dateLabel: string
  totalHours: string
  sessions: AttendanceSession[]
}

const attendanceGroups = ref<AttendanceDayGroup[]>([
  {
    id: 'g1',
    dateLabel: 'Monday, April 1',
    totalHours: '2 hours',
    sessions: [
      {
        id: 's1',
        time: '20:00 - 22:00',
        className: 'Coding Class',
        branch: 'Branch Renon',
        status: 'Attend',
        approvalStatus: 'On Review',
      },
    ],
  },
  {
    id: 'g2',
    dateLabel: 'Tuesday, April 2',
    totalHours: '0 hours',
    sessions: [
      {
        id: 's2',
        time: '20:00 - 22:00',
        className: 'Coding Class',
        branch: 'Branch Renon',
        status: 'Attend',
        approvalStatus: 'Approved',
      },
    ],
  },
  {
    id: 'g3',
    dateLabel: 'Wednesday, April 3',
    totalHours: '0 hours',
    sessions: [
      {
        id: 's3',
        time: '10:00 - 12:00',
        className: 'Design Class',
        branch: 'Branch Canggu',
        status: 'Attend',
        approvalStatus: 'Approved',
      },
      {
        id: 's4',
        time: '20:00 - 22:00',
        className: 'Coding Class',
        branch: 'Branch Renon',
        status: 'Attend',
        approvalStatus: 'Approved',
      },
    ],
  },
  {
    id: 'g4',
    dateLabel: 'Thursday, April 4',
    totalHours: '0 hours',
    sessions: [
      {
        id: 's5',
        time: '20:00 - 22:00',
        className: 'Coding Class',
        branch: 'Branch Renon',
        status: 'Attend',
        approvalStatus: 'Approved',
      },
    ],
  },
  {
    id: 'g5',
    dateLabel: 'Friday, April 5',
    totalHours: '0 hours',
    sessions: [
      {
        id: 's6',
        time: '20:00 - 22:00',
        className: 'Coding Class',
        branch: 'Branch Renon',
        status: 'Attend',
        approvalStatus: 'Approved',
      },
    ],
  },
])

// Sidebar Stats Data
const aboutStats = [
  {
    icon: 'ri-checkbox-circle-line',
    title: '12 Presence',
    desc: 'Total present on the class',
  },
  {
    icon: 'ri-archive-line',
    title: '20 Meeting left',
    desc: 'Total meeting on the class',
  },
  {
    icon: 'ri-error-warning-line',
    title: '24 Hours',
    desc: 'Total working hours',
  },
]

const branchStats = [
  {
    icon: 'ri-checkbox-circle-line',
    title: '2 Meetings',
    desc: 'Branch Renon',
  },
  {
    icon: 'ri-checkbox-circle-line',
    title: '10 Meetings',
    desc: 'Branch Canggu',
  },
]
</script>

<template>
  <div class="my-attendance-page">
    <!-- Header Section -->
    <div class="mb-6">
      <h1 class="page-title text-h5 font-weight-medium mb-1">
        Attendance
      </h1>
      <p class="page-subtitle text-body-1 text-medium-emphasis mb-0">
        See and manage all attendance
      </p>
    </div>

    <!-- Filters Section -->
    <div class="d-flex align-center gap-4 mb-6">
      <div class="date-input-wrapper">
        <VTextField
          v-model="dateRange"
          variant="outlined"
          density="compact"
          hide-details
          class="date-field"
          append-inner-icon="ri-calendar-2-line"
        />
      </div>

      <VBtn
        variant="text"
        color="primary"
        class="text-capitalize px-0 font-weight-medium reset-btn"
        @click="resetFilter"
      >
        Reset Filter
      </VBtn>
    </div>

    <!-- Main Content Area -->
    <VRow class="match-height">
      <!-- Left Column: Attendance Card List -->
      <VCol
        cols="12"
        md="8"
        lg="8"
      >
        <div class="d-flex flex-column gap-5">
          <div
            v-for="group in attendanceGroups"
            :key="group.id"
            class="attendance-day-card"
          >
            <!-- Card Title / Day Header -->
            <div class="card-day-header d-flex align-center justify-space-between px-5 py-4">
              <span class="day-date-title font-weight-medium text-high-emphasis">
                {{ group.dateLabel }}
              </span>
              <span class="day-hours-text text-body-1 text-medium-emphasis">
                {{ group.totalHours }}
              </span>
            </div>

            <!-- Sessions Wrapper -->
            <div class="card-sessions-wrapper pa-5 d-flex flex-column gap-3">
              <div
                v-for="session in group.sessions"
                :key="session.id"
                class="session-item-card d-flex align-center gap-3 pa-4"
              >
                <!-- Check Icon -->
                <VIcon
                  icon="ri-check-line"
                  size="24"
                  color="secondary"
                  class="session-check-icon"
                />

                <!-- Detail -->
                <div class="session-detail flex-grow-1">
                  <div class="d-flex align-center gap-2 flex-wrap">
                    <span class="session-time font-weight-medium text-high-emphasis">
                      {{ session.time }}
                    </span>
                    <span class="session-meta text-medium-emphasis">
                      {{ session.className }}
                    </span>
                    <span class="meta-dot" />
                    <span class="session-meta text-medium-emphasis">
                      {{ session.branch }}
                    </span>
                  </div>
                </div>

                <!-- Badges -->
                <div class="d-flex align-center gap-2">
                  <!-- Attendance Status Badge -->
                  <span class="custom-badge badge-success">
                    {{ session.status }}
                  </span>

                  <!-- Approval Badge -->
                  <span
                    class="custom-badge"
                    :class="{
                      'badge-warning': session.approvalStatus === 'On Review',
                      'badge-success': session.approvalStatus === 'Approved',
                    }"
                  >
                    {{ session.approvalStatus }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </VCol>

      <!-- Right Column: Teacher Progress & Attendance Summary -->
      <VCol
        cols="12"
        md="4"
        lg="4"
      >
        <VCard
          variant="outlined"
          class="progress-sidebar-card pa-6"
        >
          <!-- Total work hour / week -->
          <div class="work-hours-box d-flex flex-column align-center justify-center pa-4 mb-4">
            <div class="d-flex align-center gap-1 mb-1">
              <VIcon
                icon="ri-time-line"
                size="20"
                color="primary"
              />
              <span class="work-hours-value font-weight-medium">
                9 hours
              </span>
            </div>
            <span class="work-hours-label text-caption text-medium-emphasis">
              worked this week
            </span>
          </div>

          <VDivider class="my-4" />

          <!-- About Your Attendance -->
          <div class="sidebar-section mb-4">
            <h2 class="section-title text-body-1 font-weight-medium text-high-emphasis mb-4">
              About Your Attendance
            </h2>

            <div class="d-flex flex-column gap-3">
              <div
                v-for="(stat, idx) in aboutStats"
                :key="idx"
                class="stat-item-card d-flex align-center gap-3 pa-4"
              >
                <div class="stat-icon-wrapper">
                  <VIcon
                    :icon="stat.icon"
                    size="24"
                    color="primary"
                  />
                </div>
                <div class="d-flex flex-column">
                  <span class="stat-title text-body-1 font-weight-medium text-high-emphasis">
                    {{ stat.title }}
                  </span>
                  <span class="stat-desc text-caption text-medium-emphasis">
                    {{ stat.desc }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <VDivider class="my-4" />

          <!-- Attendance each branch -->
          <div class="sidebar-section">
            <h2 class="section-title text-body-1 font-weight-medium text-high-emphasis mb-4">
              Attendance each branch
            </h2>

            <div class="d-flex flex-column gap-3">
              <div
                v-for="(bStat, bIdx) in branchStats"
                :key="bIdx"
                class="stat-item-card d-flex align-center gap-3 pa-4"
              >
                <div class="stat-icon-wrapper">
                  <VIcon
                    :icon="bStat.icon"
                    size="24"
                    color="primary"
                  />
                </div>
                <div class="d-flex flex-column">
                  <span class="stat-title text-body-1 font-weight-medium text-high-emphasis">
                    {{ bStat.title }}
                  </span>
                  <span class="stat-desc text-caption text-medium-emphasis">
                    {{ bStat.desc }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.my-attendance-page {
  font-family: 'Poppins', sans-serif;
}

.page-title {
  color: rgba(46, 38, 61, 0.9);
  letter-spacing: -0.36px;
}

.page-subtitle {
  color: rgba(46, 38, 61, 0.7);
  letter-spacing: -0.3px;
}

.date-input-wrapper {
  width: 289px;

  :deep(.v-field) {
    border-radius: 6px !important;
    background-color: #FFFFFF;
  }
}

.reset-btn {
  font-size: 15px;
  letter-spacing: -0.3px;
}

.gap-5 {
  gap: 20px;
}

.attendance-day-card {
  background-color: #FFFFFF;
  border: 1px solid rgba(46, 38, 61, 0.12);
  border-radius: 12px;
  overflow: hidden;

  .card-day-header {
    background-color: #F7F6FA;
    border-bottom: 1px solid rgba(46, 38, 61, 0.08);

    .day-date-title {
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.3px;
      color: rgba(46, 38, 61, 0.9);
    }

    .day-hours-text {
      font-size: 15px;
      line-height: 22px;
      letter-spacing: -0.3px;
      color: rgba(46, 38, 61, 0.7);
    }
  }
}

.session-item-card {
  border: 1px solid rgba(46, 38, 61, 0.12);
  border-radius: 8px;
  background-color: #FFFFFF;

  .session-time {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(46, 38, 61, 0.9);
  }

  .session-meta {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(46, 38, 61, 0.7);
  }

  .meta-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(46, 38, 61, 0.4);
    display: inline-block;
  }
}

.custom-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 500px;
  font-size: 13px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.26px;

  &.badge-success {
    background-color: rgba(86, 202, 0, 0.16);
    color: #56CA00;
  }

  &.badge-warning {
    background-color: rgba(255, 180, 0, 0.16);
    color: #FFB400;
  }
}

.progress-sidebar-card {
  border: 1px solid rgba(46, 38, 61, 0.12) !important;
  border-radius: 12px !important;
  background-color: #FFFFFF;
  box-shadow: none !important;
}

.work-hours-box {
  border: 1px solid rgba(46, 38, 61, 0.12);
  border-radius: 8px;

  .work-hours-value {
    font-size: 24px;
    line-height: 38px;
    letter-spacing: -0.48px;
    color: #108513;
  }

  .work-hours-label {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(46, 38, 61, 0.55);
  }
}

.section-title {
  font-size: 18px;
  letter-spacing: -0.36px;
  color: rgba(46, 38, 61, 0.9);
}

.stat-item-card {
  background-color: #FAFAFA;
  border: 1px solid rgba(46, 38, 61, 0.12);
  border-radius: 12px;

  .stat-icon-wrapper {
    background-color: #FFFFFF;
    border: 1px solid rgba(46, 38, 61, 0.12);
    border-radius: 4px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .stat-title {
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.3px;
    color: rgba(46, 38, 61, 0.9);
  }

  .stat-desc {
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.26px;
    color: rgba(46, 38, 61, 0.7);
  }
}
</style>
