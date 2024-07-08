import React from 'react'


const Rightbar = ({data,bgColor,color}) => {
  return (
    <>
      <div className="right-container"  style={{
                backgroundColor:`${bgColor}`,
                color:`${color}`
            }}>
        <div className="postimg">
          <img id='_img' src={data.img} alt="" />
          <div className="inside-img">
            <div className="img">
              <img  src={data.authorImg} alt="" />
              </div>
            <div className="text">
              <h3>{data.authorName}</h3>
              <p>{data.authortext}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Rightbar
