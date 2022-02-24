import Profile from "../pages/user/profile";
import Wishlist from "../pages/user/wishlist";
import Order from "../pages/user/order";
import Password from "../pages/user/password";
import Dashboard from "../pages/user/dashboard";

const privateRoutes = [
    {
        path: '/user',
        component: Dashboard,
        exact: true
    },
    {
        path: '/user/wishlist',
        component: Wishlist,
        exact: true
    },
    {
        path: '/user/order',
        component: Order,
        exact: true
    },
    {
        path: '/user/password',
        component: Password,
        exact: true
    },
    {
        path: '/user/profile',
        component: Profile,
        exact: true
    }
]
export default privateRoutes
