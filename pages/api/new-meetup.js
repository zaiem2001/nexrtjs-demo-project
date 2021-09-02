// server side code.
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const url = `mongodb+srv://test:test123@realmcluster.8jza7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

    try {
      const connect = await MongoClient.connect(url);

      const db = connect.db();
      const meetupsCollections = db.collection("meetups");

      const result = await meetupsCollections.insertOne(data);

      // console.log(result);

      connect.close();

      res.status(200).json({ message: "meeting inserted successfully." });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  }
};

export default handler;
