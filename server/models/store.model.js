

/* external imports */
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");

/* create store schema */
const storeSchema = new mongoose.Schema(
  {
    // for title
    title: {
      type: String,
      required: [true, "Please, provide a valid store name"],
      trim: true,
      unique: [true, "Same store already exists"],
    },

    // for description
    description: {
      type: String,
      required: [true, "Please, provide store description"],
      trim: true,
    },

    // for thumbnail
    thumbnail: {
      url: {
        type: String,
        validate: [validator.isURL, "Please provide a valid thumbnail URL"],
        default: "https://placehold.co/296x200.png",
      },
      public_id: {
        type: String,
        default: "N/A",
      },
    },

    // for seller
    seller: {
      type: ObjectId,
      ref: "User",
    },

    // for products
    products: [
      {
        type: ObjectId,
        ref: "Products",
      },
    ],

    // for status
    status: {
      type: String,
      enum: {
        values: ["active", "inactive"],
        message: "Invalid status, choose active/inactive",
      },
      default: "active",
    },

    // for keynotes
    keynotes: [
      {
        type: String,
        trim: true,
      },
    ],

    // for tags
    tags: [
      {
        type: String,
        trim: true,
      },
    ],

    // for trashable
    trashable: {
      type: Boolean,
      default: false,
    },

    // for category  time stamps
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

/* middleware for store */
storeSchema.pre("save", function (next) {
  // replace space with hyphen and lowercase
  const newTags = [];
  this.tags.forEach((tag) =>
    newTags.push(tag.replace(" ", "-")?.toLowerCase())
  );
  this.tags = newTags;

  next();
});

/* create store schema model */
const Store = mongoose.model("Store", storeSchema);

/* export store schema */
module.exports = Store;
