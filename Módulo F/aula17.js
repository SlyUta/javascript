let amigo = {nome: 'José',
sexo: 'Masculino',
peso: 85.4,
idade: 25,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)