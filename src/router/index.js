import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import center from '@/page/user/center'
import setting from '@/page/user/setting'
import changeName from '@/page/user/changeName'
import changeTell from '@/page/user/changeTell'
import changePassword from '@/page/user/changePassword'
import coupon from '@/page/user/coupon'
import star from '@/page/user/star'
import address from '@/page/user/address'
import add from '@/page/user/address/add.vue'
import remind from '@/page/user/remind'
import join from '@/page/user/join'
import qishouJoin from '@/page/user/join/qishouJoin.vue'
import storeJoin from '@/page/user/join/storeJoin.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        }, {
            path: '/center',
            name: 'center',
            component: center
        }, {
            path: '/setting',
            name: 'setting',
            component: setting
        },
        {path: '/changeName', name: 'changeName', component: changeName},
        {path: '/changeTell', name: 'changeTell', component: changeTell},
        {path: '/changePassword', name: 'changePassword', component: changePassword},
        {path: '/coupon', name: 'coupon', component: coupon},
        {path: '/star', name: 'star', component: star},
        {path: '/address', name: 'address', component: address},
        {path: '/add', name: 'add', component: add},
        {path: '/remind', name: 'remind', component: remind},
        {path: '/join', name: 'join', component: join},
        {path: '/qishouJoin', name: 'qishouJoin', component: qishouJoin},
        {path: '/storeJoin', name: 'storeJoin', component: storeJoin},
    ]
})
