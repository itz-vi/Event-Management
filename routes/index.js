const express = require('express');
const router = express.Router();
const eventModel = require("./events");

// --------  Add event ------ ---------///
router.get('/', async function (req, res, next) {
  const events = await eventModel.find();
  res.render('addevent', { events });
});

router.post('/addevent', async function (req, res, next) {
  const { title, date } = req.body;
  const newevent = await eventModel.create({ title, date });
  const events = await eventModel.find();
  res.render('addevent', { events });
});

// --------update event------ ---------//
router.get("/update/:id", async function (req, res) {
  const id = req.params.id;
  const event = await eventModel.findOne({ _id: id });
  res.render("update", { event })
})

router.post("/updateevent/:id", async function (req, res) {
  const { title, date } = req.body;
  const id = req.params.id;
  await eventModel.findByIdAndUpdate(id, { title, date }, { new: true });
  const events = await eventModel.find();
  res.render("addevent", { events })
})

// --------  delete event ------ ---------///
router.get('/delete/:id', async function (req, res) {
  const id = req.params.id;
  await eventModel.deleteOne({ _id: id });
  const events = await eventModel.find();
  res.render("addevent", { events })
});

module.exports = router; 