const facts = "./facts.json";
const random = Math.floor(Math.random() * 226);
fetch(facts)
    .then(response => response.text())
    .then(result => {
        const data = JSON.parse(result)
        
        data.map(facts => {
            
            const { text } = facts;
            
            let newArray = [facts.text]
            
            console.log(newArray[random])
            
        })
        
    });