<template>
  <!-- Element to trigger the modal -->
  <div class="flex gap-x-2">
    <div class="flex items-end gap-4">
      <BaseButton @click="isModal3XlOpen = true">Create CB</BaseButton>
    </div>
  </div>



  <!-- Modal component -->
  <TairoModal :open="isModal3XlOpen" size="xl" @close="isModal3XlOpen = false">
   
    <!-- Body -->
    <div class="p-4 md:p-6">
      <form
            action=""
            method="POST"
            @submit.prevent="onSubmit"
            class="relative py-3 sm:mx-auto sm:max-w-xl"
        >
         <BaseCard shape="curved" class="relative px-4 py-10 sm:p-10 md:mx-0">
            <div class="mx-auto max-w-md">
                <div class="flex items-center gap-4">
                    <div
                        class="bg-primary-500/20 text-primary-500 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-sans text-2xl"
                    >
                        <Icon name="ph:calendar-blank-duotone" class="h-5 w-5" />
                    </div>
                    <div class="block text-xl font-semibold text-gray-700">
                        <BaseHeading as="h3" size="lg" weight="medium">
                        Create Call Back
                        
                        </BaseHeading>
                        
                    </div>
                </div>
                <div class="divide-y divide-gray-200">
                    <div class="grid grid-cols-12 gap-4 py-8">
                      <div class="col-span-12">
                         
                            <BaseCheckbox
                              label="Unknown"
                              shape="rounded"
                              color="primary"
                              v-model="isUnkown"
                              
                            />
                         
                        </div>
                        
                        <div class="col-span-12" v-if="isUnkown == false">
                        <Field
                            v-slot="{ field, errorMessage, handleChange, handleBlur }"
                            name="cbevent.talentnum"
                        >
                            <BaseInput
                            label="Talent ID"
                            shape="curved"
                            
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                            />
                        </Field>
                        </div>
                        <div class="col-span-12 md:col-span-6" v-if="isUnkown == true">
                          <Field
                            v-slot="{ field, errorMessage, handleChange, handleBlur }"
                            name="cbevent.name"
                          >
                            <BaseInput
                              label="Talent Name"
                              :model-value="field.value"
                              :error="errorMessage"
                              :disabled="isSubmitting"
                              type="text"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </Field>
                        </div>
                        <div class="col-span-12 md:col-span-6" v-if="isUnkown == true">
                          <Field
                            v-slot="{ field, errorMessage, handleChange, handleBlur }"
                            name="cbevent.phone"
                          >
                            <BaseInput
                              label="Talent Phone"
                              :model-value="field.value"
                              :error="errorMessage"
                              :disabled="isSubmitting"
                              type="text"
                              @update:model-value="handleChange"
                              @blur="handleBlur"
                            />
                          </Field>
                        </div>
                        <div class="col-span-12">
                        <Field
                            v-slot="{ field, errorMessage, handleChange, handleBlur }"
                            name="cbevent.des"
                        >
                            <BaseInput
                            label="Notes"
                            shape="curved"
                            :model-value="field.value"
                            :error="errorMessage"
                            :disabled="isSubmitting"
                            type="text"
                            @update:model-value="handleChange"
                            @blur="handleBlur"
                            />
                        </Field>
                        </div>
                        <div class="col-span-12">
                            <Field
                                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                                name="cbevent.cb_type"
                            >
                                <BaseSelect
                                    shape="rounded"
                                    label="Call back is for	"
                                    :model-value="field.value"
                                    :error="errorMessage"
                                    :disabled="isSubmitting"
                                    @update:model-value="handleChange"
                                    @blur="handleBlur"
                                >
                                    <option value="" hidden></option>
                                    <option value="3">New CS Request</option>
                                    <option value="0">Sales</option>
                                    <option value="1">Customer Service</option>
                                    <option value="2">Managment/Unknown</option>
                                </BaseSelect>
                            </Field>
                        </div>
                        <div class="col-span-12">
                            <Field
                                v-slot="{ field, errorMessage, handleChange, handleBlur }"
                                name="cbevent.to_staff_id"
                            >
                                <BaseSelect
                                    shape="rounded"
                                    label="Sales Person	"
                                    :model-value="field.value"
                                    :error="errorMessage"
                                    :disabled="isSubmitting"
                                    @update:model-value="handleChange"
                                    @blur="handleBlur"
                                >
                                
                                    <option
                                      v-for="user in trmUsersData?.data"
                                      :key="user.usernum"
                                      :value="user.usernum"
                                    >
                                      {{ user.fname + ' ' + user.lname }}
                                    </option>
                                  
                                    <!-- <option value="" hidden></option>
                                    <option value="3">New CS Request</option>
                                    <option value="0">Sales</option>
                                    <option value="1">Customer Service</option>
                                    <option value="2">Managment/Unknown</option> -->
                                </BaseSelect>
                            </Field>
                        </div>

                        <div class="col-span-12">
                          <DatePicker
                            v-model="startDate"
                            :masks="masks"
                            :min-date="new Date()"
                            mode="dateTime"
                            hide-time-header
                            trim-weeks
                          >
                            <template #default="{ inputValue, inputEvents }">
                              <div class="relative grow">
                                <Field
                                  v-slot="{
                                    field,
                                    errorMessage,
                                    handleChange,
                                    handleBlur,
                                  }"
                                  name="cbevent.startDateTime"
                                >
                              
                                  <BaseInput
                                    shape="curved"
                                    label="Start date"
                                    icon="ph:calendar-blank-duotone"
                                    :value="inputValue"
                                    v-on="inputEvents"
                                    :classes="{
                                      input: '!h-11 !ps-11',
                                      icon: '!h-11 !w-11',
                                    }"
                                    :model-value="field.value"
                                    :error="errorMessage"
                                    :disabled="isSubmitting"
                                    type="text"
                                    @update:model-value="handleChange"
                                    @blur="handleBlur"
                                  />
                                </Field>
                              </div>
                            </template>
                          </DatePicker>
                        </div>
                       
                    </div>
                    <div class="flex items-center gap-4 pt-4">
                        <BaseButton shape="curved" class="!h-12 w-full" @click="isModal3XlOpen = false">Cancel</BaseButton>
                        <BaseButton
                        type="submit"
                        shape="curved"
                        color="primary"
                        class="!h-12 w-full"
                        :disabled="isSubmitting"
                        :loading="isSubmitting"
                        >Create</BaseButton
                        >
                    </div>
                </div>
            </div>
         </BaseCard>
      </form>
    </div>

    <!-- <template #footer>
     
      <div class="p-4 md:p-6">
        <div class="flex gap-x-2">
          <BaseButton @click="isModal3XlOpen = false">Decline</BaseButton>

          <BaseButton color="primary" flavor="solid" @click="isModal3XlOpen = false">
            Accept
          </BaseButton>
        </div>
      </div>
    </template> -->
  </TairoModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { toTypedSchema } from '@vee-validate/zod'
