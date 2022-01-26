const fetch = require('cross-fetch');
const Profile = require('../models/Profile');

module.exports = class ProfileService {
  static async create({ name }) {
    // TODO: Implement me!
    const response = await fetch(process.env.FUTURAMA_URL);
    const [{ quote }] = await response.json();

    const newProfile = { name, quote }
    return await Profile.insert(newProfile);
  }
};
