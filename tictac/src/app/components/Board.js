import React, { useState, useEffect } from 'react';

export default function TicTacRow() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    // Initialize the board with empty cells
    const initialBoard = Array.from({ length: 3 }, (_, i) => (
      <div
        key={i}
        className="cell"
        style={{ width: '100px', height: '100px', border: '1px solid black' }}
        onClick={(e) => {
          const target = e.target;
          if (!target.querySelector('.circle')) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.width = '80px';
            circle.style.height = '80px';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'black';
            target.appendChild(circle);
          }
        }}
      ></div>
    ));
    setBoard(initialBoard);
    board.map((cell) => classList.add(index % 2 === 0 ? 'even' : 'odd'));
  }, []);

  return <div style={{ display: 'flex' }}>{board}</div>;
}
