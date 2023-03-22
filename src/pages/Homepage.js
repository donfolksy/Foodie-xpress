import React, { useEffect, useState } from "react";
import vector from "../images/Vector 1.png";
import Ellipse from "../images/Ellipse 5.png";
import KFC from "../images/Rectangle 163.png";
import Chicken from "../images/Rectangle 164.png";
import Amala from "../images/Rectangle 165.png";
import Kilimanjaro from "../images/Rectangle 166.png";
import Ola from "../images/Rectangle 167.png";
import Ofada from "../images/Rectangle 168.png";
import Chef from "../images/Group 133.png";
import Man from "../images/Ellipse 7.png";
import Phone from "../images/homephone.png";
import Navbar from "../components/Navbar";
import axios from "axios";

function Homepage() {
  const [menu, setMenu] = useState([]);
  const FetchMenu = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "en_US");
    encodedParams.append("limit", "30");
    encodedParams.append("location_id", "297704");
    encodedParams.append("currency", "USD");

    const options = {
      method: "POST",
      url: "https://worldwide-restaurants.p.rapidapi.com/search",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "b4767f9e3fmshf8baf5a4afad542p18c50djsne69b85d6da84",
        "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
      },
      data: encodedParams,
    };

    // let response = axios.post(options.url,{headers:options.headers})
    // setMenu(response.data.results.data)
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setMenu(response.data.results.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //FetchMenu()

  useEffect(() => {
    FetchMenu();
  }, [0]);
  return (
    // section one

    <div className="parent">
      <Navbar />
      <div className="section-one">
        <div className="sub-section-one">
          <div className="sec-one1">
            <h3>Delivering satisfaction</h3>
            <h4>Every day</h4>
            <img src={vector}></img>
            <p>Browse Restaurants Near You </p>
            <input
              className="email"
              type="email"
              placeholder="  Enter address"
              name=""
              id=""
            ></input>
            <button className="map-butt">
              {" "}
              <i className="fa-sharp fa-solid fa-location-dot"></i> Use current
              location
            </button>
          </div>
          <div className="sec-one2">
            <img id="phone-image" src={Phone} />
          </div>
        </div>
      </div>
      <div
        // section two
        className="section-two"
      >
        <h3>Popular Restaurants</h3>
        <div className="sec-two1">
          {/* {menu.map((item, index)=>(
                <div key={index}>
                {" "}
                <img src={item.photo.images.medium.url}></img>
                <p>{item.name} </p> <span>87% (791)</span>
              </div>
            ))} */}
          <div>
            {" "}
            <img src={KFC}></img>
            <p>
              KFC <span>87% (791)</span>
            </p>{" "}
          </div>
          <div>
            {" "}
            <img src={Chicken}></img>
            <p>
              CHICKEN REPUBLIC <span>87% (791)</span>
            </p>{" "}
          </div>
          <div>
            {" "}
            <img src={Amala}></img>
            <p>
              AMALA SKY <span>87% (791)</span>
            </p>{" "}
          </div>
        </div>

        <div className="sec-two2">
          <div>
            {" "}
            <img src={Kilimanjaro}></img>
            <p>
              Kilimanjaro <span>87% (791)</span>
            </p>
          </div>
          <div>
            {" "}
            <img src={Ola}></img>
            <p>
              Ola Mummy <span>87% (791)</span>
            </p>{" "}
          </div>
          <div>
            {" "}
            <img src={Ofada}></img>
            <p>
              Ofada Kitchen <span>87% (791)</span>
            </p>{" "}
          </div>
        </div>
      </div>
      <div
        // section three
        className="section-three"
      >
        <h3>Top Category</h3>
        <div className="sec-three1">
          <button>Turkey</button>
          <button>Jollof</button>

          <button>Local Food</button>
          <button>Snacks</button>
        </div>
        <div className="sec-three2">
          <button>Healthy</button>
          <button>Traditional</button>
          <button>Sea Food</button>
        </div>
      </div>

      {/* section four */}
      <div className="section-four">
        <h3>Let's Join Hands</h3>
        <div id="sec-four">
          <img src={Chef} />
        </div>
        <p>
          Join forces with foodie Xpress! You may increase sales and seize new chances with the aid of our technology and user base!
        </p>
        <button>Join us</button>
      </div>

      {/* section five */}

      <div className="section-five">
        <h3>Our User Testimonials</h3>
        <div className="sec-five-body">
          <div className="sec-five1">
            <p>
              My experience using Foodie Xpress was easy because every
              transaction I made was not as difficult as expected at first.
            </p>
            <img src={Man}></img>
            <h6>Ogunleye Tosin</h6>
          </div>
          <div className="sec-five2">
            <p>
              My experience using Foodie Xpress was easy because every
              transaction I made was not as difficult as expected at first.
            </p>
            <img src={Man}></img>
            <h6>Ogunleye Tosin</h6>
          </div>
          <div className="sec-five3">
            <p>
              My experience using Foodie Xpress was easy because every
              transaction I made was not as difficult as expected at first.
            </p>
            <img src={Man}></img>
            <h6>Ogunleye Tosin</h6>
          </div>
        </div>
      </div>

      {/* footer bar */}
      <div className="footer">
        <h3>Foodie Xpress</h3>
        <div className="footer-menu">
          <div className="footer-bar1">
            <h5> Let's join Hands </h5>
            <ul>
              <li>Careers</li>
              <li>Foodie Xpress Partner</li>
              <li>Couriers</li>
            </ul>
          </div>

          <div className="footer-bar2">
            <h5> Links</h5>
            <ul>
              <li>About us</li>
              <li>Contact us</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Security</li>
            </ul>
          </div>
          <div className="footer-bar3">
            <h5>Social Media</h5>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="footer-bar4">
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
