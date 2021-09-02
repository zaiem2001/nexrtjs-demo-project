import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetupPage = () => {
  const router = useRouter();

  const meetupHandler = async (meetupData) => {
    const resp = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await resp.json();

    console.log(data);

    router.push("/");
  };

  return (
    <Fragment>
      <Head>
        <title>Add new Meetup.</title>
        <meta
          name="description"
          content="Add new meetup places so other people can find you."
        />
      </Head>
      <NewMeetupForm onAddMeetup={meetupHandler} />;
    </Fragment>
  );
};

export default newMeetupPage;
