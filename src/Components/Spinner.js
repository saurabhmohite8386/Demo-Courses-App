import React from "react";
import './Spinner.css'
function Spinner(){
    return(
        <div className=" flex flex-col items-center space-y-2 gap-6">
            <div className="spinner"></div>
            <div>
                <p className=" text-slate-800 text-lg font-semibold">Loading...</p>
            </div>
        </div>
    );
}

export default Spinner;