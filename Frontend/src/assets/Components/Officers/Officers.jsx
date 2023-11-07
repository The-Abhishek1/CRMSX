import React from "react";
import o from "./Officers.module.css";
import logo from "../Images/anime.png";

function Officers(props) {
  return (
    <>
      <div className={o.whole} style={props.theme1}>
        <h2 className={o.h2} style={props.theme1}>
          Officers Details
        </h2>
        <div className={o.container} style={props.theme1}>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
          <div className={o.card} style={props.theme2}>
            <img src={logo} alt="" height={110} className={o.img} />
            <h4 className={o.h4}>Abhishek</h4>
            <p className={o.p}>ID No:123</p>
            <p className={o.p}>Division: Crime</p>
            <p className={o.p}>Post: ASI</p>
            <p className={o.p}>Case assigned: ID</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Officers;
