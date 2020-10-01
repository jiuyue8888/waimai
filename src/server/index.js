import axios from 'axios';
const url = 'http://www.jiaxinnetwork.com/';

const postData=(_url,data)=>{

    return axios.get(`${url}${_url}`,{
        params:data
    }).then(res=>res.data);


}
const postData1=(_url,data)=>{

    return axios.post(`${url}${_url}`,data).then(res=>res.data);


}
//获取导航信息
export const getClassifyList=data=>postData(`getClassifyList`,data);
//获取首页轮播图
//type 1轮播/2发现轮播 3发现后面的分类
export const getBannerList=data=>postData(`getBannerList`,data);
//获取店铺列表
export const getMainGoodsList=data=>postData(`getMainGoodsList`,data);
//获取优惠专区店铺
export const getShopStoreList=data=>postData(`getShopStoreList`,data);
//发送短信验证码
export const toSendMsg=data=>postData(`toSendMsg`,data);
export const toRegisterCus=data=>postData(`toRegisterCus`,data);
//修改手机号
export const toUpdateTel=data=>postData(`toUpdateTel`,data);
//修改密码/昵称
export const toUpdatePwd=data=>postData(`toUpdatePwd`,data);
//获取用户信息
export const getCusMsg=data=>postData(`getCusMsg`,data);
//添加意见反馈
export const addFeedBack=data=>postData(`addFeedBack`,data);
//获取用户所有的收货地址
export const toAddressList=data=>postData(`toAddressList`,data);
//添加收货地址
export const addAddress=data=>postData(`addAddress`,data);
//收货地址修改
export const updateAddress=data=>postData(`updateAddress`,data);
//删除用户收货地址
export const deleteAddress=data=>postData(`deleteAddress`,data);
//通过收货地址id，获取收货地址详情
export const getAddressDetailById=data=>postData(`getAddressDetailById`,data);
//忘记密码
export const toForgetPwd =data=>postData(`toForgetPwd`,data);
//获取优惠券列表
export const getCounList=data=>postData(`getCounList`,data);
//申请店铺加盟
export const toApplyShop =data=>postData(`toApplyShop`,data);
//申请骑手加盟
export const toApplyRider =data=>postData(`toApplyRider`,data);
//获取收藏店铺列表
export const toMyApplyShop =data=>postData(`toMyApplyShop`,data);
//收藏店铺
export const toCollectShop =data=>postData(`toCollectShop`,data);
//评价接口
export const appraiseList =data=>postData(`appraiseList`,data);


//发现相关
//获取发现分类
export const getUniversityList=data=>postData(`getUniversityList`,data);
//根据分类id发现列表
export const getBounced=data=>postData(`getBounced`,data);
//根据发现id获取发现详情
export const toSignUpPage=data=>postData(`toSignUpPage`,data);
//获取品牌专区店铺（发现后面的图片链接的店铺）
export const getShopStoreListFx=data=>postData(`getShopStoreListFx`,data);

//购物相关
//根据店铺id获取店铺里的商品分类
export const getGoodsListByshopId=data=>postData(`getGoodsListByshopId`,data);
//根据店铺id获取店铺详情
export const getDetailByshopId=data=>postData(`getDetailByshopId`,data);
//获取分类下的商品
export const getGoodsByClassifyId=data=>postData(`getGoodsByClassifyId`,data);
//跑腿列表
export const addSpellRecord=data=>postData(`addSpellRecord`,data);

//购物车-订单
//获取购物车列表
export const getShoppingCartAllList=data=>postData(`getShoppingCartAllList`,data);
//添加商品到购物车
export const addShoppingCart=data=>postData(`addShoppingCart`,data);
//修改购物车商品数量
export const updateShoppingCart=data=>postData(`updateShoppingCart`,data);
//删除购物车商品信息
export const deleteShoppingCart=data=>postData(`deleteShoppingCart`,data);
//获取购物车的商品到订单页面
export const getGoodsToOrder=data=>postData(`getGoodsToOrder`,data);
//添加订单
export const toAddOrderRecord=data=>postData(`toAddOrderRecord`,data);
//跳转到支付
export const toPayOrder=data=>postData(`toPayOrder`,data);
//支付失败后再次发起请求
export const toRequestPayAgin=data=>postData(`toRequestPayAgin`,data);
//查询我的订单
export const getOrderListByOrderState=data=>postData(`getOrderListByOrderState`,data);
//订单详情
export const toOrderRecordDetail=data=>postData(`toOrderRecordDetail`,data);
//deleteOrder
export const deleteOrder=data=>postData(`deleteOrder`,data);
//addAppraise
export const addAppraise=data=>postData(`addAppraise`,data);
//toShoppingCartList
export const toShoppingCartList=data=>postData(`toShoppingCartList`,data);