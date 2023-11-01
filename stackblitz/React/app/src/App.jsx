import * as React from 'react';
import { useEffect } from 'react';
import { Draggable } from '@syncfusion/ej2-base';
function App() {
    useEffect(() => {
        let draggable = new Draggable(document.getElementById('draggable'), { clone: false, dragArea: "#droppable" });
    }, []);
    return (<div id='container'>
           <div id='droppable'><p>Drag Area </p></div>
           <div id='draggable'><p id='drag'>Draggable Element </p></div>
        </div>);
}
export default App;
