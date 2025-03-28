import Part from '../part/Part';

function BodySide({ sideParts, onClick }) {
    return (
      <div className="bg-fuchsia-600 min-h-[800px] rounded-md grid grid-cols-[145px_145px_145px] grid-rows-8 relative">
        {sideParts.map(part => <Part
          key={part.id}
          partSrc={part.src}
          partName={part.name}
          partClass={part.partClass}
          onClick={() => onClick(part)}
        />)}
      </div>
    )
  }

  export default BodySide;