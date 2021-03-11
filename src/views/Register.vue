<template>
  <form action="" class="w-full">
    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
      Create account
    </h1>
    <label class="block text-sm">
      <span class="text-gray-700 dark:text-gray-400">Name</span>
      <input
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="Jane Doe"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">Email</span>
      <input
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="Jane Doe"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400">Password</span>
      <input
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="***************"
        type="password"
      />
    </label>
    <label class="block mt-4 text-sm">
      <span class="text-gray-700 dark:text-gray-400"> Confirm password </span>
      <input
        class="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        placeholder="***************"
        type="password"
      />
    </label>

    <div class="flex mt-6 text-sm">
      <label class="flex items-center dark:text-gray-400">
        <input
          type="checkbox"
          class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
        />
        <span class="ml-2">
          I agree to the
          <span class="underline">privacy policy</span>
        </span>
      </label>
    </div>
    <a
      class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
      href="./login.html"
    >
      Create account
    </a>

    <p class="mt-4">
      <router-link
        class="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
        :to="{name: 'Login'}"
      >
        Уже есть аккаунт? Войти
      </router-link>
    </p>
  </form>
</template>

<script>
export default {};
</script>

<style scoped>
</style>