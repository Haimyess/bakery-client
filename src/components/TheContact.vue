<!-- @format -->

<template>
  <div class="checkout">
    <h1>Contact Us</h1>

    <form action="">
      <div class="button-label">
        <label for="">Full name:</label>
        <input type="text" placeholder="John Doe" />
      </div>

      <div class="button-label">
        <label for="">Email:</label>
        <input type="email" placeholder="john@doe.com" />
      </div>

      <textarea
        name=""
        id=""
        rows="10"
        placeholder="Please enter your message here.."
      ></textarea>

      <button>Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 1rem;
}
.button-label {
  display: flex;
  flex-direction: column;
}

/* textarea {
  width: 100%;
} */
</style>
