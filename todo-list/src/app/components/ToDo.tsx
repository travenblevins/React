import { useState } from 'react';

export default function TodoList() {
    const initialList = ["Learn React", "Learn Redux"];
    const [newItem, setNewItem] = useState("");
    const [list, setList] = useState(initialList);

    const renderList = () => {
        return list.map((item, index) => (
            <div key={index}>{item}</div>
        ));
    }

    const addItem = () => {
        console.log("Add item", newItem);
        if(!newItem) {
            return;
        }
        setList([...list, newItem.trim()]);
        setNewItem("")
    }

    return (
        <div>
            <h1>To-Do List</h1>
            <div>
                <input 
                    className="text-black"
                    value={newItem}
                    onChange={((e) => setNewItem(e.target.value))}/>
                <button 
                    className="px-4 border rounded-md"
                    onClick={addItem}>Add Item
                </button>
                {renderList()}
            </div>
        </div>
    );
}