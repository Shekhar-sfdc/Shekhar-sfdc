import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    selected ={} // for storing answers
    correctAnswers = 0
    
Questions = [{id:"Questions1",
Question: "Which is not a primitive data type?",
option:{a:"string",
b:"List",
c:"number"},
correctAnswer: "b"},
{id:"Questions2",
Question: "what is not a sum of 2+2?",
option:{a:5,
b:6,
c:4},
correctAnswer: "c"},
{id:"Questions3",
Question: "which is India's capital city?",
option:{a:"Delhi",
b:"agra",
c:"chennai"},
correctAnswer: "a"},
{id:"Questions4",
Question: "what is country national animal?",
option:{a:"Lion",
b:"Peacock",
c:"Tiger"},
correctAnswer: "c"}
]

choosenOption(event){  
console.log("name",event.target.name)
console.log("value",event.target.value)
const {name, value} = event.target
this.selected = {...this.selected, [name]:value}
}
get isSelectedAll(){ // to Hide the submit button if all options are not selected
    return !(Object.keys(this.selected).length === this.Questions.length)
}
submitHandler(event){
    event.preventDefault()
   let correct = this.Questions.filter(item=>this.selected[item.id] === item.correctAnswer)
this.correctAnswers = correct.length
console.log("answers", this.correctAnswers)
}

resetHandler(event){
    this.selected={}
    this.correctAnswers =0
}

}