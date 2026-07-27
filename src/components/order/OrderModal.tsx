import { useState } from "react";
import "./OrderModal.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  grade: string;
}

export default function OrderModal({
  isOpen,
  onClose,
  productName,
  grade,
}: Props) {
  // Logged-in user details
  const userProfile = JSON.parse(
    localStorage.getItem("userProfile") || "{}"
  );

  const [customerName, setCustomerName] = useState(
    userProfile.name || ""
  );

  const [quantity, setQuantity] = useState("");

  const [phone, setPhone] = useState(
    userProfile.mobileNumber || ""
  );

  // Address fields
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [stateName, setStateName] = useState("Andhra Pradesh");

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  if (!isOpen) return null;

  const showNotification = (type: string, message: string) => {
    setNotification({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setNotification({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  const minimum = 500;

  const handleContinue = async () => {
    const pricePerPiece = 30;
    const totalAmount = Number(quantity) * pricePerPiece;

    // Validations
    if (!customerName.trim()) {
      showNotification("error", "Please enter your name");
      return;
    }

    if (phone.length !== 10) {
      showNotification("error", "Enter valid 10-digit mobile number");
      return;
    }

    if (!quantity) {
      showNotification("error", "Please enter quantity");
      return;
    }

    if (Number(quantity) < minimum) {
      showNotification("error", `Minimum order is ${minimum} pieces`);
      return;
    }

    if (!address.trim() || address.length < 10) {
      showNotification("error", "Enter complete street/house address");
      return;
    }

    if (!city.trim()) {
      showNotification("error", "Please enter your City / Town");
      return;
    }

    if (!district.trim()) {
      showNotification("error", "Please enter your District");
      return;
    }

    if (pincode.length !== 6) {
      showNotification("error", "Enter valid 6-digit Pincode");
      return;
    }

    try {
      const response = await fetch(
        "https://coconutbackend.onrender.com/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName,
            phone,
            productName,
            grade,
            category: "coconut",
            quantity: Number(quantity),
            unit: "pieces",
            amount: totalAmount,
            // Address object with all details
            address,
            city,
            district,
            state: stateName,
            pincode,
            // Full address string for simple rendering
            fullAddress: `${address}, ${city}, ${district}, ${stateName} - ${pincode}`,
            paymentStatus: "Pending",
            paymentMethod: "UPI",
            orderStatus: "Pending",
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        showNotification(
          "success",
          "✓ Order Submitted Successfully"
        );

        // Reset address & quantity fields
        setQuantity("");
        setAddress("");
        setPincode("");
        setCity("");
        setDistrict("");

        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        showNotification(
          "error",
          data.message || "Order failed"
        );
      }
    } catch (error) {
      console.log(error);
      showNotification(
        "error",
        "Backend server not connected"
      );
    }
  };

  return (
    <>
      {notification.show && (
        <div className={`premium-toast ${notification.type}`}>
          <span>
            {notification.type === "success" ? "✓" : "!"}
          </span>
          <p>{notification.message}</p>
        </div>
      )}

      <div className="order-overlay">
        <div className="order-modal">
          <button className="order-close" onClick={onClose}>
            ✕
          </button>

          <h2>Bulk Order</h2>
          <p className="subtitle">
            Premium coconut export supply
          </p>

          {/* Customer Details */}
          {userProfile.name ? (
            <div className="customer-card">
              <h3>Customer Details</h3>
              <div className="customer-row">
                <span>Name</span>
                <strong>{userProfile.name}</strong>
              </div>
              <div className="customer-row">
                <span>Mobile</span>
                <strong>{userProfile.mobileNumber}</strong>
              </div>
            </div>
          ) : (
            <>
              <div className="field">
                <label>Customer Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                />
              </div>

              <div className="field">
                <label>Mobile Number</label>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="10 digit mobile number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/\D/g, ""))
                  }
                />
              </div>
            </>
          )}

          {/* Product Info */}
          <div className="field-row">
            <div className="field">
              <label>Product</label>
              <input value={productName} readOnly />
            </div>

            <div className="field">
              <label>Grade</label>
              <input value={grade} readOnly />
            </div>
          </div>

          <div className="field">
            <label>Quantity (Pieces)</label>
            <input
              type="number"
              placeholder="Minimum 500"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          {/* Delivery Address Details */}
          <div className="field">
            <label>House No. / Street Address</label>
            <textarea
              rows={3}
              placeholder="Door No, Street Name, Area / Landmark"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* City & District */}
          <div className="field-row">
            <div className="field">
              <label>City / Town</label>
              <input
                type="text"
                placeholder="e.g. Vijayawada"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="field">
              <label>District</label>
              <input
                type="text"
                placeholder="e.g. NTR / Krishna"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
          </div>

          {/* State & Pincode */}
          <div className="field-row">
            <div className="field">
              <label>State</label>
              <input
                type="text"
                placeholder="State"
                value={stateName}
                onChange={(e) => setStateName(e.target.value)}
              />
            </div>

            <div className="field">
              <label>Pincode</label>
              <input
                type="text"
                maxLength={6}
                placeholder="6 Digit Pincode"
                value={pincode}
                onChange={(e) =>
                  setPincode(e.target.value.replace(/\D/g, ""))
                }
              />
            </div>
          </div>

          <button
            type="button"
            className="continue-btn"
            onClick={handleContinue}
          >
            Submit Bulk Order →
          </button>
        </div>
      </div>
    </>
  );
}