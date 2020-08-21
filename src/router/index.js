import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import center from '@/page/user/center'
import setting from '@/page/user/setting'
import changeName from '@/page/user/changeName'
import changeTell from '@/page/user/changeTell'
import changePassword from '@/page/user/changePassword'
import coupon from '@/page/user/coupon'

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
    ]
})
