

export default function TicTacRow() {
  const row = [];
  for (let i = 0; i < 3; i++) {
    row.push(
      <div
        key={i}
        className="cell"
        style={{ width: '100px', height: '100px', border: '1px solid black' }}
        onClick={(e) => {
          const circle = document.createElement('div');
          circle.className = 'circle';
          e.target.appendChild(circle)
        }}
      ></div>
    );
  }
  return <div className="flex">{row}</div>; // Wrap the squares in a parent div
}
