import React from "react";

const CustomCalendar = () => {
    return(
        <div>
            {/* <div className="h-[20rem] w-[37rem] ml-[-5rem] border border-1 border-black rounded-tl-[500px] rounded-tr-[500px] border-b-0">
                <h1>Months</h1>
            </div>
            <div className="h-[20rem] w-[37rem] ml-[-5rem] border border-1 border-black rounded-tl-[500px] rounded-tr-[500px] border-b-0">
                <h1>Years</h1>
            </div> */}
            <div className="flex justify-center items-center w-[600px] h-[600px] bg-blue-500 rounded-full ml-[-5rem]">
                <div className="w-[500px] h-[500px] bg-black rounded-full">
                    Content of div2 goes here
                </div>
            </div>
        </div>
    )
}

export default CustomCalendar