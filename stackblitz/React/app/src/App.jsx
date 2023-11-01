import { useEffect, useRef } from 'react';
import { Animation } from '@syncfusion/ej2-base';

function App() {
    let element1 = useRef();
    let element2 = useRef();
    useEffect(() => {
        let animation = new Animation();
        animation.animate(element1, { name: 'FadeOut' });
        animation.animate(element2, { name: 'ZoomOut' });
    }, []);
    return (<div id="container">
      <div id="element1" ref={(ele) => { element1 = ele; }}></div>
      <div id="element2" ref={(ele) => { element2 = ele; }}></div>
    </div>);
}

export default App;