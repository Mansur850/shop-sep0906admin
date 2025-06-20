import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { a } from "../../services/axiosInstance";

function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

    useEffect(() => {
    async function fetchProduct() {
        try {
        const res = await a.get(`/products/${id}`);
        setProduct(res.data);
        } catch (error) {
        console.error("Error: ", error);
        }
    }
    fetchProduct();
    }, [id]);

  return (
    <section className="block">
      <div className="container">
        <Link to={PRODUCTS} className="btn bg-danger">Назад</Link>
        <h1 className="title">Детали товара</h1>
        <div className="product-detail">
          <img src={product.image} alt={product.name} className="product-img" />
          <div className="product-detail__content">
            <h2 className="product-detail__title">{product.name}</h2>
            <p>Цена: {product.price} &#8376;</p>
            <p>Описание: {product.description}</p>
            <p>Категория: <span className="category-badge">{product.category}</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailProduct;
