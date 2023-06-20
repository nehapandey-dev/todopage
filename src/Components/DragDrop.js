import React, { useState, useRef } from 'react';


const DragDrop = () => {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState(['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5', 'Task 6']);

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  
  return (
    <>
    
      <div className='flex flex-wrap w-1/2 border justify-center ml-72 mt-20 rounded-lg'>

      {
        list &&
        list.map((item, index) => (
         
            <div
            onDragStart={(e) => dragStart(e,index)}
            onDragEnter={(e) => dragEnter(e,index)}
            onDragEnd={drop}
            key={index}
            draggable>
            <div className=''>
            <div className='w-52 h-24 bg-slate-100 p-4 text-center m-4 rounded-lg border-2  border-dashed border-gray-600'> {item}</div>
            </div>
          </div>
          
        ))}
      </div>
    
    </>
  );
};
export default DragDrop;