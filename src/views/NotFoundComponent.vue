<template>
  <div class="max-w-xl text-center space-y-4">
    <h1 class="text-2xl font-light">404. Cтраница не найдена</h1>
    <p class="text-gray-600 text-sm">
      Видимо адрес этой страницы перестал существовать (растворился в бытие).
      Попробуйте вернуться немного назад.
      <br>
      Или напишите нам — мы все уладим
    </p>
    <div class="butons-cont space-x-2">
      <router-link :to="{name: 'Home'}" class="btn btn-cancel">
        Вернуться на главную
      </router-link>
      <a href="tme" class="btn btn-save">
        Написать в поддержку
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>