function SelectBodySideBtn({ onClick, side }) {

    return (
        <button
            className='cursor-pointer bg-sky-500 rounded-md h-8 w-30 select-none hover:scale-[1.02] hover:bg-sky-400 text-emerald-50 font-medium'
            onClick={onClick}
            type="button"
        >
            {side === "front" ? "Show Back" : "Show Front"}
        </button>
    );
}

export default SelectBodySideBtn;