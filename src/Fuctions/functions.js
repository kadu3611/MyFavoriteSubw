function func(option){
  option(true);
}

const actualSetList = (name, newDate, newArray, setNewArray) => {
  let finish = false
  const arrayList = newArray;
  if (newArray.length < 1 && !finish) {
    setNewArray([{ [name]: newDate }])
  }
  else if(newDate.length === 0){
    console.log(name, 'name');
    const newArrayList = arrayList.filter((item) => Object.keys(item)[0] !== name)
    setNewArray(newArrayList)
  }
  else {
    newArray?.forEach((elemento, index) => {
      if (arrayList.some((item) => Object.keys(item)[0] === name) &&
       Object.keys(elemento)[0] === name) {
        arrayList.splice(index, 1, { [name]: newDate })
        setNewArray(arrayList);
        finish = true;
      }
      if(!finish){
      setNewArray((backArray) => [...backArray, { [name]: newDate }])
      finish = true;

    }
    });
  }
}

const functionBack = (name, arrayGeneric) => {
  const newGeneric = arrayGeneric
    arrayGeneric.forEach((element, index) => {
     if(Object.keys(element)[0] === name){
      newGeneric.splice(index, 1)
     }
    });
    return newGeneric;
}

export{
  func,
  actualSetList,
  functionBack,
}
