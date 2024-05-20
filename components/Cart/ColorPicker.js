import React, { useState } from 'react';
import styles from './ColorPicker.module.css'; // Import CSS module

const ColorPicker = ({handleColorSelect, selectedColor, hexColor}) => {

  const colors = [
    { name: 'Polar White', hex: '#E8E8EF' },
    { name: 'Hawiian Blue', hex: '#012169' },
    { name: 'Desert Beige', hex: '#E6D3B7' },
    { name: 'Sahara Tan', hex: '#B69D85' },
    { name: 'Light Stone', hex: '#ddd8d6' },
    { name: 'Ash Grey', hex: '#b2beb5' },
    { name: 'Koko Brown', hex: '#665049' },
    { name: 'Emerald Green', hex: '#50C878' },
    { name: 'Charcoal', hex: '#36454f' },
    { name: 'Country Red', hex: '#ff4500' },
    { name: 'Copper Penny', hex: '#ad6f69' },
    { name: 'Black', hex: '#000000'}
  ];

  
  return (
    <span className='flex-col'>choose color
    <div className={styles.colorPicker}>
      {colors.map((color, index) => (
        <label key={index} className={styles.colorOption}>
          <input
            type="radio"
            name="color"
            value={color.name}
            checked={selectedColor === color.name}
            onChange={(e) => handleColorSelect({event: e, color: color.name, hex: color.hex})}
          />
          <span
            style={{ backgroundColor: color.hex }}
            className={styles.colorBox}
            alt={color.name} // Alt tag added with color name
          />
        </label>
      ))}
    </div>
    </span>
  );
};

export default ColorPicker;
