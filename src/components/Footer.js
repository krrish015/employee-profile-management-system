import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
     
        <div className="container border-top copyright">
          <div className="row pt-4">
            <div className="col-lg-6">
              <p className="mb-2 text-center text-lg-start">
                Copyright &copy; {new Date().getFullYear()}. All Rights Reserved. &mdash; ems <a href="https://employee.co">emp.co</a> Distributed By <a href="https://employee.com">employee management</a>
              </p>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <ul className="list-unstyled d-inline-flex ms-auto">
                <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

       
    </footer>
    
  );
};

export default Footer;
