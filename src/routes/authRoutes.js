import AdminDashboard from "../pages/admin/AdminDashboard";
import CategoryCreate from "../pages/admin/category/CategoryCreate";
import CategoryIndex from "../pages/admin/category/CategoryIndex";
import CategoryEdit from "../pages/admin/category/CategoryEdit";
import subCategoryCreate from "../pages/admin/subCategory/SubCategoryCreate";
import subCategoryIndex from "../pages/admin/subCategory/SubCategoryIndex";
import subCategoryEdit from "../pages/admin/subCategory/SubCategoryEdit";
import ProductEdit from "../pages/admin/product/ProductEdit";
import ProductIndex from "../pages/admin/product/ProductIndex";
import ProductCreate from "../pages/admin/product/ProductCreate";

const authRoutes = [
    {
        path: '/admin/dashboard',
        component: AdminDashboard,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/category/create',
        component: CategoryCreate,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/category',
        component: CategoryIndex,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/category/edit/:slug',
        component: CategoryEdit,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    /**
     * subCategory
     */
    {
        path: '/admin/subCategory/create',
        component: subCategoryCreate,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/subCategory',
        component: subCategoryIndex,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/subCategory/edit/:slug',
        component: subCategoryEdit,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    /**
     * end of subCategory
     */

    /**
     * product routes
     */
    {
        path: '/admin/product/create',
        component: ProductCreate,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/product',
        component: ProductIndex,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },
    {
        path: '/admin/product/edit/:slug',
        component: ProductEdit,
        exact: true,
        role: 'admin',
        backUrl:'/user'
    },

]
export default authRoutes
