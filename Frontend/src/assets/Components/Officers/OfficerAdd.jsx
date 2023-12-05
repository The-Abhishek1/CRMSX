import o from "./Officers.module.css";
import { auth, db, storage } from "../Config/Firebase";
import { addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ArrowBack, FastForward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function OfficerAdd(props) {
  const [show, setShow] = useState(false);
  const [add, setAdd] = useState(true);
  const [imageUpload, setImageUpload] = useState(null);
  const schema = yup.object().shape({
    Name: yup.string().required(),
    IdNo: yup.string().min(4).required(),
    Post: yup.string().required(),
    CaseID: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // From Adding/Submission
  const handleSubmitAdd = async (data) => {
    console.log(data);
    if (imageUpload == null) return;
    const imageRef = ref(storage, `Officers/${data.Name}`);
    try {
      await uploadBytes(imageRef, imageUpload).then((res) => {
        console.log("Image Uploaded Succeesfully");
      }),
        await getDownloadURL(imageRef).then((url) => {
          globalThis.uploadUrl = url;
          console.log(uploadUrl);
        });
      const docRef = await addDoc(collection(db, "Officers"), {
        Name: data.Name,
        IdNo: data.IdNo,
        Post: data.Post,
        CaseID: data.CaseID,
        downloadUrl: uploadUrl,
      });

      setAdd(false);
      setShow(true);

      console.log("Document Written Id: ", docRef.id);
    } catch (e) {
      console.error(e);
    }
  };

  const navigate = useNavigate();
  // Function to go back
  const handleBack = () => {
    navigate("/officers");
  };
  return (
    <>
      {show ? (
        <div className={o.full} style={props.theme1}>
          <div className={o.success} style={props.theme}>
            <h3 className={o.h3}>Record Added Successfully</h3>
            <button className={o.ok} onClick={handleBack}>
              Ok
            </button>
          </div>
        </div>
      ) : null}
      {add ? (
        <div className={o.full} style={props.theme1}>
          <form
            className={o.form}
            style={props.theme}
            onSubmit={handleSubmit(handleSubmitAdd)}
          >
            <ArrowBack
              className={o.formback}
              style={props.theme}
              onClick={handleBack}
            />

            <h3 className={o.h3}>Please Enter officer details</h3>
            <label htmlFor="image" className={o.label}>
              Choose the Image
            </label>
            <input
              type="file"
              className={o.input}
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
            />
            <label htmlFor="name" className={o.label}>
              Enter Officer Name:
            </label>
            <input
              type="text"
              name="name"
              className={o.input}
              {...register("Name")}
            />
            <p className={o.mp}>{errors.Name?.message}</p>
            <label htmlFor="idno" className={o.label}>
              Enter ID No:
            </label>
            <input
              type="text"
              name="idno"
              className={o.input}
              {...register("IdNo")}
            />
            <p className={o.mp}>{errors.IdNo?.message}</p>
            <label htmlFor="post" className={o.label}>
              Enter Officer Post:
            </label>
            <input
              type="text"
              name="post"
              className={o.input}
              {...register("Post")}
            />
            <p className={o.mp}>{errors.Post?.message}</p>
            <label htmlFor="caseid" className={o.label}>
              Enter Case ID:
            </label>
            <input
              type="text"
              name="caseid"
              id=""
              className={o.input}
              {...register("CaseID")}
            />
            <p className={o.mp}>{errors.CaseID?.message}</p>
            <div className={o.button2}>
              <button type="reset" className={o.b} id={o.b1}>
                Reset
              </button>
              <button type="submit" className={o.b} id={o.b2}>
                Add
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default OfficerAdd;
