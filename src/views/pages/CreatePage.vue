<template>
  <div class="a">
    <header class="pb-4 mb-4">
      <h1 class="text-4xl font-semibold">Создание страницы</h1>
      <!-- <button @click="$router.back()">Назад</button> -->
    </header>
    <main class="h-full pb-16 overflow-y-auto">
      <div class="container px-6 mx-auto grid">
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400">Name</span>
            <input
              class="block w-full mt-1 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 form-input"
              placeholder="Jane Doe"
            />
          </label>
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Requested Limit
            </span>
            <select
              class="block w-full mt-1 form-select focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              <option>$1,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
              <option>$25,000</option>
            </select>
          </label>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">Message</span>
            <textarea
              class="block w-full mt-1 text-sm form-textarea focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300"
              rows="3"
              placeholder="Enter some long form content."
            ></textarea>
          </label>

          <div class="flex mt-6 text-sm">
            <label class="flex items-center dark:text-gray-400">
              <input
                type="checkbox"
                class="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 checked:bg-blue-600 checked:border-transparent appearance-none"
              />
              <span class="ml-2">
                I agree to the
                <span class="underline">privacy policy</span>
              </span>
            </label>
          </div>
        </div>

        <!-- Validation inputs -->
        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Validation
        </h4>
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <!-- Invalid input -->
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400">
              Invalid input
            </span>
            <input
              class="block w-full mt-1 text-sm border-red-600 dark:text-gray-300 dark:bg-gray-700 focus:border-red-400 focus:outline-none focus:shadow-outline-red form-input"
              placeholder="Jane Doe"
            />
            <span class="text-xs text-red-600 dark:text-red-400">
              Your password is too short.
            </span>
          </label>

          <!-- Valid input -->
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"> Valid input </span>
            <input
              class="block w-full mt-1 text-sm border-green-600 dark:text-gray-300 dark:bg-gray-700 focus:border-green-400 focus:outline-none focus:shadow-outline-green form-input"
              placeholder="Jane Doe"
            />
            <span class="text-xs text-green-600 dark:text-green-400">
              Your password is strong.
            </span>
          </label>

          <!-- Helper text -->
          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"> Helper text </span>
            <input
              class="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
            <span class="text-xs text-gray-600 dark:text-gray-400">
              Your password must be at least 6 characters long.
            </span>
          </label>
        </div>

        <!-- Inputs with icons -->
        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Icons
        </h4>
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400">Icon left</span>
            <!-- focus-within sets the color for the icon when input is focused -->
            <div
              class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
            >
              <input
                class="block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
              <div
                class="absolute inset-y-0 flex items-center ml-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400">Icon right</span>
            <!-- focus-within sets the color for the icon when input is focused -->
            <div
              class="relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400"
            >
              <input
                class="block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
              <div
                class="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
            </div>
          </label>
        </div>

        <!-- Inputs with buttons -->
        <h4 class="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Buttons
        </h4>
        <div
          class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
        >
          <label class="block text-sm">
            <span class="text-gray-700 dark:text-gray-400"> Button left </span>
            <div class="relative">
              <input
                class="block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
              <button
                class="absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              >
                Click
              </button>
            </div>
          </label>

          <label class="block mt-4 text-sm">
            <span class="text-gray-700 dark:text-gray-400"> Button right </span>
            <div class="relative text-gray-500 focus-within:text-purple-600">
              <input
                class="block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input"
                placeholder="Jane Doe"
              />
              <button
                class="absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
              >
                Click
              </button>
            </div>
          </label>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #e2e8f0;
  border-width: 1px;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
}
.form-select {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3E%3Cpath d='M15.3 9.3a1 1 0 011.4 1.4l-4 4a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4l3.3 3.29 3.3-3.3z'/%3E%3C/svg%3E");
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  background-repeat: no-repeat;
  background-color: #fff;
  border-color: #e2e8f0;
  border-width: 1px;
  border-radius: 0.25rem;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  background-position: right 0.5rem center;
  background-size: 1.5em 1.5em;
}
.form-textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #fff;
  border-color: #e2e8f0;
  border-width: 1px;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
}
.form-checkbox {
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  flex-shrink: 0;
  height: 1em;
  width: 1em;
  border-width: 1px;
  border-radius: 0.25rem;
}
.form-checkbox:checked {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L7 8.586 5.707 7.293z'/%3E%3C/svg%3E");
    border-color: transparent;
    background-color: currentColor;
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
}

</style>