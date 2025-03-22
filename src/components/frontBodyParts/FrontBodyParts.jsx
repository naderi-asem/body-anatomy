function FrontBodyParts({backParts}) {
    return ( 
        <div className="bg-blue-800 grid grid-cols-3 grid-rows-8 w-80 relative">

            <Part partSrc={backParts[0].src} partName={backParts[0].name} />

            <button className="row-start-2 col-span-1 col-start-2 absolute right-[37px] top-[16px]">
                <img src={backParts[1].src} alt={backParts[1].name} />
            </button>
            <button className="row-start-2 col-start-2 absolute left-[38px] top-3">
                <img src={backParts[2].src} alt={backParts[2].name} />
            </button>
            <button className="row-start-3 col-start-2 absolute left-[39px] -top-3 ">
                <img src={backParts[3].src} alt={backParts[3].name} />
            </button>
            <button className="row-start-3 col-start-2 absolute left-4.5 top-2 ">
                <img src={backParts[4].src} alt={backParts[4].name} />
            </button>
            <button className="row-start-4 col-start-2 absolute left-6 top-8.5 ">
                <img src={backParts[5].src} alt={backParts[5].name} />
            </button>
            <button className="w-6 row-start-3 col-start-2 absolute left-22 top-4">
                <img src={backParts[6].src} alt={backParts[6].name} />
            </button>
            <button className="w-6.5 row-start-3 col-start-2 absolute top-[19px] -left-[9px]">
                <img src={backParts[7].src} alt={backParts[7].name} />
            </button>
            <button className="w-4.5 row-start-4 col-start-3 absolute top-[25.5px] -left-[9px]">
                <img src={backParts[8].src} alt={backParts[8].name} />
            </button>
            <button className="w-[24px] row-start-4 col-start-2 absolute -left-3 top-5">
                <img src={backParts[9].src} alt={backParts[9].name} />
            </button>
            <button className="w-[23px] row-start-4 col-start-3 absolute -left-1.5 top-9">
                <img src={backParts[10].src} alt={backParts[10].name} />
            </button>
            <button className="w-4.5 row-start-4 col-start-2 absolute -left-3 top-9.5">
                <img src={backParts[11].src} alt={backParts[11].name} />
            </button>
            <button className="w-3.5 row-start-5 col-start-3 absolute top-[1.82rem]">
                <img src={backParts[12].src} alt={backParts[12].name} />
            </button>
            <button className="w-3.5 row-start-5 col-start-2 absolute top-[2.08rem] -left-[0.8rem]">
                <img src={backParts[13].src} alt={backParts[13].name} />
            </button>
            <button className="row-start-5 col-start-2 justify-items-center self-start">
                <img src={backParts[14].src} alt={backParts[14].name} />
            </button>
            <button className="row-start-5 col-start-2 absolute left-[2.8rem] top-3.5">
                <img src={backParts[15].src} alt={backParts[15].name} />
            </button>
            <button className="w-8.5 row-start-5 col-start-2 absolute left-[3.5rem] top-[1.45rem]">
                <img src={backParts[16].src} alt={backParts[16].name} />
            </button>
            <button className="w-8.5 row-start-5 col-start-2 absolute left-4.5 top-[1.55rem]">
                <img src={backParts[17].src} alt={backParts[17].name} />
            </button>
            <button className="w-8.5 row-start-6 col-start-2 absolute left-17 top-[2.4rem]">
                <img src={backParts[18].src} alt={backParts[18].name} />
            </button>
            <button className="w-8.5 row-start-6 col-start-2 absolute left-4.5 top-[2.48rem]">
                <img src={backParts[19].src} alt={backParts[19].name} />
            </button>
            <button className="w-8.5 row-start-8 col-start-2 absolute left-18.5 top-2">
                <img src={backParts[20].src} alt={backParts[20].name} />
            </button>
            <button className="w-8.5 row-start-8 col-start-2 absolute left-[0.55rem] top-[0.6rem]">
                <img src={backParts[21].src} alt={backParts[21].name} />
            </button>

        </div>
     );
}

export default FrontBodyParts;