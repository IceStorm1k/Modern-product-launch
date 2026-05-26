import ipadImg from "./assets/Ipad.png";
import iphoneImg from "./assets/iPhone.png";
import logoRowImg from "./assets/Logo Row.png";
import cableIcon from "./assets/cable icon.png";
import earthIcon from "./assets/earth icon.png";
import accountIcon from "./assets/account icon.png";
import chartIcon from "./assets/chart icon.png";
import benefitsLandscapeImg from "./assets/benefits-landscape.png";
import benefitsCarouselImg from "./assets/features carousel v1.png";
import quoteImg from "./assets/image.png";
import heroImg from "./assets/hero image.png";
import footerLogo from "./assets/logo.png";
import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={open ? "site-header active" : "site-header"}>
        <a className="brand" href="/" aria-label="Area home">
          Area
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          <a href="#benefits">Benefits</a>
          <a href="#specifications">Specifications</a>
          <a href="#how-to">How-to</a>
          <a href="#contact">Contact Us</a>
        </nav>

        <a className="learn-link" href="#contact">
          Learn More
          <span aria-hidden="true">↗</span>
        </a>
        <button onClick={() => setOpen(!open)} className="burger-button">
          <span className={open ? "line line-1 active" : "line line-1"}></span>
          <span className={open ? "line line-2 active" : "line line-2"}></span>
          <span className={open ? "line line-3 active" : "line line-3"}></span>
        </button>
      </header>

      <div className={open ? "mobile-menu active" : "mobile-menu"}>
        <nav
          className="mobile-nav"
          style={open ? { display: "flex" } : { display: "none" }}
          aria-label="Mobile primary navigation"
        >
          <a href="#benefits">Benefits</a>
          <a href="#specifications">Specifications</a>
          <a href="#how-to">How-to</a>
          <a href="#contact">Contact Us</a>

          <a className="mobile-learn-link" href="#learn-more">
            Learn More ↗
          </a>
        </nav>
      </div>

      <main className="product-intro" id="learn-more">
        <motion.section
          className="intro-copy"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="intro-heading">Browse everything</h1>
        </motion.section>
        <section className="mid-green-panel" aria-label="Featured product area">
          <img className="ipad-image" src={ipadImg} alt="Featured product" />
          <img
            className="iphone-image"
            src={iphoneImg}
            alt="Featured product"
          />
        </section>

        <section
          className="trusted-section"
          aria-label="Trusted by"
          style={{ "--logo-row": `url("${logoRowImg}")` }}
        >
          <p style={{ fontSize: "15px" }}>Trusted by:</p>
          <div className="trusted-logos" aria-label="Trusted company logos">
            <span
              className="trusted-logo trusted-logo-1"
              aria-hidden="true"
            ></span>
            <span
              className="trusted-logo trusted-logo-2"
              aria-hidden="true"
            ></span>
            <span
              className="trusted-logo trusted-logo-3"
              aria-hidden="true"
            ></span>
            <span
              className="trusted-logo trusted-logo-4"
              aria-hidden="true"
            ></span>
            <span
              className="trusted-logo trusted-logo-5"
              aria-hidden="true"
            ></span>
            <span
              className="trusted-logo trusted-logo-6"
              aria-hidden="true"
            ></span>
          </div>
        </section>
        <section className="benefits-section" id="benefits">
          <p className="section-kicker">Benefits</p>

          <h2>We've cracked the code.</h2>

          <p className="benefits-copy">
            Area provides real insights, without the data overload.
          </p>
        </section>

        <section className="benefit-details" aria-label="Area benefits details">
          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={cableIcon} alt="" />

            <h3>Amplify Insights</h3>

            <p>
              Unlock data-driven decisions with comprehensive analytics,
              revealing key opportunities for strategic regional growth.
            </p>
          </motion.div>

          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={earthIcon} alt="" />

            <h3>Control Your Global Presence</h3>

            <p>
              Manage and track satellite offices, ensuring consistent
              performance and streamlined operations everywhere.
            </p>
          </motion.div>

          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={accountIcon} alt="" />

            <h3>Remove Language Barriers</h3>

            <p>
              Adapt to diverse markets with built-in localization for clear
              communication and enhanced user experience.
            </p>
          </motion.div>

          <motion.div
            className="benefit-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={chartIcon} alt="" />

            <h3>Visualize Growth</h3>

            <p>
              Generate precise, visually compelling reports that illustrate your
              growth trajectories across all regions.
            </p>
          </motion.div>

          <img
            className="benefits-landscape"
            src={benefitsLandscapeImg}
            alt="Colorful mountain landscape"
          />
        </section>
        <section
          className="benefit-carousel"
          aria-label="Area benefits carousel"
        >
          <div className="benefits-double">
            <div className="benefit-text">
              <h1>See the Big Picture</h1>
              <p>
                Area turns your data into clear, vibrant visuals that show you
                exactly what's happening in each region.
              </p>
              <div className="features">
                <motion.div
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                >
                  <span className="feature-number">01</span>

                  <p className="feature-text">
                    <strong>Spot Trends in Seconds:</strong> No more digging
                    through numbers.
                  </p>
                </motion.div>

                <motion.div
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                >
                  <span className="feature-number">02</span>

                  <p className="feature-text">
                    <strong>Get Everyone on the Same Page:</strong> Share
                    easy-to-understand reports with your team.
                  </p>
                </motion.div>

                <motion.div
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                >
                  <span className="feature-number">03</span>

                  <p className="feature-text">
                    <strong>Make Presentations Pop:</strong> Interactive maps
                    and dashboards keep your audience engaged.
                  </p>
                </motion.div>

                <motion.div
                  className="feature-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1 }}
                >
                  <span className="feature-number">04</span>

                  <p className="feature-text">
                    <strong>Your Global Snapshot:</strong> Get a quick, clear
                    overview of your entire operation.
                  </p>
                </motion.div>

                <a href="#specifications" className="discover-link">
                  Discover More
                </a>
              </div>
            </div>
            <div className="benefit-img">
              <img src={benefitsCarouselImg} alt="Benefits carousel" />
            </div>
          </div>
        </section>

        <section className="specs-section" id="specifications">
          <div className="specs-header">
            <p className="section-kicker specs-kicker">Specs</p>
            <h1 className="specs-title">Why choose Area?</h1>
            <p className="specs-copy">
              You need a solution that keeps up. That’s why we developed Area. A
              developer-friendly approach to streamline your business.
            </p>
            <a href="#specifications" className="discover-link">
              Discover More
            </a>
          </div>
          <div className="comparison-table">
            {/* header */}

            <div className="comparison-card featured area">
              <h3>Area</h3>
            </div>

            <div className="comparison-card websurge">
              <h3>WebSurge</h3>
            </div>

            <div className="comparison-card hyperview">
              <h3>HyperView</h3>
            </div>

            {/* row 1 */}

            <div className="comparison-item featured border-t">
              <span>✓</span>
              <p>Ultra-fast browsing</p>
            </div>

            <div className="comparison-item border-t">
              <span>✓</span>
              <p>Fast browsing</p>
            </div>

            <div className="comparison-item border-t">
              <span>×</span>
              <p>Moderate speeds</p>
            </div>

            {/* row 2 */}

            <div className="comparison-item featured">
              <span>✓</span>
              <p>Advanced AI insights</p>
            </div>

            <div className="comparison-item">
              <span>✓</span>
              <p>Basic AI recommendations</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>No AI assistance</p>
            </div>

            {/* row 3 */}

            <div className="comparison-item featured">
              <span>✓</span>
              <p>Seamless integration</p>
            </div>

            <div className="comparison-item">
              <span>✓</span>
              <p>Restricts customization</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>Steep learning curve</p>
            </div>

            {/* row 4 */}

            <div className="comparison-item featured">
              <span>✓</span>
              <p>Advanced AI insights</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>Basic AI insights</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>No AI assistance</p>
            </div>

            {/* row 5 */}

            <div className="comparison-item featured">
              <span>✓</span>
              <p>Ultra-fast browsing</p>
            </div>

            <div className="comparison-item">
              <span>✓</span>
              <p>Fast browsing</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>Moderate speeds</p>
            </div>

            {/* row 6 */}

            <div className="comparison-item featured last">
              <span>✓</span>
              <p>Full UTF-8 support</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>Potential display errors</p>
            </div>

            <div className="comparison-item">
              <span>×</span>
              <p>Partial UTF-8 support</p>
            </div>
          </div>
        </section>
        <section className="quote-section">
          <div className="quote-container">
            <img src={quoteImg} alt="Quote" className="quote-image" />
            <div className="quote">
              <h2 className="quote-text">
                “I was skeptical, but Area has completely transformed the way I
                manage my business. The data visualizations are so clear and
                intuitive, and the platform is so easy to use. I can't imagine
                running my company without it.”
              </h2>
              <div className="quote-author">
                <p className="quote-name">John Smith</p>
                <p className="quote-title">Head of Data</p>
              </div>
            </div>
          </div>
        </section>
        <section className="success-section" id="how-to">
          <div className="success-top">
            <h2>Map Your Success</h2>

            <a href="#contact" className="success-link">
              Discover More
            </a>
          </div>

          <div className="success-steps">
            <motion.div
              className="success-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            >
              <span className="success-number">01</span>

              <h3>Get Started</h3>

              <p>With our intuitive setup, you're up and running in minutes.</p>
            </motion.div>

            <motion.div
              className="success-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            >
              <span className="success-number">02</span>

              <h3>Customize and Configure</h3>

              <p>Adapt Area to your specific requirements and preferences.</p>
            </motion.div>

            <motion.div
              className="success-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1 }}
            >
              <span className="success-number">03</span>

              <h3>Grow Your Business</h3>

              <p>Make informed decisions to exceed your goals.</p>
            </motion.div>
          </div>

          <motion.div
            className="success-image"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
            }}
          >
            <img src={heroImg} alt="Landscape" />
          </motion.div>
        </section>
        <motion.section
          className="connect-section"
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="connect-content">
            <h2>Connect with us</h2>

            <p>
              Schedule a quick call to learn how Area can turn your regional
              data into a powerful advantage.
            </p>

            <a href="mailto:hello@area.com" className="connect-button">
              Learn More ↗
            </a>
          </div>
        </motion.section>
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="footer-top">
            <a href="#benefits">Benefits</a>
            <a href="#specifications">Specifications</a>
            <a href="#how-to">How-to</a>
          </div>

          <div className="footer-bottom">
            <div className="footer-left">
              <img src={footerLogo} alt="Area logo" className="footer-logo" />

              <p>© Area. 2025</p>
            </div>

            <p className="footer-right">All Rights Reserved</p>
          </div>
        </motion.footer>
      </main>
    </>
  );
}

export default App;
