import mongoose from "mongoose";

export const Url = mongoose.model("url", {
  originalUrl: String,
  shortName: String,
  createdAt: { type: Date, default: Date.now() }
});
