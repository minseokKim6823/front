import React, { useState } from 'react';
import NumberFormat from 'react-currency-format';

const PriceFormat = ({ price, setPrice, board, setBoard }) => {
    // const [price, setPrice] = useState(0);

    const handlePriceChange = (values) => {
        const { floatValue } = values;
        setPrice(floatValue || 0);
        setBoard(prevBoard => ({
            ...prevBoard,
            price: floatValue || 0,
        }));
        console.log(board);
    };

    return (
        <div>
            <NumberFormat
                value={price}
                thousandSeparator={true}
                prefix={'₩'}
                onValueChange={handlePriceChange}
                allowNegative={false}
                decimalScale={0}
                fixedDecimalScale={true}
                isNumericString={false}
                placeholder="₩0"
            />
        </div>
    );
};

export default PriceFormat;
