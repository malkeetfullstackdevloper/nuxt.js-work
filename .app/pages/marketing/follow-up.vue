
<script setup lang="ts">
import useDateUtils, { DateUtils } from '~/composables/useDateUtils';
import { useAuthStore } from '../../store/auth';
import dayjs from 'dayjs'
import { ANNUAL_INCOMES, EXPERIENCE_LEVELS, DEPARTMENTS } from '~/constants'
definePageMeta({
  title: 'Follow Up',
  middleware:['auth']
})

const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))
const leadStatus = computed(() => {

  return route.query.leadStatus;
  })

// const leadStatus = ref(parseInt((route.query.leadStatus as string) ?? ''));
const { user } = useAuthStore();

const filter = ref('')
const perPage = ref(10)
const { $api } = useNuxtApp();
const dateUtils: DateUtils = useDateUtils();
// const selectedUserId = ref(user.bam_user_id);
const selectedUserId = ref((route.query.usernum)? route.query.usernum:user.bam_user_id);
// const leadStatus = ref('');
const range = ref('');
watch([filter, perPage,selectedUserId], () => {
  router.push({
    query: {
      page: undefined,
      usernum:selectedUserId.value,
      leadStatus: leadStatus.value
    },
  })
})





const query = computed(() => {
  return {
    filter: filter.value,
    per_page: perPage.value,
    page: page.value
    //  leadStatus:leadStatus.value,
  }
})

const formattedDate = computed(() => dateUtils.formatUnixDate(unixDate.value));

const queryObject = computed(() => {
  console.log("******",leadStatus.value)
  let qList = [
  ['where', 'lgroup', '!=', 9],['where', 'lgroup', '!=', 8],["with","bam_user"],["with","bam_talentci.bam_talent_general"],["with","bam_talentci.bam_online_all"]];
  if((selectedUserId !== null && selectedUserId !== undefined)) {
      qList.push(["where","user_id",selectedUserId.value]);
  } else {
    qList.push(["where","user_id",user.bam_user_id]);
  }
  console.log("------------------>",leadStatus.value)
  if(leadStatus && leadStatus.value == "new") {
    qList.push(["where","status",0]);
  }
  else if(leadStatus.value) {
    qList.push(["where","status",leadStatus.value]);
  }
   if (range.value) {
    if (range.value == 1) {
      //Upcoming
      let ts = dayjs().unix();
      qList.push(['where', 'callback_ts', '>', ts])

    } else if (range.value == 2) {
      // Overdue - all leads before now
      var ts = dayjs().unix()
      qList.push(['where', 'callback_ts', '<', ts])
      qList.push(['where', 'callback_ts', '!=', 0])
    }
    else if (range.value == 3) {
      // Today - all leads today
      var ts  = dayjs().startOf('day').unix()
      var ts2 = dayjs().startOf('day').add(1, 'day').unix()
      qList.push(['where', 'callback_ts', '<', ts2])
      qList.push(['where', 'callback_ts', '>=', ts])
    } else if (range.value == 4) {
      // Tomorrow - all leads tomorrow
      var ts  = dayjs().startOf('day').add(1, 'day').unix()
      var ts2 = dayjs().startOf('day').add(2, 'day').unix()
      qList.push(['where', 'callback_ts', '<', ts2])
      qList.push(['where', 'callback_ts', '>=', ts])
    } else if (range.value == 5) {
      // This week - all leads This week
      var ts  = dayjs().startOf('week').unix()
      var ts2 = dayjs().startOf('week').add(1, 'week').unix()
      qList.push(['where', 'callback_ts', '<', ts2])
      qList.push(['where', 'callback_ts', '>=', ts])
    } else if (range.value == 6) {
      // Next week - all leads Next week
      var ts  = dayjs().startOf('week').add(1, 'week').unix()
      var ts2 = dayjs().startOf('week').add(2, 'week').unix()
      qList.push(['where', 'callback_ts', '<', ts2])
      qList.push(['where', 'callback_ts', '>=', ts])
    } else if (range.value == 7) {
      // No Callback
      qList.push(['where', 'callback_ts', 0])
    }
  }
qList.push(["orderBy","callback_ts","DESC"]);
  return {
    "q": [qList]
  }
});

const mergedQuery = computed(() => {
  return {
    ...query.value,
    ...queryObject.value,
  }
});

const {
    data,
    pending,
    error,
    refresh
  } = await $api.etLeads.getAssignedLeads(mergedQuery);

  const {
    data: trmUsersData,
   pending: trmUsersPending,
   error: trmUsersError,
   refresh: trmUsersRefresh
  } = await $api.trmUsers.getUsers({"q":[[["where","status",1]]],"per_page":500});
  
