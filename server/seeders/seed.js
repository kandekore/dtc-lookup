const connectToMongoDB = require('../config/connection');
const { Dtc } = require('../models');
const dtcSeeds = require('./gdxdtcs.json');

const seedDatabase = async () => {
  try {
    const db = await connectToMongoDB();

    await Dtc.deleteMany({});
    await Dtc.create(dtcSeeds);

    console.log('Seed data successfully added!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
