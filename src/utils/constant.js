export const ROUTES = {
    home: "/",
    register: "/register",
    login: "/login",
    collections: "/collections",
    singleProduct: "/collections/:prodId",
    basket: "/basket",
    userInfo: "/userInfo"
}

export const menuLinks = [
    {
        title: "Home",
        path: ROUTES.home
    },
    {
        title: "Men",
        path: `${ROUTES.collections}?type=men's`
    },
    {
        title: "Women",
       path: `${ROUTES.collections}?type=women's`
    },
    {
        title: "Collections",
        path: ROUTES.collections
    },
    {
        title: "Accessories",
        path: `${ROUTES.collections}?type=jewelery`
    },
    {
        title: "Electronics",
        path: `${ROUTES.collections}?type=electronics`
    },
   
    
];


export const STATUS = {
    pending: "pending",
    rejected: "error",
    fulfilled: "success"
}