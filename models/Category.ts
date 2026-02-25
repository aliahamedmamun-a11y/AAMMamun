import mongoose from "mongoose";

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  icon: { type: String }, // image path
});

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  heroTitle: { type: String },
  heroDescription: { type: String },
  heroImages: [{ type: String }], // multiple images for slider
  subcategories: [SubCategorySchema],
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model("Category", CategorySchema);
