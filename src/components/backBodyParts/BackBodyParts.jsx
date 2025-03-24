function BackBodyParts({ children }) {
    return (
        <>
            {/* {backParts.map(part => <Part
             key={part.id} 
             partSrc={part.src} 
             partName={part.name}
             partClass={part.partClass} 
             />)} */}

             {children}
        </>
    );
}

export default BackBodyParts;