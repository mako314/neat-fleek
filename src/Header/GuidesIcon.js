import React, {useState}  from "react"
import {FaDraftingCompass} from "react-icons/fa";

function GuidesIcon () {
  const  [mouseOver, setMouseOver] = useState(true)
  const guidesIcon = <FaDraftingCompass size="40" />
  const guideTextContent = <span> Guides </span>

  function handleMouseOver () {
setMouseOver(!mouseOver)
  }
  
  function handleMouseOut () {
setMouseOver(!mouseOver)
  }
  const guidePreview = <span className="sidebar-icon" >{guidesIcon}</span>
  const guideText = <span className="iconSpan" >{guideTextContent}</span>
    return  (
        <div className="iconSpan" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <span>
        {mouseOver ? guidePreview : guideText }
        </span>
        </div>
    )
}

export default GuidesIcon