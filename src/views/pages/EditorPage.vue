<template>
  <div class="h-full flex">
    <aside class="w-20 h-full bg-white border-r">
      <div class="cont w-10 mx-auto pt-6">
        <router-link
          :to="{ name: 'EditorPage' }"
          class="btn-edit hover:bg-gray-300"
          exact
          active-class="bg-gray-200"
        >
          <svg
            class="h-5 w-6"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M.82125 9.95042L0 15.4854l4.92188-2.6606L.82125 9.95042zM10.5243.455416c-.2692-.188828-.57299-.32276-.89399-.394142-.321-.0713824-.65292-.0788167-.97679-.0218781-.32387.0569386-.63334.1771341-.91075.3537191-.2774.176585-.51729.406098-.70596.675425L1.47368 8.99979l4.10063 2.86871 5.56879-7.93121c.379-.54399.5267-1.21612.4107-1.8689-.116-.65278-.4863-1.232874-1.0295-1.612974zM16.3125 16.3123H0c0 .4476.17779.8768.494257 1.1932.316468.3165.745693.4943 1.193243.4943H18c0-.4476-.1778-.8768-.4943-1.1932-.3164-.3165-.7456-.4943-1.1932-.4943z"
            ></path>
          </svg>
        </router-link>
        <router-link
          :to="{ name: 'EditorPage', hash: '#design' }"
          class="btn-edit hover:bg-gray-300"
          active-class="bg-gray-200"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 12 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero">
              <path
                d="M12 10c0-3.74-4.18-7.439-6-10-1.82 2.561-6 6.26-6 10a6 6 0 1 0 12 0z"
              ></path>
              <path
                d="M5.59 2.133c-.022.026-1.089 1.288-1.403 1.669C2.026 6.422 1 8.266 1 10a5 5 0 0 0 10 0c0-1.734-1.026-3.578-3.187-6.198-.314-.381-1.38-1.643-1.402-1.669A50.34 50.34 0 0 1 6 1.637a50.34 50.34 0 0 1-.41.496zM12 10a6 6 0 1 1-12 0C0 6.26 4.18 2.561 6 0c1.82 2.561 6 6.26 6 10z"
                class="typeform--svg--secondary__fill"
              ></path>
            </g>
          </svg>
        </router-link>
        <router-link
          :to="{ name: 'EditorPage', hash: '#settings' }"
          class="btn-edit hover:bg-gray-300"
          active-class="bg-gray-200"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4495 8.0005c0-.3345.2295-.667.6455-.9365L16 6.477c-.1025-.5355-.2605-1.0695-.4775-1.593-.217-.524-.483-1.0125-.789-1.4645l-1.0545.2255c-.485.1035-.882.031-1.1185-.2055-.2365-.237-.3095-.633-.206-1.1185l.2245-1.052C11.657.643 10.6155.2115 9.521.002l-.5845.903c-.1855.286-.405.4875-.635.583-.612.254-1.0695-.323-1.238-.583L6.477 0c-.536.1025-1.069.261-1.593.4775-.5235.217-1.0125.482-1.464.7895l.2255 1.054c.064.302.1485 1.034-.4635 1.2875-.23.095-.528.1075-.861.0365L1.269 3.42C.643 4.3425.2115 5.384.002 6.478l.903.586c.4165.269.6455.6015.6455.936-.0005.3345-.2295.667-.6455.937L0 9.5225c.1025.536.2605 1.07.4775 1.593.217.524.483 1.013.789 1.464l1.055-.225c.485-.1035.882-.0305 1.1185.206.236.237.3095.6335.2055 1.1185l-.2245 1.0515c.9215.626 1.964 1.058 3.058 1.267l.5845-.903c.186-.286.405-.4875.6355-.583.612-.2535 1.07.3235 1.238.583L9.523 16c.536-.1025 1.0695-.261 1.593-.4775.524-.2165 1.0125-.4825 1.464-.789l-.2245-1.0535c-.0645-.303-.149-1.0345.463-1.288.23-.0955.528-.108.8615-.037l1.052.2245c.626-.9215 1.057-1.9635 1.267-3.057l-.903-.5855c-.417-.27-.6465-.6025-.6465-.9365zM8 10.6265c-1.4505 0-2.626-1.176-2.626-2.6265C5.374 6.5495 6.55 5.3735 8 5.3735c1.4505 0 2.6265 1.176 2.6265 2.6265 0 1.4505-1.176 2.6265-2.6265 2.6265z"
            ></path>
          </svg>
        </router-link>
      </div>
    </aside>
    <main class="flex w-full h-full">
      <div class="left-workspace flex-grow overflow-auto"></div>
      <div class="right-workspace flex-none w-64 hidden md:block overflow-y-auto">
        <Phone :phoneProps="page" />
      </div>
    </main>
  </div>
</template>

<script>
import Phone from "@/components/Phone.vue";
export default {
  name: "EditorPage",
  components: { Phone },
  data() {
    return {
      page: {
        name: "",
        url: "",
        instagram: "",
        domain_id: null,
        title_ad: "Как скачать материал?",
        description_ad: "Все проще, чем кажется",
        img_cover: "",
        srcImg: null,
        template_id: 1,
        btn_ad: "Получить материал",
        timer: 0,
        fb_pixel: "",
        title_success: "Спасибо за подписку",
        description_success: "Жми на кнопку, чтобы забрать приз",
        btn_success: "Получить материал",
        link_download: "",
      },
      // переменные валидации
      urlValid: true,
      instValid: true,
      instErrorText: "",
      urlAPI: process.env.VUE_APP_ROOT_API,
    };
  },
};
</script>

<style lang="postcss">
.btn-edit {
  @apply w-full h-10 mb-2 flex justify-center items-center rounded transition-colors duration-300 ease-in-out;
}
</style>