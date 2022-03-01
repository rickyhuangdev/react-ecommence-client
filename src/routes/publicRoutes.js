import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ForgetPassword from '../pages/auth/forgetPassword'
import Home from "../pages/home";
import ProductDetail from "../pages/product/ProductDetail";
import CategoryIndex from "../pages/category";

const publicRoutes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/product/:slug',
        component: ProductDetail,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/register',
        component: Register,
        exact: true
    },
    {
        path: '/resetPassword',
        component: ForgetPassword,
        exact: true
    },
    {
        path: '/category/:slug?',
        component: CategoryIndex,
        exact: true
    }
]
export default publicRoutes
