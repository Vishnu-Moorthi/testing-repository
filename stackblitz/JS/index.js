var draggable = new ej.base.Draggable(document.getElementById('element1'), {
    clone: false
});
var droppable = new ej.base.Droppable(document.getElementById('droppable'), {
    drop: (function (e) {
        e.droppedElement.querySelector('.drag-text').textContent = 'Dropped';
    })
});

