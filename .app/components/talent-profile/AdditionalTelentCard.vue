<template>
  <BaseCard class="p-2 gap-2 pb-5 mt-5">
      <BaseHeading
                as="h3"
                size="md"
                weight="semibold"
                lead="tight"
                class="text-muted-800 dark:text-white mb-2"
              >
              <span> 
                <Icon
              name="fa6-solid:user"
              class="text-muted-400 dark:text-muted-500 block h-6 w-6"
            /> Additional Talent Info
          </span>
              
      </BaseHeading>
   
    <div class="w-full ">
        <BaseTabs
        model-value="info"
        :tabs="[
            { label: 'Info', value: 'info' },
            { label: 'About Me', value: 'aboutMe' },
            { label: 'Intro Summary', value: 'intro' },
            { label: 'Media Locker', value: 'mediaLocker' },
        ]"
        >
        <template #tab="{ activeValue }">
            <div v-if="activeValue === 'info'" class="font-sans text-sm text-gray-500 dark:text-gray-400">
                <!-- Personal Info -->
                <div>
                    <div class="flex mt-5 ml-1">
                        <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                            <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Personal Info</span>
                            <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                            <span class="font-medium ml-2  min-w-max text-cyan-700">
                            <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                        </div>
                    </div>
                    <div>
                        <!-- Frist  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Gender</div>
                                <div class="text-cyan-700">Male</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Ethenicity</div>
                                <div class="text-cyan-700">Native American</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Citizen</div>
                                <div class="text-cyan-700">American</div>
                            </div>
                        </div> 
                        <!-- Second  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Other Ethenicity</div>
                                <div class="text-cyan-700">N/A</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Complextion</div>
                                <div class="text-cyan-700">Brown</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Body Type</div>
                                <div class="text-cyan-700">Medium</div>
                            </div>
                        </div>
                        <!-- Third  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">1st Language</div>
                                <div class="text-cyan-700">English</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">2nd Language</div>
                                <div class="text-cyan-700">Armenia</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">3rd Language</div>
                                <div class="text-cyan-700">German</div>
                            </div>
                        </div>
                        <!-- Fourth  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Bust/Chest</div>
                                <div class="text-cyan-700">32</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Height</div>
                                <div class="text-cyan-700">5'2"(157cm)</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Weight</div>
                                <div class="text-cyan-700">120 punds (60kg)</div>
                            </div>
                        </div>
                        <!-- Five  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Eye Color</div>
                                <div class="text-cyan-700">Brown</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Hair Color</div>
                                <div class="text-cyan-700">Red</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Hair Style</div>
                                <div class="text-cyan-700">Buzz</div>
                            </div>
                        </div>
                        <!-- Six  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Hips/Inseam</div>
                                <div class="text-cyan-700">16</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Waist/Paints</div>
                                <div class="text-cyan-700">38</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Shirt</div>
                                <div class="text-cyan-700">12</div>
                            </div>
                        </div>
                        <!-- Seven  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Sleeve</div>
                                <div class="text-cyan-700">26</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Dress/Suite</div>
                                <div class="text-cyan-700">XXL</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Shoes</div>
                                <div class="text-cyan-700">9</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Market -->
                <div class="border-muted-200 dark:border-muted-700 mt-5 border-t ">
                    <div class="flex mt-5 ml-1">
                        <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                            <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Market</span>
                            <!-- <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div> -->
                            <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                            <span class="font-medium ml-2  min-w-max text-cyan-700">
                            <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                        </div>
                    </div>
                    <div>
                            <!-- Frist  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Closest City</div>
                                <div class="text-cyan-700">New York</div>
                                <div class="text-cyan-700">$200 Min. pay</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">2nd Market</div>
                                <div class="text-cyan-700">Grand Junctions , CO</div>
                                <div class="text-cyan-700">$100 Min. pay</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">3rd Market</div>
                                <div class="text-cyan-700">Albuquerque , NM</div>
                                <div class="text-cyan-700">$1,000 Min. pay</div>
                            </div>
                        </div> 
                        <!-- Second  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Unions</div>
                                <div class="text-cyan-700">AEA , AFTRA</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Agent</div>
                                <div class="text-cyan-700">None</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600"></div>
                                <div class="text-cyan-700"></div>
                            </div>
                        </div>
                        <!-- Third  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Website</div>
                                <div class="text-cyan-700">www.mywebsite.com</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600"></div>
                                <div class="text-cyan-700"></div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600"></div>
                                <div class="text-cyan-700"></div>
                            </div>
                        </div>
                        <!-- Fourth  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-2/3 text-sm font-medium">
                                <div class="text-gray-600">Telent Interests</div>
                                <div class="text-cyan-700">Acting , Modeling , Dance , Music , Crew , Voter</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600"></div>
                                <div class="text-cyan-700"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Will not work with -->
                <div class="border-muted-200 dark:border-muted-700 mt-5 border-t ">
                    <div class="flex mt-5 ml-1">
                        <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                            <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Will not work with</span>
                            <!-- <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div> -->
                            <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                            <span class="font-medium ml-2  min-w-max text-cyan-700">
                            <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                        </div>
                    </div>
                    <div>
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 text-sm font-medium">
                                <div class="text-cyan-700 -ml-1">Alcohal , Nudity , Tobacco , Lingerie</div>
                            </div>
                        </div> 
                           
                    </div>

                </div>
               
                <!-- Experience -->
                <div class="border-muted-200 dark:border-muted-700 mt-5 border-t ">
                    <div class="flex mt-5 ml-1">
                        <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                            <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Experience</span>
                            <!-- <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div> -->
                            <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                            <span class="font-medium ml-2  min-w-max text-cyan-700">
                            <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                        </div>
                    </div>
                    <div>
                    <!-- Frist  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Industry Experience</div>
                                <div class="text-cyan-700">Very Experience</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Year on job</div>
                                <div class="text-cyan-700">3</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Modelling Class ?</div>
                                <div class="text-cyan-700">None</div>
                            </div>
                        </div> 
                        <!-- Second  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Willing to Traval ?</div>
                                <div class="text-cyan-700">Yes</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Joind a Union</div>
                                <div class="text-cyan-700">Yes</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Acting Class ?</div>
                                <div class="text-cyan-700">None</div>
                            </div>
                        </div>
                        <!-- Third  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Curruntly a Student?</div>
                                <div class="text-cyan-700">Yes</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Education Leaval</div>
                                <div class="text-cyan-700">Master +</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600"></div>
                                <div class="text-cyan-700"></div>
                            </div>
                        </div>
                        <!-- Fourth  -->
                        <div class="flex mt-3 ml-1 justify-between">
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Curruntly a Working</div>
                                <div class="text-cyan-700">No</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Occupation</div>
                                <div class="text-cyan-700">N/A</div>
                            </div>
                            <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
                                <div class="text-gray-600">Work Type</div>
                                <div class="text-cyan-700">N/A</div>
                            </div>
                        </div>
                           
                    </div>

                </div>
            </div>

            <div
            v-else-if="activeValue === 'aboutMe'"
            class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
            <div class="border-muted-200 dark:border-muted-700 mt-5 border-t ">
                    <div class="flex mt-5 ml-1">
                        <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                            <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">About Me</span>
                            <!-- <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div> -->
                            <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                            <span class="font-medium ml-2  min-w-max text-cyan-700">
                            <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                        </div>
                    </div>
                    <div>
                        <div class="flex mt-3 ml-1 justify-between">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
            tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
            contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                        </div> 
                           
                    </div>

                </div>
            
            </div>
            <div
            v-else-if="activeValue === 'intro'"
            class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
                <div class="border-muted-200 dark:border-muted-700 mt-5 border-t ">
                        <div class="flex mt-5 ml-1">
                            <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                                <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Intro Summary</span>
                                <!-- <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div> -->
                                <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                                <span class="font-medium ml-2  min-w-max text-cyan-700">
                                <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                            </div>
                        </div>
                        <div>
                            <div class="flex mt-3 ml-1 justify-between">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                            </div> 
                            
                        </div>

                    </div>
            </div>
            <div
            v-else-if="activeValue === 'mediaLocker'"
            class="font-sans text-sm text-gray-500 dark:text-gray-400"
            >
                <div class="border-muted-200 dark:border-muted-700 mt-5 border-t ">
                            <div class="flex mt-5 ml-1">
                                <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                                    <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Media Locker</span>
                                    <!-- <div class="mt-2.5 w-80 ml-5 bg-gray-300 h-px"></div> -->
                                    <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                                    <span class="font-medium ml-2  min-w-max text-cyan-700">
                                    <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
                                </div>
                            </div>
                            <div>
                                <div class="flex mt-3 ml-1 justify-between">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                    tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                                </div> 
                                
                            </div>

                    </div>
            </div>
        </template>
        </BaseTabs>
    </div>
</BaseCard>
</template>

