export function getInputValue(){
 
const formDonation = document.querySelector('.donate-form')
formDonation.addEventListener('submit',(event)=>{
event.preventDefault() // в рабочем коде закомментирвать
const{target} = event
const taskInput = target.amount
const taskValue = taskInput.value
if(taskValue){
 console.log((`получили значение ${taskValue}`))
  
} 
})
}
 