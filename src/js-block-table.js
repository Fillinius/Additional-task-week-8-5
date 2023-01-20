export function getBlockTable() {
   const newDivContainerTable = document.querySelector('body')
   const container = document.createElement('div')
   container.className = "donates-container"
   const containerH2 = document.createElement('h2')
   containerH2.className = "donates-container__title"
   containerH2.textContent = "Список донатов"
   newDivContainerTable.append(container)
   container.append(containerH2)
   const containerDonate = document.querySelector('.donates-container')
   const newContainerDonate = document.createElement('div')
   newContainerDonate.className = "donates-container__donates"
   containerDonate.append(newContainerDonate)
}