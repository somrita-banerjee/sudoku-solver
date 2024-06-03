const Grid = () => {

    const values = [
        [1, 2, 3, 1, 2, 3, 1, 2, 3],
        [4, 5, 6, 4, 5, 6, 4, 5, 6],
        [7, 8, 9, 7, 8, 9, 7, 8, 9],
        [1, 2, 3, 1, 2, 3, 1, 2, 3],
        [4, 5, 6, 4, 5, 6, 4, 5, 6],
        [7, 8, 9, 7, 8, 9, 7, 8, 9],
        [1, 2, 3, 1, 2, 3, 1, 2, 3],
        [4, 5, 6, 4, 5, 6, 4, 5, 6],
        [7, 8, 9, 7, 8, 9, 7, 8, 9],
    ]
        
  return (
    <div className="grid">
        {values.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
                {row.map((value, index) => (
                    <div key={index} className="cell">
                        {value}
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Grid;
