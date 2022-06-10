import { editDress, getDresses } from 'features/dresses.slice';
import React, { useCallback } from 'react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { dressService } from 'services';
import { FaRegEdit } from 'react-icons/fa';
import Delete from './Delete';
const CardDress = ({ dress }) => {
  const [image, setImage] = useState('');
  const [edit, setEdit] = useState(false);
  const inputName = React.useRef<HTMLInputElement | null>(null);
  const inputDescription = React.useRef<HTMLInputElement | null>(null);
  const inputSize = React.useRef<HTMLInputElement | null>(null);
  const inputPrice = React.useRef<HTMLInputElement | null>(null);
  const fileInput = React.useRef<HTMLInputElement | null>(null);

  const formRef = React.useRef<HTMLFormElement | null>(null);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setEdit(false);

    const data = {
      id: dress.id,
      name: inputName.current && inputName.current.value,
      description: dress.description,

      image: dress.image,
      //   size: dress.size,
      //price: dress.price,
      size: inputSize.current && inputSize.current.value,

      price: inputPrice.current && inputPrice.current.value,
    };
    dressService.updateDress(data).then(() => {
      dispatch(editDress([data.name, data.price, data.size, dress.id]));
    });
  };
  //   useEffect(() => {
  //     dispatch(getDresses);
  //   }, []);
  return (
    <div className="dress-card">
      <img src={dress.image} alt={'photo de ' + dress.name} />
      <div className="infos">
        <div className="title">
          {edit ? (
            <div>
              <input defaultValue={dress.name} ref={inputName} autoFocus />
              <input defaultValue={dress.price} ref={inputPrice} autoFocus />
              <input defaultValue={dress.size} ref={inputSize} autoFocus />
              &nbsp;
              <button onClick={() => handleEdit()}>Valider</button>
            </div>
          ) : (
            <>
              <>
                <h4>
                  {inputName.current && inputName.current
                    ? inputName.current.value
                    : dress.name}
                </h4>{' '}
                &nbsp;
                <p>
                  Prix:{' '}
                  {inputPrice.current ? inputPrice.current.value : dress.price}
                </p>
                <p>
                  Taille:{' '}
                  {inputSize.current ? inputSize.current.value : dress.size}
                </p>
              </>
            </>
          )}
        </div>
        <div className="btn-container">
          <div className="edit-icon" onClick={() => setEdit(!edit)}>
            <FaRegEdit />
          </div>
          <Delete id={dress.id} dress={dress} />
        </div>
      </div>
    </div>
  );
};

export default CardDress;
