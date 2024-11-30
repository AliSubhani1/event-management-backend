const mongoose = require("mongoose");

const eventSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter event name"],
    },
    description: {
      type: String,
      required: [true, "Please enter event description"],
    },
    price: {
      type: Number,
      required: [true, "Please enter ticket price"],
    },
    image: {
      type: String,
      required: [true, "Please enter event image"],
    },
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
