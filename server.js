const express = require("express");
const mongoose = require("mongoose");
const Event = require("./models/eventModel");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://alisubhani768:0awSpbRS7CLfHJBS@eventmanagementbackend.0if5i.mongodb.net/Node-API?retryWrites=true&w=majority&appName=EventManagementBackend"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3004, () => {
      console.log("Node API app is running on port 3004");
    });
  })
  .catch((error) => {
    console.log(error);
  });

// Create an event

app.post("/events", async (req, res) => {
  try {
    const events = await Event.create(req.body);
    res.status(200).json(events);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get all events

app.get("/events", async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get event by Id

app.get("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    res.status(200).json(event);
  } catch (error) {
    console.log("fetch single event failed");
    res.status(500).json({ message: error.message });
  }
});

// Update Event
app.put("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body);

    // Can not find product in database
    if (!event) {
      return res
        .status(404)
        .json({ message: `Can not find event by id ${id}` });
    }
    const updatedEvent = await Event.findById(id);

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Event

app.delete("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res
        .status(404)
        .json({ message: `Can not find event by id ${id}` });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
