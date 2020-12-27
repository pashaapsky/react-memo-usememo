import React, {FC,  memo} from 'react';

interface OwnProps {
    id: number,
    value: number,
    handleClick: (value: number) => void
}

type Props = OwnProps;

const Counter: FC<Props> = ({id, value, handleClick}) => {
    console.log(`rendering ${id} Counter`);

    return (
        <div>
            {value}
            <button onClick={() => handleClick(++value)}>+</button>
        </div>
    );
};

export default memo(Counter);
