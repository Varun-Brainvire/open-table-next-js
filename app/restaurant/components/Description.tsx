import React from 'react'

const Description = (props:any) => {
  return (
    <div className="mt-4">
              <p className="text-lg font-light">
                {props.desc}
              </p>
            </div>
  )
}

export default Description
