
<template>
  <!-- <div class="p-2 "> -->
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
            /> Activity Feed
          </span>
              
      </BaseHeading>
    
    
      <div class="w-full  ">
          <BaseTabs
            model-value="all"
            :tabs="[
              { label: 'All', value: 'all' },
              { label: 'Notes', value: 'notes' },
              { label: 'Call Logs', value: 'callLogs' },
              { label: 'Email & Messages', value: 'emailMsg' },
              { label: 'System Activities', value: 'systemActivites' },
              { label: 'Lead History', value: 'leadHistory' },
            ]"
          >
            <template #tab="{ activeValue }">
              <div v-if="activeValue === 'all'" class="font-sans text-sm text-gray-500 dark:text-gray-400">
                <talent-profile-tabs-AllActivities />
               
              </div>

              <div
                v-else-if="activeValue === 'notes'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
              Notes
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </div>
              <div
                v-else-if="activeValue === 'callLogs'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
              callLogs
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </div>
              <div
                v-else-if="activeValue === 'emailMsg'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
              emailMsg
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </div>
              <div
                v-else-if="activeValue === 'systemActivites'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
              systemActivites
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </div>
              <div
                v-else-if="activeValue === 'leadHistory'"
                class="font-sans text-sm text-gray-500 dark:text-gray-400"
              >
              leadHistory
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
                tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
              </div>
            </template>
          </BaseTabs>
        </div>
       
  </BaseCard>
    <BaseCard class=" p-2 gap-2 pb-5 mt-3">
    <div class="w-full  mt-5">
      <BaseTabSlider
        model-value="team"
        :tabs="[
          { label: 'Notes', value: 'notes' },
          { label: 'Activity', value: 'activity' },
          { label: 'ChitChat', value: 'chitchat' },
          { label: 'Request Interview & availability', value: 'reqInter' }
        ]"
        v-slot="{ activeValue }"
      >
        <p v-if="activeValue === 'notes'" class="font-sans text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
          tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
        </p>

        <p
          v-else-if="activeValue === 'activity'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
          <talent-profile-tabs-AddActivitiesCard />
        
        </p>

        <p
          v-else-if="activeValue === 'chitchat'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
        <div class="container">
    <div class="row">
      <section class="chat">
        <div class="header-chat">
          <div
              class="photo"
              :style="{
                backgroundImage: 'url(http://localhost:3000/_nuxt/img/avatars/2.svg)'
              }"
            >
              <div class="online" />
            </div>
          <p class="name">Rose Wright</p>
          <i class="icon clickable fa fa-ellipsis-h right" aria-hidden="true" />
        </div>
        <div class="messages-chat">
          <div class="message">
            
            <p class="text">Hi, how are you ?</p>
          </div>
          <div class="message text-only">
            <p class="text">What are you doing tonight? Want to go take a drink?</p>
          </div>
          
          <div class="message text-only">
            <div class="response">
              <p class="text">Hey Megan! It's been a while 😃</p>
            </div>
          </div>
          <div class="message text-only">
            <div class="response">
              <p class="text">When can we meet?</p>
            </div>
          </div>
          
          <div class="message">
            
            <p class="text">9 pm at the bar if possible 😳</p>
          </div>
          
        </div>
        <div class="footer-chat">
          <i
            class="icon fa fa-smile-o clickable"
            style="font-size: 25pt"
            aria-hidden="true"
          />
          <input
            type="text"
            class="write-message"
            placeholder="Enter Message..."
          />
          <button class="send">Send</button>
         
        </div>
      </section>
    </div>
  </div>
         <talent-profile-tabs-ChitChatCard />
        </p>
        <p
          v-else-if="activeValue === 'reqInter'"
          class="font-sans text-sm text-gray-500 dark:text-gray-400"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid
          tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra.
        </p>
      </BaseTabSlider>
    </div>
    </BaseCard>

</template>
<style>.chat {
  width: calc(100% - 0px);
}

.header-chat {
    background-color: #FFF;
    height: 60px;
    box-shadow: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
}

.chat .header-chat .icon {
  margin-left: 30px;
  color:#515151;
  font-size: 14pt;
}

.chat .header-chat .name {
    font-weight: bold;
    margin: 0 0 0 10px;
    text-transform: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 13pt;
    color: #515151;
}

.chat .header-chat .right {
  position: absolute;
  right: 40px;
}

.chat .messages-chat {
  padding: 15px 15px;
  margin-bottom:60px
}

.chat .messages-chat .message {
  display:flex;
  align-items: center;
  margin-bottom: 8px;
}

.chat .messages-chat .message .photo {
    display: block;
    width: 45px;
    height: 45px;
    background: #E6E7ED;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

.chat .messages-chat .text {
  margin: 0 0px;
  background-color: #f6f6f6;
  padding: 15px;
  border-radius: 5px;
}



.time {
  font-size: 10px;
  color:lightgrey;
  margin-bottom:10px;
  margin-left: 85px;
}

.response-time {
  float: right;
  margin-right: 40px !important;
}

.response {
  float: right;
  margin-right: 0px !important;
  margin-left:auto; /* flexbox alignment rule */
}

.response .text {
  background-color: #0053b3 !important;
  color:#fff
}

.footer-chat {
  width: calc(100% - 0px);
  height: 50px;
  display:flex;
  align-items: center;
  position:absolute;
  bottom: 0;
  background-color: transparent;
  border-top: 2px solid #EEE;
  
}

.chat .footer-chat .icon {
  margin-left: 30px;
  color:#C0C0C0;
  font-size: 14pt;
}

.chat .footer-chat .send {
    color: #fff;
    background-color: #4f6ebd;
    position: absolute;
    right: 15px;
    padding: 8px 15px 8px 15px;
    border-radius: 5px;
    font-size: 9pt;
}

.chat .footer-chat .name {
  margin: 0 0 0 20px;
  text-transform: uppercase;
  font-family:'Montserrat', sans-serif;
  font-size: 13pt;
  color:#515151;
}

.chat .footer-chat .right {
  position: absolute;
  right: 40px;
}

.write-message {
  border:none !important;
  width:60%;
  height: 50px;
  margin-left: 20px;
  padding: 10px;
}

.footer-chat *::-webkit-input-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
}
.footer-chat input *:-moz-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
}
.footer-chat input *::-moz-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
  margin-left:5px;
}
.footer-chat input *:-ms-input-placeholder {
  color: #C0C0C0;
  font-size: 13pt;
}

.clickable {
  cursor: pointer;
}
.header-chat .photo{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}</style>