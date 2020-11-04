let arr =  [{
  name:'系统不管理',
  icon:'iconfont iconshezhi-xianxing',
  path:'',
  children:[{
      name:'111',
      path:'/basic/basicLayout',
      children:[{
        name:'111的孩子',
        path:'/basic/basicLayout/basicLayoutSon',
      }]
  },{
      name:'222',
      path:'/basic/basicContainer',
  }]
},{
  path:'',
  name: '业务更不管理',
  icon:'iconfont iconhuowuduanzaixianfahuo',
  children: [{
    path:'/Form/FormRadio',
    name: '333',
  }, {
    path:'/Form/FormCheckbox',
    name: '444',
  }] 
}];
arr.push(
  {
    path:'/login',
    name: 'login',
  }
)
module.exports = arr