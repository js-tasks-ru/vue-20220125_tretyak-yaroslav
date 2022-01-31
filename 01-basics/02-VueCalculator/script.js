import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',
  // Реактивные данные приложения, его локальное состояние
  data() {
    return {
      operator: '',
      firstValue: '',
      secondValue: '',
      current: '',
      picked: '',
    };
  },
  methods: {
    equals() {
      switch (this.operator) {
        case '+':
          this.current = Math.round(parseFloat(this.firstValue) + parseFloat(this.secondValue));
          break;
        case '-':
          this.current = parseFloat(this.firstValue) - parseFloat(this.secondValue);
          break;
        case '*':
          this.current = parseFloat(this.firstValue) * parseFloat(this.secondValue);
          break;
        case '/':
          this.current = (parseFloat(this.firstValue) / parseFloat(this.secondValue)).toFixed(3);
          break;
        default:
          console.log('error');
      }
    },
    operatorSelection(operator) {
      this.operator = operator;
    },
  },
});
const app = createApp(Root);
const vm = app.mount('#app');
window.vm = vm;
