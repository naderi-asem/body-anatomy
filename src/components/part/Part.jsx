function Part({ partSrc, partName, partClass, onClick }) {
    return (
        <button onClick={onClick} className={`${partClass} absolute hover:opacity-85`}>
            <img src={partSrc} alt={partName} />
        </button>
    );
}

export default Part;