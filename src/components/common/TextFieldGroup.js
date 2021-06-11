import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';



const TextFieldGroup = ({
    name,
    placeholder,
    value, 
    label,
    error,
    info,
    type,
    onChange,
    disabled
})=>{
    
    return (

        <div className="form-group">
            <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={classnames("form-control form-control-lg", {
                "is-invalid": error
              })}

            onChange={onChange}
            value= {value}
            disabled={disabled}
            />
            { info &&<small className="form-text text-muted">{info}</small>}
            {error && <div className="invalid-feedback">{error}</div>}

        </div>
    )
};

TextFieldGroup.propTypes= {
name : PropTypes.string.isRequired,
placeholder : PropTypes.string,
info : PropTypes.string,
value : PropTypes.string.isRequired,
error : PropTypes.string,
type : PropTypes.string.isRequired,
onChange : PropTypes.func.isRequired,
disabled : PropTypes.string,

}

TextFieldGroup.defaultProps ={
    type :'text'
}

export default TextFieldGroup;