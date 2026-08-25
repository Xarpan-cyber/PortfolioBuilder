const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    default: 'My Portfolio'
  },
  template: { type: String, default: 'developer' },
  onboarding: { type: mongoose.Schema.Types.Mixed, default: {} },
  profile: { type: mongoose.Schema.Types.Mixed, default: {} },
  education: { type: [mongoose.Schema.Types.Mixed], default: [] },
  experience: { type: [mongoose.Schema.Types.Mixed], default: [] },
  skills: { type: [mongoose.Schema.Types.Mixed], default: [] },
  projects: { type: [mongoose.Schema.Types.Mixed], default: [] },
  services: { type: [mongoose.Schema.Types.Mixed], default: [] },
  testimonials: { type: [mongoose.Schema.Types.Mixed], default: [] },
  blog: { type: [mongoose.Schema.Types.Mixed], default: [] },
  socials: { type: mongoose.Schema.Types.Mixed, default: {} },
  contactEmail: { type: String, default: '' },
  appearance: { type: mongoose.Schema.Types.Mixed, default: {} },
  domain: { type: mongoose.Schema.Types.Mixed, default: {} },
  analytics: { type: mongoose.Schema.Types.Mixed, default: {} },
  settings: { type: mongoose.Schema.Types.Mixed, default: {} }
}, {
  timestamps: true
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);
