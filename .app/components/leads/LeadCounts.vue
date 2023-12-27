<template>
    <div class="col-span-6">
    <div class="grid grid-cols-12 gap-4">
                    <!-- Tile -->
                    <div class="col-span-2">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-danger-400 uppercase"
                        >
                          <span>Hot Leads</span>
                        </BaseParagraph>
                        <span
                          class="text-danger-800 dark:text-danger-100 block font-sans text-2xl font-bold"
                        >
                          {{leadCountData.count_hot}}
                          <NuxtLink :to="`/marketing/follow-up?leadStatus=1&usernum=${props.usernum}`">
                           <BaseButtonIcon shape="curved" muted class="scale-75">
                            <Icon name="lucide:arrow-right" class="h-5 w-5" />
                            </BaseButtonIcon>
                            </NuxtLink>
                        </span>
                        
                            
                        
                      </BaseCard>
                    </div>
                    <!-- Tile -->
                    <div class="col-span-2">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-warning-400 uppercase"
                        >
                          <span>Mild Leads</span>
                        </BaseParagraph>
                        <span
                          class="text-warning-800 dark:text-warning-100 block font-sans text-2xl font-bold"
                        >
                          {{leadCountData.count_mild}}
                          <NuxtLink :to="`/marketing/follow-up?leadStatus=2&usernum=${props.usernum}`">
                           <BaseButtonIcon shape="curved" muted class="scale-75">
                            <Icon name="lucide:arrow-right" class="h-5 w-5" />
                            </BaseButtonIcon>
                            </NuxtLink>
                        </span>
                      </BaseCard>
                    </div>
                    <!-- Tile -->
                    <div class="col-span-2">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-info-400 uppercase"
                        >
                          <span>Cold Leads</span>
                        </BaseParagraph>
                        <span
                          class="text-info-800 dark:text-info-100 block font-sans text-2xl font-bold"
                        >
                         {{leadCountData.count_cold}}
                         <NuxtLink :to="`/marketing/follow-up?leadStatus=3&usernum=${props.usernum}`">
                           <BaseButtonIcon shape="curved" muted class="scale-75">
                            <Icon name="lucide:arrow-right" class="h-5 w-5" />
                            </BaseButtonIcon>
                            </NuxtLink>
                        </span>
                      </BaseCard>
                    </div>
                     <!-- Tile -->
                    <div class="col-span-2">
                      <BaseCard shape="curved" class="p-4">
                        <BaseParagraph
                          size="xs"
                          weight="medium"
                          class="text-success-400 uppercase"
                        >
                          <span>New Leads</span>
                        </BaseParagraph>
                        <span
                          class="text-success-800 dark:text-success-100 block font-sans text-2xl font-bold"
                        >
                          {{leadCountData.count_new}}
                          <NuxtLink :to="`/marketing/follow-up?leadStatus=new&usernum=${props.usernum}`">
                           <BaseButtonIcon shape="curved" muted class="scale-75">
                            <Icon name="lucide:arrow-right" class="h-5 w-5" />
                            </BaseButtonIcon>
                            </NuxtLink>
                        </span>
                      </BaseCard>
                    </div>
                  </div>
                </div>
</template>
<script setup  >
import { ref, onMounted, nextTick  } from 'vue';
import { useAuthStore } from '../../store/auth';

const props =defineProps({
  usernum: Number
})
let  leadCountData =  ref({});
const { user } = useAuthStore();
const { $api } = useNuxtApp();
onMounted(async () => {
    await nextTick();
    await getCountData();
  
});
const getCountData = async () => {
    leadCountData.value = {};
  try {
    const { data: leadData } = await $api.reports.getAgentLeads(props.usernum);
    if (leadData.value && leadData.value[0] && leadData.value[0].users[0]) {
      leadCountData.value = leadData.value[0].users[0];
    }
  } catch (error) {
    console.error('Error fetching team lead data:', error);
  }
};

watch(() => props.usernum, () => {
  getCountData();
});




</script>