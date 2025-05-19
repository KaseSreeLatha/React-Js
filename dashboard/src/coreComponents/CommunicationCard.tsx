import React from "react";
 
const CommunicationCard = (props) => {
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {props.data.map((item,index) => {
                return (
                    <div key={item.name+index} className='border bg-white border-[#F2F2F2] rounded-md shadow-md p-2 mb-4'>
                        <div><img className="w-full" src={item.thumbnail}></img></div>
                        <p className='font-semibold text-lg leading-6 text-[#407EC9] my-2'>{item.name}</p>
                        <p className='font-normal text-sm text-[#475467] mb-4'>{item.content}</p>
                        <a href={item.link} target="_blank">
                            <button className='flex items-center space-x-2 h-6 w-24 font-semibold text-sm leading-6 text-[#407EC9]'>
                                <p>{props.button}</p>
                                <div className='pt-1'>{props.icon}</div>
                            </button>
                        </a>
                    </div>
                )
            })}
        </div>
    );
};
export default CommunicationCard;