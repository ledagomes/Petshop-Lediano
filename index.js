const nomePetshop = "PETSHOP LEDA";
const moment = require('moment');
const todos_pets = require ('./todosPets.json')

let pets = [
    {
        nome: 'Billy',
        tipo: 'cão',
        idade: 11,
        raca: 'SRD',
        peso: '20',
        tutor: 'Leda',
        fone: '1199333-3333',
        vacinado: true,
        servicos: ['banho', 'tosa']
    }
    ,
    {
        nome: 'Penelope',
        tipo: 'cão',
        idade: 17,
        raca: 'SRD',
        peso: '22',
        tutor: 'João',
        fone: '1199333-4444',
        vacinado: false,
        servicos: ['banho']
    }
    ,
    {
        nome: 'Angel',
        tipo: 'cão',
        idade: 7,
        raca: 'SRD',
        peso: '15',
        tutor: 'Gustavo',
        fone: '1199333-5555',
        vacinado: true,
        servicos: ['banho', 'pedicure']
    }

];

const incluirPet = () => {
    pets.push({
        nome: 'Sultão',
        tipo: 'cão',
        idade: 5,
        raca: 'rottweiler',
        peso: '40',
        tutor: 'Pedro',
        fone: '1199333-6444',
        vacinado: false,
        servicos: []

    });
    for (let pet of pets) {
        console.log(`${pet.nome}`);
    }
}

incluirPet();
/*Crie uma função chamada vacinarPet que recebe um pet como parametro e altera o atributo 
vacinado para true
Vacinando 1 pet 
const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    }
}
Vacina passa por todos os pets*/

const vacinarPet = () => {
    for (let pet of pets) {
        if (!pet.vacinado) {
            pet.vacinado == true;
            console.log(`${pet.nome} foi vacinado com sucesso!`);
        } else {
            console.log(`Ops, ${pet.nome} já está vacinado`);
        }
    }
}
vacinarPet();

/*const darBanhoPet = () => {
    for(let pet of pets){
            if(!(pet.servicos.includes('banho'))){
                pet.servicos.push('banho');
                console.log(`${pet.nome} está de banho tomado!`);    
        }
    } 
} */

const executarServico = (pet, servico) => {
    let dataServico = moment().format('DD-MM-YYYY');
    pet.servicos.push({
        'nome': servico,
        'data': dataServico
    });
}

const darBanhoPet = pet => {
    let dataBanho = moment().format('DD-MM-YYYY');
    pet.servicos.push({
        'nome': 'banho',
        'data': dataBanho
    });
    console.log(`${pet.nome} tomou banho! em ${dataBanho}`);
};

const tosarPet = pet => {
    executarServico(pet, 'tosa');
    console.log(`${pet.nome} está tosado!`);
}

const apararUnhasPet = pet => {
    executarServico(pet, 'aparar unhas');
    console.log(`${pet.nome} está sem garras!`);
}

darBanhoPet(pets[1]);
tosarPet(pets[3]);
apararUnhasPet(pets[2]);

const litarPet = () => {
    // for (let i = 0; i < pets.length; i++) {
        //console.log(pets[i].nome);
        //console.log(`O nome do pet é ${pets[i].nome}`);
    //}
    for (let pet of pets) {
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);

    }
};
litarPet();









