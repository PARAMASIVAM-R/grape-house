const containerElement=document.querySelector('.container');
const btnElement=document.querySelector('.add_btn');

// [{"id":42525,"content":"test-1"},{"id":73488,"content":"test-2"}]
/* --------defalut but created sticky------- */
function getApp(){
    return JSON.parse(localStorage.getItem('parama')|| '[]')
} 
getApp().forEach(element => {
    const textElement= createTextElement(element.id,element.content);
    containerElement.insertBefore(textElement,btnElement); 
});

function createTextElement(id,content){
    const textElement=document.createElement('textarea' );
    textElement.classList.add('sticky');
    textElement.value=content;
    textElement.placeholder='Enter your notes'

    textElement.addEventListener("change",()=>{
        updateNots(id,textElement.value );
    });

    textElement.addEventListener("dblclick",()=>{
        const check=confirm("Are you sure to delete?");
        if(check){
            deleteNotes(id,textElement)
        }
    });
    return textElement;
      
}
      /* --------new sticky------- */
btnElement.addEventListener('click',()=>{addTextElement();})
function addTextElement(){
    const newObject={
                    id:Math.floor(Math.random()*10000),
                    content:""
                }
    textElement=createTextElement(newObject.id,newObject.content);
    containerElement.insertBefore(textElement,btnElement); 

    const notes=getApp();
    notes.push(newObject);
    saveNotes(notes);
}
function saveNotes(notes){
    localStorage.setItem('parama',JSON.stringify(notes));
}
function updateNots(id,content){
    const notes=getApp();
    const updateElement=notes.filter(note =>note.id==id)[0];
    updateElement.content=content;
    saveNotes(notes);  
}
function deleteNotes(id,textElement){
    const notes=getApp().filter(note =>note.id!=id);
    saveNotes(notes);
    containerElement.removeChild(textElement)   
}
