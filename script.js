

//     let card = document.createElement('div');
//     card.innerHTML = `hi`;
//     section.appendChild(card);
// }


let req = new XMLHttpRequest();

req.open('get', 'data.json', true);

req.send();

req.onload = function(){
    if(this.readyState === 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let card = document.createElement('div');
        card = "";
        for(let i=0; i<data.length; i++){

            let isNew =''
            if(data[i].new === true){
                isNew = 'NEW!'
            } 
            let isFeatured = ''
            if(data[i].featured === true){
                isFeatured = 'FEATURED'
            }

            card += `
            
                <div class="card">
                    <img src="${data[i].logo}"/>
                    <div class="card-center">
                        <p>${data[i].company} ${isNew} ${isFeatured}</p>    
                        <h3>${data[i].position}</h3>
                        <p>${data[i].postedAt} • ${data[i].contract} • ${data[i].location}</p>
                    </div>
                    <div>
                    <button>${data[i].role} </button>
                    <button>${data[i].level} </button>
                    <button>${data[i].languages}</button>
                    </div>
                </div>
                <br/>

            `
            }
        

        let section = document.querySelector('section');
        section.innerHTML = card;
    }
}


function search(e){
    let searchContainer = document.createElement('div');
    search.innerHTML = `<p>${e.target.textContent}</p> `
    card.appendChild(searchContainer)

}