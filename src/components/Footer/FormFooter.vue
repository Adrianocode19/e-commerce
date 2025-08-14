<script setup lang="ts">
import MainBtn from '../Card/MainBtn.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { formSchema } from '@/schemas/formSchema'

const { handleSubmit, defineField, errors, resetForm } = useForm({
  validationSchema: toTypedSchema(formSchema),
})

const [name, nameAttrs] = defineField('name')
const [email, emailAttrs] = defineField('email')
const [phone, phoneAttrs] = defineField('phone')
const [birthdate, birthdateAttrs] = defineField('birthdate')
const [message, messageAttrs] = defineField('message')

const onSubmit = handleSubmit((values) => {
  console.log('Formulário enviado com sucesso!', values)
  resetForm()
})
</script>

<template>
  <div class="flex flex-col items-center">
    <h3 class="text-white text-lg font-semibold">Fale Conosco</h3>
    <form class="flex flex-col gap-1.5 sm:gap-4 mt-2.5" @submit.prevent="onSubmit">
      <input
        v-model="name"
        v-bind="nameAttrs"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
        type="text"
        placeholder="Seu nome"
      />
      <span class="text-red-500 text-sm" v-if="errors.name">{{ errors.name }}</span>

      <input
        v-model="email"
        v-bind="emailAttrs"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
        type="email"
        placeholder="Seu e-mail"
      />
      <span class="text-red-500 text-sm" v-if="errors.email">{{ errors.email }}</span>

      <input
        v-model="phone"
        v-bind="phoneAttrs"
        v-mask="'(##) #####-####'"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
        type="tel"
        placeholder="Seu telefone"
      />
      <span class="text-red-500 text-sm" v-if="errors.phone">{{ errors.phone }}</span>

      <input
        v-model="birthdate"
        v-bind="birthdateAttrs"
        v-mask="'##/##/####'"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed"
        placeholder="Sua data de nascimento"
      />
      <span class="text-red-500 text-sm" v-if="errors.birthdate">{{ errors.birthdate }}</span>

      <textarea
        v-model="message"
        v-bind="messageAttrs"
        class="py-2.5 px-4 bg-oxford-blue rounded-lg text-base text-chateau-gray outline-none border-[1px] border-river-bed min-h-40"
        placeholder="Sua mensagem"
      ></textarea>
      <span class="text-red-500 text-sm" v-if="errors.message">{{ errors.message }}</span>

      <MainBtn @click="onSubmit">Enviar Mensagem</MainBtn>
    </form>
  </div>
</template>
