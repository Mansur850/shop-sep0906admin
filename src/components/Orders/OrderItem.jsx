import { Link } from "react-router-dom";
import { ORDERS_DELETE, ORDERS_DETAIL } from "../../utils/consts";

function OrderItem({ order, index }) {
  function formatDateTime(isoString) {
    if (!isoString) return '';
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(isoString).toLocaleString('kk-KZ', options);
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{order.customer.name}, {order.customer.phone}</td>
      <td>{formatDateTime(order.orderTimestamp)}</td>
      <td colSpan="3" className="actions-category" style={{ border: "none" }}>
        <Link to={`/orders/${order.id}`} className="btn bg-success">Смотреть</Link>
        <Link to={`/orders/delete/${order.id}`} className="btn bg-danger">Удалить</Link>
      </td>
    </tr>
  );
}
export default OrderItem;
