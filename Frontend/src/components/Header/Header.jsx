import {
  Menu,
  DarkModeSharp,
  LightModeSharp,
  Close,
  Search,
  ArrowRight,
} from "@mui/icons-material";
import head from "./Header.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { auth, db, storage } from "../Config/Firebase";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";

function Header(props) {
  const [sideShow, setSide] = useState(false);
  const [menu, setMenu] = useState(true);
  const [close, setClose] = useState(false);
  const [chargesheet, setChargesheet] = useState([]);
  const chargesheetCollectionRef = collection(db, "Chargesheet");

  const handleShow = () => {
    setSide(true);
    setClose(true);
    setMenu(false);
  };
  const handleHide = () => {
    setSide(false);
    setClose(false);
    setMenu(true);
  };
  useEffect(() => {
    const getOfficers = async () => {
      const data = await getDocs(chargesheetCollectionRef);
      setChargesheet(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(chargesheet);
    };
    getOfficers();
  });
  const navigate = useNavigate();
  const viewChargesheet = (id) => {
    console.log(id);

    props.setSearch("");
    navigate("/viewchargesheet", { state: { complaintNo: id } });
  };
  const handleSetInput = (event) => {
    props.setSearch(event.target.value);
  };
  return (
    <>
      {sideShow ? (
        <Sidebar theme1={props.theme1} themeSide={props.themeSide} />
      ) : null}
      <header className={head.header} style={props.themeHead}>
        {menu ? (
          <Menu
            style={props.theme1}
            sx={{ fontSize: 36 }}
            className={head.menu}
            onClick={handleShow}
          ></Menu>
        ) : null}
        {close ? (
          <Close
            style={props.theme1}
            sx={{ fontSize: 26 }}
            className={head.close}
            onClick={handleHide}
          ></Close>
        ) : null}
        <div className={head.inputwrapper}>
          <Search className={head.searchIcon} sx={{ fontSize: 17 }} />
          <input
            type="search"
            placeholder="Search or type complaint number"
            className={head.search}
            value={props.search}
            onChange={handleSetInput}
          />
        </div>

        {chargesheet
          .filter((charge) => {
            return charge.complaint_no.toLowerCase() == props.search;
          })
          .map((charge) => {
            return (
              <>
                <div className={head.results}>
                  <>
                    <p
                      className={head.complaintNo}
                      onClick={() => {
                        viewChargesheet(charge.complaint_no);
                      }}
                    >
                      {charge.complaint_no}
                    </p>
                    <ArrowRight className={head.arrowRight} />
                  </>
                </div>
              </>
            );
          })}
      </header>
    </>
  );
}

export default Header;
