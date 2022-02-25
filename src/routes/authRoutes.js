import AdminDashboard from "../pages/admin/AdminDashboard";
import CategoryCreate from "../pages/admin/category/CategoryCreate";
import CategoryIndex from "../pages/admin/category/CategoryIndex";
import CategoryEdit from "../pages/admin/category/CategoryEdit";
import subCategoryCreate from "../pages/admin/subCategory/SubCategoryCreate";
import subCategoryIndex from "../pages/admin/subCategory/SubCategoryIndex";
import subCategoryEdit from "../pages/admin/subCategory/SubCategoryEdit";

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

]
export default authRoutes
