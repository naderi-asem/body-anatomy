import { useState } from "react";

function SelectButton({ children, id, radioName }) {
    const [isChecked, setIsChecked] = useState({ checked: false, side: "" });

    const changeInputHandler = (e) => {
        // console.log(e.target.checked);
        setIsChecked({checked: e.target.checked, side: id});
        console.log(isChecked);
    }

    return (
        <label
            className='cursor-pointer relative bg-sky-500 rounded-md h-8 w-30 pt-1 select-none hover:scale-[1.02] hover:bg-sky-400 text-emerald-50 font-medium'
            htmlFor={id}
        >
            <input
                type="radio"
                name={radioName}
                id={id}
                className="cursor-pointer opacity-0 h-0 w-0 absolute"
                onChange={(e) => changeInputHandler(e)}
            />
            {children}
        </label>
    );
}

export default SelectButton;