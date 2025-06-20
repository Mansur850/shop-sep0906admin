import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { a } from "../../services/axiosInstance";

function DeleteProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/products/${id}`);
                setProduct(res.data);
            } catch (error) {
                console.error("Error", error);
            }
        }
        fetchProduct();
    }, [id]);

    async function handleDelete(e) {
        e.preventDefault();
        try {
            await a.delete(`/products/${id}`);
            alert("Товар удалён!");
            navigate(PRODUCTS);
        } catch (error) {
            console.error("Error", error);
        }
    }

    if (!product) {
        return <p className="container">Загрузка товара...</p>;
    }

    return (
        <section className="block">
            <div className="container">
                <h1 className="title">
                    Вы действительно хотите удалить товар &laquo;{product.name}&raquo;?
                </h1>
                <p className="mb-5">
                    Это действие приведет к потере всех данных, связанных с этим товаром. Пожалуйста, подтвердите своё решение.
                </p>
                <form className="actions-sm" onSubmit={handleDelete}>
                    <button type="submit" className="btn bg-danger">
                        Да
                    </button>
                    <Link to={PRODUCTS} className="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteProduct;
