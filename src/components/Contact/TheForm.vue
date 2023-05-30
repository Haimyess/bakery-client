<!-- @format -->

<script setup lang="ts">
// Vuelidate -- Form Validation
import { useVuelidate } from "@vuelidate/core";
import { required, email, maxLength, between } from "@vuelidate/validators";

import axios from "axios";

// Components
import TheButton from "../TheButton.vue";
import TheInput from "../TheInput.vue";

import { ref, reactive, computed } from "vue";

const contactData = reactive({ userName: "", userEmail: "", userMessage: "" });

const isSubmitMsg = ref(false);

const rules = computed(() => {
  return {
    userName: { required }, // Matches state.firstName
    userEmail: { required, email }, // Matches state.lastName
    userMessage: { required },
  };
  //   between: between(10, 200)
});

const baseUrl = "http://localhost:5000/send";

async function dataPost() {
  try {
    const response = await axios.post(baseUrl, contactData);
    isSubmitMsg.value = true;
    // console.log(response);
  } catch (err) {
    // handle error function
    console.log(err);
  }
}

// We initialized Vuelidated within this component
const v$ = useVuelidate(rules, contactData);

async function handleContact() {
  const result = await v$.value.$validate();

  if (result) {
    console.log("Form Validated and sent succesfully");

    dataPost();

    v$.value.$reset();

    contactData.userEmail = "";
    contactData.userName = "";
    contactData.userMessage = "";
  } else {
    console.log("Error!!");
  }
}
</script>

<template>
  <!-- <h2>{{ props.formName }}</h2>   -->
  <form @submit.prevent="handleContact">
    <!-- <input type="text" v-model="contactData.userEmail" /> -->

    <TheInput
      placeholder="John Doe"
      label="Full Name:"
      v-model="contactData.userName"
      @blur="v$.$touch"
    />

    <span
      class="input-errors"
      v-for="error of v$.userName.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}</span
    >

    <TheInput
      type="email"
      placeholder="johndoe@gmail.com"
      label="Email:"
      v-model="contactData.userEmail"
    />

    <span
      class="input-errors"
      v-for="error of v$.userEmail.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}</span
    >

    <textarea
      name=""
      id=""
      rows="10"
      placeholder="Please enter your message here.."
      v-model="contactData.userMessage"
    ></textarea>

    <span
      class="input-errors"
      v-for="error of v$.userMessage.$errors"
      :key="error.$uid"
    >
      {{ error.$message }}</span
    >

    <TheButton> Submit</TheButton>
  </form>

  <p v-if="isSubmitMsg">Message Sent succesfully</p>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem;
}

.input-errors {
  color: red;
  font-size: 0.9rem;
}
</style>
