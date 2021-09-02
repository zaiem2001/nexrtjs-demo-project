import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Awesome meetings App - Find your rivals.</title>
        <meta
          name="description"
          content="Find and add your meetups so you can increase your bond with others."
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // fetch data and get a response from the server
  // or connect to the backend.

  const url = `mongodb+srv://test:test123@realmcluster.8jza7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(url);

  const db = client.db();
  const collections = db.collection("meetups");

  const meetupData = await collections.find().toArray();

  return {
    props: {
      meetups: meetupData.map((data) => {
        return {
          title: data.title,
          id: data._id.toString(),
          image: data.image,
          address: data.address,
        };
      }),
    },
    revalidate: 2,
  };
};

export default HomePage;
