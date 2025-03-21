import './App.css'
import SelectButton from './components/selectButton/SelectButton';

function App() {

  const bodyParts = {
    manBack: [
      { id: 1, name: "backMainHead", src: "./src/assets/manBack/backMAinHead.png" },
      { id: 2, name: "backRightHead", src: "./src/assets/manBack/backRightHead.png" },
      { id: 3, name: "backLeftHead", src: "./src/assets/manBack/backLeftHead.png" },
      { id: 4, name: "backNeck", src: "./src/assets/manBack/backNeck.png" },
      { id: 5, name: "menBack", src: "./src/assets/manBack/menBack.png" },
      { id: 6, name: "menWaist", src: "./src/assets/manBack/menWaist.png" },
      { id: 7, name: "backRightArm", src: "./src/assets/manBack/backRightArm.png" },
      { id: 8, name: "backLeftArm", src: "./src/assets/manBack/backLeftArm.png" },
      { id: 9, name: "rightElbow", src: "./src/assets/manBack/rightElbow.png" },
      { id: 10, name: "leftElbow", src: "./src/assets/manBack/leftElbow.png" },
      { id: 11, name: "backRightForeArm", src: "./src/assets/manBack/backRightForeArm.png" },
      { id: 12, name: "backLeftForeArm", src: "./src/assets/manBack/backLeftForeArm.png" },
      { id: 13, name: "rightHand", src: "./src/assets/manBack/rightHand.png" },
      { id: 14, name: "leftHand", src: "./src/assets/manBack/leftHand.png" },
      { id: 15, name: "menLowerBody", src: "./src/assets/manBack/menLowerBody.png" },
      { id: 16, name: "Circle", src: "./src/assets/manBack/circle.png" },
      { id: 17, name: "backRightThigh", src: "./src/assets/manBack/backRightThigh.png" },
      { id: 18, name: "backLeftThigh", src: "./src/assets/manBack/backLeftThigh.png" },
      { id: 19, name: "backRightLeg", src: "./src/assets/manBack/backRightLeg.png" },
      { id: 20, name: "backLeftLeg", src: "./src/assets/manBack/backLeftLeg.png" },
      { id: 21, name: "backRightFoot", src: "./src/assets/manBack/backRightFoot.png" },
      { id: 22, name: "backLeftFoot", src: "./src/assets/manBack/backLeftFoot.png" },
    ],
    manFront: [
      { id: 23, name: "Head", src: "./src/assets/manFront/head.png" },
      { id: 24, name: "Neck", src: "./src/assets/manFront/neck.png" },
    ]
  }

  function findPart() {
    const findP = bodyParts.manBack.find(f => f.id === 3);
    console.log("part finded in body : ", findP);
  }

  findPart();

  return (
    <main className='w-full flex flex-col gap-4'>
      <section className='w-full bg-sky-500 py-6 rounded-md'>
        <h1 className='text-emerald-50 font-semibold'>Body Anatomy</h1>
      </section>
      <section className='flex gap-2'>
        <aside className='flex gap-2 flex-col'>
          <SelectButton id={"frontSide"} radioName={"bodySide"}>
            Front Body
          </SelectButton>
          <SelectButton id={"backSide"} radioName={"bodySide"}>
            Back Body
          </SelectButton>
        </aside>
        <section
          className='grow'
        >
          body is loading
        </section>
      </section>
    </main>
  )
}

export default App
