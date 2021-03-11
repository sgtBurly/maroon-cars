import React, { useEffect } from 'react';
import AboutStyles from '../styles/AboutStyles.module.css'

const About = () => {

  useEffect(() => window.scrollTo(0,0), []);

  return (
    <div className={AboutStyles.main_wrapper}>
      <div className={AboutStyles.left_inner_wrapper}>
        <h1 className={AboutStyles.h1}>About Maroon Cars</h1>
        <p className={AboutStyles.about_text}>
          Among the Helvetii, Orgetorix was by far the most distinguished and
          wealthy. He, when Marcus Messala and Marcus Piso were consuls, incited
          by lust of sovereignty, formed a conspiracy among the nobility, and
          persuaded the people to go forth from their territories with all their
          possessions, [saying] that it would be very easy, since they excelled
          all in valor.
        </p>
        <div className={AboutStyles.contact_info_wrapper}>
          <h2 className={AboutStyles.h2}>Contact Us</h2>
          <ul className={AboutStyles.ul}>
            <li className={AboutStyles.li}><span className={AboutStyles.icon_span}><i className="fas fa-envelope-square fa-2x"></i></span><span className={AboutStyles.info_text_span}>maroonCars@hotmail.com</span> </li>
            <li className={AboutStyles.li}><span className={AboutStyles.icon_span}><i className="fas fa-phone-square-alt fa-2x"></i></span> <span className={AboutStyles.info_text_span}>+467892321</span></li>
            <li className={AboutStyles.li}><span className={AboutStyles.icon_span}><i className="fab fa-twitter-square fa-2x"></i></span><span className={AboutStyles.info_text_span}>@MaroonCars</span></li>
          </ul>
        </div>
      </div>
      <div className={AboutStyles.right_inner_wrapper}>
        <img className={AboutStyles.image} src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="About us" />
      </div>
    </div>
  );
}

export default About;