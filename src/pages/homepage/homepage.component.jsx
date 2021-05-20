import React from "react";

import Directory from "../../components/directory/directory.component";
import Footer from "../../components/footer/footer.component"
import "./homepage.styles.scss";
const HomePage = () => (
  <div className="homepage">
    <Directory />
    <Footer/>
  </div>
);

export default HomePage;
