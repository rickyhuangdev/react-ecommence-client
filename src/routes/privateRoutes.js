import Profile from "../pages/user/profile";
import Wishlist from "../pages/user/wishlist";
import Order from "../pages/user/order";
import Password from "../pages/user/password";
import Dashboard from "../pages/user/dashboard";
import Payment from "../pages/user/payment";
import Address from "../pages/user/address";

const privateRoutes = [
    {
        path: '/user',
        component: Dashboard,
        exact: true,
        role: 'user',
        backUrl:'/login'
    },
    {
        path: '/user/wishlist',
        component: Wishlist,
        exact: true,
        role: 'user',
        backUrl:'/login'
    },
    {
        path: '/user/order',
        component: Order,
        exact: true,
        role: 'user',
        backUrl:'/login'
    },
    {
        path: '/user/password',
        component: Password,
        exact: true,
        role: 'user',
        backUrl:'/login'
    },
    {
        path: '/user/profile',
        component: Profile,
        exact: true,
        role: 'user',
        backUrl:'/login'
    },
    {
        path: '/user/payment',
        component: Payment,
        exact: true,
        role: 'user',
        backUrl: '/login'
    },
    {
        path: '/user/address',
        component: Address,
        exact: true,
        role: 'user',
        backUrl: '/login'
    },

]
export default privateRoutes
