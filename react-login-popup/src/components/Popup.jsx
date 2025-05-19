import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import image from '../images/cig1.jpg'
import image1 from '../images/logo.jpg'
 
function Popup() {
    const [showPopup, setShowPopup] = useState(false);
    const [cookies] = useCookies(['firstLogin']);
 
    useEffect(() => {
        if (!cookies.login) {
            setShowPopup(true);
        } else {
            setShowPopup(false);
        }
    }, [cookies]);
 
    const handleClosePopup = () => {
        setShowPopup(false);
    };
 
    return (
        <div>
         <p className="fixed top-0 left-0 right-0 p-4 text-red-500 font-bold ">Content</p>
        {showPopup && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-400 bg-opacity-50">
            <div className="bg-white rounded-lg p-8 max-w-xl w-full relative">
                <img src={image1} alt="Logo" className="h-14 w-14 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -mt-7" />
                <button
                    className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 focus:outline-none h-5 w-5 rounded-full border border-gray-300 flex justify-center items-center"
                    onClick={handleClosePopup}
                >
                    &times;
                </button>
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-4 lg:mb-0 pr-4">
                        <h2 className="text-xl font-bold mb-4">Cigniti Technologies</h2>
                        <p>
                            Cigniti is a global leader in AI & IP-led Digital Assurance and Engineering services for various industries. Expanded into Digital Engineering services with the acquisition of Aparaa Digital (RoundSqr) to reposition Cigniti.
                        </p>
                    </div>
                    <div className="lg:w-1/2"> 
                        <img src={image} alt="Camera" className="w-full h-auto rounded-lg" style={{width: "calc(100% + 4px)", height: "auto"}} />
                    </div>
                </div>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                    Yes, this is button
                </button>
            </div>
            </div>
        )}
    </div>

    );
}
 
export default Popup;