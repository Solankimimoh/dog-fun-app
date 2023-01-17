import { useState } from "react";
import ConfigApi from "../../utils/ConfigApi";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

export default function Random() {
  // Initialize states for image to set image
  const [image, setImage] = useState("");

  // Function call on button click to display random breed image
  function generateImage() {
    ConfigApi.get("/random-dog")
      .then((result) => {
        //  check result empty or not with status code
        if (result.data !== "" && result.status === 200) {
          setImage(result.data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  }

  return (
    <div className="container">
      <CssBaseline />
      <h2>Click the button to generate a new picture</h2>
      <Button variant="contained" onClick={generateImage} className="button">
        Click Me!
      </Button>
      <img
        src={image}
        alt="Random dog"
        className={image === "" ? "img-container hidden" : ""}
        id="imgContainer"
      />
    </div>
  );
}
