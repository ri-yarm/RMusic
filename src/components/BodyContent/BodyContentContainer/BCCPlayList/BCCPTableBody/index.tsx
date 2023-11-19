import React from "react";

const BCCPTableBody = () => (
  <tbody>
    {Array.from({ length: 5 }).map((_, index) => (
      <tr key={index}>
        <td>Строка {index + 1}, Колонка 1</td>
        <td>Строка {index + 1}, Колонка 2</td>
        <td>Строка {index + 1}, Колонка 3</td>
        <td>Строка {index + 1}, Колонка 4</td>
        <td>Строка {index + 1}, Колонка 5</td>
      </tr>
    ))}
  </tbody>
);

export default React.memo(BCCPTableBody);
