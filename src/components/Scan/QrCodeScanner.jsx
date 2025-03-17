import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';

export const QrCodeScanner = () => {
    const [result, setResult] = useState('')

    const scanHandler = (result) => {
        console.log(result)
        setResult(result[0].rawValue);
    };

    return (
        <div className={s.container}>
            <Scanner 
                allowMultiple 
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