<template>
   <div class="w-full flex">
    <div class="w-full md:w-6.5/12 ">
        <div class="flex gap-1">
          <BaseRadioHeadless v-model="value" name="radio_custom"  value="value_1" class="flex-1">
            <BaseCard color="info"
              shape="curved"
              class=" relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Cold Lead
                </h4>
              </div>

              <div class="child absolute end-1 top-0 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless v-model="value" name="radio_custom" value="value_2" class="flex-1">
            <BaseCard color="warning"
              shape="curved"
              class=" relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Mild Lead
                </h4>
              </div>

              <div class="child absolute end-1 top-0 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          <BaseRadioHeadless v-model="value" name="radio_custom" value="value_3" class="flex-1">
            <BaseCard color="danger"
              shape="curved"
              class=" relative border-2 p-5 peer-checked:[&_.child]:!opacity-100"
            >
              <div class="flex flex-col">
                <h4
                  class="text-muted-500 dark:text-muted-200 mb-3 font-sans text-sm font-medium uppercase leading-tight"
                >
                  Hot Lead
                </h4>
              </div>

              <div class="child absolute end-1 top-0 opacity-0">
                <Icon name="ph:check-circle-duotone" class="text-success-500 h-7 w-7" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>

          
        </div>
        <div class="col-span-12 pt-3">
                    <div class="grid gap-4 sm:grid-cols-3">
                      <div>
                        <BaseInput
                         
                          label="Date "
                          placeholder="12/21/2023"
                        />
                      </div>
                      <div>
                        <BaseInput
                          label="Time "
                          placeholder="09:30 AM"
                        />
                      </div>
                      <div>
                        <BaseSelect
                         
                          label="Time Zone"
                        >
                          <option value="">Local</option>
                          <option value="01">PST</option>
                          <option value="02">GMT +2 </option>
                          <option value="02">GMT +3 </option>
                          <option value="02">GMT +4 </option>
                          
                        </BaseSelect>
                      </div>
                    </div>
        </div>
        <div class="col-span-12 pt-3">
            <BaseButtonGroup>
                <BaseButton shadow="flat"> VICI </BaseButton>
                <BaseButton shadow="flat"> IB </BaseButton>
                <BaseButton shadow="flat"> MOB </BaseButton>
                <BaseButton shadow="flat"> ICB </BaseButton>
                <BaseButton shadow="flat"> MCB </BaseButton>
                <BaseButton shadow="flat"> A </BaseButton>
            </BaseButtonGroup>
        </div>
        <div class="col-span-12 pt-3">
            <BaseTextarea
                    
                   
                    shape="rounded"
                    placeholder="Click here to enter notes..."
                    color-focus
                    />
        </div>
        <div class="col-span-12 pt-5">
            <BaseButton color="primary">Save</BaseButton>
        </div>

    </div>
    <div class="w-full md:w-5.5/12 pl-3">
        <label class="nui-label pb-3 text-[0.825rem]">CB Status</label>
        <div class="grid grid-cols-2 gap-6 md:max-w-lg md:grid-cols-2">
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Said Not Interested"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Will Sign-up Soon"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Will get CC and call back"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="No Money"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Will call back"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Parent will call - Teen"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Too Expensive"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Talent will think about it"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Ask to us to call back - set time"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="No Time to Audition"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Left Voice Mail"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Sale Made"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Early Hang Up"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Late Hang Up"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="No Answer"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Wrong Number"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Do Not Call (Talent Request)"
            color="primary"
            />
            <BaseRadio
            v-model="value"
            name="checkbox_base"
            value=""
            label="Language Barrier"
            color="primary"
            />

           
        </div>
    </div>
   </div>
</template>