import { Field, useForm } from 'vee-validate'
import { z } from 'zod'
import { DatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'
import '~/assets/css/vcalendar.css'
import dayjs from 'dayjs';

const emit = defineEmits(['reloadData'])
const isModal2XlOpen = ref(false)
const isModal3XlOpen = ref(false)
const isUnkown = ref(false)
const cbTime = ref("")
const vdate = ref(new Date());
const startDate = ref(new Date());
const dates = ref({
  start: new Date(),
  end: new Date(),
})
const masks = ref({
  input: 'YYYY-MM-DD',
})
const VALIDATION_TEXT = {
  TALENT_ID_REQUIRED: 'Talent ID is required',
  NOTES_REQUIRED: 'Notes is required',
  SALES_PERSON_REQUIRED: "Please select sales person",
  OPTION_REQUIRED: 'Please select an option',
  NAME_REQUIRED:'Name is required',
  PHONE_REQUIRED:'Phone is required',
}
const { $api } = useNuxtApp();
// This is the Zod schema for the form input
// It's used to define the shape that the form data will have
const zodSchema = z
  .object({
    cbevent: z.object({
       talentnum: z.string().refine((value) => {
          return !(!isUnkown.value && value.trim() === '')
      },VALIDATION_TEXT.TALENT_ID_REQUIRED).optional(),
       name: z.string().refine((value) => {
        
          return !(isUnkown.value && value.trim() === '')
        
      },VALIDATION_TEXT.NAME_REQUIRED).optional(),
       phone: z.string().refine((value) => {
          
          return !(isUnkown.value && value.trim() === '')
         
      },VALIDATION_TEXT.PHONE_REQUIRED).optional(),
      // talentnum: z.string().refine(value => value.trim() !== '', {
      //       message: VALIDATION_TEXT.TALENT_ID_REQUIRED,
      //   }),
      cb_type: z.string().refine(value => value !== '', {
            message: VALIDATION_TEXT.OPTION_REQUIRED,
        }),
      to_staff_id: z.number(),
     // startDateTime: z.date().nullable(),
      des: z.string().refine(value => value.trim() !== '', {
            message: VALIDATION_TEXT.NOTES_REQUIRED,
        })
        
    /*  .refine((value) => {
        console.log("=======>",value)
        // Check if the date is in the future
        const now = dayjs();
        const inputDate = dayjs(value, 'MM/DD/YYYY h:mm A', true); // Use strict parsing
        return inputDate.isValid() && inputDate.isAfter(now);
      }, 'Date must be in the future')
      .refine((value) => value.trim() !== '', 'Start date is required')
      .refine((value) => {
        // Convert the date to a Unix timestamp
        const timestamp = dayjs(value, 'MM/DD/YYYY h:mm A').unix();
        return !isNaN(timestamp);
      }, 'Invalid Unix timestamp')
      .refine((value) => value.trim() !== '', 'Start date is required'),
      */
    }),
  })
  .superRefine((data, ctx) => {
    // This is a custom validation function that will be called
    // before the form is submitted
    if (!isUnkown.value && !data.cbevent.talentnum) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: VALIDATION_TEXT.TALENT_ID_REQUIRED,
        path: ['cbevent.talentnum'],
      })
    } else if(isUnkown.value && !data.cbevent.name) {
      ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: VALIDATION_TEXT.NAME_REQUIRED,
              path: ['cbevent.name'],
            })
    }
  })

