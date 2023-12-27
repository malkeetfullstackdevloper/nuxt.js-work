<template>
    <div class="col-span-2"><input type="text" placeholder="Talent ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
    <div class="col-span-2"><input type="text"  placeholder="Talent Photo" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
    <div class="col-span-2"><input type="text"  placeholder="Talent Name or Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
    <div class="col-span-2"><input type="text"  placeholder="Casting ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
    <div class="col-span-2"><input type="text"  placeholder="Role ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
    <div class="col-span-2"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">GO</button></div>
    <div class="col-span-2"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">GO</button></div>
    <div class="col-span-2"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">GO</button></div>
    <div class="col-span-2"><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded">GO</button></div>
    
   <div class="col-span-12">
    <BaseCard class="p-2 gap-2">
        <div class="flex flex-col items-center md:flex-row">
            <div class=" p-3 flex">
                <img src="/img/avatars/2.svg" alt="ddd" height="250" width="100"/>
                <div class="flex flex-col ml-2">
                    <div class="flex">
                        <p class="text-lg font-semibold">Rose Write</p>
                        <!-- <p class="ml-2 text-sm font-semibold bg-orange-400 text-slate-600 p-1 rounded">Pro</p> -->
                        <button type="button" class="btn btn-light text-xs font-semibold bg-amber-300 ml-1 h-7 w-12">PRO</button>
                        <!-- <p class="ml-2 text-sm p-1 font-semibold bg-green-500 text-slate-600 rounded">Featured</p> -->
                        <button type="button" class="btn btn-light text-xs font-semibold bg-green-500 ml-1 h-7"><span>FEATURED</span></button>
                    </div>
                    <div class="flex">
                        <p class="text-xs w-20 bg-red-200/60 text-red-600 p-1 rounded flex">
                            <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FF0000"  class="text-red-500" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                            <span class="ml-1">Declined</span></p>
                        <p class="text-xs w-20 bg-yellow-200/60 text-orange-900  ml-2 p-1 min-w-max rounded flex"> <svg xmlns="http://www.w3.org/2000/svg" style="fill:#7B3F00"  class="text-red-500" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg><span class="ml-1">Bounced Email</span></p>
                        <p class="text-xs w-20  bg-yellow-200/60 text-orange-900 ml-2 p-1 min-w-max rounded flex"> <svg xmlns="http://www.w3.org/2000/svg" style="fill:#7B3F00"  class="text-red-500" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg><span class="ml-1">Unreachable phone</span></p>
                    </div>
                    <div class="flex mt-1">
                        <p class="text-xs w-20  bg-red-200/60 text-red-600 p-1 min-w-max rounded flex"> <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FF0000"  class="text-red-500" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg><span class="ml-1">PRO Cancle request</span></p>
                        <p class="text-xs w-20  bg-red-200/60 text-red-600 p-1 min-w-max ml-2 rounded flex"> <svg xmlns="http://www.w3.org/2000/svg" style="fill:#FF0000"  class="text-red-500" height="16" width="16" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg><span class="ml-1">FEATURED Cancle request</span></p>
                    </div>
                </div>
                <div class="ml-5 h-16 mt-3 ml-12 bg-gray-300 w-px"></div>
                <div class="flex flex-col ml-2">
                    <div class="flex justify-around text-sm -ml-8">
                        <div class="">
                            <span class="font-semibold">Talent ID :</span>
                            <span>1089531</span>
                        </div>
                        <div class="">
                            <span class="font-semibold">Join Status :</span>
                            <span>4</span>
                        </div>
                        <div class="">
                            <span class="font-semibold">DOB :</span>
                            <span>Dec , 13, 1980</span>
                        </div>
                    </div>
                    <div class="flex text-sm mt-1 -ml-4">
                        <div class="ml-9">
                            <span class="font-semibold">Last Login:</span>
                            <span> March. 13 , 2022</span>
                        </div>
                        <div class="ml-10">
                            <span class="font-semibold">Created:</span>
                            <span>Jan. 9, 2022</span>
                        </div>
                        <div class="ml-16 inline">
                            <span class="font-semibold">Age:</span>
                            <span> 18(18-30)</span>
                        </div>
                    </div> 
                    <div class="flex ml-5 rounded mt-2">
                        <div class="text-white text-xs p-1 bg-zinc-500 w-20 min-w-max"><i class="fas fa-check"></i> New Lead</div>
                        <div class="text-white text-xs p-1 bg-sky-500/75 w-20 min-w-max"><i class="fas fa-check"></i> Cold Lead</div>
                        <div class="text-white text-xs p-1 bg-orange-500/75  w-20 min-w-max"><i class="fas fa-spinner"></i> Mild Lead</div>
                        <div class="text-white text-xs p-1 bg-pink-400/60 w-20 min-w-max ">....... Hot Lead</div>
                        <div class="text-white text-xs p-1 bg-green-400/60  w-12 min-w-max">....... Sold</div>
                        <div class="flex ml-2 text-xs font-thin mt-2">
                            <div class="text-red-400">2 Days Lead Owner</div>
                            <div>by Amanda Watts</div>
                        </div>
                    </div>
                </div>
                <div class="ml-5 h-16 mt-3 ml-12 bg-gray-300 w-px"></div>
                <div class="flex ml-10">
                    <div class="flex flex-col mt-1">
                        <span class="text-lg font-semibold">27%</span>
                        <span class="text-lg font-semibold min-w-max -mt-2">Prfile Comletion Score</span>
                        <div class="progress h-3 mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" style="width: 35% ; background-color:rgb(50, 223, 50)!important;"></div>
                        </div>
                    </div>
                    <div class="ml-20 mt-1">
                        <!-- <div class="text-lg  font-semibold text-cyan-600">+  Photos</div> -->
                        <Sidebar/>
                        <Secsidebar/>
                        <!-- <div class="text-lg font-semibold text-cyan-600 mt-2">+  Contact Info</div> -->
                    </div>
                </div>
            </div>
        </div>
        </BaseCard>
    </div>
</template>
