import {
  createSlice,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axiosInstance from "../services/baseURL";

// Asenkron bir thunk oluşturun
export const getText = createAsyncThunk("text/getText", async (rules) => {
  const response = await axiosInstance.get(
    `api/?type=all-meat&paras=${rules.count}&format=${rules.type}`
  );
  return response.data;
});

const textSlice = createSlice({
  name: "text",
  initialState: {
    text: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getText.fulfilled, (state, action) => {
      state.text = action.payload;
    });
  },
});

// redux-thunk middleware'ini kullanarak asenkron işlemleri destekleyin
const store = configureStore({
  reducer: textSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosInstance, // Axios örneğini thunk'a iletebilirsiniz
      },
    }),
});

export default store;
