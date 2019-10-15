import Vue from 'vue';
import App from './App.vue';
import router from './router';
Vue.config.productionTip = false;
// https://cli.vuejs.org/guide/deployment.html#firebase deployement
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
//# sourceMappingURL=main.js.map