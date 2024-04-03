import React from 'react'
import { v4 as uuidv4 } from "uuid";

export function Toolbar({ selected, handleSelectFilter }) {


    return (
      <div className="toolbar">
        {selected.map((filter) => (
          <button
            key={uuidv4()}
            className={filter}
            onClick={() => handleSelectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    );
  }
