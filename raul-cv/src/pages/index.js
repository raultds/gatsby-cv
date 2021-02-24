import React from "react"

import LeftColumn from "../components/left_column"
import RightColumn from "../components/right_column"
import "./index.css"

export default (context) => {
  return(
    <div className="two-columns">
      <LeftColumn></LeftColumn>
      <RightColumn context={context.pageContext}></RightColumn>
    </div>
  )
}

