import axios from 'axios';
import { deleteDress } from 'features/dresses.slice';
import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { dressService } from 'services';

const Delete = ({ id, dress }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    await dressService
      .deleteDress(dress, id)

      .then(() => {
        dispatch(deleteDress({ id: dress.id }));
      });
  };
  return (
    <div className="delete-icon" onClick={data => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
