<script setup lang="ts">
import { useAuthStore } from '../../store/auth'
import useDateUtils, { DateUtils } from '~/composables/useDateUtils';
definePageMeta({
  title: 'Pipeline',
  
})

interface ColumnContent {
  title: string
  tasks: any[]
}

interface Column {
  [key: string]: ColumnContent
}
const { $api } = useNuxtApp();
const { user } = useAuthStore();
const columns = reactive<Column>({
  cb: {
    title: 'File CB',
    tasks: [],
  },
  new: {
    title: 'New Leads',
    tasks: [],
  },
  cold: {
    title: 'Cold Leads',
    tasks: [],
  },
  mild: {
    title: 'Mild Leads',
    tasks: [],
  },
  hot: {
    title: 'Hot Leads',
    tasks: [],
  },
  sold: {
    title: 'Sold Leads',
    tasks: [],
  }
})

const { open } = usePanels()

const route = useRoute()
const slug = computed(() => route.params.slug)

const query = computed(() => {
  return {
    slug: slug.value,
  }
})
const dateUtils: DateUtils = useDateUtils();
// const { data, pending, error, refresh } = await useFetch(
//   '/api/company/projects',
//   {
//     query,
//   },
// )

const queryObject = {
  "q": [[["where","user_id",user.bam_user_id],["with","bam_user"],["with","bam_talentci"],["with","bam_talentci.bam_online_all"],["orderBy","callback_ts","DESC"]]]
};
const {
    data,
    pending,
    error,
    refresh
  } = await $api.etLeads.getAssignedLeads(queryObject);

console.log("====================",data?.value?.data)
// const tasks = ref(data.value?.project?.tasks)
const leadsData = ref(data?.value?.data)
console.log("leadsData==>",leadsData)
if (leadsData.value) {
  for (const leadInfo of leadsData.value) {
   
    switch (leadInfo.status) {
      case 0:
        columns.new.tasks.push(leadInfo)
        break
      case 1:
        columns.hot.tasks.push(leadInfo)
        break
      case 2:
        columns.mild.tasks.push(leadInfo)
        break
      case 3:
        columns.cold.tasks.push(leadInfo)
        break
      case 4:
        columns.sold.tasks.push(leadInfo)
        break
    }
  }
}
const board = computed(() => Object.values(columns || {}))

const currentTask = ref()



const formatDate = (date) => dateUtils.formatUnixDate(date);
</script>

