/*
    settings {
        length: 8
        upperCase: true,
        lowerCase: true,
        numbers: true,
        specialCharacters: true
    }
*/
const randomValues = new Uint32Array(1);

export default function getRandomPassword(
    { length = 8, upperCase = true, lowerCase = true, numbers = true, specialCharacters = true, accentedCharacters = false } = {}) {
    const passwordSettings = {
        length,
        upperCase,
        lowerCase,
        numbers,
        specialCharacters,
        accentedCharacters
    };
    const characters = getCharacters(passwordSettings);
    if (!characters) { return "" }

    let password = "";
    for (let i = 0; i < passwordSettings.length; i++) {
        crypto.getRandomValues(randomValues);
        const randomIndex = randomValues[0] % characters.length;
        password += characters[randomIndex];
    }
    return password;

}

function getCharacters(settings) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789"
    const specialCharacters = "!@#$%^&*()_-+=<>?[]{}|\\:;,.`~\"'/";
    const accentedCharacters = "äöåàáâãäåæèéêëìíîïðòóôõöøùúûüýÿ";

    let characters = "";
    settings.upperCase && (characters += letters.toUpperCase());
    settings.lowerCase && (characters += letters);
    settings.numbers && (characters += numbers);
    settings.specialCharacters && (characters += specialCharacters);
    if (settings.accentedCharacters) {
        settings.lowerCase && (characters += accentedCharacters)
        settings.upperCase && (characters += accentedCharacters.toUpperCase());
    }

    return characters;
}
