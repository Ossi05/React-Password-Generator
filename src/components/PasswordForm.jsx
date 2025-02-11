import Input from "./Input";
import "./PasswordForm.css";
export default function PasswordForm({ onChange, passwordSettings, minPasswordLength, maxPasswordLength }) {
    const disableAccentedCharactersOption = !passwordSettings.lowerCase && !passwordSettings.upperCase;
    return (
        <form action="#" className="container password-form">
            <div className="range-container">
                <Input label={`Password length ${passwordSettings.length}`} onChange={onChange} type="range" name="length" id="length" min={minPasswordLength} max={maxPasswordLength} />
            </div>
            <div className="checkbox-container">
                <Input label="abc" onChange={onChange} type="checkbox" name="lowerCase" id="lowerCase" checked={passwordSettings.lowerCase} />
                <Input label="ABC" onChange={onChange} type="checkbox" name="upperCase" id="upperCase" checked={passwordSettings.upperCase} />
                <Input label="123" onChange={onChange} type="checkbox" name="numbers" id="numbers" checked={passwordSettings.numbers} />
                <Input label="#?!" onChange={onChange} type="checkbox" name="specialCharacters" id="specialCharacters" checked={passwordSettings.specialCharacters} />

                <Input label="äÖê" onChange={onChange} type="checkbox" name="accentedCharacters" id="accentedCharacters" disabled={disableAccentedCharactersOption}
                    checked={passwordSettings.accentedCharacters} />
            </div>
        </form >
    )
}