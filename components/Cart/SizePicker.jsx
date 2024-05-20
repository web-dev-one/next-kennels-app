import styles from './ColorPicker.module.css'; // Import CSS module

export default function SizePicker({ handleSizeSelect, selectedSize }) {
    const sizes = ["XL", "L", "M", "S"];

    return (
        <div className={`${styles.sizePicker} flex flex-col`}>
            <p>size</p>
            {sizes.map((size, index) => (
                <label key={index} className="mx-auto p-1 text-black sizeOption">{size}
                    <input
                        type="radio"
                        name="size"
                        value={size}
                        checked={selectedSize === size}
                        onChange={(e) => handleSizeSelect({ event: e, size: size })}
                    />
                </label>
            ))}
        </div>
    );
}
