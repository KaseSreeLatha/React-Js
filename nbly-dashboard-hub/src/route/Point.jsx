import data from '../database/config.json'

let Point = () => {
    return (
       <div className='flex-row space-y-4 pt-4'>
        {data.points.map((x)=>{
            return(
                <div className='flex space-x-4 w-96 h-16 rounded-lg bg-[#F4F6F8]'>
                    <span dangerouslySetInnerHTML={{ __html: data.svgTick.tick }} className='pt-3 h-4 w-4 pl-1'></span>
                    <p className='font-medium text-base text-[#101828] pt-2 pl-1'>
                        {x.point}
                    </p>
                </div>
            )
        })}
       </div>
    )
}
export default Point;