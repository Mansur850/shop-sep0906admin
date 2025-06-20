import OrdersList from "../../components/Orders/OrderList";

function Orders() {
    return (
        <section className="block">
            <div className="container">
                <div className="block-header">
                    <h1 className="title">Заказы</h1>
                </div>
                <OrdersList />
            </div>
        </section>
    );
}

export default Orders;
