
function rulesName(name){
    if(name.length > 4){
        return true
    } else{
    return false
    }
}

function auxRulesBeforeAndAfter(generic){
    const allItems = []
    generic.forEach(element => {
        const objetos = Object.values(element)[0]
        objetos.forEach(item => {
            allItems.push(item)
        })
    });
    return allItems
}

function rulesBeforeAndAfter(genericBefore, genericAfter){
    const valueGenericBefore = auxRulesBeforeAndAfter(genericBefore)
    const valueGenericAfter = auxRulesBeforeAndAfter(genericAfter)
    const booleanGenericBefore = valueGenericBefore?.some(value => Object.values(value) >= 1)    
    const booleanGenericAfter = valueGenericAfter?.some(value => Object.values(value) >= 1)
    const booleanGeneric = booleanGenericBefore === true || booleanGenericAfter === true
    return booleanGeneric
}

export{
    rulesName,
    rulesBeforeAndAfter
}