import { createApp } from 'vue';

import App from './App';
import { router } from './Router';

import '@/assets/style/base.scss';

createApp(App).use(router).mount('#app');
