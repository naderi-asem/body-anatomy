import Part from "../part/Part";

function BackBodyParts({ backParts }) {
    return (
        <div className="bg-fuchsia-600 rounded-md grid grid-cols-3 grid-rows-8 w-80 relative">
            {backParts.map(part => <Part
             key={part.id} 
             partSrc={part.src} 
             partName={part.name}
             partClass={part.partClass} 
             />)}
        </div>
    );
}

export default BackBodyParts;