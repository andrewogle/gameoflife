import React,{useEffect,useState} from 'react';

const Cells = (props) => {
    const [cells, setCells] = useState([])
    let rows = props.hieght / props.cellSize
    let cols = props.width / props.cellSize
    let gameBoard = makeGameBoard()

    function makeGameBoard(){
        let board = [];
        for (let y = 0; y < rows; y++) {
            board[y] = [];
            for (let x = 0; x < cols; x++) {
                board[y][x] = false;
            }
        }

        return board;


    }
    return ( <div></div> );
}
 
export default Cells;