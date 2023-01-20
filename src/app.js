import {getBlockTime} from './js-block-time'
import {getBlockTable} from './js-block-table'
import { getAmountDonates } from './js-block-amount'

export class App {
  run(){
    getBlockTable()

const formDonation = document.querySelector('.donate-form')
formDonation.addEventListener('submit',(event)=>{
// Отключаем событие по умолчанию 
event.preventDefault()

const{target} = event
const taskInput = target.amount
const taskValue = taskInput.value
if(taskValue){
   const time = getBlockTime()

// реализация логики наполнения таблицы донатами   
const addnewContainerDonate = document.querySelector('.donates-container__donates')
const donates = document.createElement('div')
donates.className = "donate-item"
donates.textContent = time
const donatesB = document.createElement('b')
donatesB.textContent = ` - ${taskValue}$`
donates.append(donatesB)
addnewContainerDonate.append(donates)

// реализация логики подсчета донатов
const totalAmount = document.querySelector('#total-amount')

 const sumDotates = (value = 0)=>{
    return (taskValue) =>{
      return value + Number(taskValue)
    }
 }
const result1 = sumDotates (0)
const result = result1 (taskValue)

totalAmount.textContent = `${result1 (taskValue)}$`

// Очищаем поля формы 
event.target.reset()

} else {alert('Введите сумму')}
})
  }
}