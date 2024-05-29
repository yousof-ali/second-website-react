import PropTypes from 'prop-types';
import Features from '../features/Features';

const PriceOption = ({option}) => {
    
    const {name,price,features} = option

    return (
        <div className='p-4 flex flex-col  rounded-xl bg-slate-300'>
            <h2 className='text-4xl'>{name}</h2>

            <h2>
                <span className='text-3xl'>{price}</span>
                <span className='text-2xl'> /mon</span>
            </h2>
            <div className='text-left my-8 flex-grow'>
                {
                    features.map((feature,indx)=><Features key={indx} feature={feature}></Features>)
                }
            </div>
            <div>
               <button className='bg-blue-500 text-white w-1/2 py-2 rounded-md hover:bg-blue-700'>Get</button>
            </div>
            
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;