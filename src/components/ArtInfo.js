import React from 'react';

const Info = (props) => {

  const imageStyle = {
    height: "100px",
    width: "100px"
  }

  return (
    <div>
      {/* <p>info</p> */}
      {/* <p>{props.number}</p> */}
      <p>{props.artistName}</p>
      <img style={imageStyle}src={props.img} />
      <p>{props.title}</p>
    </div>
  );
}

export default Info;
