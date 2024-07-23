import React from 'react'

function WorkItems({item}) {
  return (
    <div className="work-card">
        <img src={item.img} alt="" className='work-img'/>
        <h3 className="work-title">{item.title}</h3>
        <a href="" className="work-button">
            Demo {" "} <i className="bx bx-right-arrow-alt work-button-icon"></i>
        </a>
        <a href="" className="work-button">
            GitHub {" "} <i className="bx bx-right-arrow-alt work-button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems
