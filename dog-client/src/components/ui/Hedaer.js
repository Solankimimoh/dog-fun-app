import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Header() {
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className="navbar">
        <Toolbar className="nav-container">
          <img src="logo.png" alt="VKS Logo" className="header_logo" />
          <div>
            <Button to="/" component={Link} className="nav-button">
              Random Images
            </Button>
            <Button component={Link} to="/by-breed" className="nav-button">
              By Breed
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
