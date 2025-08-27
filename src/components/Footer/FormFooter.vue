<template>
  <div class="flex flex-col items-center">
    <h3 class="text-white text-lg font-semibold">Fale Conosco</h3>

    <form class="flex flex-col gap-1.5 sm:gap-4 mt-2.5" @submit.prevent="handleSubmit">
      <input
        v-model="name"
        @blur="validateField('name', name)"
        type="text"
        placeholder="Seu nome"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.name">{{ errors.name }}</span>

      <input
        v-model="email"
        @blur="validateField('email', email)"
        type="email"
        placeholder="Seu e-mail"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.email">{{ errors.email }}</span>

      <input
        v-model="phone"
        @blur="validateField('phone', phone)"
        v-mask="'(##) #####-####'"
        type="tel"
        placeholder="Seu telefone"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.phone">{{ errors.phone }}</span>

      <input
        v-model="birthdate"
        @blur="validateField('birthdate', birthdate)"
        v-mask="'##/##/####'"
        type="text"
        placeholder="Sua data de nascimento"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.birthdate">{{ errors.birthdate }}</span>
      <textarea
        v-model="message"
        @blur="validateField('message', message)"
        placeholder="Sua mensagem"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed min-h-40"
      ></textarea>
      <span class="text-red-500 text-sm" v-if="errors.message">{{ errors.message }}</span>
      <div ref="recaptcha"></div>

      <MainBtn type="submit">Enviar Mensagem</MainBtn>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MainBtn from '../MainBtn.vue'
import { formSchema } from '@/schemas/formSchema'

const recaptcha = ref<HTMLDivElement | null>(null)
let recaptchaWidgetId: number | null = null

// Campos do formulário
const name = ref('')
const email = ref('')
const phone = ref('')
const birthdate = ref('')
const message = ref('')

// Objeto de erros
const errors = ref<{
  name?: string
  email?: string
  phone?: string
  birthdate?: string
  message?: string
}>({})

// ✅ Valida apenas um campo
const validateField = (field: keyof typeof errors.value, value: string) => {
  const fieldSchema = formSchema.shape[field] // pega a regra do campo
  const result = fieldSchema.safeParse(value)

  if (!result.success) {
    errors.value[field] = result.error.issues[0].message
  } else {
    errors.value[field] = ''
  }
}

const validateForm = () => {
  const result = formSchema.safeParse({
    name: name.value,
    email: email.value,
    phone: phone.value,
    birthdate: birthdate.value,
    message: message.value,
  })

  if (!result.success) {
    errors.value = {}
    result.error.issues.forEach((err) => {
      const field = err.path[0] as keyof typeof errors.value
      errors.value[field] = err.message
    })
    return false
  }

  errors.value = {}
  return true
}

const handleSubmit = async () => {
  const recaptchaResponse = (window as any).grecaptcha.getResponse(recaptchaWidgetId)
  if (!recaptchaResponse) {
    alert('Por favor, confirme o reCAPTCHA.')
    return
  }
  if (validateForm() && recaptchaResponse) {
    alert('Formulário enviado!')
    const payload = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      birthdate: birthdate.value,
      message: message.value,
      recaptcha: recaptchaResponse,
    }
    console.log(payload)
    ;(window as any).grecaptcha.reset(recaptchaWidgetId)
  }
}

const waitForGrecaptcha = () => {
  return new Promise<void>((resolve) => {
    const check = () => {
      if ((window as any).grecaptcha && (window as any).grecaptcha.render) {
        resolve()
      } else {
        setTimeout(check, 100)
      }
    }
    check()
  })
}

onMounted(async () => {
  await waitForGrecaptcha()
  if (recaptcha.value) {
    recaptchaWidgetId = (window as any).grecaptcha.render(recaptcha.value, {
      sitekey: '6LcevqsrAAAAAJJArEVc_eOVtYnlB1SzJmepFnWJ',
      theme: 'dark',
    })
  }
})
</script>
