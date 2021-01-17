import React from 'react';
import './form-styles.scss';

const FormComponent = ({label, handleChange, ...otherProps}) =>
(
    <div className='group'>            
        <input className='form-input' onChange={handleChange}{...otherProps} autoComplete='off'/>
            {
                label ?
                (
                    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                )

                : null
            }
    </div>
)


export default FormComponent