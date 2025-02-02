import { useContext, useState } from "react";

import LocaleContext from "../context/LocaleContext";
import __Text from "../utils/enTranslation";

function useInput(inputName, rules) {
    const {locale} = useContext(LocaleContext);
    const [value, setValue] = useState('');
    const [error, setError] = useState(__Text(locale, `${inputName} is required`));
    const ruleList = rules.split('|');
    const onChangeHandler = (event) => {
        setValue(event.target.value);
        
        for (let i = 0; i < ruleList.length; i++) {
            const rule = ruleList[i].split(':');

            if (rule[0] === 'required') {
                if (event.target.value === '') {
                    setError(__Text(locale, `${inputName} is required`));
                    return;
                }
            }
            if (rule[0] === 'min') {
                if (event.target.value.length < rule[1]) {
                    setError(__Text(locale, `Minimum ${rule[1]} characters`));
                    return;
                }
            }
            if (rule[0] === 'max') {
                if (event.target.value.length > rule[1]) {
                    setError(__Text(locale, `Maximum ${rule[1]} characters`));
                    return;
                }
            }
            if (rule[0] === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(event.target.value)) {
                    setError(__Text(locale, `Email is not valid`));
                    return;
                }
            }
        }
        setError("");
    }

    return [error, value, onChangeHandler];
}

export default useInput;