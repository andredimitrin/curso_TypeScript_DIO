const elementoArray: number[] = [1,2,3,4,5,6,7,8,9,10]

elementoArray.forEach(num => {
    if(num % 2 === 0){
        console.log(num)
    }
})

elementoArray.map(num => {
    console.log(num)
})