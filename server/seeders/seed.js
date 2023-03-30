const db = require('../config/connection');
const { Dtc } = require('../models');
// const profileSeeds = require('./profileSeeds.json');
const dtcSeeds = require('./gdxdtcs.json');


db.once('open', async () => {
  try {
    await Dtc.deleteMany({});
    await Dtc.create(dtcSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
