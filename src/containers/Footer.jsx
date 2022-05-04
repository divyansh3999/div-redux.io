import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark">
        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-2">
                <h5 className="text-light">Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <h5 className="text-light">Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-2">
                <h5 className="text-light">Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5 className="text-light">Subscribe to our newsletter</h5>
                  <p className="text-light">
                    Monthly digest of whats new and exciting from us.
                  </p>
                  <div className="d-flex w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p className="text-light">
                © 2021 Company, Inc. All rights reserved.
              </p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <i className="fa fa-twitter text-light"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <i className="fa fa-facebook text-light"></i>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <i className="fa fa-instagram text-light"></i>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Footer;
