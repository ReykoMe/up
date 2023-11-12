import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "@api/.";

export const getAllEventsByClassificationId = createAsyncThunk(
  "events.get/byClassificationId",
  async (classificationId: string) => {
    const data = await API.events.getAllByClassificationId(classificationId);
    return { classificationId, result: data };
  }
);

export const getEventDetailsById = createAsyncThunk(
  "events.get/details",
  async (eventId: string) => {
    const data = await API.events.getEventDetails(eventId);
    return data;
  }
);

export const getAllGenres = createAsyncThunk(
  "search.get-genres-list",
  async () => {
    const data = await API.search.getAllClassifications();
    return data;
  }
);

export const getEventsByKeyword = createAsyncThunk(
  "search.get-by-keyword",
  async (keyword: string) => {
    const result = await API.events.getByKeyword(keyword);
    return result;
  }
);
