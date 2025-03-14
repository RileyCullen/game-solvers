import { useState, useEffect } from 'react';
import { QueensBoardModel } from './queens-board-model';

export function useBoard(initialSize: number) {
    const [boardSize, setBoardSize] = useState(initialSize);
    const [board, setBoard] = useState(new QueensBoardModel(boardSize));

    useEffect(() => {
        setBoard(new QueensBoardModel(boardSize));
    }, [boardSize]);

    return {
        board,
        setBoard,
        boardSize,
        setBoardSize
    };
}

