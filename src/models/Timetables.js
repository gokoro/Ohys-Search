import mongoose from 'mongoose'

const timetableSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      unique: true,
    },
    animes: [{ type: String, ref: 'Anime' }],
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
)

global.Timetable =
  global.Timetable || mongoose.model('Timetable', timetableSchema)

export default global.Timetable
