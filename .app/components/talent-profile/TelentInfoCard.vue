
<template>
  <!-- <div class="p-2 bg-white"> -->
    <BaseCard class=" p-2 gap-2 pb-5">
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
            /> Telent Info
          </span>
              
      </BaseHeading>
    
    
    <div class="flex w-full">
      <div class="w-2/5">
        <img src="/img/avatars/2.svg" class="UserImg" />
      </div>
      <div class="w-3/5 mt-2 ml-3">
        <p class="text-gray-500 font-medium  text-sm">Talent Interst</p>
        <p class="text-cyan-700/75 font-semibold  text-sm w-72">
          Acting , Modling , Dance , Music , Crew , Voter
        </p>
        <p class="text-gray-500 font-semibold mt-2 text-sm">Closest City</p>
        <p class="text-cyan-700/75 font-semibold text-sm">New York City , NY</p>
       
        <div class="flex flex-wrap items-end gap-2 mt-5">
            <button class="flex-1 relative flex flex-col items-center border p-2  rounded-md hover:bg-gray-300 dark:hover:bg-muted-500  focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
              <Icon name="lucide:image" class="h-6 w-6 mb-1" />
              <span class="text-sm">Photos</span>
              <span class="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full">15</span>
            </button>
            <button class="flex-1 relative flex flex-col items-center border p-2 rounded-md hover:bg-gray-300 dark:hover:bg-muted-500 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
              <Icon name="lucide:video" class="h-6 w-6 mb-1" />
              <span class="text-sm">Videos</span>
              <span class="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full">15</span>
            </button>
            <button class="flex-1 relative flex flex-col items-center border p-2 rounded-md hover:bg-gray-300 dark:hover:bg-muted-500 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
              <Icon name="lucide:music" class="h-6 w-6 mb-1" />
              <span class="text-sm">Audio</span>
              <span class="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full">15</span>
            </button>
            <button class="flex-1 relative flex flex-col items-center border p-2 rounded-md hover:bg-gray-300 dark:hover:bg-muted-500 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out">
              <Icon name="lucide:paperclip" class="h-6 w-6 mb-1" />
              <span class="text-sm">Files</span>
              <span class="absolute top-0 right-0 bg-red-500 text-white text-xs p-1 rounded-full">15</span>
            </button>
        </div>

        <div class="flex mt-4 gap-5">
          <BaseButton size="sm">Login as Talent </BaseButton>
          <BaseButton size="sm"> <Icon name="lucide:plus" class="-ms-1 h-4 w-4 ml-1" /> Add Ticket</BaseButton>
          
        </div>
        <div class="flex mt-3">
          <BaseButton color="success">
              <Icon name="lucide:refresh-cw" class="-ms-1 h-4 w-4" />

              <span>Scyn to Live Agent</span>
            </BaseButton>
        </div>
      </div>
    </div>
    <!-- Frist State  -->
    <div>
    
    <div class="flex mt-5 ml-1">
            <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Telent Info</span>
                <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                <span class="font-medium ml-2  min-w-max text-cyan-700">
                <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
            </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Frist name</div>
            <div class="text-cyan-700">Rosie</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Last Name</div>
            <div class="text-cyan-700">Wright</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Birth data</div>
            <div class="text-cyan-700">Dec. 12 1980(40)</div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">City</div>
            <div class="text-cyan-700">Brookliya</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">State</div>
            <div class="text-cyan-700">New York</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Zip Code</div>
            <div class="text-cyan-700">75001</div>
        </div>
    </div> 
  </div>
    <!-- Second State  -->
    <div>
    
    <div class="flex mt-5 ml-1">
            <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Contact Info</span>
                <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                <span class="font-medium ml-2  min-w-max text-cyan-700">
                <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
            </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Main Phone</div>
            <div class="text-cyan-700">54281265128</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">SMS provider</div>
            <div class="text-cyan-700">Cingular</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">2nd Phone</div>
            <div class="text-cyan-700">54281265128</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">SMS provider</div>
            <div class="text-cyan-700">Airtle</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Email 1</div>
            <div class="text-cyan-700">RosieA1@gmail.com</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Email 2</div>
            <div class="text-cyan-700">RosieA2@gmail.com</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
  </div>
        <!-- Third State  -->
  <div>
    
    <div class="flex mt-5 ml-1">
            <div class="flex w-full grow items-center gap-2  sm:w-auto sm:py-0">
                <span class="font-medium  text-muted-800 dark:text-muted-100 min-w-max">Account Info</span>
                <div class="border-muted-200 dark:border-muted-700 mx-5 grow border-t-0 border"></div>
                <span class="font-medium ml-2  min-w-max text-cyan-700">
                <i class="fas fa-pen ml-3 text-cyan-700"></i> Edit</span>
            </div>
    </div>
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Account Status</div>
            <div class="text-green-600">Active</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">User ID</div>
            <div class="text-cyan-700">81666</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
    <div class="flex mt-3 ml-1 justify-between">
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Username</div>
            <div class="text-cyan-600">RosieWright123</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600">Password</div>
            <div class="text-cyan-700">Change Password</div>
        </div>
        <div class="flex flex-col mt-1 w-1/3 text-sm font-medium">
            <div class="text-gray-600"></div>
            <div class="text-cyan-700"></div>
        </div>
    </div> 
  </div>
  </BaseCard>


</template>