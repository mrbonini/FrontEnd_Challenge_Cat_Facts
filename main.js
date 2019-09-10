(function(){
    
    const $selectListSize = document.getElementById('tamanhoLista');
    const $buttonShowFacts = document.getElementById('botao');
    const $factList = document.getElementById('listaFatos');

    $buttonShowFacts.addEventListener('click', getFact);

    function getFact() {
        const length = $selectListSize.options[$selectListSize.selectedIndex].value;
        if (length < 1) {
            alert("Selecione pelo menos 1 Fato para ser mostrado")
        }
        fetch("./facts.json")
        .then(response => response.text())
        .then(result => {
            const facts = JSON.parse(result);
            const index = Math.floor(Math.random()*facts.length);
            const text = facts[index].text;
            while ($factList.firstChild) {
                $factList.removeChild($factList.firstChild);
            };
            
            for(i = 0; i < length; i++) {

                let $li = document.createElement('li');
                $li.className ="list-group-item";
                $li.innerHTML = text;

                let $changeButton = document.createElement('button');
                $changeButton.className = "btn btn-primary btn-sm";
                $changeButton.innerHTML = "Mudar Este Fato";
                $changeButton.addEventListener('click', getNewFact);

                let $hr = document.createElement('hr');

                $li.appendChild($hr);
                $li.appendChild($changeButton);
                $factList.appendChild($li);
           
            }
        });
    };

    function getNewFact(event) {
        let $listItem = event.target.parentElement;

        fetch("./facts.json")
        .then(response => response.text())
        .then(result => {            
            const facts = JSON.parse(result);
            const index = Math.floor(Math.random()*facts.length);
            const text = facts[index].text;

            $listItem.innerHTML = text;
            
            let $changeButton = document.createElement('button');
                $changeButton.className = "btn btn-primary btn-sm";
                $changeButton.innerHTML = "Mudar Este Fato";
                $changeButton.addEventListener('click', getNewFact);

                let $hr = document.createElement('hr');

                $listItem.appendChild($hr);
                $listItem.appendChild($changeButton);

        });
    };

})();