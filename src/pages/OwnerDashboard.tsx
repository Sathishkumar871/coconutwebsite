import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/OwnerDashboard.css";

interface Order {
  _id: string;
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  productName: string;
  category: string;
  quantity: number;
  unit: string;
  amount: number;
  paymentStatus: string;
  paymentMethod: string;
  orderStatus: string;
  createdAt: string;
}

export default function OwnerDashboard() {
  const navigate = useNavigate();
const [orders, setOrders] = useState<Order[]>([]);
const [loading, setLoading] = useState(true);

const [search, setSearch] = useState("");
const [filter, setFilter] = useState("All");

const token = localStorage.getItem("ownerToken");
  useEffect(() => {
    if (!token) {
      navigate("/owner/login");
      return;
    }

    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const updateStatus = async (
    orderId: string,
    status: string
  ) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/orders/${orderId}/status`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            status,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Order Updated Successfully");
        loadOrders();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to update order");
    }
  };

  const logout = () => {
    localStorage.removeItem("ownerToken");
    navigate("/owner/login");
  };

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (o) => o.orderStatus === "Pending"
  ).length;

  const confirmedOrders = orders.filter(
    (o) => o.orderStatus === "Confirmed"
  ).length;

  const shippedOrders = orders.filter(
    (o) => o.orderStatus === "Shipped"
  ).length;
  const totalRevenue = orders.reduce(
  (sum, order) =>
    sum +
    (order.paymentStatus === "Paid"
      ? order.amount
      : 0),
  0
);

const filteredOrders = orders.filter((order) => {

  const matchesSearch =
    order.orderId
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    order.customerName
      .toLowerCase()
      .includes(search.toLowerCase()) ||

    order.phone.includes(search);

  const matchesFilter =
    filter === "All" ||
    order.orderStatus === filter;

  return matchesSearch && matchesFilter;
});

  return (
    <div className="dashboard">

      <header className="dashboard-header">

        <div>
          <h1>Owner Dashboard</h1>
          <p>CocoFresh Global Exports</p>
        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </header>

      <section className="stats">

        <div className="card">
          <h2>{totalOrders}</h2>
          <p>Total Orders</p>
        </div>

        <div className="card">
          <h2>{pendingOrders}</h2>
          <p>Pending Orders</p>
        </div>

        <div className="card">
          <h2>{confirmedOrders}</h2>
          <p>Confirmed Orders</p>
        </div>

        <div className="card">
          <h2>{shippedOrders}</h2>
          <p>Shipped Orders</p>
        </div>

      </section>
      <div className="dashboard-tools">

  <input
    type="text"
    placeholder="Search Orders..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  >
    <option value="All">All</option>
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Packing">Packing</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
  </select>

  <div className="revenue-card">
    <h3>Total Revenue</h3>
    <h2>₹ {totalRevenue}</h2>
  </div>

</div>
            {loading ? (

        <div className="loading">
          <h2>Loading Orders...</h2>
        </div>

      ) : (

        <section className="orders">

          {orders.length === 0 ? (

            <div className="empty-orders">
              <h2>No Orders Found</h2>
            </div>

          ) : (

           filteredOrders.map((order) => (

              <div
                key={order._id}
                className="order-card"
              >

                <div className="order-header">

                  <h3>{order.orderId}</h3>

                  <span className={`status ${order.orderStatus.toLowerCase()}`}>
                    {order.orderStatus}
                  </span>

                </div>

                <div className="order-body">

                  <p>
                    <strong>Customer :</strong>
                    {" "}
                    {order.customerName}
                  </p>

                  <p>
                    <strong>Phone :</strong>
                    {" "}
                    {order.phone}
                  </p>

                  <p>
                    <strong>Address :</strong>
                    {" "}
                    {order.address}
                  </p>

                  <p>
                    <strong>Product :</strong>
                    {" "}
                    {order.productName}
                  </p>

                  <p>
                    <strong>Category :</strong>
                    {" "}
                    {order.category}
                  </p>

                  <p>
                    <strong>Quantity :</strong>
                    {" "}
                    {order.quantity} {order.unit}
                  </p>

                  <p>
                    <strong>Payment :</strong>
                    {" "}
                    {order.paymentStatus}
                  </p>

                </div>

                <div className="order-actions">

                  <button
                    className="confirm-btn"
                    onClick={() =>
                      updateStatus(
                        order.orderId,
                        "Confirmed"
                      )
                    }
                  >
                    ✅ Confirm
                  </button>

                  <button
                    className="packing-btn"
                    onClick={() =>
                      updateStatus(
                        order.orderId,
                        "Packing"
                      )
                    }
                  >
                    📦 Packing
                  </button>

                  <button
                    className="ship-btn"
                    onClick={() =>
                      updateStatus(
                        order.orderId,
                        "Shipped"
                      )
                    }
                  >
                    🚚 Shipped
                  </button>

                  <button
                    className="deliver-btn"
                    onClick={() =>
                      updateStatus(
                        order.orderId,
                        "Delivered"
                      )
                    }
                  >
                    ✅ Delivered
                  </button>

                </div>

              </div>

            ))

          )}

        </section>

      )}

    </div>

  );

}