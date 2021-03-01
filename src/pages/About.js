import React from 'react';
import AboutStyles from '../styles/AboutStyles.module.css'

const About = () => {
  return (
    <div className={AboutStyles.main_wrapper}>
      <div className={AboutStyles.left_inner_wrapper}>
        <h1>This is aboutpage</h1>
        <p className={AboutStyles.about_text}>
          Among the Helvetii, Orgetorix was by far the most distinguished and
          wealthy. He, when Marcus Messala and Marcus Piso were consuls, incited
          by lust of sovereignty, formed a conspiracy among the nobility, and
          persuaded the people to go forth from their territories with all their
          possessions, [saying] that it would be very easy, since they excelled
          all in valor,
        </p>
        <div className={AboutStyles.contact_info_wrapper}>
          <h2>Contact Us</h2>
          <ul className={AboutStyles.ul}>
            <li>Email: maroonCars@hotmail.com</li>
            <li>Phone: +467892321</li>
            <li>Twitter: @MaroonCars</li>
          </ul>
        </div>
      </div>
      <div className={AboutStyles.right_inner_wrapper}>
        <img src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="About us" />
      </div>
    </div>
  );
}

export default About;