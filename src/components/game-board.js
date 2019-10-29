import React from 'react';


export default ((props) => {
  let board = props.board.startingBoard
  return (
    <div >
    {/* <ul style={{listStyle: 'none'}}>
      {board && board.map((row, idx) => {
        return (
          <li id={idx} >
            <ul style = {{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-evenly',

            }} >
              {row.map((item,idx) => {
                if(item && item.name){
                return (
                  <li style={{}}id={idx}>
                  { item.name }
                  </li>
                  )
                }
                else{
                  return(
                    <li>-</li>
                  )
                  }
              })}
            </ul>
          </li>
        )
      })}
    </ul> */}
    </div>
  )
})



