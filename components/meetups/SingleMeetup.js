import { useRouter } from "next/router";
import classes from "./SingleMeetup.module.css";

const SingleMeetup = (props) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/");
  };

  return (
    <section className={classes.detail}>
      <div className={classes.container}>
        <img src={props.image} alt={props.title} />
        <div className={classes.div}>
          <h2>{props.title}</h2>
          <address> {props.address} </address>
          <p> {props.description} </p>
        </div>
      </div>
      <button onClick={handleOnClick}>Back</button>
    </section>
  );
};

export default SingleMeetup;
