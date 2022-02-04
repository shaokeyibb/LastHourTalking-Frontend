import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {
    // create naive ui
    create, NAlert,
    // component
    NButton, NCard, NDivider, NGradientText, NInput, NResult, NSpace
} from 'naive-ui'

const naive = create({
    components: [NButton, NCard, NInput, NAlert, NGradientText, NDivider, NSpace, NResult]
})

createApp(App)
    .use(router)
    .use(naive)
    .mount('#app')
