import React, { useEffect } from 'react';

const Homepage = () => {
  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript('./../assets/js/jquery-1.11.3.min.js');
        await loadScript('./../assets/bootstrap/js/bootstrap.min.js');
        await loadScript('./../assets/js/jquery.countdown.js');
        await loadScript('./../assets/js/jquery.isotope-3.0.6.min.js');
        await loadScript('./../assets/js/waypoints.js');
        await loadScript('./../assets/js/owl.carousel.min.js');
        await loadScript('./../assets/js/jquery.magnific-popup.min.js');
        await loadScript('./../assets/js/jquery.meanmenu.min.js');
        await loadScript('./../assets/js/sticker.js');
        await loadScript('./../assets/js/main.js');
      } catch (error) {
        console.error('Failed to load scripts', error);
      }
    };

    loadScripts();
  }, []);

  return (
    <div className="list-section pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="list-box d-flex align-items-center">
              <div className="list-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <div className="content">
                <h3>Free Shipping</h3>
                <p>When order over $75</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="list-box d-flex align-items-center">
              <div className="list-icon">
                <i className="fas fa-phone-volume"></i>
              </div>
              <div className="content">
                <h3>24/7 Support</h3>
                <p>Get support all day</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="list-box d-flex justify-content-start align-items-center">
              <div className="list-icon">
                <i className="fas fa-sync"></i>
              </div>
              <div className="content">
                <h3>Refund</h3>
                <p>Get refund within 3 days!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
