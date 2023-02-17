import * as React from "react";
import { Fragment } from "react";
import SideNav from "../components/SideNav";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const drawerWidth = 240;

const Checkboxes = () => {
  const [gymChecked, setGymChecked] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [parkChecked, setParkChecked] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleChangeGym = (event) => {
    setGymChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const handleChangeMumbai = (event) => {
    setGymChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      gymChecked[3],
      gymChecked[4],
    ]);
  };
  const handleChangeChallaghatta = (event) => {
    setGymChecked([
      gymChecked[0],
      event.target.checked,
      event.target.checked,
      gymChecked[3],
      gymChecked[4],
    ]);
  };

  const handleChangeDelhi = (event) => {
    setGymChecked([
      event.target.checked,
      gymChecked[1],
      gymChecked[2],
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChangeGurgaonWest = (event) => {
    setGymChecked([
      gymChecked[0],
      gymChecked[1],
      gymChecked[2],
      event.target.checked,
      event.target.checked,
    ]);
  };

  const GymChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
      <FormControlLabel
        label="Gym"
        control={
          <Checkbox
            checked={gymChecked[0] || (gymChecked[1] && gymChecked[3])}
            indeterminate={gymChecked[1] !== gymChecked[3]}
            onChange={handleChangeGym}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
        <FormControlLabel
          label="Mumbai"
          control={
            <Checkbox
              checked={gymChecked[1] || gymChecked[2]}
              onChange={handleChangeMumbai}
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          <FormControlLabel
            label="Challaghatta"
            control={
              <Checkbox
                checked={gymChecked[2]}
                onChange={handleChangeChallaghatta}
              />
            }
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
        <FormControlLabel
          label="Delhi"
          control={
            <Checkbox
              checked={gymChecked[3] || gymChecked[4]}
              onChange={handleChangeDelhi}
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          <FormControlLabel
            label="Gurgaon West"
            control={
              <Checkbox
                checked={gymChecked[4]}
                onChange={handleChangeGurgaonWest}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );

  const handleChangeCorporatePark = (event) => {
    setParkChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };
  const handleChangePune = (event) => {
    setParkChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
      parkChecked[4],
      parkChecked[5],
    ]);
  };
  const handleChangeBalewadi = (event) => {
    setParkChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      parkChecked[3],
      parkChecked[4],
      parkChecked[5],
    ]);
  };
  const handleChangeKalyaniNagar = (event) => {
    setParkChecked([
      event.target.checked,
      event.target.checked,
      parkChecked[2],
      event.target.checked,
      parkChecked[4],
      parkChecked[5],
    ]);
  };
  const handleChangeParkMumbai = (event) => {
    setParkChecked([
      event.target.checked,
      parkChecked[1],
      parkChecked[2],
      parkChecked[3],
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChangeShivajiNagar = (event) => {
    setParkChecked([
      event.target.checked,
      parkChecked[1],
      parkChecked[2],
      parkChecked[3],
      event.target.checked,
      event.target.checked,
    ]);
  };

  const CorporateParkChildren = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
      <FormControlLabel
        label="Corporate Park"
        control={
          <Checkbox
            checked={parkChecked[0] || (parkChecked[1] && parkChecked[4])}
            indeterminate={
              parkChecked[1] !== parkChecked[4] ||
              parkChecked[2] !== parkChecked[3]
            }
            onChange={handleChangeCorporatePark}
          />
        }
      />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
        <FormControlLabel
          label="Pune"
          control={
            <Checkbox
              checked={parkChecked[1] || (parkChecked[2] && parkChecked[3])}
              indeterminate={parkChecked[2] !== parkChecked[3]}
              onChange={handleChangePune}
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          <FormControlLabel
            label="Balewadi"
            control={
              <Checkbox
                checked={parkChecked[2]}
                onChange={handleChangeBalewadi}
              />
            }
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          <FormControlLabel
            label="Kalyani Nagar"
            control={
              <Checkbox
                checked={parkChecked[3]}
                onChange={handleChangeKalyaniNagar}
              />
            }
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
        <FormControlLabel
          label="Mumbai"
          control={
            <Checkbox
              checked={parkChecked[4] || parkChecked[5]}
              onChange={handleChangeParkMumbai}
            />
          }
        />
        <Box sx={{ display: "flex", flexDirection: "column", ml: 4 }}>
          <FormControlLabel
            label="Shivaji Nagar"
            control={
              <Checkbox
                checked={parkChecked[5]}
                onChange={handleChangeShivajiNagar}
              />
            }
          />
        </Box>
      </Box>
    </Box>
  );
  return (
    <Fragment>
      <NavBar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <h1>CHECKBOXES</h1>
          <div>
            {GymChildren}
            {CorporateParkChildren}
          </div>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Checkboxes;
