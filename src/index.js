import React from "react";
import ReactDOM from "react-dom";

const Card = (props) => {
  console.log(props);

  return (
    <div className="Card">
      <h2>{props.name}</h2>
      <img className="cardImg" src={props.img} alt={props.imgAlt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
      <hr />
    </div>
  );
};

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      imgAlt="avatar_img"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      imgAlt="avatar_img"
      tel="987 654 321"
      email="jack@nowhere.com"
    />
    <Card
      name="Chuck Norris"
      img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      imgAlt="avatar_img"
      tel="+918 372 574"
      email="gmail@chucknorris.com"
    />
    <Card
      name="Jeff Anderson"
      img="https://scontent-bos3-1.xx.fbcdn.net/v/t1.6435-1/68668525_10214567349437082_6313390080153092096_n.jpg?stp=dst-jpg_p480x480&_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=fdugVeDk4aEAX-UAez7&_nc_ht=scontent-bos3-1.xx&oh=00_AT-3Yu3Qzd1BTQYALs4WWwdcgBqTL-Q6n9LkEjfG7ZBoXQ&oe=6245C51B"
      imgAlt="avatar_img"
      tel="617 365 1804"
      email="medfield.anderson@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
