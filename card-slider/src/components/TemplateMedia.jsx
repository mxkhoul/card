import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./TemplateMedia.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TemplateMedia = () => {
  const { state } = useLocation();
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showForm]);

  if (!state) return <p className="text-center mt-5">No template selected</p>;

  const video = state.media?.find((m) => m.type === "mp4");

  const RegisterOrder = ({ template, refProp }) => {
    const [customerName, setCustomerName] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    const [addOnIds, setAddOnIds] = useState([]);
    const [addonsList, setAddonsList] = useState([]);

    useEffect(() => {
      axios.get("https://event-wed.onrender.com/order/Addon")
        .then(res => setAddonsList(Array.isArray(res.data) ? res.data : []))
        .catch(err => console.error(err));
    }, []);

    const toggleAddon = (id) => {
      setAddOnIds(prev =>
        prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
      );
    };

    const totalPrice =
      template.price +
      addOnIds.reduce((sum, id) => {
        const addon = addonsList.find(a => a.id === id);
        return addon ? sum + addon.price : sum;
      }, 0);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const payload = {
        customerName,
        templateId: template.id,
        addOnIds,
        discountPercent: Number(discountPercent),
      };

      try {
        await axios.post("/api/orders", payload);//https://event-wed.onrender.com/order/
        alert("Order submitted successfully 🎉");
      } catch (err) {
        console.error(err);
        alert("Failed to submit order ❌");
      }
    };

    return (
      <section ref={refProp} className="full-screen-form fade-in">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-4 bg-dark">
              <div className="card-body p-4 p-md-5">

                <h2 className="text-center mb-4 fw-bold text-white">
                  Register Order
                </h2>

                <div className="d-flex justify-content-between mb-4 fw-semibold text-white">
                  <span>{template.name}</span>
                  <span>${totalPrice}</span>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Customer Name */}
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Customer Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />

                  {/* Add-ons */}
                  <div className="mb-4 text-white">
                    <label className="fw-semibold">Add-ons:</label>
                    {addonsList.map(addon => (
                      <div key={addon.id} className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={addOnIds.includes(addon.id)}
                          onChange={() => toggleAddon(addon.id)}
                        />
                        <label className="form-check-label">
                          {addon.name} (+${addon.price})
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Discount */}
                  <input
                    className="form-control mb-4"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Discount %"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(e.target.value)}
                  />

                  <button className="btn btn-danger w-100 py-3 fs-5">
                    Submit Order
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {/* Video Section */}
      <section className="template-media-section">
        {video && (
          <>
            <video className="bg-video-blur" src={video.url} autoPlay muted loop />
            <video className="main-video" src={video.url} autoPlay muted loop />
          </>
        )}
        {!showForm && (
          <button className="order-btn" onClick={() => setShowForm(true)}>
            Order Now
          </button>
        )}
      </section>

      {showForm && <RegisterOrder refProp={formRef} template={state} />}
    </>
  );
};

export default TemplateMedia;
