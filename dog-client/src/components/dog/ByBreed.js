import { useState } from "react";
import { useEffect } from "react";
import ConfigApi from "../../utils/ConfigApi";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ByBreed() {
  // Initialize states for breedsList and random image of breed
  const [breeds, setBreeds] = useState([""]);
  const [image, setImage] = useState("");

  // Function call on select change. Call API to get random image from selected breed
  function generateImage(event) {
    let url = "random-breed-dog/" + event.target.value;
    ConfigApi.get(url)
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

  // Call after first render to get breed list
  useEffect(() => {
    ConfigApi.get("/allbreeds")
      .then((result) => {
        //  check result empty or not with status code
        if (result.data !== "" && result.status === 200) {
          setBreeds(Object.keys(result.data.message));
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <CssBaseline />
      <h2>Select a breed to generate an image</h2>
      
      <Box sx={{ minWidth: 190 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Breed</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Breed"
            onChange={generateImage}
            className="breedOption"
          >
            {breeds.map((breed) => {
              return (
                <MenuItem className="breedOption" key={breed} value={breed}>
                  {breed}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <img
        src={image}
        alt="Random dog by breed"
        className={image === "" ? "img-container hidden" : ""}
        id="imgContainer"
      />
    </div>
  );
}
