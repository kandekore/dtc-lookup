const { AuthenticationError } = require('apollo-server-express');
const { Dtc } = require('../models');
const { signToken } = require('../utils/auth');


    const resolvers = {
  Query: {
    dtc: async () => {
      return Dtc.find();
    },

    dtc: async (parent, { code }) => {
      return Dtc.findOne({ number: code });
    },
  },

  // Mutation: {
  //   addProfile: async (parent, { name, email, password }) => {
  //     const profile = await Profile.create({ name, email, password });
  //     const token = signToken(profile);

  //     return { token, profile };
  //   },
  //   login: async (parent, { email, password }) => {
  //     const profile = await Profile.findOne({ email });

  //     if (!profile) {
  //       throw new AuthenticationError('No profile with this email found!');
  //     }

  //     const correctPw = await profile.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError('Incorrect password!');
  //     }

  //     const token = signToken(profile);
  //     return { token, profile };
  //   },

  //   addSkill: async (parent, { profileId, skill }) => {
  //     return Profile.findOneAndUpdate(
  //       { _id: profileId },
  //       {
  //         $addToSet: { skills: skill },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
  //   removeProfile: async (parent, { profileId }) => {
  //     return Profile.findOneAndDelete({ _id: profileId });
  //   },
  //   removeSkill: async (parent, { profileId, skill }) => {
  //     return Profile.findOneAndUpdate(
  //       { _id: profileId },
  //       { $pull: { skills: skill } },
  //       { new: true }
  //     );
  //   },
  // },
};

module.exports = resolvers;
