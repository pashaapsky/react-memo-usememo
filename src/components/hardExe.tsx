import React, {FunctionComponent, useMemo, memo} from 'react';

interface OwnProps {
    value: number
}

type Props = OwnProps;

const HardExe: FunctionComponent<Props> = ({value}) => {
    console.log('rendering hardExe');


    // имитируем сложные вычисления
    // useMemo -> не будет проводить вычисления пока value не изменится
    const hardWork = useMemo(():string => {
        let i = 0;
        while (i < 600000000) i++;
        return value % 2 === 0 ? 'Четное' : 'Не четное';
    }, [value]);

    return (
        <div>{hardWork}</div>
    );
};

// HOC memo -> компонент не будет рендериться при каждом рендере app, будет ререндериться только при изменении value
export default memo(HardExe);
