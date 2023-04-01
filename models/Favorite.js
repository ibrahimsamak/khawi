const mongoose = require("mongoose");
const { getCurrentDateTime } = require("../models/Constant");

const FavoriteSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    supplier_id: { type: mongoose.Schema.Types.ObjectId, ref: "supplier" },
    place_id: { type: mongoose.Schema.Types.ObjectId, ref: "place" },
    createAt: { type: Date },
  },
  { versionKey: false }
);

FavoriteSchema.index({ user_id: 1 });

const Favorites = mongoose.model("Favorite", FavoriteSchema);
exports.Favorite = Favorites;
