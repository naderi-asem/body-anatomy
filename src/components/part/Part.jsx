function Part({ partSrc, partName, partClass }) {
    return (
        <button className={`${partClass} hover:opacity-85`}>
            <img src={partSrc} alt={partName} />
        </button>
    );
}

export default Part;