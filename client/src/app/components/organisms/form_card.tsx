import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addDress, getDresses } from 'features/dresses.slice';
import React from 'react';
import { dressService } from 'services';

const Form = ({ getDresses }) => {
  const inputName = React.useRef<HTMLInputElement | null>(null);
  const inputDescription = React.useRef<HTMLInputElement | null>(null);
  const inputSize = React.useRef<HTMLInputElement | null>(null);
  const inputPrice = React.useRef<HTMLInputElement | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      name: inputName.current && inputName.current.value,

      description: inputDescription.current?.value,
      size: inputSize.current?.value,
      price: inputPrice.current?.value,

      //   photo: `https://picsum.photos/400/${Math.round(
      //     Math.random() * 200 + 300
      //   )}`,
    };
    console.log('data', data);

    dressService.postDress(data).then(() => {
      dispatch(addDress(data));

      formRef.current && formRef.current.reset();
    });
  };

  useEffect(() => {
    dispatch(getDresses());
  }, []);
  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={e => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="name" ref={inputName} />
          <input type="text" placeholder="description" ref={inputDescription} />
          <input type="text" placeholder="taille" ref={inputSize} />
          <input type="text" placeholder="prix" ref={inputPrice} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
