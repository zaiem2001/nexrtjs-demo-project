import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

import SingleMeetup from "../../components/meetups/SingleMeetup";

const MeetupPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <SingleMeetup
        image={props.image}
        title={props.title}
        address={props.address}
        description={props.description}
      />
    </Fragment>
  );
};

// ############################ SERVER SIDE CODE I.E WILL NOT BE SHOWN IN CLIENT SIDE.

const connectToDB = async () => {
  const url = `mongodb+srv://test:test123@realmcluster.8jza7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(url);

  const db = client.db();
  const collections = db.collection("meetups");

  return collections;
};

export const getStaticPaths = async () => {
  const collections = await connectToDB();

  const collectionsId = await collections.find({}, { _id: 1 }).toArray();

  return {
    fallback: false,
    paths: collectionsId.map((collectionId) => {
      return {
        params: {
          meetupid: collectionId._id.toString(),
        },
      };
    }),
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupid; // meetupid is file name [inside this]

  const collections = await connectToDB();

  const singleMeetup = await collections.findOne({ _id: ObjectId(meetupId) });
  // console.log(meetupId);

  return {
    props: {
      id: singleMeetup._id.toString(),
      title: singleMeetup.title,
      image: singleMeetup.image,
      description: singleMeetup.description,
      address: singleMeetup.address,
    },
  };
};

export default MeetupPage;
