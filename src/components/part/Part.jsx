function Part({ partSrc, partName, partClass }) {
    return (
        <button className={partClass}>
            <img src={partSrc} alt={partName} />
        </button>
    );
}

export default Part;