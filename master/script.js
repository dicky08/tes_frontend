const card = document.querySelectorAll('.card');
card.forEach((e,i)=> {
  const num = i +1
  if (num % 2 == 0 && num < 10) {
    e.innerHTML = `<span class="numb">${'0'.concat( i + 1)}</span>`
    e.style.backgroundColor = 'black'
  } else if(num % 2 == 0 && num <= 10) {
    e.style.backgroundColor = 'black'
    e.innerHTML = `<span class="numb">${i + 1}</span>`
  }else if (num % 2  == 1 && num < 10 ){
    e.style.backgroundColor = 'red'
    e.innerHTML = `<span class="numb">${'0'.concat( i + 1)}</span>`
  }else if (num % 2  == 1 && num > 10 && num <= 17 ){
    e.style.backgroundColor = 'black'
    e.innerHTML = `<span class="numb">${i + 1}</span>`
  }else if (num % 2  == 1 && num > 18 ){
    e.style.backgroundColor = 'red'
    e.innerHTML = `<span class="numb">${i + 1}</span>`
  }else if (num % 2  == 0 && num > 18 ){ 
    e.style.backgroundColor = 'black'
    e.innerHTML = `<span class="numb">${i + 1}</span>`
  }else {
    e.style.backgroundColor = 'red'
    e.innerHTML = `<span class="numb">${ i + 1}</span>`
  }
})
