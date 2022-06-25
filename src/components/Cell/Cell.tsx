import React from "react";
import { cellType } from "../Board/Board";
import s from './Cell.module.css'

type propsType = {
    cell: cellType
    clickCell: (cell: cellType) => void
    emptyCell: cellType
}

export const Cell: React.FC<propsType> = ({cell, clickCell, emptyCell}) => {    

    const cellOnClick = (cell: cellType) => {
        let clone: cellType = structuredClone(emptyCell)
        if ((clone.x === cell.x && --clone.y === cell.y) 
        || (clone.x === cell.x && clone.y+2 === cell.y)
        || (--clone.x === cell.x && clone.y === cell.y)
        || (clone.x+2 === cell.x && clone.y === cell.y)) {
            clickCell(cell)
        } 
    } 
    return (
        <div onClick={() => cellOnClick(cell)} 
        className={` ${s.cell} ${emptyCell.number === cell.number? s.currentCell: ''} `} 
        style={{left: cell.x*175, top: cell.y*175}}>
            <h1>{cell.number === 9? ' ': cell.number}</h1>
        </div>
    )
}