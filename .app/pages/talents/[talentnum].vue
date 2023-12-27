<script>
export default {
  // This function will be called before rendering the component
  async asyncData({ params }) {
    // You can fetch data based on the slug here
    // const talentData = await fetchDataBasedOnSlug(params.slug);
    // return { talentData };
    return true;
  },
};
</script>
<template>
  <div>
    <div class="grid grid-cols-12 gap-6">
      <talent-profile-topBar />
      </div>
  </div>
  <div>
    <div class="">
  <div class="flex">  
    <div class="w-full  pt-2  flex flex-wrap">
      <div class="w-full md:w-5/12 ">
        <talent-profile-TelentInfoCard/>
        <talent-profile-AdditionalTelentCard/>
        <talent-profile-TalentFeed/>
        <!-- <Modal :visible="true" :variant="success"></Modal> -->
      </div>
      <div class="w-full md:w-7/12  pl-1">
        <talent-profile-ActivityFeed/>
      </div>
    </div>
  </div>
</div>
    <!-- <div class="w-full bg-white h-20">
    </div> -->
  </div>
</template>
