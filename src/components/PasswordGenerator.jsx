import { useState } from "react"
import getRandomPassword from "../utils/getRandomPassword";
import PasswordDisplay from "./PasswordDisplay";
import PasswordForm from "./PasswordForm";

export default function PasswordGenerator({ minPasswordLength = 4, maxPasswordLength = 200 }) {
    const [passwordSettings, setpasswordSettings] = useState(
        { length: 64, upperCase: true, lowerCase: true, numbers: true, specialCharacters: true, accentedCharacters: false });
    const password = getRandomPassword(passwordSettings);

    const onChange = e => {
        const input = e.target;
        setpasswordSettings(currentSettings => {
            return {
                ...currentSettings,
                [input.name]: input.type === 'checkbox' ? input.checked : input.value

            }
        });
    }

    const copyPasswordToClipboard = () => {
        navigator.clipboard.writeText(password);
    };

    return (
        <>
            <main className="container main-container">
                <h1>Password Generator</h1>
                <PasswordDisplay password={password} onClick={copyPasswordToClipboard} />
                <PasswordForm onChange={onChange} passwordSettings={passwordSettings} minPasswordLength={minPasswordLength} maxPasswordLength={maxPasswordLength} />
            </main>
        </>
    )
}