export default function Home() {
  const properties = [
    {
      title: "Luxury Villa in Colombo",
      location: "Colombo 07",
      price: "$450,000",
    },
    {
      title: "Modern Apartment",
      location: "Negombo",
      price: "$180,000",
    },
    {
      title: "Beachfront Property",
      location: "Bentota",
      price: "$620,000",
    },
    {
      title: "Family House",
      location: "Kandy",
      price: "$240,000",
    },
    {
      title: "Luxury Penthouse",
      location: "Colombo City",
      price: "$890,000",
    },
    {
      title: "Garden Villa",
      location: "Galle",
      price: "$390,000",
    },
  ];

  return (
    <main className="page">

      {/* moving property banner */}
      <div className="top-banner">
<div className="ticker-text">          🏡 HOT PROPERTY DEALS •
          LIMITED TIME MORTGAGE OFFERS •
          PREMIUM VILLAS AVAILABLE •
          BOOK PROPERTY TOUR TODAY •
        </div>
      </div>

      {/* intrusive popup */}
      <div className="visit-popup">
        <h2>🏡 Schedule a Visit</h2>

        <p>
          Only 2 premium properties
          left this week.
        </p>

        <button>
          BOOK VISIT
        </button>
      </div>

      {/* hero */}
      <section className="hero">

        <video
          autoPlay
          muted
          loop
          className="hero-video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">

          <h1>
            Find Your Dream Home
          </h1>

          <p>
            Explore luxury homes,
            villas and premium
            apartments.
          </p>

          {/* search card */}
          <div className="search-card">

            <input
              placeholder="Location"
            />

            <input
              placeholder="Budget"
            />

            <select>
              <option>
                Property Type
              </option>

              <option>
                Apartment
              </option>

              <option>
                Villa
              </option>

              <option>
                House
              </option>
            </select>

            <button>
              Search
            </button>

          </div>

        </div>
      </section>

      {/* blinking featured alert */}
      <section className="featured-alert blink">
        🔥 HOT PROPERTY ALERT —
        LUXURY VILLAS SELLING FAST
      </section>

      {/* property grid */}
      <section className="property-section">

        <h2>
          Featured Properties
        </h2>

        <div className="property-grid">

          {properties.map(
            (property, index) => (
              <div
                key={index}
                className="property-card pulse"
              >

                <span className="hot-badge">
                  HOT
                </span>

                <div className="property-image">
                  Property Image
                </div>

                <h3>
                  {property.title}
                </h3>

                <p>
                  📍
                  {" "}
                  {property.location}
                </p>

                <h4>
                  {property.price}
                </h4>

                <button>
                  View Details
                </button>

              </div>
            )
          )}

        </div>

      </section>

      {/* featured properties */}
      <section className="luxury-section">

        <h2>
          Premium Estates
        </h2>

        <div className="luxury-grid">

          <div className="luxury-card pulse">
            Luxury Beach Villa
          </div>

          <div className="luxury-card">
            Smart City Apartment
          </div>

          <div className="luxury-card pulse">
            Modern Penthouse
          </div>

        </div>

      </section>

      {/* agents */}
      <section className="agents">

        <h2>
          Meet Our Agents
        </h2>

        <div className="agent-grid">

          <div className="agent-card">
            <div className="avatar" />
            <h3>Michael Perera</h3>
            <p>Luxury Property Expert</p>
          </div>

          <div className="agent-card pulse">
            <div className="avatar" />
            <h3>Sarah Fernando</h3>
            <p>Villa Specialist</p>
          </div>

          <div className="agent-card">
            <div className="avatar" />
            <h3>David Silva</h3>
            <p>Mortgage Advisor</p>
          </div>

        </div>

      </section>

      {/* footer */}
      <footer className="footer">
        © 2026 DreamSpace Realty —
        Premium Property Solutions
      </footer>

    </main>
  );
}