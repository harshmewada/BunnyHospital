import React from "react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  Grid,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  Typography,
  AppBar,
  Toolbar,
  CircularProgress,
} from "@material-ui/core";
import Data from "../data/data_map.json";
export const Dashboard = () => {
  const [state, setState] = React.useState({
    start: undefined,
    end: undefined,
  });
  const [foundData, setFoundData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const handleChange = (name, value) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const deleay = (fn) => {
    setIsLoading(true);
    setTimeout(() => {
      fn();
      setIsLoading(false);
    }, 2000);
  };

  React.useEffect(() => {
    const found = Data.find((opt) => {
      return opt.start_point === state.start && opt.end_point === state.end;
    });
    if (found) {
      deleay(() => setFoundData(found));
    } else {
      deleay(() => setFoundData(undefined));
    }
  }, [state]);

  const RenderSelect = ({ options, value, handleChange, label }) => {
    const loacalOptions = [...new Set(options)];
    return (
      <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          label={label}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        >
          {loacalOptions.map((opt, index) => {
            return (
              <MenuItem key={index} value={opt}>
                {opt}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  };

  const FullLoading = () => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  };
  return (
    <div
      style={{
        minHeight: "90vh",
      }}
    >
      <Navbar />

      <Card style={{ height: "100%" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item lg={4}>
              <RenderSelect
                label="Select Start Point"
                value={state.start}
                handleChange={(value) => handleChange("start", value)}
                options={Data.map((opt, index) => opt.start_point)}
              />
            </Grid>
            <Grid item lg={4}>
              <RenderSelect
                label="Select End Point"
                value={state.end}
                handleChange={(value) => handleChange("end", value)}
                options={Data.map((opt, index) => opt.end_point)}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />

        {isLoading ? (
          <CardContent>
            <FullLoading />
          </CardContent>
        ) : (
          <>
            {foundData && (
              <>
                <CardContent>
                  <AppBar position="static">
                    <Toolbar>
                      <Typography>
                        Total Distance - {foundData.distance_km}
                      </Typography>
                    </Toolbar>
                  </AppBar>
                </CardContent>
                <Divider />
              </>
            )}
            {state.start && state.end ? (
              <CardContent>
                {foundData ? (
                  <img
                    src={foundData.image_url}
                    alt={foundData.image_url}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography>No data found</Typography>
                  </div>
                )}
              </CardContent>
            ) : (
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography>Please select Distances</Typography>
                </div>
              </CardContent>
            )}
          </>
        )}
      </Card>
    </div>
  );
};
