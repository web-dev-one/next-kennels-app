import styles from './ColorPicker.module.css'; // Import CSS module

export default function SizePicker({ handleSizeSelect, selectedSize }) {
    const sizes = [
        {size: "XL", price: 2},
        {size:"L", price: 3}, 
        {size:"M", price: 0},
        {size:"S", price: 0}
        ]

    return (
        <div className={`${styles.sizePicker} flex-row`}>
            <p>size</p>
            {sizes.map((size, index) => (
                <label key={index} className="mx-auto p-1 text-black sizeOption">{size.size}
                    <input
                        type="radio"
                        name="size"
                        value={size.size}
                        checked={selectedSize === size.size}
                        onChange={(e) => handleSizeSelect({ event: e, size: size.size, price: size.price })}
                    />
                </label>
            ))}
        </div>
    );
}
