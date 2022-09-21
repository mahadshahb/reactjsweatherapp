import React, { useEffect, useState } from "react";
import "./style.css";

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};
const TodoReact = () => {
  const [setData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editData, editSetItems] = useState("");
  const [togglebtn, setToggle] = useState(false);

  const addItems = () => {
    if (!setData) {
      alert("plz fill the field");
    } else if (setData && togglebtn) {
      setItems(
        items.map((curElement) => {
          if (curElement.id === editData) {
            return { ...curElement, name: setData };
          }
          return curElement;
        })
      );
      setInputData([]);
      editSetItems(null);
      setToggle(false);
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: setData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };
  const deleteItems = (index) => {
    const updatedList = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedList);
  };
  const removeAll = () => {
    setItems([]);
  };
  const editItems = (index) => {
    const editData = items.find((editNew) => {
      return editNew.id === index;
    });
    setInputData(editData.name);
    editSetItems(index);
    setToggle(true);
  };
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="image" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item"
              className="form-control"
              value={setData}
              onChange={(e) => setInputData(e.target.value)}
            />
            {togglebtn ? (
              <i className="far fa-edit add-btn" onClick={addItems}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )}
          </div>
          <div className="showItems">
            {items.map((currentElement) => {
              return (
                <>
                  <div className="eachItem" key={currentElement.id}>
                    <h3>{currentElement.name}</h3>
                    <div className="todo-btn">
                      <i
                        className="far fa-edit add-btn"
                        onClick={() => {
                          editItems(currentElement.id);
                        }}
                      ></i>
                      <i
                        className="far fa-trash-alt add-btn"
                        onClick={() => {
                          deleteItems(currentElement.id);
                        }}
                      ></i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoReact;