<template>

    <div class="flex h-[calc(100vh_-_133px)] grow space-x-6 overflow-auto pt-2">
      <!-- Column -->
      <div
        v-for="column in board"
        :key="column.title"
        class="flex h-full w-72 shrink-0 flex-col"
      >
        <!-- Column header -->
        <div class="flex h-14 shrink-0 items-center px-2">
          <!-- Column title -->
          <span class="block font-sans text-sm font-semibold">{{
            column.title
          }}</span>
          <!-- Column count -->
          <span
            class="text-primary-500 dark:text-sunny ms-2 flex h-5 w-5 items-center justify-center text-sm font-semibold"
            >{{ column.tasks.length }}</span
          >
         
        </div>
        <!-- Scrollable area -->
        <div class="nui-slimscroll overflow-auto pb-10 pe-2">
          <Container
            tag="div"
            class="flex flex-col gap-y-4"
            orientation="vertical"
            :group-name="column.title"
            drag-class="transform rotate-2 transform-gpu"
            drop-class="opacity-40"
            :drop-placeholder="{
              className:
                'mt-4 border-muted-200 border-dashed dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white opacity-60 mb-4',
            }"
            @drop="(dropResult: any) => onDrop(column, dropResult)"
          >
            <!-- Board card -->
            <template v-if="column.tasks.length > 0">
              <Draggable v-for="task in column.tasks" :key="task.id">
                <div
                  class="border-muted-200 dark:border-muted-700 dark:bg-muted-800 group relative flex cursor-pointer flex-col items-start rounded-lg border bg-white/90 p-4 hover:bg-white"
                  draggable="true"
                  @click="() => openTaskPanel(task.id, data?.project.tasks)"
                >
                
                  <div class="relative mb-2">
                    <div
                      class="mb-2 flex w-full items-center justify-between gap-2"
                    >
                      <BaseTag
                        shape="full"
                        flavor="pastel"
                        color="muted"
                        class="m-0 -ms-1 inline-flex h-6 scale-90 items-center py-0 text-xs font-semibold"
                        >Talentnum: {{ task.talentnum }}</BaseTag
                      >
                      <BaseText size="xs" class="text-muted-400">{{
                        task.created
                      }}</BaseText>
                    </div>
                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="medium"
                      class="line-clamp-2"
                    >
                      <div class="flex items-center">
                        <BaseAvatar
                        :src="task.bam_talentci?.profile_picture_path"
                        :text="profile-image"
                        :class="getRandomColor()"
                        />
                        <div class="ms-3 leading-none">
                        <h4 class="font-sans text-sm font-medium">
                            {{ task.bam_talentci?.fname+' '+task.bam_talentci?.lname }}
                        </h4>
                        <p class="text-muted-400 font-sans text-xs">
                            {{ task.bam_talentci?.sex+' , '+task.bam_talentci?.age+' , '+task.bam_talentci?.state }}
                        </p>
                        <p v-if="task.disposition" class="text-success-400 font-sans text-xs">
                             <label class="text-muted-400"> Status:</label> {{ task.disposition }}
                        </p>
                        
                        </div>
                    </div>
                    </BaseHeading>
                     <p v-if="task.bam_talentci.date_entered" class="text-info-400 font-sans text-xs mt-2">
                             <label class="text-muted-400"> Signup Date:</label> {{ formatDate(task.bam_talentci.date_entered) }}
                        </p>
                        <p v-if="task.bam_talentci?.bam_online_all?.last_access" class="text-info-400 font-sans text-xs mt-2">
                             <label class="text-muted-400"> Last Online:</label> {{ formatDate(task.bam_talentci?.bam_online_all?.last_access) }}
                        </p>
                        <p v-if="task.bam_talentci.cell" class="text-info-400 font-sans text-xs mt-2">
                             <label class="text-muted-400"> Cell:</label> {{ task.bam_talentci.cell }}
                        </p><br>
                  </div>
                  
                  <div
                    class="text-muted-500 dark:text-muted-200 mt-2 flex w-full items-center justify-between text-xs font-medium"
                  >
                    <div class="flex items-center gap-2">
                     
                      <BaseText size="xs" class="text-muted-400">ASSIGNED TO: <span class="text-success-400">{{ (task.bam_user) ? task.bam_user.fname + ' ' + task.bam_user.lname : 'Unknown User' }}</span></BaseText>
                    </div>
                    
                  </div>
                </div>
              </Draggable>
            </template>
            <!-- Placeholder -->
            <div v-else>
              <div
                class="text-muted-400 mt-10 flex items-center justify-center"
              >
                <Icon name="ph:kanban-thin" class="h-12 w-12" />
              </div>
              <div class="mt-2 text-center">
                <BaseHeading as="h4" size="md" weight="light" class="mb-1">
                  <span>Nothing to show</span>
                </BaseHeading>
                <BaseParagraph
                  size="xs"
                  lead="tight"
                  class="text-muted-500 dark:text-muted-400 mx-auto max-w-[200px] !font-sans"
                >
                  <span
                    >There are no lead to show in here for now.</span
                  >
                </BaseParagraph>
                
              </div>
            </div>
          </Container>
        </div>
      </div>
      <!-- Add Column -->
     
      <div class="w-6 shrink-0"></div>
    </div>
 
</template>

<style>
.smooth-dnd-container.vertical > .smooth-dnd-draggable-wrapper {
  overflow: visible;
}
</style>
