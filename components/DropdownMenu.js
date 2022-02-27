import React from 'react';

const DropdownMenu = ({ data, currentValue, setValue }) => {
  return (
    <>
      <select
        className='w-full outline-none p-2 border border-purple-400 rounded'
        onChange={(e) => setValue(e.target.value)}
      >
        {data.map((item) => (
          <option
            selected={item.value == currentValue}
            key={item.value}
            value={item.value}
          >
            {item.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropdownMenu;
