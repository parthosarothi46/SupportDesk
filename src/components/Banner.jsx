const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <div className="banner-text">
          <p className="banner-tagline">Streamline. Resolve. Succeed.</p>
          <h1 className="banner-title">
            Customer Support <span className="highlight">Zone</span>
          </h1>
          <p className="banner-description">
            Track, manage, and resolve customer tickets with ease. Stay on top of every issue and deliver exceptional support.
          </p>
        </div>

        <div className="banner-stats">
          <div className="stat-card stat-progress">
            <div className="stat-icon">🔄</div>
            <div className="stat-info">
              <span className="stat-number">{inProgressCount}</span>
              <span className="stat-label">In Progress</span>
            </div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card stat-resolved">
            <div className="stat-icon">✅</div>
            <div className="stat-info">
              <span className="stat-number">{resolvedCount}</span>
              <span className="stat-label">Resolved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-decoration">
        <div className="deco-circle c1"></div>
        <div className="deco-circle c2"></div>
        <div className="deco-circle c3"></div>
      </div>
    </section>
  );
};

export default Banner;
