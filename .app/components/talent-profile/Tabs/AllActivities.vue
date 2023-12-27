<script setup  >

const logList = Array.from({ length: 10 }, (_, index) => index + 1);

</script>
<template>
    <div class="pr-3">

<section class="p-5 -ml-2 -mt-5 " style="max-height: 500px; overflow-x: auto; overflow-y: auto;">
  <ul class="timeline-with-icons ">
    <li v-for="(log, index) in logList" :key="index" class="timeline-item mb-4">
      <span class="text-sm timeline-icon bg-white border ml-8">
        <Icon
            name="lucide:sticky-note"
            class="text-muted-400 dark:text-muted-500 block h-4 w-4"
            />
      </span>
      <BaseCard class="ml-8 " >
     
        <div class="flex justify-between mt-1">
          <div class="text-sm font-medium p-1 ml-5 text-gray-500">
            Note Added . by <span class="text-cyan-600">Samule (You)</span>
          </div>
          <div class="text-sm font-medium  mr-3 text-gray-500">
            oct 22 , 2019 11:40pm
          </div>
        </div>
        <p class="text-sm font-medium p-1 ml-5 mb-1 text-gray-500 dark:text-gray-400">
          This telent is interested , willing to be called on march 7 on
          this time. This telent is interested , willing to be called on march 7 on
          this time. This telent is interested , willing to be called on march 7 on
          this time. This telent is interested , willing to be called on march 7 on
          this time. This telent is interested , willing to be called on march 7 on
          this time.
        </p>
      
     </BaseCard>
    </li>

  </ul>
</section>
<!-- <button type="button" class="btn btn-light bg-zinc-100 w-full text-slate-500 -mt-20">View More</button> -->
<BaseButton class="w-full mt-5">View More</BaseButton>

</div>
</template>