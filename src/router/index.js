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
import login from '@/page/user/login'
import storeList from '@/page/storeList'
import faxian from '@/page/faxian/index.vue'
import fdetail from '@/page/faxian/detail.vue'
import kvList from '@/page/kvList'
import storeDetail from '@/page/storeDetail'
import register from '@/page/user/register'
import forget from '@/page/user/forget'
import paotui from '@/page/paotui'
import orderList from '@/page/orderList'
import orderDone from '@/page/orderList/orderDone.vue'
import orderDoing from '@/page/orderList/orderDoing.vue'
import pingjia from '@/page/pingjia'
import productDetail from '@/page/productDetail'
import orderDetail from '@/page/orderDetail'

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
        {path: '/login', name: 'login', component: login},
        {path: '/storeList', name: 'storeList', component: storeList},
        {path: '/faxian', name: 'faxian', component: faxian},
        {path: '/kvList', name: 'kvList', component: kvList},
        {path: '/storeDetail', name: 'storeDetail', component: storeDetail},
        {path: '/register', name: 'register', component: register},
        {path: '/forget', name: 'forget', component: forget},
        {path: '/paotui', name: 'paotui', component: paotui},
        {path: '/orderList', name: 'orderList', component: orderList},
        {path: '/pingjia', name: 'pingjia', component: pingjia},
        {path: '/productDetail', name: 'productDetail', component: productDetail},
        {path: '/orderDone', name: 'orderDone', component: orderDone},
        {path: '/orderDoing', name: 'orderDoing', component: orderDoing},
        {path: '/orderDetail', name: 'orderDetail', component: orderDetail},
        {path: '/fdetail', name: 'fdetail', component: fdetail},
    ]
})
