import { createApp } from 'vue';
import App from './App'
import UIcomponents from './components/UI'
import router from './router/router';

const app = createApp(App)

UIcomponents.forEach(component => {
    app.component(component.name, component)
})

app
    .use(router)
    .mount('#app')
