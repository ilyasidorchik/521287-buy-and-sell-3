'use strict';

const {HttpCode} = require(`../../constants`);

const offerKeys = [
  `title`,
  `categories`,
  `description`,
  `picture`,
  `type`,
  `sum`,
];

module.exports = (req, res, next) => {
  const newOffer = req.body;
  const keys = Object.keys(newOffer);
  const keysExist = offerKeys.every((key) => keys.includes(key));

  if (!keysExist) {
    return res.status(HttpCode.BAD_REQUEST).send(`Bad request`);
  }

  return next();
};
