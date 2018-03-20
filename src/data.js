const foods = ["carbs", "junks", "proteins"]
const names = ["Sriram", "Sanjay", "Rihan", "Jeremy"]
const header = ["name", "date", "hoursofsleep", "foodlastate", "sleeprating"]
const Data = new Array()
const max = 60

Data.push(header)

let name = 0, j = 1;
let date = new Date('1/1/18')
const diff = 31536000000

for (let i=0;i<max;i++){
    let row = new Array()
    let curr = new Date(date)

    let hours = rand(3, 10)
    let food = rand(0,3)
    let sleeprating = rand(1,5)

    row.push(names[name])
    row.push(curr.getTime())
    row.push(hours)
    row.push(foods[food])
    row.push(sleeprating)

    Data.push(row)

    name = name===3?0:name+1
    date = date + diff
}


const rand = (min,max) => return Math.floor(Math.random()*(max-min+1)+min)

export default Data;