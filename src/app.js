import {getBlockTime} from './js-block-time'
import {getBlockTable} from './js-block-table'


export class App {
  run(){
    getBlockTable()

let arrayDonates =[] // задаем массив для наполнеиня значениями донатов

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
addnewContainerDonate.insertAdjacentElement('afterbegin', donates)

// реализация логики подсчета донатов
const totalAmount = document.querySelector('#total-amount')
arrayDonates.push(Number(taskValue))
const result = arrayDonates.reduce((acc, num)=>{
  return acc + num
}, 0)
totalAmount.textContent = `${result} $`

// Очищаем поля формы 
event.target.reset()

} else {alert('Введите сумму')}
})
  }
}