console.log(trmUsersData)
const selected = ref<number[]>([])

const isAllVisibleSelected = computed(() => {
  return selected.value.length === data.value?.data.length
})

function toggleAllVisibleSelection() {
  if (isAllVisibleSelected.value) {
    selected.value = []
  } else {
    selected.value = data.value?.data.map((item) => item.id) ?? []
  }
}


function  getUniqueDepartments(users) {
    const uniqueDepartments = new Set(users.map(user => user.department));
    return Array.from(uniqueDepartments);
  }

const getDepartmentName = (departmentId) => {
  if(departmentId) {
    const departmentInfo = DEPARTMENTS.find(dep => dep.value === departmentId);
     return (departmentInfo)? departmentInfo.name:"Unknow department";
    
  } else {
     return "Unknow department"
  }
}


const formatDate = (date) => dateUtils.formatUnixDate(date);
const formatDateRelative = (date) => dateUtils.formatRelativeDate(date);
const getAnnualIncomeRange = (key) => {
  return ANNUAL_INCOMES[key] ? ANNUAL_INCOMES[key].join(' - ') : 'Not Set';
};
const getExperienceLevelLabel = (value) => {
  const selectedOption = EXPERIENCE_LEVELS.find((option) => option.value == value);
  return selectedOption ? selectedOption.label : '';
};

const getWorkingLabel = (value) => {
  switch (value) {
    case 0:
      return 'Not Set';
    case 1:
      return 'Yes';
    case 2:
      return 'No';
    default:
      return 'Not Set';
  }
};
const getWorkingTypeLabel = (value) => {
  switch (value) {
    case 0:
      return 'Not Set';
    case 1:
      return 'Full Time';
    case 2:
      return 'Part Time';
    default:
      return 'Not Set';
  }
};

</script>
<template>
  <div>
    <leads-LeadCounts :usernum="selectedUserId" />
    <leads-GetNewLead :usernum="selectedUserId" />

     
    <TairoContentWrapper>
     
      <div class="flex mt-5">
        <BaseSelect
  v-model="selectedUserId"
  label="User"
  :classes="{ wrapper: 'w-full sm:w-auto mr-3 ' }"
>
  <template v-for="department in getUniqueDepartments(trmUsersData.data)" :key="department">
    <optgroup :label="getDepartmentName(department)" >
      <option
        v-for="user in trmUsersData.data.filter(u => u.department === department)"
        :key="user.usernum"
        :value="user.usernum"
      >
        {{ user.fname + ' ' + user.lname }}
      </option>
    </optgroup>
  </template>
