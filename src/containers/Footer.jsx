import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-dark">
        <div class="container">
          <footer class="py-5">
            <div class="row">
              <div class="col-2">
                <h5 className="text-light">Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-2">
                <h5 className="text-light">Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-2">
                <h5 className="text-light">Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-4 offset-1">
                <form>
                  <h5 className="text-light">Subscribe to our newsletter</h5>
                  <p className="text-light">
                    Monthly digest of whats new and exciting from us.
                  </p>
                  <div class="d-flex w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                    />
                    <button class="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="d-flex justify-content-between py-4 my-4 border-top">
              <p className="text-light">
                © 2021 Company, Inc. All rights reserved.
              </p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <i class="fa fa-twitter text-light"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <i class="fa fa-facebook text-light"></i>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <i class="fa fa-instagram text-light"></i>
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
