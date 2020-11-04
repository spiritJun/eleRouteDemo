import router from '@/router';
import menus from '@/config/menu-config';
function getRoutes(arr){
    // router.options.routes.unshift(...getAsyncRoutes(arr));
    console.log(deepRoutes(arr))
    router.options.routes[0].children = router.options.routes[0].children.concat(...deepRoutes(arr));
    router.addRoutes(router.options.routes);
    console.log(router.options.routes)
    
    // return deepRoutes(arr);
}
function deepRoutes(deepClone,routes = []){
    const handlerRoute = (obj)=>{
        if(obj.children && obj.children.length){
            obj.children.map(sub=>{
                routes.push({
                    path:sub.path,
                    name:sub.name,
                    component:()=>import(`@/view${sub.path}`),
                });
                // obj.children = obj.children.filter(child => !child.componentName  )
                handlerRoute(sub);   
            }) 
        }
        
    };
    deepClone.forEach(item =>{
        handlerRoute(item);
    });
    return routes;
}
//先看看 后期不要了
function getAsyncRoutes(routeArray){
    const res = []
    const keys = ['path', 'name', 'children','icon'];
    routeArray.forEach(item =>{
        const newItem = {};
        if(item.path){
            newItem.component = () => import(`@/view${item.path}`) 
            // newItem.component = resolve => require([`@/view/${item.componentName}`], resolve);
        }
        for (const key in item) {
            if (keys.includes(key)) {
              newItem[key] = item[key]
            }
        }
        if (newItem.children && newItem.children.length) {
            newItem.children = getAsyncRoutes(item.children)
        }
        res.push(newItem)
    })
    return res;
}
getRoutes(menus)
// router.beforeEach((to, from, next) => {
   
// })