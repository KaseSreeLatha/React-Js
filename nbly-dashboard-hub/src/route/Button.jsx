import data from '../database/config.json'

function Button(){

    return(
        <div>
            <div className='pt-8 '>
            <div className='w-96 h-12 rounded-lg pt-3.5 pr-6 pl-10 pb-3.5 bg-[#3A73B7] gap-2'>
            <button className='font-medium'>{data.button.name}</button>
            </div>
            </div>
        </div>
    )
}
export default Button;