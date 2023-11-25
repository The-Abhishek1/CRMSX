import React, { useState } from "react";
import o from "./Officers.module.css";
import logo from "../Images/anime.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

function Officers(props) {
  const [update, setUpdate] = useState(false);
  const [add, setAdd] = useState(false);
  const [view, setView] = useState(false);
  const [hide, setHide] = useState(true);

  const handleUpdate = () => {
    setUpdate(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUpdate(false);
  };

  const handleView = () => {
    setView(true);
    setHide(false);
  };
  const handleAdd = () => {
    setAdd(true);
    setHide(false);
  };
  const handleSubmitAdd = (event) => {
    event.preventDefault();
  };

  const handleShow = () => {
    setHide(true);
    setView(false);
    setAdd(false);
  };
  return (
    <>
      {add ? (
        <form
          onSubmit={handleSubmitAdd}
          className={o.form}
          style={props.theme1}
        >
          <ArrowBack
            className={o.formback}
            style={props.theme}
            onClick={handleShow}
          />

          <h3 className={o.h3}>Please Enter officer details</h3>
          <label htmlFor="image" className={o.label}>
            Choose the Image
          </label>
          <input type="file" className={o.input} />
          <label htmlFor="name" className={o.label}>
            Enter Officer Name:
          </label>
          <input type="text" name="name" className={o.input} />
          <label htmlFor="idno" className={o.label}>
            Enter ID No:
          </label>
          <input type="text" name="idno" className={o.input} />
          <label htmlFor="post" className={o.label}>
            Enter Officer Post:
          </label>
          <input type="text" name="post" className={o.input} />
          <label htmlFor="caseid" className={o.label}>
            Enter Case ID:
          </label>
          <input type="text" name="caseid" id="" className={o.input} />
          <div className={o.button}>
            <button type="reset" className={o.b} id={o.b1}>
              Reset
            </button>
            <button type="submit" className={o.b} id={o.b2}>
              Add
            </button>
          </div>
        </form>
      ) : null}
      {hide ? (
        <div className={o.message} style={props.theme1}>
          <h2 className={o.mesh2}>Select Anyone</h2>
          <button onClick={handleAdd} className={o.mesb} id={o.mesb1}>
            add officers
          </button>
          <button onClick={handleView} className={o.mesb} id={o.mesb2}>
            view officers
          </button>
        </div>
      ) : null}
      {view ? (
        <div className={o.whole} style={props.theme1}>
          <ArrowBack
            className={o.back}
            style={props.theme}
            onClick={handleShow}
          />
          <div className={o.div}>
            <h2 className={o.h2} style={props.theme1}>
              Officers Details
            </h2>
          </div>

          {/* {officers.map((officer) => {
              <div className={o.card}>
                <img src={officer.photo} height={110} className={o.img} />
                <h4 className={o.h4}>Name: {officer.name}</h4>
                <p className={o.p}>ID No: {officer.idno }</p>
                <p className={o.p}>Division:{officer.division}</p>
                <p className={o.p}>Post:{officer.post}</p>
                <p className={o.p}>Case assigned:{ officer.complaint_No}</p>
              </div>
            })} */}

          <div className={o.item}>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
            <div className={o.card} style={props.theme2}>
              <img src={logo} alt="" height={130} className={o.img} />
              <h4 className={o.h4}>Abhishek</h4>
              <p className={o.p}>ID No:123</p>
              <p className={o.p}>Division: Crime</p>
              <p className={o.p}>Post: ASI</p>
              <p className={o.p}>Case ID: ABA1920</p>
              <div className={o.button}>
                <button type="button" className={o.b} id={o.b1}>
                  Delete
                </button>
                <button
                  type="button"
                  className={o.b}
                  id={o.b2}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          {update ? (
            <form
              className={o.update}
              style={props.theme1}
              onSubmit={handleSubmit}
            >
              <label htmlFor="name" className={o.label}>
                Name:
              </label>
              <input type="text" name="name" className={o.input} />
              <br />
              <label htmlFor="idno" className={o.label}>
                Id No:
              </label>
              <input type="text" name="idno" className={o.input} />
              <br />
              <label htmlFor="division" className={o.label}>
                Division:
              </label>
              <input type="text" name="division" className={o.input} />
              <br />
              <label htmlFor="post" className={o.label}>
                Post:
              </label>
              <input type="text" name="post" className={o.input} />
              <br />
              <label htmlFor="caseid" className={o.label}>
                Case ID:
              </label>
              <input type="text" name="caseid" id="" className={o.input} />
              <div className={o.button2}>
                <button type="reset" className={o.b} id={o.b1}>
                  Reset
                </button>
                <button type="submit" className={o.b} id={o.b2}>
                  Submit
                </button>
              </div>
            </form>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

export default Officers;
