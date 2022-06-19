import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDress } from 'features/dresses.slice';
import React from 'react';
import { dressService } from 'services';
import axios from 'axios';
import UploadImage from 'app/pages/pageDresses/UploadImage';

const Form = ({ getDresses }) => {
  //   const [imageData, setImageData] = useState(null);
  const [image, setImage] = useState('');
  const inputName = React.useRef<HTMLInputElement | null>(null);
  const inputDescription = React.useRef<HTMLInputElement | null>(null);
  const inputSize = React.useRef<HTMLInputElement | null>(null);
  const inputPrice = React.useRef<HTMLInputElement | null>(null);
  //   const fileInput = React.useRef<HTMLInputElement | null>(null);

  const formRef = React.useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      name: inputName.current && inputName.current.value,

      description: inputDescription.current && inputDescription.current.value,
      size: inputSize.current && inputSize.current.value,
      image,
      price: inputPrice.current && inputPrice.current.value,
    };
    console.log('data POSTED', data);

    await dressService.postDress(data);
    dispatch(addDress(data));
    formRef.current && formRef.current.reset();
  };

  //   const handleUpload = event => {
  //     if (event.target.files && event.target.files[0]) {
  //       setImage(URL.createObjectURL(event.target.files[0]));
  //     }
  //   };
  const handleUpload = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'myrobe');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/djmh8vlgx/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();

    setImage(file.secure_url);
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <h3>Enregistrer une nouvelle robe</h3>
          <br />
          <form onSubmit={e => handleSubmit(e)} ref={formRef}>
            <input
              type="text"
              placeholder="name"
              ref={inputName}
              required={true}
            />
            <input
              type="text"
              placeholder="description"
              ref={inputDescription}
              required={true}
            />
            <input
              type="text"
              placeholder="taille"
              ref={inputSize}
              required={true}
            />

            <input
              type="text"
              placeholder="prix"
              ref={inputPrice}
              required={true}
            />

            <input
              type="file"
              className="input-file"
              // ref={fileInput}
              //required={true}
              onChange={e => handleUpload(e)}
            />
            <br />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
