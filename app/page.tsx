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
      {/* Top banner */}
      <section className="top-banner">
        <p className="readable-text">
          Explore premium homes, villas, and apartments
          with flexible property visits and selected
          financing opportunities.
        </p>
      </section>

      {/* Visit card */}
      <section className="visit-section">
        <div
          className="visit-card"
          aria-labelledby="visit-heading"
        >
          <h2 id="visit-heading">
            Schedule a Property Visit
          </h2>

          <p className="readable-text">
            Explore available homes and arrange a
            convenient property visit with our team.
          </p>

          <button
            type="button"
            className="primary-btn"
          >
            Schedule Visit
          </button>
        </div>
      </section>

      {/* Hero */}
      <section className="hero">
        <video
          controls
          muted
          preload="metadata"
          className="hero-video"
          aria-label="Property showcase video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="hero-content">
          <h1>
            Find Your Dream Home
          </h1>

          <p className="readable-text">
            Explore luxury homes, villas,
            and carefully selected apartments
            designed for different lifestyles
            and budgets.
          </p>

          {/* Search card */}
          <form
            className="search-card"
            aria-label="Property search form"
          >
            <div className="field">
              <label htmlFor="location">
                Location
              </label>

              <input
                id="location"
                type="text"
                placeholder="Enter location"
              />
            </div>

            <div className="field">
              <label htmlFor="budget">
                Budget
              </label>

              <input
                id="budget"
                type="text"
                placeholder="Enter budget"
              />
            </div>

            <div className="field">
              <label htmlFor="property-type">
                Property Type
              </label>

              <select id="property-type">
                <option>
                  Select property type
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
            </div>

            <button
              type="submit"
              className="primary-btn"
            >
              Search Properties
            </button>
          </form>
        </div>
      </section>

      {/* Featured section */}
      <section className="featured-alert">
        <p className="readable-text">
          Explore recently listed premium homes
          and luxury villas in selected locations.
        </p>
      </section>

      {/* Property section */}
      <section
        className="property-section"
        aria-labelledby="property-heading"
      >
        <h2 id="property-heading">
          Featured Properties
        </h2>

        <div className="property-grid">
          {properties.map(
            (property, index) => (
              <article
                key={index}
                className="property-card"
              >
                <span className="featured-badge">
                  Featured
                </span>

                <div
                  className="property-image"
                  aria-hidden="true"
                >
                  Property Preview
                </div>

                <div className="property-content">
                  <h3>
                    {property.title}
                  </h3>

                  <p className="readable-text">
                    📍 {property.location}
                  </p>

                  <h4>
                    {property.price}
                  </h4>

                  <button
                    type="button"
                    className="primary-btn"
                  >
                    View Details
                  </button>
                </div>
              </article>
            )
          )}
        </div>
      </section>

      {/* Premium estates */}
      <section
        className="luxury-section"
        aria-labelledby="luxury-heading"
      >
        <h2 id="luxury-heading">
          Premium Estates
        </h2>

        <div className="luxury-grid">
          <article className="luxury-card">
            Luxury Beach Villa
          </article>

          <article className="luxury-card">
            Smart City Apartment
          </article>

          <article className="luxury-card">
            Modern Penthouse
          </article>
        </div>
      </section>

      {/* Agents */}
      <section
        className="agents"
        aria-labelledby="agents-heading"
      >
        <h2 id="agents-heading">
          Meet Our Agents
        </h2>

        <div className="agent-grid">
          <article className="agent-card">
            <div
              className="avatar"
              aria-hidden="true"
            />

            <h3>
              Michael Perera
            </h3>

            <p className="readable-text">
              Luxury Property Expert
            </p>
          </article>

          <article className="agent-card">
            <div
              className="avatar"
              aria-hidden="true"
            />

            <h3>
              Sarah Fernando
            </h3>

            <p className="readable-text">
              Villa Specialist
            </p>
          </article>

          <article className="agent-card">
            <div
              className="avatar"
              aria-hidden="true"
            />

            <h3>
              David Silva
            </h3>

            <p className="readable-text">
              Mortgage Advisor
            </p>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        DreamSpace Realty © 2026 —
        Premium property solutions
      </footer>
    </main>
  );
}