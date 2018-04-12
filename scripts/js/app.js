import Vue from 'vue';
import jquery from 'jquery';
import {Form} from './helpers/Form';
import Example from './components/example.component.vue';

window.$  = jquery;
Vue.component('example', Example);

var app = new Vue({
    el: '#app',
    data: {},
    mounted() {
        let formObj = new Form(20);
        console.log(formObj.getPercentage());
        formObj.updatePercentage();
        console.log(formObj.getPercentage());
        console.log($('body'));
    }
});