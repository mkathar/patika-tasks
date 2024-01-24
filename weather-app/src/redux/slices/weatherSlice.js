import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import data from "../../dataCity/cities.json";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    citiesData: [],
  },
  reducers: {
    getData: (state, action) => {},
    setData: (state, action) => {
      console.log("selam", action.payload);
      state.citiesData = action.payload;
    },
  },
});

export let { getData, setData } = weatherSlice.actions;

export const fetchWeatherData = (cityName) => async (dispatch) => {
  try {
    const item = data.find((item) => item.name === cityName);

    if (item) {
      const res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=14a434db4dbd4882a21134320230205&q=${item.latitude},${item.longitude}&days=8&aqi=no&alerts=no`
      );

      console.log("API Yanıtı:", res.data);

      const citiesData = res.data;
      dispatch(setData(citiesData));
    }
  } catch (error) {
    console.error("Hava durumu verisi alınırken bir hata oluştu:", error);
  }
};

export const weatherReducer = weatherSlice.reducer;
