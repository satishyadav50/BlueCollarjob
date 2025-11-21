import "./Home.css";
import Footer from "./Footer"; // <-- Footer import
import myImage from "../Component/Image.jpeg";
import deliveryImg from "../Component/Delivery.jpeg";
import driverImg from "../Component/Driver.jpeg";
import doctorImg from "../Component/Doctor.jpeg";
import carpenterImg from "../Component/Carpenter.jpeg";
import electricanImg from "../Component/Electrican.jpeg";
import plumberImg from "../Component/Plumber.jpeg";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="text">
          <h1 className="first">FIND YOUR NEXT BLUE COLLAR CAREER</h1>
          <p>Thousands of verified jobs in manufacturing, logistics, and more.</p>

          {/* SEARCH BAR */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const job = e.target.job.value;
              const location = e.target.location.value;

              localStorage.setItem("job-search-text", job + " " + location);
              window.location.href = "/job";
            }}
            className="hero-search"
          >
            <input type="text" name="job" placeholder="Jobs" required />
            <input type="text" name="location" placeholder="Location" required />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="image">
          <img src={myImage} alt="Construction" />
        </div>
      </div>

      {/* POPULAR JOB CATEGORY */}
      <div className="jobs-category">
        <h2>Popular Job Category</h2>
      </div>

      <div className="box-container">
        <div className="box"><img src={deliveryImg} alt="Delivery" /></div>
        <div className="box1"><img src={driverImg} alt="Driver" /></div>
        <div className="box2"><img src={doctorImg} alt="Doctor" /></div>
        <div className="box3"><img src={electricanImg} alt="Electrician" /></div>
        <div className="box4"><img src={plumberImg} alt="Plumber" /></div>
        <div className="box5"><img src={carpenterImg} alt="Carpenter" /></div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="testimonial-wrapper">
        <div className="testimonial-header">
          <h2>Smart Hiring + Superfast Job Search</h2>
          <div className="stars">★★★★★</div>
          <p className="rating-text">4.9 out of 5 — loved by jobseekers & employers!</p>
        </div>

        <div className="testimonial-grid">
          <article className="testimonial-card">
            <p className="quote">
              “Our team has started finding the right candidates faster than ever…”
            </p>
            <div className="user-info">
              <img src={driverImg} alt="HR Executive" />
              <div>
                <div className="small-stars">★★★★★</div>
                <p className="user-name">HR Executive</p>
                <p className="user-location">Noida</p>
              </div>
            </div>
          </article>

          <article className="testimonial-card">
            <p className="quote">
              “I posted my profile and started receiving interview calls…”
            </p>
            <div className="user-info">
              <img src={deliveryImg} alt="Jobseeker" />
              <div>
                <div className="small-stars">★★★★★</div>
                <p className="user-name">Jobseeker</p>
                <p className="user-location">Mumbai</p>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CITY SECTION */}
      <div className="search">
        <h2>Search job by cities</h2>
      </div>

      <div className="city">
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
        <div className="bang"></div>
      </div>

      {/* FOOTER ONLY ON HOME PAGE */}
      <Footer />
    </>
  );
}
