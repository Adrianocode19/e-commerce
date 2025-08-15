<script setup lang="ts">
import MainBtn from '../Card/MainBtn.vue'
import { formSchema } from '@/schemas/formSchema'
import { ref } from 'vue'

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
function validateField(field: keyof typeof errors.value, value: string) {
  const fieldSchema = formSchema.shape[field] // pega a regra do campo
  const result = fieldSchema.safeParse(value)

  if (!result.success) {
    errors.value[field] = result.error.issues[0].message
  } else {
    errors.value[field] = ''
  }
}

// ✅ Valida todo o formulário
function validateForm() {
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

// ✅ Submissão
function onSubmit() {
  if (validateForm()) {
    alert('Formulário enviado!')
    console.log({
      name: name.value,
      email: email.value,
      phone: phone.value,
      birthdate: birthdate.value,
      message: message.value,
    })
  }
}
</script>

<template>
  <div class="flex flex-col items-center">
    <h3 class="text-white text-lg font-semibold">Fale Conosco</h3>

    <form class="flex flex-col gap-1.5 sm:gap-4 mt-2.5" @submit.prevent="onSubmit">
      <!-- Nome -->
      <input
        v-model="name"
        @blur="validateField('name', name)"
        type="text"
        placeholder="Seu nome"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.name">{{ errors.name }}</span>

      <!-- Email -->
      <input
        v-model="email"
        @blur="validateField('email', email)"
        type="email"
        placeholder="Seu e-mail"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.email">{{ errors.email }}</span>

      <!-- Telefone -->
      <input
        v-model="phone"
        @blur="validateField('phone', phone)"
        v-mask="'(##) #####-####'"
        type="tel"
        placeholder="Seu telefone"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.phone">{{ errors.phone }}</span>

      <!-- Data de nascimento -->
      <input
        v-model="birthdate"
        @blur="validateField('birthdate', birthdate)"
        v-mask="'##/##/####'"
        placeholder="Sua data de nascimento"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
      />
      <span class="text-red-500 text-sm" v-if="errors.birthdate">{{ errors.birthdate }}</span>

      <!-- Mensagem -->
      <textarea
        v-model="message"
        @blur="validateField('message', message)"
        placeholder="Sua mensagem"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed min-h-40"
      ></textarea>
      <span class="text-red-500 text-sm" v-if="errors.message">{{ errors.message }}</span>

      <MainBtn type="submit">Enviar Mensagem</MainBtn>
    </form>
  </div>
</template>
