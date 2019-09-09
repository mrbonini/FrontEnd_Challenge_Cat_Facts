const facts = "./facts.json";

const button = document.getElementById('botao');

const eraseList = document.getElementById('erase');

const myFacts = [fact1 = document.getElementById('fact1'),
                    fact2 = document.getElementById('fact2'),
                    fact3 = document.getElementById('fact3'),
                    fact4 = document.getElementById('fact4'),
                    fact5 = document.getElementById('fact5')];

const newFacts = [newFact1 = document.getElementById('newFact1'),
                    newFact2 = document.getElementById('newFact2'),
                    newFact3 = document.getElementById('newFact3'),
                    newFact4 = document.getElementById('newFact4'),
                    newFact5 = document.getElementById('newFact5')];



const container = document.getElementById('listContainer');

const containerList1 = document.getElementById('containerList1');
const containerList2 = document.getElementById('containerList2');
const containerList3 = document.getElementById('containerList3');
const containerList4 = document.getElementById('containerList4');
const containerList5 = document.getElementById('containerList5');



newFact1.style.display = "none";
newFact2.style.display = "none";
newFact3.style.display = "none";
newFact4.style.display = "none";
newFact5.style.display = "none";

fact1.style.display = "none";
fact2.style.display = "none";
fact3.style.display = "none";
fact4.style.display = "none";
fact5.style.display = "none";

container.style.display="none";

function getFact() {
    const listSize = document.getElementById("seletor");
    const value = listSize.options[listSize.selectedIndex].text;
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)
            
            data.map(fact => {
                myFacts.forEach(function(myFact){
                    myFact.innerText = data[Math.floor(Math.random() * data.length)].text;
                                        
                }) 

                
            })
            
        });
    if(value == "1"){
        container.style.display = "block";
        containerList1.style.display = "block"
        button.innerHTML = "Atualizar Lista!";
        newFact1.style.display = "inline";        
        fact1.style.display = "block";
        containerList2.style.display = "none"
        containerList3.style.display = "none"
        containerList4.style.display = "none"
        containerList5.style.display = "none"
        
    };
        
    if(value == "2"){
        container.style.display = "block";
        containerList1.style.display = "block"
        containerList2.style.display = "block"
        button.innerHTML = "Atualizar Lista!";
        newFact1.style.display = "inline";        
        fact1.style.display = "block";
        newFact2.style.display = "inline";        
        fact2.style.display = "block";
        containerList3.style.display = "none"
        containerList4.style.display = "none"
        containerList5.style.display = "none"        
        
    };

    if(value == "3"){
        container.style.display = "block";
        containerList1.style.display = "block"
        containerList2.style.display = "block"
        containerList3.style.display = "block"
        button.innerHTML = "Atualizar Lista!";
        newFact1.style.display = "inline";        
        fact1.style.display = "block";
        newFact2.style.display = "inline";        
        fact2.style.display = "block";
        newFact3.style.display = "inline";        
        fact3.style.display = "block";
        containerList4.style.display = "none"
        containerList5.style.display = "none"        
        
    };

    if(value == "4"){
        container.style.display = "block";
        containerList1.style.display = "block"
        containerList2.style.display = "block"
        containerList3.style.display = "block"
        containerList4.style.display = "block"
        button.innerHTML = "Atualizar Lista!";
        newFact1.style.display = "inline";        
        fact1.style.display = "block";
        newFact2.style.display = "inline";        
        fact2.style.display = "block";
        newFact3.style.display = "inline";        
        fact3.style.display = "block";
        newFact4.style.display = "inline";        
        fact4.style.display = "block";
        containerList5.style.display = "none"        
        
    };

    if(value == "5"){
        container.style.display = "block";
        containerList1.style.display = "block"
        containerList2.style.display = "block"
        containerList3.style.display = "block"
        containerList4.style.display = "block"
        containerList5.style.display = "block"
        button.innerHTML = "Atualizar Lista!";
        newFact1.style.display = "inline";        
        fact1.style.display = "block";
        newFact2.style.display = "inline";        
        fact2.style.display = "block";
        newFact3.style.display = "inline";        
        fact3.style.display = "block";
        newFact4.style.display = "inline";        
        fact4.style.display = "block";
        newFact5.style.display = "inline";        
        fact5.style.display = "block";
        
    };

};

newFact1.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact1.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
});

newFact2.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact2.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
});

newFact3.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact3.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
});

newFact4.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact4.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
});

newFact5.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact5.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
});

eraseList.addEventListener('click', function() {
    listContainer.style.display = "none";
    button.innerHTML = "Obter lista de fatos!"
})