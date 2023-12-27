
<script setup lang="ts">
import useDateUtils, { DateUtils } from '~/composables/useDateUtils';
import { useAuthStore } from '../../store/auth';
import dayjs from 'dayjs'
import { Calendar } from 'v-calendar'
import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'


definePageMeta({
  title: 'Start Calling',
  middleware:['auth']
})
const route = useRoute()
const router = useRouter()
const page = computed(() => parseInt((route.query.page as string) ?? '1'))
const { user , isLoggedIn} = useAuthStore();

const filter = ref('')
const perPage = ref(10)
const { $api } = useNuxtApp();
const dateUtils: DateUtils = useDateUtils();
const leadStatus = ref('');
const cbStatus = ref('0');
const data = ref(null);
const selectedUserId = ref(user.bam_user_id);

const query = computed(() => {
  let qList = [["where","to_staff_id","=",selectedUserId.value],["with","bam_talentci"],["with","bam_talentci.bam_talentinfo1"],["with","bam_talentci.bam_talent_media2_profile"],["with","bam_user_to"],["with","bam_user_by"]]
    
  if(cbStatus.value) {
    qList.push(["where","status",cbStatus.value]);
  } else {
      qList.push(["where","status","0"]);
  }
  console.log("===>",qList)
  return {
    "q": [qList],
    "page":page.value,
     per_page: perPage.value,
  }
});


  const {
    data: trmUsersData,
   pending: trmUsersPending,
   error: trmUsersError,
   refresh: trmUsersRefresh
  } = await $api.trmUsers.getUsers({"q":[[["where","status",1]]],"per_page":500});

async function fetchData() {
  const {
    data:cbData,
    pending,
    error,
    refresh
  } = await $api.callBacks.getCallBacks(query.value);
  // Handle the data, pending, error, and refresh as needed
  data.value = cbData.value;
  console.log('Data Fetched:', data);
}
 console.log("*****",data)

 watch([query], () => {
    console.log(page.value)
    fetchData();
  
});

fetchData();
// watch(() => queryString.value, () => refresh() );


const formatDate = (date) => dateUtils.formatUnixDate(date);
const reloadEvent = (event) => {
  alert("reload event");
  console.log(event);
};

</script>
<template>
  <div>
  
     
    <TairoContentWrapper>
    <leads-LeadCounts :usernum="selectedUserId" />
    <leads-GetNewLead :usernum="selectedUserId" @reloadData="reloadEvent" />
    <leads-NewCb />
    

     
                  
    <div class="flex mt-5">
       <BaseSelect
          v-model="selectedUserId"
          label="User"
          :classes="{ wrapper: 'w-full sm:w-auto mr-3 ' }"
        >
          
          <option v-for="user in trmUsersData?.data" :key="user.usernum" :value="user.usernum">
            {{ user.fname + ' ' + user.lname }}
          </option>
        </BaseSelect>
        <BaseSelect
          v-model="cbStatus"
          label="Status"
          :classes="{ wrapper: 'w-full sm:w-auto mr-3' }"
        >
          
          <option value="0">Pending</option>
          <option value="1">Done</option>
        </BaseSelect>

       

      </div>

    <div class="mb-6 flex w-full items-center justify-between mt-10">
              <div class="hidden sm:block">
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="medium"
                  lead="tight"
                  class="mb-2"
                >
                  <span class="text-muted-800 dark:text-muted-100">
                    General Call Backs
                  </span>
                </BaseHeading>
                
              </div>
              
    </div>
     
      <div>
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
        <h4 class="font-sans text-sm font-medium mt-4">Total Records: {{data?.total}}</h4>
        <div v-if="!pending && data?.data.length === 0">
          <BasePlaceholderPage
            title="No  results"
            subtitle=""
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
                <TairoTableHeading uppercase spaced>
                  Date Time
                </TairoTableHeading>
                <TairoTableHeading uppercase spaced>Talent</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Talent ID</TairoTableHeading>
                <TairoTableHeading uppercase spaced>Msg</TairoTableHeading>
                <TairoTableHeading uppercase spaced>State</TairoTableHeading>
                <TairoTableHeading uppercase spaced class="text-end">Action</TairoTableHeading>
              </template>

              

              <TairoTableRow v-for="item in data?.data" :key="item.id">
                
                
                
               <TairoTableCell light spaced>
                 {{ formatDate(item.call_back_ts) }}
                </TairoTableCell>
                <TairoTableCell spaced>
                  <div class="flex items-center">
                    <BaseAvatar
                      :src="(item.bam_talentci?.profile_picture_path)? item.bam_talentci?.profile_picture_path:null"
                      :text="profile-image"
                      :class="getRandomColor()"
                    />
                    <div class="ms-3 leading-none">
                      <h4 class="font-sans text-sm font-medium">
                        {{ item.bam_talentci?.fname+' '+item.bam_talentci?.lname }}
                      </h4>
                      <p class="text-muted-400 font-sans text-xs">
                        {{ item.bam_talentci?.sex+' , '+item.bam_talentci?.age+' , '+item.bam_talentci?.state }}
                      </p>
                    </div>
                  </div>
                </TairoTableCell>
                <TairoTableCell light spaced>
                  {{ item.talentnum }}
                </TairoTableCell>
                <TairoTableCell light spaced>
                  {{ item.des }}
                </TairoTableCell>
                <TairoTableCell light spaced>
                     {{ item.status }}
                </TairoTableCell>
                
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