// Zod has a great infer method that will
// infer the shape of the schema into a TypeScript type
type FormInput = z.infer<typeof zodSchema>

const validationSchema = toTypedSchema(zodSchema)
const initialValues = computed<FormInput>(() => ({
  cbevent: {
    talentnum: '',
    cb_type: '',
    to_staff_id: '',
    des: '',
    isUnkown: false,
    name:'',
    phone:'',
    startDateTime:'',
    endDateTime:''
  },
}))

const {
  handleSubmit,
  isSubmitting,
  setFieldError,
  meta,
  values,
  errors,
  resetForm,
  setFieldValue,
  setErrors,
} = useForm({
  validationSchema,
  initialValues,
})

const success = ref(false)
const fieldsWithErrors = computed(() => Object.keys(errors.value).length)

const toaster = useToaster()
console.log("ASdadasd")
  const {
    data: trmUsersData,
   pending: trmUsersPending,
   error: trmUsersError,
   refresh: trmUsersRefresh
  } = await $api.trmUsers.getUsers({"q":[[["where","status",1],["where","department",9]]],"per_page":500});

// This is where you would send the form data to the server
const onSubmit = handleSubmit(
  async (values) => {
    success.value = false
console.log("====>",values.cbevent)


    // here you have access to the validated form values
    console.log('event-create-success', values)

    try {
      // fake delay, this will make isSubmitting value to be true

      const {
        data: createCb,
        pending: createCbPending,
        error: createCbError,
        refresh: createCbRefresh
        } = await $api.callBacks.createCallBacks(values.cbevent);
        
        if(createCbError.value) {
          // error while creating
          // setFieldError('event.title', 'This name is not allowed')
           success.value = false
          toaster.clearAll()
                  toaster.show({
                    title: 'Oops!',
                    message: 'Please review the errors in the form',
                    color: 'danger',
                    icon: 'lucide:alert-triangle',
                    closable: true,
                  })
            

          
        } else if(createCb.value) {
          emit('reloadData',createCb.value.to_staff_id)
          toaster.clearAll()
            toaster.show({
              title: 'Success',
              message: `Call Back has been created!`,
              color: 'success',
              icon: 'ph:check',
              closable: true,
            })
            success.value = true
            resetForm()
            isModal3XlOpen.value = false;
             document.documentElement.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
        }
        
      
    } catch (error: any) {
      
    }
    

  },
  (error) => {
    // this callback is optional and called only if the form has errors
    success.value = false

    // here you have access to the error
    console.log('event-create-error', error)

    // you can use it to scroll to the first error
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)


</script>