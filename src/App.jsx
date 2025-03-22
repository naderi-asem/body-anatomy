import './App.css'
import SelectButton from './components/selectButton/SelectButton';
import SelectBodySideBtn from './components/selectBodySideBtn/SelectBodySideBtn';
import { useState } from 'react';
import BackBodyParts from './components/backBodyParts/BackBodyParts';

function App() {

  const [side, setSide] = useState("front");

  function onSideChange() {
    setSide(prevSide => prevSide === "front" ? "back" : "front");
  }

  const bodyParts = {
    backParts: [
      { id: 1, name: "backMainHead", src: "./src/assets/manBack/backMAinHead.png", partClass: "col-span-1 col-start-2 row-start-2 justify-items-center" },
      { id: 2, name: "backRightHead", src: "./src/assets/manBack/backRightHead.png", partClass: "row-start-2 col-span-1 col-start-2 absolute right-[37px] top-[16px]" },
      { id: 3, name: "backLeftHead", src: "./src/assets/manBack/backLeftHead.png", partClass: "row-start-2 col-start-2 absolute left-[38px] top-3" },
      { id: 4, name: "backNeck", src: "./src/assets/manBack/backNeck.png", partClass: "row-start-3 col-start-2 absolute left-[39px] -top-3" },
      { id: 5, name: "menBack", src: "./src/assets/manBack/menBack.png", partClass: "row-start-3 col-start-2 absolute left-4.5 top-2" },
      { id: 6, name: "menWaist", src: "./src/assets/manBack/menWaist.png", partClass: "row-start-4 col-start-2 absolute left-6 top-8.5" },
      { id: 7, name: "backRightArm", src: "./src/assets/manBack/backRightArm.png", partClass: "w-6 row-start-3 col-start-2 absolute left-22 top-4" },
      { id: 8, name: "backLeftArm", src: "./src/assets/manBack/backLeftArm.png", partClass: "w-6.5 row-start-3 col-start-2 absolute top-[19px] -left-[9px]" },
      { id: 9, name: "rightElbow", src: "./src/assets/manBack/rightElbow.png", partClass: "w-4.5 row-start-4 col-start-3 absolute top-[25.5px] -left-[9px]" },
      { id: 10, name: "leftElbow", src: "./src/assets/manBack/leftElbow.png", partClass: "w-[24px] row-start-4 col-start-2 absolute -left-3 top-5" },
      { id: 11, name: "backRightForeArm", src: "./src/assets/manBack/backRightForeArm.png", partClass: "w-[23px] row-start-4 col-start-3 absolute -left-1.5 top-9" },
      { id: 12, name: "backLeftForeArm", src: "./src/assets/manBack/backLeftForeArm.png", partClass: "w-4.5 row-start-4 col-start-2 absolute -left-3 top-9.5" },
      { id: 13, name: "rightHand", src: "./src/assets/manBack/rightHand.png", partClass: "w-3.5 row-start-5 col-start-3 absolute top-[1.85rem]" },
      { id: 14, name: "leftHand", src: "./src/assets/manBack/leftHand.png", partClass: "w-3.5 row-start-5 col-start-2 absolute top-[2.05rem] -left-[0.8rem]" },
      { id: 15, name: "menLowerBody", src: "./src/assets/manBack/menLowerBody.png", partClass: "row-start-5 col-start-2 justify-items-center self-start" },
      { id: 16, name: "Circle", src: "./src/assets/manBack/circle.png", partClass: "row-start-5 col-start-2 absolute left-[2.8rem] top-3.5" },
      { id: 17, name: "backRightThigh", src: "./src/assets/manBack/backRightThigh.png", partClass: "w-8.5 row-start-5 col-start-2 absolute left-[3.5rem] top-[1.45rem]" },
      { id: 18, name: "backLeftThigh", src: "./src/assets/manBack/backLeftThigh.png", partClass: "w-8.5 row-start-5 col-start-2 absolute left-4.5 top-[1.55rem]" },
      { id: 19, name: "backRightLeg", src: "./src/assets/manBack/backRightLeg.png", partClass: "w-8.5 row-start-6 col-start-2 absolute left-17 top-[2.4rem]" },
      { id: 20, name: "backLeftLeg", src: "./src/assets/manBack/backLeftLeg.png", partClass: "w-8.5 row-start-6 col-start-2 absolute left-4.5 top-[2.48rem]" },
      { id: 21, name: "backRightFoot", src: "./src/assets/manBack/backRightFoot.png", partClass: "w-8.5 row-start-8 col-start-2 absolute left-18.5 top-2" },
      { id: 22, name: "backLeftFoot", src: "./src/assets/manBack/backLeftFoot.png", partClass: "w-8.5 row-start-8 col-start-2 absolute left-[0.55rem] top-[0.58rem]" },
    ],
    frontParts: [
      { id: 23, name: "Head", src: "./src/assets/manFront/head.png" },
      { id: 24, name: "Neck", src: "./src/assets/manFront/neck.png" },
    ]
  }


  return (
    <main className='w-full flex flex-col gap-4'>
      <section className='w-full bg-blue-800 rounded-md'>
        <h1 className='text-emerald-50 font-semibold'>Body Anatomy</h1>
      </section>
      <section className='flex gap-2'>
        <aside className='flex gap-2 flex-col'>
          {/* <SelectButton id={"frontSide"} radioName={"bodySide"}>
            Front Body
          </SelectButton>
          <SelectButton id={"backSide"} radioName={"bodySide"}>
            Back Body
          </SelectButton> */}
          <SelectBodySideBtn onClick={onSideChange} side={side} />
        </aside>
        <section
          className='grow  py-6 bg-blue-800 max-h-full'
        >
          <div className='w-full flex justify-center gap-4'>
            <BackBodyParts backParts={bodyParts.backParts} />
          </div>
        </section>
      </section>
    </main>
  )
}

export default App;
