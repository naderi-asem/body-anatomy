import Part from '../part/Part';

function BodySide({ sideParts, onClick }) {
    return (
      <div className="h-[780px] w-[420px] bg-blue-500 rounded-md grid grid-cols-3 grid-rows-8 relative">
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