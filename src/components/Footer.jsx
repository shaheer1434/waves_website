import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light p-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <img
                src="wt_md.png"
                alt="Logo"
                style={{ width: "100px", marginLeft: "100px" }}
              />
              <p className="footer-p my-3">
                Wavestechnology was established in 2021 as a professional IT
                consultant with a vision to cater to private and public
                industries lacking informational technology.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link
                    to="/about"
                    className="footer-p-hover footer-p footer-text-decoration-none"
                  >
                    <i className="fa fa-arrow-right me-2"></i>About Company
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career"
                    className=" footer-p-hover footer-p   footer-text-decoration-none"
                  >
                    <i className="fa fa-arrow-right me-2"> </i> Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="footer-p-hover footer-p footer-text-decoration-none"
                  >
                    <i className="fa fa-arrow-right me-2"> </i> Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Services</h5>
              <ul className="footer-p">
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>
                  <Link to ="/software-consulting" className="footer-text-decoration-none " >     Software
                  Consultancy</Link>
                </li>
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>
                  <Link to ="/software-development" className="footer-text-decoration-none ">  Requirements Development </Link>
                 
                </li>
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>
                <Link to="/enterprise-application" className="footer-text-decoration-none" > 
                  Product Development
                  </Link>
                </li>
                <li className=" footer-p-hover">
                  <i className="fa fa-arrow-right me-2"> </i>
                  <Link to="/technology-development" className="footer-text-decoration-none">                  Technology
                  Consultancy</Link>

                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-center">
            <div className="text-center text-md-start mb-3 mb-md-0">
              <p className="mb-0">
                &copy; 2024 Wavestechnology. All Rights Reserved
              </p>
            </div>
            <div className="d-flex footer-p footer-p-hover">
              <Link to="/ " className=" footer-p footer-text-decoration-none me-2">
                Privacy Policy
              </Link>

              <Link to="/ " className=" footer-p footer-text-decoration-none">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
