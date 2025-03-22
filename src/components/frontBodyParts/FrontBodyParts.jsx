function FrontBodyParts({frontParts}) {
    return ( 
        <div className="bg-blue-800 grid grid-cols-3 grid-rows-8 w-80 relative">

            <Part partSrc={frontParts[0].src} partName={frontParts[0].name} partClass={frontParts[0].partClass} />

            {/* <button className="row-start-2 col-span-1 col-start-2 absolute right-[37px] top-[16px]">
                <img src={frontParts[1].src} alt={frontParts[1].name} />
            </button>
            <button className="row-start-2 col-start-2 absolute left-[38px] top-3">
                <img src={frontParts[2].src} alt={frontParts[2].name} />
            </button>
            <button className="row-start-3 col-start-2 absolute left-[39px] -top-3 ">
                <img src={frontParts[3].src} alt={frontParts[3].name} />
            </button>
            <button className="row-start-3 col-start-2 absolute left-4.5 top-2 ">
                <img src={frontParts[4].src} alt={frontParts[4].name} />
            </button>
            <button className="row-start-4 col-start-2 absolute left-6 top-8.5 ">
                <img src={frontParts[5].src} alt={frontParts[5].name} />
            </button>
            <button className="w-6 row-start-3 col-start-2 absolute left-22 top-4">
                <img src={frontParts[6].src} alt={frontParts[6].name} />
            </button>
            <button className="w-6.5 row-start-3 col-start-2 absolute top-[19px] -left-[9px]">
                <img src={frontParts[7].src} alt={frontParts[7].name} />
            </button>
            <button className="w-4.5 row-start-4 col-start-3 absolute top-[25.5px] -left-[9px]">
                <img src={frontParts[8].src} alt={frontParts[8].name} />
            </button>
            <button className="w-[24px] row-start-4 col-start-2 absolute -left-3 top-5">
                <img src={frontParts[9].src} alt={frontParts[9].name} />
            </button>
            <button className="w-[23px] row-start-4 col-start-3 absolute -left-1.5 top-9">
                <img src={frontParts[10].src} alt={frontParts[10].name} />
            </button>
            <button className="w-4.5 row-start-4 col-start-2 absolute -left-3 top-9.5">
                <img src={frontParts[11].src} alt={frontParts[11].name} />
            </button>
            <button className="w-3.5 row-start-5 col-start-3 absolute top-[1.82rem]">
                <img src={frontParts[12].src} alt={frontParts[12].name} />
            </button>
            <button className="w-3.5 row-start-5 col-start-2 absolute top-[2.08rem] -left-[0.8rem]">
                <img src={frontParts[13].src} alt={frontParts[13].name} />
            </button>
            <button className="row-start-5 col-start-2 justify-items-center self-start">
                <img src={frontParts[14].src} alt={frontParts[14].name} />
            </button>
            <button className="row-start-5 col-start-2 absolute left-[2.8rem] top-3.5">
                <img src={frontParts[15].src} alt={frontParts[15].name} />
            </button>
            <button className="w-8.5 row-start-5 col-start-2 absolute left-[3.5rem] top-[1.45rem]">
                <img src={frontParts[16].src} alt={frontParts[16].name} />
            </button>
            <button className="w-8.5 row-start-5 col-start-2 absolute left-4.5 top-[1.55rem]">
                <img src={frontParts[17].src} alt={frontParts[17].name} />
            </button>
            <button className="w-8.5 row-start-6 col-start-2 absolute left-17 top-[2.4rem]">
                <img src={frontParts[18].src} alt={frontParts[18].name} />
            </button>
            <button className="w-8.5 row-start-6 col-start-2 absolute left-4.5 top-[2.48rem]">
                <img src={frontParts[19].src} alt={frontParts[19].name} />
            </button>
            <button className="w-8.5 row-start-8 col-start-2 absolute left-18.5 top-2">
                <img src={frontParts[20].src} alt={frontParts[20].name} />
            </button>
            <button className="w-8.5 row-start-8 col-start-2 absolute left-[0.55rem] top-[0.6rem]">
                <img src={frontParts[21].src} alt={frontParts[21].name} />
            </button> */}

        </div>
     );
}

export default FrontBodyParts;