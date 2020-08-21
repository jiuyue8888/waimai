import axios from 'axios';
const url = 'http://ap.suda60.com/';




const postData=(_url,data)=>{
    return axios.post(`${url}${_url}`,{
        data
    }).then(res=>res.data);
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
//
