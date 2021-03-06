import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ForgetPassword from '../pages/auth/forgetPassword'
import Home from "../pages/home";
import ProductDetail from "../pages/product/ProductDetail";
import CategoryIndex from "../pages/category";
import CartIndex from "../pages/cart";
import CheckOutIndex from "../pages/checkout";
import PaymentIndex from "../pages/payment/PaymentIndex";
import Order from "../pages/Order/Order";
import ShopIndex from "../pages/shop";

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
    },
    {
        path: '/cart',
        component: CartIndex,
        exact: true
    },
    {
        path: '/checkout',
        component: CheckOutIndex,
        exact: true
    },
    {
        path: '/payment/:orderId',
        component: PaymentIndex,
        exact: true,
        role: 'user',
        backUrl: '/'
    },
    {
        path: '/order/:orderId',
        component: Order,
        exact: true,
        role: 'user',
        backUrl: '/'

    },
    {
        path: '/shop/:keyword?',
        component: ShopIndex,
        exact: true,
        role: 'user',
        backUrl: '/'

    }
]
export default publicRoutes
