const facts = "./facts.json";

const button = document.getElementById('botao')

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

const container = document.getElementById('listContainer')

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

newFact1.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact1.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
})

newFact2.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact2.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
})

newFact3.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact3.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
})

newFact4.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact4.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
})

newFact5.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)

            data.map(fact => {
                fact5.innerText = data[Math.floor(Math.random() * data.length)].text;
            })
        })
})

button.addEventListener('click', function() {
    fetch(facts)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result)
            
            data.map(fact => {
                /*fact1.innerText = data[Math.floor(Math.random() * data.length)].text
                fact2.innerText = data[Math.floor(Math.random() * data.length)].text
                fact3.innerText = data[Math.floor(Math.random() * data.length)].text
                fact4.innerText = data[Math.floor(Math.random() * data.length)].text
                fact5.innerText = data[Math.floor(Math.random() * data.length)].text*/
                myFacts.forEach(function(myFact){
                    myFact.innerText = data[Math.floor(Math.random() * data.length)].text;
                                        
                }) 

                
            })
            
        });
        button.innerHTML = "Atualizar Lista!";
        newFact1.style.display = "inline";
        newFact2.style.display = "inline";
        newFact3.style.display = "inline";
        newFact4.style.display = "inline";
        newFact5.style.display = "inline";
        container.style.display = "block";
        fact1.style.display = "block";
        fact2.style.display = "block";
        fact3.style.display = "block";
        fact4.style.display = "block";
        fact5.style.display = "block";


    })
    


