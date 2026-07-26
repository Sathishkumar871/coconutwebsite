import { useState } from "react";
import "./TrackOrder.css";

// Dynamic Order Tracking Steps
const STEPS = [
  { label: "Order Placed", icon: "📋", key: "Placed" },
  { label: "Confirmed", icon: "✅", key: "Confirmed" },
  { label: "Packing", icon: "📦", key: "Packing" },
  { label: "On The Way", icon: "🚚", key: "Shipped" },
  { label: "Delivered", icon: "🏠", key: "Delivered" }
];

export default function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchOrder = async () => {
    if (!orderId.trim()) {
      setError("Please enter a valid Order ID");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch(`http://localhost:5000/api/orders/track/${orderId.trim()}`);
      const data = await res.json();

      if (data.success) {
        setOrder(data.order);
      } else {
        setOrder(null);
        setError(data.message || "Order not found. Please verify your Order ID.");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to connect to live tracking server.");
    } finally {
      setLoading(false);
    }
  };

  const getStepIndex = (status: string) => {
    switch (status) {
      case "Pending":
      case "Placed": return 0;
      case "Confirmed": return 1;
      case "Packing": return 2;
      case "Shipped": return 3;
      case "Out for Delivery": return 3;
      case "Delivered": return 4;
      default: return 0;
    }
  };

  const currentStep = order ? getStepIndex(order.orderStatus) : 0;

  return (
    <div className="tracking-page">
      {/* Background Lighting Elements */}
      <div className="bg-glow glow-top"></div>
      <div className="bg-glow glow-bottom"></div>

      <div className="tracking-card-wrapper">
        
        {/* Brand Header */}
        <div className="tracking-header">
          <div className="brand-badge">
            <span className="badge-icon">🌿</span>
            <span>GREEN BASKET EXPRESS</span>
          </div>
          <h1>Track Your Package</h1>
          <p>Real-time updates on your fresh delivery status</p>
        </div>

        {/* Search Bar Input */}
        <div className="search-box">
          <div className="input-group">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="e.g. GB-2026-479973"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && searchOrder()}
            />
          </div>
          <button className="btn-track" onClick={searchOrder} disabled={loading}>
            {loading ? <span className="spinner"></span> : "Track Order"}
          </button>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="error-alert">
            <span className="alert-icon">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Order Details View */}
        {order && (
          <div className="order-details-container">
            
            {/* Top Info Banner */}
            <div className="info-banner">
              <div>
                <h2>{order.productName || "Fresh Grocery Basket"}</h2>
                <span className="order-id-tag">Order #{order.orderId}</span>
              </div>
              <div className="status-badge">
                <span className="pulse-dot"></span>
                {order.orderStatus}
              </div>
            </div>

            {/* Visual Progress Stepper */}
            <div className="timeline-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentStep / (STEPS.length - 1)) * 100}%` }}
                ></div>
              </div>

              <div className="timeline-steps">
                {STEPS.map((step, index) => {
                  const isCompleted = index <= currentStep;
                  const isCurrent = index === currentStep;

                  return (
                    <div 
                      key={step.key} 
                      className={`step-item ${isCompleted ? "completed" : ""} ${isCurrent ? "current" : ""}`}
                    >
                      <div className="step-icon-wrapper">
                        {step.icon}
                      </div>
                      <span className="step-label">{step.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Meta Details Grid */}
            <div className="meta-grid">
              <div className="meta-card">
                <div className="meta-icon">📅</div>
                <div>
                  <label>Estimated Delivery</label>
                  <h4>{order.expectedDelivery || "Updating shortly"}</h4>
                </div>
              </div>

              <div className="meta-card">
                <div className="meta-icon">📍</div>
                <div>
                  <label>Live Destination</label>
                  <h4>{order.deliveryLocation || "Dispatch Hub"}</h4>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}