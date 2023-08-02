import React from 'react';

const widthClass = (Comment, className) => {
  return props => {
    return(
        <div className={className}>
            <Comment {...props}/>
        </div>
    )
  }
}

export default widthClass