import React,{useState} from 'react';
import Todoccreatenote from './Todocreatenote';
import Todoshortnote from './Note';

const TodoApp = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {
      setAddItem((prevData) => {
        return [...prevData, note];
      });
  
      // console.log(addItem);
    };
  
    const onDelete = (id) => {
      setAddItem((olddata) =>
        olddata.filter((currdata, indx) => {
          return indx !== id;
        })
      );
    };
    return(
        <>
            <Todoccreatenote passNote={addNote}/>
            {addItem.map((val, index) => {
        return (
          <Todoshortnote
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      
            
        </>
    )
}


export default TodoApp;