</BaseSelect>
      
       
        <!-- <BaseSelect
          v-model="leadStatus"
          label="Lead"
          :classes="{ wrapper: 'w-full sm:w-auto mr-3' }"
        >
          <option value="">All</option>
          <option value="">CB</option>
          <option value="0">New</option>
          <option value="3">Cold</option>
          <option value="2">Mild</option>
          <option value="1">Hot</option>
          <option value="4">Sold</option>
        </BaseSelect> -->
       
        <BaseSelect
          v-model="range"
          label="Range"
          :classes="{ wrapper: 'w-full sm:w-auto mr-3' }"
        >
          <option value="">All</option>
          <option value="7">No Callback</option>
          <option value="1">Upcomming</option>
          <option value="2">Overdue</option>
          <option value="3">Today</option>
          <option value="4">Tomorrow</option>
          <option value="5">This Week</option>
          <option value="6">Next Week</option>
        </BaseSelect>

        <!-- <BaseInput
          v-model="filter"
          icon="lucide:search"
          placeholder="Filter users..."
          :classes="{
            wrapper: 'w-full sm:w-auto',
          }"
        /> -->
      </div>
      <div class="flex float-right mt-5 mb-3">
        <BaseSelect
          v-model="perPage"
          label=""
          :classes="{
            wrapper: 'w-full sm:w-40 ',
          }"
        >
          <option :value="10">10 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
          <option :value="100">100 per page</option>
        </BaseSelect>
      </div>
      <div>
        <h4 class="font-sans text-sm font-medium mt-4">Total Records: {{data?.total}}</h4>
        <div v-if="!pending && data?.data.length === 0">
          <BasePlaceholderPage
            title="No matching results"
            subtitle="Looks like we couldn't find any matching results for your search terms. Try other search terms."
          >
            <template #image>
              <img
                class="block dark:hidden"
                src="/img/illustrations/placeholders/flat/placeholder-search-4.svg"
                alt="Placeholder image"
              />
              <img
                class="hidden dark:block"
                src="/img/illustrations/placeholders/flat/placeholder-search-4-dark.svg"
                alt="Placeholder image"
              />
            </template>
          </BasePlaceholderPage>
        </div>
        <div v-else>
          <div class="w-full">
            
            <div class="mt-3 mb-3">
            <BasePagination
              :total-items="data?.total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="curved"
            />
          </div>
            <TairoTable shape="rounded" :scrollable="true">
              <template #header>
                <TairoTableHeading uppercase spaced class="p-4">
                  <div class="flex items-center">
                    <BaseCheckbox
                      :model-value="isAllVisibleSelected"
                      :indeterminate="
                        selected.length > 0 && !isAllVisibleSelected
                      "
                      name="table-1-main"
                      shape="rounded"
                      class="text-primary-500"
                      @click="toggleAllVisibleSelection"
                    />
                  </div>
                </TairoTableHeading>
                
                <TairoTableHeading uppercase spaced>Talent Info</TairoTableHeading>
                <TairoTableHeading uppercase spaced> Lead Status </TairoTableHeading>
                <!-- <TairoTableHeading uppercase spaced>TimeZone</TairoTableHeading> -->
                <TairoTableHeading uppercase spaced>Call Back</TairoTableHeading>
                <TairoTableHeading uppercase spaced>CB Reason</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Signup Date</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Last Online</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Lead Owner</TairoTableHeading>
                
                <!-- <TairoTableHeading uppercase spaced>Last SMS Sent</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Last SMS Received</TairoTableHeading> -->
                <TairoTableHeading uppercase spaced class="text-end">Action</TairoTableHeading>
              </template>

              <TairoTableRow v-if="selected.length > 0" :hoverable="false">
                <TairoTableCell
                  colspan="6"
                  class="bg-success-100 text-success-700 dark:bg-success-700 dark:text-success-100 p-4"
                >
                  You have selected {{ selected.length }} items of the total
                  {{ data?.total }} items.
                  <a
                    href="#"
                    class="outline-none hover:underline focus:underline"
                    >Click here to everything</a
                  >
                </TairoTableCell>
              </TairoTableRow>

              <TairoTableRow v-for="item in data?.data" :key="item.id">
                <TairoTableCell spaced>
                  <div class="flex items-center">
                    <BaseCheckbox
                      v-model="selected"
                      :value="item.id"
                      :name="`item-checkbox-${item.id}`"
                      shape="rounded"
                      class="text-primary-500"
                    />
                  </div>
                </TairoTableCell>
                
                  
               
                <TairoTableCell spaced>
                  <div class="flex  items-center">
                    <BaseAvatar
                      :src="item.bam_talentci?.profile_picture_path"
                      :text="profile-image"
                      :class="getRandomColor()"
                    />
                    <div class="ms-3 leading-none  ">
                      <h4 class="font-sans text-sm font-medium">
                        {{ item.bam_talentci?.fname+' '+item.bam_talentci?.lname }}
                      </h4>
                      <p class="text-muted-400 font-sans text-xs">
                        {{ item.bam_talentci?.sex+' , '+item.bam_talentci?.age+' , '+item.bam_talentci?.state }}
                      </p>
                    </div>
                  
                  </div>
                    <div class="mt-3  flex items-center gap-6">
                      <div class="flex items-center gap-1">
                      <p class="text-muted-400 font-sans text-xs">
                          Join: {{ item.bam_talentci?.join_status }}
                        </p>
                    </div>
                    </div>
                </TairoTableCell>
                <TairoTableCell spaced class="capitalize">
                  <BaseTag
                    v-if="item.lead == 'NEW'"
                    color="success"
                    flavor="pastel"
                    shape="full"
                    size="sm"
                    class="font-medium"
                  >
                    {{ item.lead }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="item.lead == 'MILD'"
                    color="warning"
                    flavor="pastel"
                    shape="full"
                    size="sm"
                    class="font-medium"
                  >
                    {{ item.lead }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="item.lead == 'HOT'"
                    color="danger"
                    flavor="pastel"
                    shape="full"
                    size="sm"
                    class="font-medium"
                  >
                    {{ item.lead }}
                  </BaseTag>
                  <BaseTag
                    v-else-if="item.lead === 'SOLD'"
                    color="muted"
                    flavor="pastel"
                    shape="full"
                    size="sm"
                    class="font-medium"
                  >
                    {{ item.lead }}
                  </BaseTag>

                  <div class="mt-3  flex items-center gap-6">
                      <div class="flex flex-col items-start  gap-1">
                      <p class="text-muted-400 font-sans text-xs">
                          Willing to travel: 
                          {{ (item.bam_talentci?.bam_talent_general[0]?.willing_to_travel === 1) ? "Yes" : "No" }}
                        </p>
                      <p class="text-muted-400 font-sans text-xs">
                          Health insurance: {{ (item.bam_talentci?.bam_talent_general[0]?.health_insurance === 1) ? "Yes" : "No" }}
                        </p>
                    </div>
                    </div>
                </TairoTableCell >
                <!-- <TairoTableCell light spaced>
                  {{ item.timeZone }}
                </TairoTableCell> -->
                <TairoTableCell light spaced >
                 {{ formatDateRelative(item.callback_ts) }}
                 <div class="mt-3 flex flex-col  flex items-center gap-6">
                      <div class="flex flex-col items-start  gap-1">
                      <p class="text-muted-400 font-sans text-xs">
                          Auto Insurance: 
                        </p>
                      <p class="text-muted-400 font-sans text-xs">
                          Income: {{ getAnnualIncomeRange(item.bam_talentci?.bam_talent_general[0]?.annual_income)  }}
                        </p>
                    </div>
                    </div>
                </TairoTableCell>
                <TairoTableCell light spaced>
                  {{ item.disposition }}
                  <div class="mt-3  flex items-center gap-6">
                      <div class="flex flex-col items-start  gap-1">
                      <p class="text-muted-400 font-sans text-xs">
                          Experience Level: {{ getExperienceLevelLabel(item.bam_talentci?.bam_talent_general[0]?.experience_type)  }}
                        </p>
                      <p class="text-muted-400 font-sans text-xs">
                          Working:  {{ getWorkingLabel(item.bam_talentci?.bam_talent_general[0]?.working) }}
                        </p>
                     
                    </div>
                    </div>
                </TairoTableCell>

                <TairoTableCell light spaced>
                  {{ formatDate(item.bam_talentci?.date_entered) }}
                  <div class="mt-3  flex items-center gap-6">
                      <div class="flex flex-col items-start  gap-1">
                      <p class="text-muted-400 font-sans text-xs">
                          Occupation: {{item.bam_talentci?.bam_talent_general[0]?.occupation}}
                        </p>
                      <p class="text-muted-400 font-sans text-xs">
                          Work Type: {{ getWorkingTypeLabel(item.bam_talentci?.bam_talent_general[0]?.working_part_time) }}
                        </p>
                    </div>
                    </div>
                </TairoTableCell>
                <TairoTableCell light spaced>
                    {{ formatDate(item.bam_talentci?.bam_online_all?.last_access) }}

                    <div class="mt-3  flex items-center gap-6">
                      <div class="flex flex-col items-start  gap-1">
                      
                      <p class="text-muted-400 font-sans text-xs">
                          Serious Level: {{item.bam_talentci?.bam_talent_general[0]?.serious}}
                        </p>
                    </div>
                    </div>
                </TairoTableCell>
                <!-- <TairoTableCell light spaced>
                  {{ item.bam_talentci.cell }}
                </TairoTableCell> -->
                
                
                <TairoTableCell light spaced>
                  {{ (item.bam_user) ? item.bam_user.fname + ' ' + item.bam_user.lname : 'Unknown User' }}
                </TairoTableCell>
               <!-- <TairoTableCell spaced>
                  <div class="flex items-center">
                    <div class="ms-3 leading-none">
                      <h4 class="font-sans text-sm font-medium">
                        {{ formatDate(item.last_sms_sent) }}
                      </h4>
                      <p class="text-muted-400 font-sans text-xs">
                        {{ (item.staff_user) ? item.staff_user.fname + ' ' + item.staff_user.lname : '' }}
                      </p>
                    </div>
                  </div>
                </TairoTableCell> -->
                <!-- <TairoTableCell light spaced>
                  {{ (item.last_sms_received) ? formatDate(item.last_sms_received) : 'NA' }}
                </TairoTableCell> -->
                <TairoTableCell spaced>
                  <div class="flex justify-end">
                    <BaseDropdown flavor="context" label="Dropdown" orientation="end" shape="smooth">
                      <BaseDropdownItem to="#" title="User" text="View details" shape="smooth" />
                    </BaseDropdown>
                  </div>
                </TairoTableCell>
              </TairoTableRow>
            </TairoTable>
          </div>
          
          <div class="mt-6">
            <BasePagination
              :total-items="data?.total ?? 0"
              :item-per-page="perPage"
              :current-page="page"
              shape="curved"
            />
          </div>
        </div>
      </div>
    </TairoContentWrapper>
  </div>
</template>
