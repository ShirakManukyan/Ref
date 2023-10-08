import React, {useRef, useState} from 'react';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.nameField = React.createRef();
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         console.log(this.nameField);
//         var name = this.nameField.current.value;
//         alert("Имя: " + name);
//     }
//     render() {
//         return <form onSubmit={this.handleSubmit}>
//                     <input ref={this.nameField} />
//                     <input type="submit" value="Отправить" />
//                 </form>;
//   }
// }


function App () {
    const nameField = React.useRef(null);
    const send = (e) => {
        e.preventDefault()
        const inputElement = nameField.current;
        console.log(`Name: ${inputElement.value}`);
        console.log(nameField);
        console.log(nameField.current);
    }
    return <>
        <div>
            <form onSubmit={send}>
                <input type='text' ref= {nameField}/>
                <button type='submit'>Click to Send</button>
            </form>
        </div>
    </>

}
  
export default App