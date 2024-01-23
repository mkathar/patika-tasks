import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../data/data";

const notesSlice = createSlice({
  name: "tracker",
  initialState: {
    data: data,
    countryData: {
      activeCases: 923131,
      totalRecovered: 791200,
      totaldeaths: 49410,
      totalcases: 85517,
    },

    //eğer api aktif olsa idi zaten ilk istek anında veri olmuş olacaktı.
  },
  reducers: {
    updateCountryData: (state, action) => {
      if (action.payload === "World") {
        const totalData = {
          country: "World",
          activeCases: 0,
          totalRecovered: 0,
          totaldeaths: 0,
          totalcases: 0,
        };

        state.data.forEach((item) => {
          totalData.activeCases += item.activeCases;
          totalData.totalRecovered += item.totalRecovered;
          totalData.totaldeaths += item.totaldeaths;
          totalData.totalcases += item.totalcases;
        });

        state.countryData = totalData;
      } else {
        const selectedCountry = state.data.find(
          (item) => item.country === action.payload
        );

        state.countryData = selectedCountry ? selectedCountry : [];
      }
    },
  },
});

const store = configureStore({
  reducer: notesSlice.reducer,
});

export const { updateCountryData } = notesSlice.actions;
export default store;
