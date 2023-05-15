import {FC} from 'react';
import styles from './MySelect.module.scss';

interface IOption {
    value: string;
    name: string;
}

interface ISelect {
    defaultValue: string;
    options: IOption[];
    value: string;
    onChange: (str: string) => void;
}

const MySelect: FC<ISelect> = ({defaultValue, options, value, onChange}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className={styles.select}>
            <option value="">{defaultValue}</option>
            {options.map(option =>
                <option value={option.value}>{option.name}</option>    
            )}
        </select>
    );
}

export default MySelect;