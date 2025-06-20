import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../utils/consts";
import { useState } from "react";
import { a } from "../../services/axiosInstance"; 

function CreateProduct() {
    
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      description,
      image,
      category,
    };

    try {
      const res = await a.post('/products', newProduct);
      alert("Товар добавлен!");
      setName('');
      setPrice('');
      setDescription('');
      setImage('');
      setCategory('');
      navigate(PRODUCTS);
    } catch (error) {
      console.log("Error ", error);
    }
  }

  return (
    <section className="block">
      <div className="container">
        <Link to={PRODUCTS} className="btn bg-danger">Назад</Link>
        <h1 className="title">Создать товар</h1>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Название товара</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              type="text"
              placeholder="Введите товара"
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
          <button className="btn bg-primary" type="submit">Создать</button>
        </form>
      </div>
    </section>
  );
}

export default CreateProduct;
