import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import { a } from "../../services/axiosInstance";

function DetailOrder() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const res = await a.get(`/orders/${id}`);
        setOrder(res.data);
      } catch (error) {
        console.error("Error", error);
      }
    }
    fetchOrder();
  }, [id]);

  if (!order) return <p className="container">Загрузка...</p>;

  return (
    <section className="block">
      <div className="container">
        <Link to={ORDERS} className="btn bg-danger">Назад</Link>
        <h1 className="title">Заказ №{order.id}</h1>
        <p><strong>Дата:</strong> {new Date(order.orderTimestamp).toLocaleString('kk-KZ')}</p>

        <h2 className="title">Клиент</h2>
        <p>{order.customer.name}</p>
        <p>{order.customer.phone}</p>
        <p>{order.customer.city}, {order.customer.address}</p>

        <h2 className="title">Товары</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Кол-во</th>
              <th>Цена</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price} ₸</td>
                <td>{item.price * item.quantity} ₸</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">Итого:</th>
              <th>{order.totalPrice} ₸</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}

export default DetailOrder;
