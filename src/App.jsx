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

  const [selectedSide, setSelectedSide] = useState("front");
  // const [selectedPart, setSelectedPart] = useState(null);

  const bodyParts = {
    backParts: [
      { id: 1, name: "backMainHead", src: "./src/assets/manBack/backMAinHead.png", partClass: "col-start-2 row-start-2 left-7.5" },
      { id: 2, name: "backRightHead", src: "./src/assets/manBack/backRightHead.png", partClass: "row-start-2 col-start-2 left-18 top-4.5" },
      { id: 3, name: "backLeftHead", src: "./src/assets/manBack/backLeftHead.png", partClass: "row-start-2 col-start-2 left-7 top-4.5" },
      { id: 4, name: "backNeck", src: "./src/assets/manBack/backNeck.png", partClass: "row-start-3 col-start-2 left-7.5 -top-4.5" },
      { id: 5, name: "menBack", src: "./src/assets/manBack/menBack.png", partClass: "row-start-3 col-start-2 left-3 top-3.5" },
      { id: 6, name: "menWaist", src: "./src/assets/manBack/menWaist.png", partClass: "row-start-4 col-start-2 left-5 top-11.5" },
      { id: 7, name: "backRightArm", src: "./src/assets/manBack/backRightArm.png", partClass: "row-start-3 col-start-2 left-27 top-6" },
      { id: 8, name: "backLeftArm", src: "./src/assets/manBack/backLeftArm.png", partClass: "row-start-3 col-start-2 top-6 -left-4.5" },
      { id: 9, name: "rightElbow", src: "./src/assets/manBack/rightElbow.png", partClass: "row-start-4 col-start-3 top-5 left-1.5" },
      { id: 10, name: "leftElbow", src: "./src/assets/manBack/leftElbow.png", partClass: "row-start-4 col-start-2 -left-6 top-4" },
      { id: 11, name: "backRightForeArm", src: "./src/assets/manBack/backRightForeArm.png", partClass: "row-start-4 col-start-3 left-2 top-10" },
      { id: 12, name: "backLeftForeArm", src: "./src/assets/manBack/backLeftForeArm.png", partClass: "row-start-4 col-start-2 -left-6.5 top-9.5" },
      { id: 13, name: "rightHand", src: "./src/assets/manBack/rightHand.png", partClass: "row-start-5 col-start-3 top-[25px] left-[20px]" },
      { id: 14, name: "leftHand", src: "./src/assets/manBack/leftHand.png", partClass: "row-start-5 col-start-2 top-[27px] -left-[31px]" },
      { id: 15, name: "menLowerBody", src: "./src/assets/manBack/menLowerBody.png", partClass: "row-start-5 col-start-2 left-3.5 -top-1.5" },
      { id: 16, name: "Circle", src: "./src/assets/manBack/circle.png", partClass: "row-start-5 col-start-2 left-12.5 top-3.5" },
      { id: 17, name: "backRightThigh", src: "./src/assets/manBack/backRightThigh.png", partClass: "row-start-5 col-start-2 left-16 top-6.5" },
      { id: 18, name: "backLeftThigh", src: "./src/assets/manBack/backLeftThigh.png", partClass: "row-start-5 col-start-2 left-3 top-7" },
      { id: 19, name: "backRightLeg", src: "./src/assets/manBack/backRightLeg.png", partClass: "row-start-6 col-start-2 left-20.5 top-11" },
      { id: 20, name: "backLeftLeg", src: "./src/assets/manBack/backLeftLeg.png", partClass: "row-start-6 col-start-2 left-2.5 top-11" },
      { id: 21, name: "backRightFoot", src: "./src/assets/manBack/backRightFoot.png", partClass: "row-start-8 col-start-2 left-22 -top-2" },
      { id: 22, name: "backLeftFoot", src: "./src/assets/manBack/backLeftFoot.png", partClass: "row-start-8 col-start-2 -left-0.5 -top-2" },
    ],
    frontParts: [
      { id: 23, name: "Head", src: "./src/assets/manFront/head.png", partClass: "col-start-2 row-start-2 left-[30px]" },
      { id: 24, name: "Neck", src: "./src/assets/manFront/neck.png", partClass: "row-start-3 col-start-2 left-[44px] -top-[14px]" },
      { id: 25, name: "Chest", src: "./src/assets/manFront/chest.png", partClass: "row-start-3 col-start-2 top-[18px] left-[3px]" },
      { id: 26, name: "FrontLowerBody", src: "./src/assets/manFront/frontLowerBody.png", partClass: "row-start-5 col-start-2 left-[17px] top-[18px]" },
      { id: 27, name: "Circle", src: "./src/assets/manFront/circle.png", partClass: "row-start-5 col-start-2 left-[55px] top-[53px]" },
      { id: 28, name: "RightArm", src: "./src/assets/manFront/rightArm.png", partClass: "row-start-3 col-start-2 top-[36px] -left-[35px]" },
      { id: 29, name: "LeftArm", src: "./src/assets/manFront/leftArm.png", partClass: "row-start-3 col-start-3 left-[3px] top-[37px]" },
      { id: 30, name: "RightForeArm", src: "./src/assets/manFront/rightForeArm.png", partClass: "row-start-4 col-start-2 -left-[43px] top-[37px]" },
      { id: 31, name: "LeftForeArm", src: "./src/assets/manFront/leftForeArm.png", partClass: "row-start-4 col-start-3 left-[19px] top-[37px]" },
      { id: 32, name: "RightHand", src: "./src/assets/manFront/rightHand.png", partClass: "row-start-5 col-start-2 top-[33.5px] -left-[40px]" },
      { id: 33, name: "LeftHand", src: "./src/assets/manFront/leftHand.png", partClass: "row-start-5 col-start-3 left-[14px] top-[37px]" },
      { id: 34, name: "RightThigh", src: "./src/assets/manFront/rightThigh.png", partClass: "row-start-5 col-start-2 left-[6px] top-[37px]" },
      { id: 35, name: "LeftThigh", src: "./src/assets/manFront/leftThigh.png", partClass: "row-start-5 col-start-2 left-[78px] top-[39px]" },
      { id: 36, name: "RightKnee", src: "./src/assets/manFront/rightKnee.png", partClass: "row-start-7 col-start-2 -top-[15px] left-[10px]" },
      { id: 37, name: "LeftKnee", src: "./src/assets/manFront/leftKnee.png", partClass: "row-start-7 col-start-3 -top-[11px] -left-[39px]" },
      { id: 38, name: "RightLeg", src: "./src/assets/manFront/rightLeg.png", partClass: "row-start-7 col-start-2 top-[14px] left-[6px]" },
      { id: 39, name: "LeftLeg", src: "./src/assets/manFront/leftLeg.png", partClass: "row-start-7 col-start-3  top-[18px] -left-[33px]" },
      { id: 40, name: "RightFoot", src: "./src/assets/manFront/rightFoot.png", partClass: "row-start-8 col-start-2 top-[51px] -left-[13px]" },
      { id: 41, name: "LeftFoot", src: "./src/assets/manFront/leftFoot.png", partClass: "row-start-8 col-start-3 -left-[26px] top-[52px]" },
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



