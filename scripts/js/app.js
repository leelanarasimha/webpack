import Vue from 'vue';
import Example from './components/example.component.vue';

Vue.component('example', Example);

var app = new Vue({
    el: '#app',
    data: {},
});