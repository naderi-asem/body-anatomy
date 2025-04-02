function SelectBodySideBtn({ onClick, side }) {

    return (
        <button
            className={`cursor-pointer ${side==="front" ? 'bg-[#2c2c2c] text-[#cccccc]' : 'bg-[#c9c9c9]  text-[#2c2c2c]'} rounded-md h-10 w-[130px] select-none hover:scale-[1.02] hover:bg-[#b0b0b0] hover:text-[#2c2c2c] font-medium absolute top-10 z-1`}
            onClick={onClick}
            type="button"
        >
            {side === "front" ? "Show Back" : "Show Front"}
        </button>
    );
}

export default SelectBodySideBtn;