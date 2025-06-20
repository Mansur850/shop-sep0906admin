import { useParams, Link, useNavigate } from "react-router-dom";
import { ORDERS } from "../../utils/consts";
import { a } from "../../services/axiosInstance";

function DeleteOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleDelete(e) {
    e.preventDefault();
    try {
      await a.delete(`/orders/${id}`);
      alert("Заказ удалён!");
      navigate(ORDERS);
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <section className="block">
      <div className="container">
        <h1 className="title">Удалить заказ №{id}?</h1>
        <p className="mb-5">Это действие необратимо. Подтвердите удаление.</p>
        <form className="actions-sm" onSubmit={handleDelete}>
          <button type="submit" className="btn bg-danger">Да</button>
          <Link to={ORDERS} className="btn bg-primary">Нет</Link>
        </form>
      </div>
    </section>
  );
}

export default DeleteOrder;
