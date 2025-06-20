import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { a } from "../../services/axiosInstance";

function EditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/products/${id}`);
                const product = res.data;
                setName(product.name || '');
                setPrice(product.price || '');
                setDescription(product.description || '');
                setImage(product.image || '');
                setCategory(product.category || '');
            } catch (error) {
                console.error("Error", error);
            }
        }
        fetchProduct();
    }, [id]);

    async function handleSubmit(event) {
        event.preventDefault();
        const updateProduct = {
            name,
            price: Number(price),
            description,
            image,
            category,
        };
        try {
            await a.patch(`/products/${id}`, updateProduct);
            alert("Товар изменен!");
            navigate(PRODUCTS);
        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <section className="block">
            <div className="container">
                <Link to={PRODUCTS} className="btn bg-danger">Назад</Link>
                <h1 className="title">Изменить товар</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="name">Название товара</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            type="text"
                            placeholder="Введите название товара"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price">Цена</label>
                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            id="price"
                            type="number"
                            placeholder="Введите цену"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="description">Описание</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            placeholder="Введите описание"
                            required
                        ></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="image">Фото</label>
                        <input
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            id="image"
                            type="url"
                            placeholder="Вставьте URL фото"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="category">Категория</label>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            id="category"
                            type="text"
                            placeholder="Введите категорию"
                            required
                        />
                    </div>

                    <button className="btn bg-warning" type="submit">Изменить</button>
                </form>
            </div>
        </section>
    );
}

export default EditProduct;
