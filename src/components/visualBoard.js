import React from 'react';

export default ((props) => {
  // console.log(props.board)
  let board = props.board.startingBoard
  console.log(board)
  return (
    <ul>
      {board && board.map((row, idx) => {
        return (
          <li id={idx} >
            <ul>
              {row.map((item,idx) => {
                if(item.name){
                return (
                  <li id={idx}>
                  { item.name }
                  </li>
                  )
                }
                else{
                  return(
                    <li />
                  )
                  }
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
})