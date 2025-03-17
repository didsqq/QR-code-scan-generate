import { useState } from 'react';
import {QRCodeSVG} from 'qrcode.react';

import s from './qrCodeGenerator.module.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onClickHandler = (event) =>{
        setResult(value)
        setValue('')
    };

    const OnchangeHandler = (event) =>{
        setValue(event.target.value)
        setResult('')
    };

    return (
        <div className={s.container}>
            <input 
                type="text" 
                value={value} 
                placeholder='Введите текст...'
                onChange={OnchangeHandler} 
                className={s.input}
            />
            <button type="button" className={s.button} onClick={onClickHandler}>
                Сгенерировать
            </button>

            {result !== '' && (
                <>
                {console.log('QR-код для:', result)}
                <div className={s.qrWrapper}>
                    <QRCodeSVG value={result} size={200} />
                </div> 
                </>
            )}
        </div>
    );
};