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
        exact: true
    },
    {
        path: '/admin/category/create',
        component: CategoryCreate,
        exact: true
    },
    {
        path: '/admin/category',
        component: CategoryIndex,
        exact: true
    },
    {
        path: '/admin/category/edit/:slug',
        component: CategoryEdit,
        exact: true
    },
    /**
     * subCategory
     */
    {
        path: '/admin/subCategory/create',
        component: subCategoryCreate,
        exact: true
    },
    {
        path: '/admin/subCategory',
        component: subCategoryIndex,
        exact: true
    },
    {
        path: '/admin/subCategory/edit/:slug',
        component: subCategoryEdit,
        exact: true
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
        exact: true
    },
    {
        path: '/admin/product',
        component: ProductIndex,
        exact: true
    },
    {
        path: '/admin/product/edit/:slug',
        component: ProductEdit,
        exact: true
    },

]
export default authRoutes
