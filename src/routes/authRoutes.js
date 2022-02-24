import AdminDashboard from "../pages/admin/AdminDashboard";
import CategoryCreate from "../pages/admin/category/CategoryCreate";
import CategoryIndex from "../pages/admin/category/CategoryIndex";
import CategoryEdit from "../pages/admin/category/CategoryEdit";

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

]
export default authRoutes
