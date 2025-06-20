import { useEffect, useState } from "react";
import { a } from "../../services/axiosInstance";
import OrderItem from "./OrderItem";

function OrdersList() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const res = await a.get("/orders/");
                setOrders(res.data);
            } catch (error) {
                console.error("Error", error);
            }
        }
        fetchOrders();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Клиент</th>
                    <th>Дата и время заказа</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <OrderItem key={order.id} order={order} index={index} />
                ))}
            </tbody>
        </table>
    );
}

export default OrdersList;
