import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';

import { SCAN_DATA } from '../../constants'

export const QrCodeScanner = () => {
    const [result, setResult] = useState('')

    const scanHandler = (result) => {
        setResult(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA, 
            JSON.stringify([...prevData, result[0].rawValue])
        );
    };

    return (
        <div className={s.container}>
            <Scanner 
                onScan={scanHandler}
                components={{
                    finder: false,
                }}
                styles={{
                    container: { width: 350}
                }}
            />
            <p className={s.result}>{result}</p>
        </div>
    );
};