import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import Info from './ArtInfo';

function Form() {
  const [name, setName] = useState('');
  const [artist, setArtist] = useState('')
  const [objectId, setObjectId] = useState('');
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('enter handle submit');
    // console.log('Handling form submission for name:', name);
    const getName = () => {
      fetch(
        `/api/art/${name}`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('response line 22:', data.res.image);
          console.log('response line 22:', Array.isArray(data.res));
          setName(data.res.artistName);
          setObjectId(data.res.allObjects);
          setImg(data.res.image);
          setTitle(data.res.title);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getName();
  };

  const handleSubmitWorks = (event) => {
    event.preventDefault();
    console.log('enter handle submit works');
    // console.log('Handling form submission for name:', name);
    const getWorks= () => {
      fetch(
        `/api/art/${artist}`,

        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('response line 22:', data.res.image);
          console.log('response line 22:', Array.isArray(data.res));
          setName(data.res.artistName);
          setObjectId(data.res.allObjects);
          setImg(data.res.image);
          setTitle(data.res.title);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getWorks();
  };

  const works = [];
  for (let i = 0; i < name.length; i++) {
    works.push(<Info number={i} artistName={name[i]} title={title[i]} img={img[i]}  key={i} />);
  }

  return (
    <div>
      <span>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Artist to Search:
          <input
            // type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      </span>

      {/* <span>
      <form onSubmit={handleSubmitWorks}>
        <label>
          Enter Artist to Search:
          <input
            type='text'
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
      </span>  */}


      <div>{works}</div>
    </div>
  );
}
export default Form;

// alert(`The name you entered was: ${name}`)
// const getName = () => {
//   fetch(`/api/art/${name}`)
//     // {
//     //   method: 'GET',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // }
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('response:', data);
//       setName(data.message);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// getName();

// {
// <form onSubmit={handleSubmit}>
// <label>
//   Enter Artist Name:
//   <input
//     // type='text'
//     value={name}
//     onChange={(e) => setName(e.target.value)}
//   />
// </label>
// <button type="submit">Submit</button>
// </form>
// }

{
  /* <form>
<label>
  Enter Artist Name:
  <input type='text' value={name} />
</label>
<button onClick={handleSubmit}>Submit</button>
</form> */
}
