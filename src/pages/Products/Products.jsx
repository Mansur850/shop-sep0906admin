import { Link } from "react-router-dom";
import ProductList from "../../components/Products/ProductList";
import { PRODUCT_CREATE } from "../../utils/consts";

function Products() {
    return (
        <section className="block">
            <div className="container">
                <div className="block-header">
                    <h1 className="title">Товары</h1>
                    <Link to={PRODUCT_CREATE} className="btn bg-primary">Создать</Link>
                </div>
                <ProductList />
            </div>
        </section>
    );
}

export default Products;
