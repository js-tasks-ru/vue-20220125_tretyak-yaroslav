import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
    name: 'Root',
    // Реактивные данные приложения, его локальное состояние
    data() {
      return {
        counter: 0
      };
    }
  });
  const app = createApp(Root);
  const vm = app.mount('#app');
  window.vm = vm;
