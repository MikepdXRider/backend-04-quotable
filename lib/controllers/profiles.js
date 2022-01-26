const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try{
      const response = await ProfileService.create({ ...req.body });
      res.send(response);
    } catch(err){
      next(err);
    }
});
