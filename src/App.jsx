import './App.css'
// import SelectButton from './components/selectButton/SelectButton';
import SelectBodySideBtn from './components/selectBodySideBtn/SelectBodySideBtn';
import { useState } from 'react';
// import BackBodyParts from './components/backBodyParts/BackBodyParts';
// import FrontBodyParts from './components/frontBodyParts/FrontBodyParts';
// import Part from './components/part/Part';
import Swal from 'sweetalert2';
import BodySide from './components/bodySide/BodySide';

function App() {

  const [selectedSide, setSelectedSide] = useState("back");
  // const [selectedPart, setSelectedPart] = useState(null);

  const bodyParts = {
    backParts: [
      { id: 1, name: "backMainHead", src: "./src/assets/manBack/backMAinHead.png", partClass: "col-start-2 row-start-2 absolute left-7.5" },
      { id: 2, name: "backRightHead", src: "./src/assets/manBack/backRightHead.png", partClass: "row-start-2 col-start-2 left-18 absolute top-4.5" },
      { id: 3, name: "backLeftHead", src: "./src/assets/manBack/backLeftHead.png", partClass: "row-start-2 col-start-2 absolute left-7 top-4.5" },
      { id: 4, name: "backNeck", src: "./src/assets/manBack/backNeck.png", partClass: "row-start-3 col-start-2 absolute left-7.5 -top-4.5" },
      { id: 5, name: "menBack", src: "./src/assets/manBack/menBack.png", partClass: "row-start-3 col-start-2 absolute left-3 top-3.5" },
      { id: 6, name: "menWaist", src: "./src/assets/manBack/menWaist.png", partClass: "row-start-4 col-start-2 absolute left-5 top-11.5" },
      { id: 7, name: "backRightArm", src: "./src/assets/manBack/backRightArm.png", partClass: "row-start-3 col-start-2 absolute left-27 top-6" },
      { id: 8, name: "backLeftArm", src: "./src/assets/manBack/backLeftArm.png", partClass: "row-start-3 col-start-2 absolute top-6 -left-4.5" },
      { id: 9, name: "rightElbow", src: "./src/assets/manBack/rightElbow.png", partClass: "row-start-4 col-start-3 absolute top-5 left-1.5" },
      { id: 10, name: "leftElbow", src: "./src/assets/manBack/leftElbow.png", partClass: "row-start-4 col-start-2 absolute -left-6 top-4" },
      { id: 11, name: "backRightForeArm", src: "./src/assets/manBack/backRightForeArm.png", partClass: "row-start-4 col-start-3 absolute left-2 top-10" },
      { id: 12, name: "backLeftForeArm", src: "./src/assets/manBack/backLeftForeArm.png", partClass: "row-start-4 col-start-2 absolute -left-6.5 top-9.5" },
      { id: 13, name: "rightHand", src: "./src/assets/manBack/rightHand.png", partClass: "row-start-5 col-start-3 absolute top-5.5 left-4" },
      { id: 14, name: "leftHand", src: "./src/assets/manBack/leftHand.png", partClass: "row-start-5 col-start-2 absolute top-5.5 -left-6.5" },
      { id: 15, name: "menLowerBody", src: "./src/assets/manBack/menLowerBody.png", partClass: "row-start-5 col-start-2 absolute left-3.5 -top-1.5" },
      { id: 16, name: "Circle", src: "./src/assets/manBack/circle.png", partClass: "row-start-5 col-start-2 absolute left-12.5 top-3.5" },
      { id: 17, name: "backRightThigh", src: "./src/assets/manBack/backRightThigh.png", partClass: "row-start-5 col-start-2 absolute left-16 top-6.5" },
      { id: 18, name: "backLeftThigh", src: "./src/assets/manBack/backLeftThigh.png", partClass: "row-start-5 col-start-2 absolute left-3 top-7" },
      { id: 19, name: "backRightLeg", src: "./src/assets/manBack/backRightLeg.png", partClass: "row-start-6 col-start-2 absolute left-20.5 top-11" },
      { id: 20, name: "backLeftLeg", src: "./src/assets/manBack/backLeftLeg.png", partClass: "row-start-6 col-start-2 absolute left-2.5 top-11" },
      { id: 21, name: "backRightFoot", src: "./src/assets/manBack/backRightFoot.png", partClass: "row-start-8 col-start-2 absolute left-22 -top-2" },
      { id: 22, name: "backLeftFoot", src: "./src/assets/manBack/backLeftFoot.png", partClass: "row-start-8 col-start-2 absolute -left-0.5 -top-2" },
    ],
    frontParts: [
      { id: 23, name: "Head", src: "./src/assets/manFront/head.png", partClass: "col-start-2 row-start-2 absolute left-5.5" },
      { id: 24, name: "Neck", src: "./src/assets/manFront/neck.png", partClass: "row-start-3 col-start-2 absolute left-8.5 -top-3" },
      { id: 25, name: "Chest", src: "./src/assets/manFront/chest.png", partClass: "row-start-3 col-start-2 absolute top-3.5" },
      { id: 26, name: "FrontLowerBody", src: "./src/assets/manFront/frontLowerBody.png", partClass: "row-start-5 col-start-2 absolute left-3 top-2.5" },
      { id: 27, name: "Circle", src: "./src/assets/manFront/circle.png", partClass: "row-start-5 col-start-2 absolute left-10.5 top-9.5" },
      { id: 28, name: "RightArm", src: "./src/assets/manFront/rightArm.png", partClass: "row-start-3 col-start-2 absolute top-7.5 -left-7.5" },
      { id: 29, name: "LeftArm", src: "./src/assets/manFront/leftArm.png", partClass: "row-start-3 col-start-3 absolute -left-1 top-7.5" },
      { id: 30, name: "RightForeArm", src: "./src/assets/manFront/rightForeArm.png", partClass: "row-start-4 col-start-2 absolute -left-9 top-7.5" },
      { id: 31, name: "LeftForeArm", src: "./src/assets/manFront/leftForeArm.png", partClass: "row-start-4 col-start-3 absolute left-2.5 top-7" },
      { id: 32, name: "RightHand", src: "./src/assets/manFront/rightHand.png", partClass: "row-start-5 col-start-2 absolute top-6.5 -left-8" },
      { id: 33, name: "LeftHand", src: "./src/assets/manFront/leftHand.png", partClass: "row-start-5 col-start-3 absolute left-1.5 top-6.5" },
      { id: 34, name: "RightThigh", src: "./src/assets/manFront/rightThigh.png", partClass: "row-start-5 col-start-2 absolute left-[0.2rem] top-6.5" },
      { id: 35, name: "LeftThigh", src: "./src/assets/manFront/leftThigh.png", partClass: "row-start-5 col-start-2 absolute left-[3.8rem] top-7" },
      { id: 36, name: "RightKnee", src: "./src/assets/manFront/rightKnee.png", partClass: "row-start-7 col-start-2 absolute -top-4.5 left-1.5" },
      { id: 37, name: "LeftKnee", src: "./src/assets/manFront/leftKnee.png", partClass: "row-start-7 col-start-3 absolute -top-3.5 -left-9" },
      { id: 38, name: "RightLeg", src: "./src/assets/manFront/rightLeg.png", partClass: "row-start-7 col-start-2 absolute top-1.5 left-0.5" },
      { id: 39, name: "LeftLeg", src: "./src/assets/manFront/leftLeg.png", partClass: "row-start-7 col-start-3 absolute  top-2.5 -left-8" },
      { id: 40, name: "RightFoot", src: "./src/assets/manFront/rightFoot.png", partClass: "row-start-8 col-start-2 absolute top-8.5 -left-3.5" },
      { id: 41, name: "LeftFoot", src: "./src/assets/manFront/leftFoot.png", partClass: "row-start-8 col-start-3 absolute -left-6.5 top-9" },
    ]
  }

  function onSideChange() {
    setSelectedSide(prevSide => prevSide === "front" ? "back" : "front");
  }

  function clickHandler(part) {
    // setSelectedPart(part);

    Swal.fire({
      title: `${part.name} is selected`,
      imageUrl: part.src,
      imageWidth: 90,
      // imageHeight: 200,
      imageAlt: part.name
    });
  }


  return (
    <main className='w-full flex flex-col gap-4'>
      <section className='flex gap-2'>

        <section
          className='grow  py-6 max-h-full'
        >
          <div className='w-full flex justify-center gap-4'>
            <SelectBodySideBtn onClick={onSideChange} side={selectedSide} />
            {/* <FrontBodyParts>
              {bodyParts.frontParts.map(part => <Part
                key={part.id}
                partSrc={part.src}
                partName={part.name}
                partClass={part.partClass}
                onClick={() => clickHandler(part)}
              />)}
            </FrontBodyParts>
            <BackBodyParts>
              {bodyParts.backParts.map(part => <Part
                key={part.id}
                partSrc={part.src}
                partName={part.name}
                partClass={part.partClass}
                onClick={() => clickHandler(part)}
              />)}
            </BackBodyParts> */}
            {
              selectedSide === "front" ? <BodySide sideParts={bodyParts.frontParts} onClick={clickHandler} /> : <BodySide sideParts={bodyParts.backParts} onClick={clickHandler} />
            }
          </div>
        </section>
      </section>
    </main>
  )
}

export default App;



