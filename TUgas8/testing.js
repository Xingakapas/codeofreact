import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState(['item1', 'item2']);

  const handleAddItem = () => {
    setItems([...items, `item${items.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

