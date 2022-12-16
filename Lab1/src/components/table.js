import React from "react";

export function ShowTable() {
    return (
      <table className="MyTable">
        <tr>
          <td><b>First name</b></td>
          <td>Surname</td>
        </tr>
        <tr>
          <td><b>Last Name</b></td>
          <td>Firstname</td>
        </tr>
        <tr>
          <td><b>Occupation</b></td>
          <td>React</td>
        </tr>
      </table>
    );
  }