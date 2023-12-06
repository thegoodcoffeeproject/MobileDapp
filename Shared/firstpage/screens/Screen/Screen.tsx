import React from "react";
import { Gift } from "../../icons/Gift";
import { Maximize1 } from "../../icons/Maximize1";
import { ShoppingCart } from "../../icons/ShoppingCart";
import { User } from "../../icons/User";


export const Screen = (): JSX.Element => {
  return (
    <div className="screen">
      <div className="div">
        <div className="title">
          <div className="hello-steven-smart">Hey Chantel</div>
        </div>
        <header className="header">
          <div className="back-icon">
            <div className="overlap-group">
              <div className="rectangle" />
              <img className="path" alt="Path" src="/img/path-94.svg" />
            </div>
          </div>
        </header>
        <div className="bottom-menu">
          <div className="overlap">
            <div className="bg" />
            <div className="add-new-image">
              <div className="bg-2" />
            </div>
            <div className="profile-icon">
              <img className="combined-shape" alt="Combined shape" src="/img/combined-shape-1.svg" />
            </div>
            <img className="likes-icon" alt="Likes icon" src="/img/likes-icon.png" />
            <div className="search-icon">
              <div className="overlap-group-2">
                <img className="img" alt="Path" src="/img/path-2.svg" />
                <img className="path-2" alt="Path" src="/img/path.svg" />
              </div>
            </div>
            <div className="home-icon">
              <img className="combined-shape-2" alt="Combined shape" src="/img/combined-shape.svg" />
            </div>
          </div>
        </div>
        <div className="element-PM">Scan &amp; Trace</div>
        <div className="text-wrapper">Shop</div>
        <img className="element" alt="Element" src="/img/68.png" />
        <div className="overlap-2">
          <div className="calendar">
            <div className="bg-wrapper">
              <div className="bg-3" />
            </div>
          </div>
          <div className="group">
            <div className="overlap-3">
              <div className="group-2">
                <div className="bg-4" />
                <div className="bg-5" />
                <div className="bg-6" />
              </div>
              <div className="element-PM-2">shop</div>
              <div className="element-PM-3">profile</div>
              <div className="element-PM-4">rewards</div>
              <ShoppingCart className="shopping-cart" color="#7D523F" />
              <Gift className="gift-1" color="#7D523F" />
              <User className="user-1" color="#7D523F" />
            </div>
          </div>
          <div className="element-PM-5">
            Current Balance
            <br />
            £20
          </div>
        </div>
        <p className="p">scan your coffee to trace it’s journey from bean to cup !</p>
        <div className="element-PM-6">Recent Activity</div>
        <div className="hello-steven-your-d">View all</div>
        <div className="overlap-4">
          <Maximize1 className="maximize" color="#7D523F" />
          <img className="image" alt="Image" src="/img/image-2.png" />
        </div>
        <div className="working-with-farmers-wrapper">
          <img className="working-with-farmers" alt="Working with farmers" src="/img/working-with-farmers-1-1.png" />
        </div>
        <div className="location">Ethiopian Blend</div>
        <div className="location-2">Arabica Coffee</div>
        <div className="location-3">Traced: Kenyan Bean</div>
        <div className="location-4">-£3.45</div>
        <div className="location-5">-£2.80</div>
        <div className="location-6">-£3.45</div>
        <div className="date">Purchase Date:&nbsp;&nbsp;12/12/22</div>
        <div className="date-2">Purchase Date:&nbsp;&nbsp;12/12/22</div>
        <div className="date-3">Scan Date:&nbsp;&nbsp;12/12/22</div>
        <div className="overlap-5">
          <div className="overlap-wrapper">
            <div className="quality-coffee-wrapper">
              <img className="quality-coffee" alt="Quality coffee" src="/img/quality-coffee-1.png" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="quality-coffee-wrapper">
              <img className="quality-coffee" alt="Quality coffee" src="/img/quality-coffee-1.png" />
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="quality-coffee-wrapper">
            <img className="quality-coffee" alt="Quality coffee" src="/img/quality-coffee-1.png" />
          </div>
        </div>
        <img className="line" alt="Line" src="/img/line-2.svg" />
        <img className="line-2" alt="Line" src="/img/line-2.svg" />
      </div>
    </div>
  );
};
