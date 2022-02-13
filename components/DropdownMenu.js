import React from 'react';

const DropdownMenu = ({data}) => {
  return (
    <>
      <select className='w-full outline-none p-2 border border-green-600 rounded'>
        {data.map((item) => (
          <option key={item.value} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownMenu;
