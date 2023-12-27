<template>
   <div class="flex flex-col mt-10 items-start">
  <div class="space-x-6">
     <BaseButton @click="handleLeadButtonClick('')" color="success" shadow="hover" :disabled="isSubmitting"
                    :loading="isSubmitting">Get New Lead</BaseButton>
     <BaseButton @click="handleLeadButtonClick('online')"  color="success" shadow="hover" :disabled="isSubmitting"
                    :loading="isSubmitting">Get Online Lead</BaseButton>
   
  </div>

  <div class="flex flex-col mt-4" id="lead-limit-info">
    <h6 class="mb-2" v-for="(value, key) in leadLimitData" :key="key">{{value}}</h6>
    
  </div>
</div>



</template>
<script setup  >
import { ref, onMounted, nextTick  } from 'vue';
const props =defineProps({
  usernum: Number
})
const router = useRouter()
const { $api } = useNuxtApp();
const toaster = useToaster()
let isSubmitting = ref(false);
 let  leadLimitData =  ref({});
onMounted(async () => {
    await nextTick();
    await getLeadLimitData();
  
});
watch(() => props.usernum, () => {
  getLeadLimitData();
});
const getLeadLimitData = async () => {
    leadLimitData.value = {};
    const { data:leadData } = await $api.etLeads.getLeadLimitText(props.usernum);
    if(leadData && leadData.value) {
        leadLimitData.value = leadData.value;
    }
  
};

const handleLeadButtonClick = async (qType = '') => {
  const mergedQuery = { user_id: props.usernum, q_type: qType };
    try {
         isSubmitting.value = true;
        // const { data, pending,error, refresh } = await $api.etLeads.getLeadLimitText(props.usernum);
        const { data, pending,error, refresh } = await $api.etLeads.getNewLead(mergedQuery);
        
        if(error.value) {
       
        toaster.clearAll()
                toaster.show({
                title: 'Error',
                message: error.value.data.errors.error_msg,
                color: 'danger',
                icon: 'ph:user-circle-fill',
                closable: true,
                })
        } else {
             toaster.clearAll()
                toaster.show({
                title: 'Success',
                message: "New Lead has been assigned successfully!",
                color: 'success',
                icon: 'ph:user-circle-fill',
                closable: true,
                })
            await router.push({ path: '/marketing/follow-up', query: { leadStatus: 'new', usernum: props.usernum } });
        }
    } finally {
       isSubmitting.value = false; 
    }
   
};

</script>