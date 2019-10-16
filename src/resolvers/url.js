import { Url } from "models";

export const url = {
  Query: {
    urls: () => Url.find({})
  },
  Mutation: {
    createShort: async (_, { originalUrl, shortName }) => {
      const result = await Url.find({ shortName });
      console.log(result.length);
      if (result.length > 0) {
        return { msg: "Name already taken", data: [] };
      }
      const newUrl = new Url({
        originalUrl: originalUrl,
        shortName: shortName
      });
      await newUrl.save().catch(err => {
        console.log(err);
      });

      console.log(newUrl);
      const data = {
        shortName: newUrl.shortName,
        originalUrl: newUrl.originalUrl
      };
      return { msg: "Success", data: [data] };
    }
  }
};
