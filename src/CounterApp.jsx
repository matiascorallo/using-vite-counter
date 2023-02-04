import { useState } from 'react';
import PropTypes, { number } from 'prop-types'



export const CounterApp = ({value}) => {

        const [ counter, setCounter ] = useState( 10 );
 
        const handleAdd = () => {
            // console.log(value)
            setCounter ( counter + 1);
        }

       const handleDown = () => {
           setCounter (counter - 1);

       }
       
       const handleReset = () => {
            setCounter (value);
       }

    return (
        <>
          <h1>CounterApp</h1>
          <h2>{ counter }</h2>
          <button onClick={ handleAdd }>+1</button>
          <button onClick={ handleDown }> -1 </button>
          <button onClick={ handleReset }> Reset </button>

        </>
    )
}


    CounterApp.propTypes = {
        value: PropTypes.number.isRequired,
    }

 
   