import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobileSidebarOpen: false,
};

export const siteSlice = createSlice({
  name: "site",
  initialState,

  reducers: {
    openMobileSidebar: (state) => {
      state.isMobileSidebarOpen = true;
    },
    closeMobileSidebar: (state) => {
      state.isMobileSidebarOpen = false;
    },
  },
});

export const { openMobileSidebar, closeMobileSidebar } = siteSlice.actions;

export default siteSlice.reducer;
