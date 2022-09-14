var select = document.getElementById('select');
var cards=document.getElementById('cards');
var search= document.getElementById('search');
var btn_search=document.getElementById('btn_search');
var card=document.getElementsByClassName('card');
var detail_btn=document.getElementById('detail_btn');
var detail=document.getElementById('detail');
var dark_mode=document.getElementById('dark_mode');
var icon=document.getElementsByTagName('i');
var title=document.getElementById('title');

detail_btn.style.display="none";
detail.style.display="none";
var dark=0;

title.addEventListener('click', function(){
        alert('Dark Mode');
        
})

function country_data(url) {
        fetch(url).then(response => response.json())
        .then(function (data) {
                
                 for (let i = 0; i < data.length; i++) {let div=document.createElement('div');
                 div.setAttribute('class',"card");
                
                 let flag=document.createElement('img');
                 flag.src=data[i].flags.png;
                 div.appendChild(flag);
                 let div1=document.createElement('div');
 
                 div1.innerHTML+=`<h2>${data[i].name.common}</h2>
                 <h4>population : <span>${data[i].population}</span></h4>
                 <h4>region: <span>${data[i].region}</span> </h4>
                 <h4>capital: <span>${data[i].capital}</span> </h4>
                 `
                 div.appendChild(div1);
                  cards.appendChild(div);}

                 for (let i = 0; i < card.length; i++) {
                      

                        card[i].addEventListener('click',function(){
                                let div=document.getElementById('div');
                                div.style.display="none";
                                cards.style.display="none";
                                function loop() {
                                        let array=[]
                                        for (const property in data[i].languages) {
                                                array.push(data[i].languages[property])
                                              }
                                              for (let i = 0; i < array.length; i++) {
                                                return array
                                        }
                                }
                                function loop_curen() {
                                        for (const property in data[i].currencies) {
                                                for (const prop in data[i].currencies[property]) {
                                                        return data[i].currencies[property].name
                                                      }
                                              }
                                };
                                function loop_border() {return data[i].borders};
                                detail.innerHTML+=`
                                <img src="${data[i].flags.png}" alt="Flag" />
                                <h2 >${data[i].name.common} <i class='bx bx-map' onclick="window.open('${data[i].maps.googleMaps}')"></i></h2>
                                <div class="card_details">
                                <div>
                                <h4>Native Name : <span>${data[i].name.official}</span></h4>
                                <h4>population : <span>${data[i].population}</span></h4>
                                <h4>region: <span>${data[i].region}</span> </h4>
                                <h4>Sub region: <span>${data[i].subregion}</span> </h4>
                                <h4>capital: <span>${data[i].capital}</span> </h4>
                                </div>
                                <div>
                                <h4>Top Level Domain: <span>${data[i].tld[0]} </span> </h4>
                                <h4>Currencies: <span>${loop_curen()}</span> </h4>
                                <h4>Languages: <span>${loop()}</span> </h4>

                                </div>
                                <div>
                                <h4>Border Countries:<span> ${loop_border()}</span><h4>
                                </div>
                                `
                                detail_btn.style.display="block";
                                detail.style.display="block";
                                
                          })
                        
                 }
                  

                  
        })
      
}

function loaded() {
        search.value="";
}

window.addEventListener("load",country_data(select.value),loaded());



/*function of filter by region */
select.addEventListener('change', function(){
        window.location.reload();
        country_data(select.value);

});

/*show country a recherche*/
btn_search.addEventListener('click', function(){
       
        for (let i = 0; i < card.length; i++) {
             let country_names=card[i].childNodes[1].firstChild.innerText;
           let country=search.value[0].toUpperCase() + search.value.substring(1);
             if (country!=country_names) {
                
               card[i].style.display="none";
             }else{
                card[i].style.display="block";
             }
        }
});

/*function of show countrie detail and information*/
detail_btn.addEventListener('click', function(){
        div.style.display="flex";
        cards.style.display="grid";
        detail_btn.style.display="none";
        detail.style.display="none";
        detail.innerHTML=""
});

/* dark mode function*/
dark_mode.addEventListener('click',function (){
        var r = document.querySelector(':root');
        
        if (dark==0) {
             
                r.style.setProperty('--light_txt', 'hsl(0, 0%, 100%)');
                r.style.setProperty('--light_input', 'hsl(230, 14%, 42%)');
                r.style.setProperty('--light_background', 'hsl(207, 26%, 17%)');
                r.style.setProperty('--light_ele', 'hsl(209, 23%, 22%)');
                r.style.setProperty('--span', 'white');
                dark=1
        }else{
             
                r.style.setProperty('--light_txt', 'hsl(200, 15%, 8%)');
                r.style.setProperty('--light_input', 'hsl(0, 0%, 99%)');
                r.style.setProperty('--light_background', 'rgb(254, 254, 254)');
                r.style.setProperty('--light_ele', 'hsl(0, 0%, 100%)');
                r.style.setProperty('--span', '#3c3c3c');
                dark=0;

        }     
});
