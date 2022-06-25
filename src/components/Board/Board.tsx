import React, { useState } from "react";
import { Cell } from "../Cell/Cell";
import s from './Board.module.css'

export type cellType = {
    x: number
    y: number
    number: number | null | string
}

type propsType = {
    cells: cellType[]
    setIsWin: (isWin: boolean) => void

}

export const Board: React.FC<propsType> = ({ cells, setIsWin}) => {

    const [emptyCell, setEmptyCell] = useState<cellType>(cells[8])

    const clickCell = (cell: cellType) => {
        setEmptyCell(cell)
        cells.map(c => {
            if (c.number === cell.number && c.x === cell.x && cell.y === c.y) {
                emptyCell.number = c.number
                c.number = 9
            }
        })
        if (cells[0].number === 1 && cells[1].number === 2 && cells[2].number === 3 && cells[3].number === 4 && cells[4].number === 5
            && cells[5].number === 6 && cells[6].number === 7
            && cells[7].number === 8 && cells[8].number === 9) {
                setIsWin(true)
        }
    }

    return <div className={s.board}>
        {cells.map(cell => {
            return <Cell cell={cell}
                emptyCell={emptyCell}
                clickCell={clickCell}
                key={`${String(cell.x)}${String(cell.y)}`}
            />
        })}
    </div>
}