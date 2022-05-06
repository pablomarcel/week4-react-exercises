// Here's a URL to get you started
import React from "react";
import PropTypes from "prop-types";
const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';

export default function Orchid( {borderColor} ){
    console.log(borderColor)
    return (
    <div>
        <img style={{
            borderColor: borderColor,
            // borderColor: '#ff0000',
            borderStyle: "solid",
            // color: '#ff0000',
            width: '400px',
        }}  src = {orchidImageUrl} alt="orchid" />
    </div>
)
}

Orchid.propTypes ={
    borderColor: PropTypes.string.isRequired
}
