import React from 'react';

const SelectInput = () => {
  return (
    <select className='select-primary select mr-16 w-full max-w-[15rem]'>
      <option disabled selected>
        Selecione o filtro
      </option>
      <option>Maior avaliado</option>
      <option>Menor avaliado</option>
      <option>5 estrelas</option>
      <option>4 estrelas</option>
      <option>3 estrelas</option>
      <option>2 estrelas</option>
      <option>1 estrelas</option>
    </select>
  );
};

export default SelectInput;
