const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const answer = document.querySelector("#answer");
// const num = parseInt(input.value); //輸入的數字值
const num = input.value; //輸入的數字值



btn.addEventListener("click", function () {
    // console.log(input.value);
    let arr = [];
    for (let i = 2; i <= input.value; i++) {
        for (let k=2; k <= i; k++) {
            if(i===k && i % k === 0 ){
                arr.push(i);
            }else if(i%k===0 && i!==k){
                break;
            }
            
        }
    }
    

    let result = "";
    arr.forEach(function (i) {
        result += `${i}, `

        console.log(arr);
    })
    answer.innerHTML = result;

})



