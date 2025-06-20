import Dashboard from "../pages/Dashboard";
import DeleteOrder from "../pages/Orders/DeleteOrder";
import DetailOrder from "../pages/Orders/DetailOrder";
import Orders from "../pages/Orders/Orders";
import CreateProduct from "../pages/Products/CreateProduct";
import DeleteProduct from "../pages/Products/DeleteProduct";
import DetailProduct from "../pages/Products/DetailProduct";
import EditProduct from "../pages/Products/EditProduct";
import Products from "../pages/Products/Products";
import {
    DASHBOARD,
    PRODUCTS,
    PRODUCT_CREATE,
    PRODUCT_DELETE,
    PRODUCT_DETAIL,
    PRODUCT_UPDATE,
    ORDERS,
    ORDERS_DELETE,
    ORDERS_DETAIL
} from "./consts";

export const routes = [
    {
        path: DASHBOARD,
        element: Dashboard
    },
    {
        path: PRODUCTS,
        element: Products
    },
    {
        path: PRODUCT_CREATE,
        element: CreateProduct
    },
    {
        path: PRODUCT_DETAIL,
        element: DetailProduct
    },
    {
        path: PRODUCT_DELETE,
        element: DeleteProduct
    },
    {
        path: PRODUCT_UPDATE,
        element: EditProduct
    },
    {
        path: ORDERS,
        element: Orders
    },
    {
        path: ORDERS_DETAIL,
        element: DetailOrder
    },
    {
        path: ORDERS_DELETE,
        element: DeleteOrder
    },
];