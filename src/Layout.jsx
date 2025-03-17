import { Routes, Route } from "react-router-dom";
import {Navigation} from "./components/Navigation/Navigation";
import {QrCodeGenerator } from './components/Generate/QrCodeGenerator';
import {QrCodeScanner } from './components/Scan/QrCodeScanner';

export const Layout = () => {
    return (
        <div>
            <Navigation/>
            {/* <QrCodeGenerator/>
            <QrCodeScanner/> */}

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator/>}/>
                <Route path="/scan" element={<QrCodeScanner/>}/>
            </Routes>
        </div>
    )
}