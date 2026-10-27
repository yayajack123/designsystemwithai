<script setup lang="ts">
import { computed, ref } from 'vue'
import UiSectionHeader from '@/components/ui/UiSectionHeader.vue'
import { makeMarketingStudents, selectMarketingTemplate, useMarketingTemplates } from '@/composables/useMarketingTemplates'

definePageMeta({ sidebarRoute: 'marketing-templates' })

const { templates } = useMarketingTemplates()
const students = makeMarketingStudents()
const selectedStudentId = ref(students[0].id)
const journalDate = ref(new Date().toISOString().slice(0, 10))
const selectedStudent = computed(() => students.find(student => student.id === selectedStudentId.value) || students[0])
const result = computed(() => selectMarketingTemplate(templates.value, selectedStudent.value, journalDate.value))
const cases = computed(() => students.slice(0, 10).map(student => ({ student, result: selectMarketingTemplate(templates.value, student, journalDate.value) })))
</script>

<template>
  <div class="rule-tester-page">
    <UiSectionHeader title="Rule tester" description="See which published template wins for a student and journal date." :back="{ path: '/marketing/templates' }" />
    <VRow>
      <VCol cols="12" md="4">
        <VCard rounded="lg">
          <VCardTitle class="text-h6">Test profile</VCardTitle>
          <VCardText>
            <VSelect v-model="selectedStudentId" :items="students.map(student => ({ title: `${student.code} · ${student.initials} · ${student.branch}`, value: student.id }))" label="Student profile" />
            <VTextField v-model="journalDate" label="Journal date" type="date" />
            <div class="text-body-2 text-medium-emphasis">Country: <strong>{{ selectedStudent.country }}</strong></div>
            <div class="text-body-2 text-medium-emphasis mt-1">Branch: <strong>{{ selectedStudent.branch }}</strong></div>
            <div class="text-body-2 text-medium-emphasis mt-1">Course: <strong>{{ selectedStudent.course }}</strong></div>
            <div class="text-body-2 text-medium-emphasis mt-1">Student code: <strong>{{ selectedStudent.code }}</strong></div>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="8">
        <VCard rounded="lg" class="result-card">
          <VCardText>
            <p class="text-body-2 text-medium-emphasis mb-2">Selected template</p>
            <h2 class="text-h4 mb-2">{{ result?.template.name || 'No template selected' }}</h2>
            <VChip v-if="result" size="small" :color="result.template.isDefault ? 'secondary' : 'success'" variant="tonal">{{ result.template.isDefault ? 'Fallback' : 'Rule match' }}</VChip>
            <VAlert v-if="result" type="info" variant="tonal" class="mt-4">{{ result.reason }}</VAlert>
            <VAlert v-else type="error" variant="tonal" class="mt-4">No active rule or default template matches this profile.</VAlert>
          </VCardText>
        </VCard>
        <VCard rounded="lg" class="mt-5">
          <VCardTitle class="text-h6">Sample profiles</VCardTitle>
          <VTable class="text-no-wrap">
            <thead><tr><th>Student</th><th>Country / branch</th><th>Selected template</th><th>Reason</th></tr></thead>
            <tbody><tr v-for="item in cases" :key="item.student.id"><td>{{ item.student.code }} · {{ item.student.initials }}</td><td>{{ item.student.country }} / {{ item.student.branch }}</td><td>{{ item.result?.template.name || 'No match' }}</td><td>{{ item.result?.reason || 'No default' }}</td></tr></tbody>
          </VTable>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

