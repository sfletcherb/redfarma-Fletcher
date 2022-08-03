const Data=[
    {
        "id":"01",
        "title":"Dolex",
        "price":"6500",
        "pictureUrl":"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/ninos2-jarabe/Ninos_455x455.png?auto=format"
    },
    {
        "id":"02",
        "title":"Advil",
        "price":"10500",
        "pictureUrl":"https://www.farmalisto.com.co/113836-large_default/comprar-advil-max-caja-con-72-capsulas-precio.jpg"
    },
    {
        "id":"03",
        "title":"Noraver",
        "price":"8200",
        "pictureUrl":"https://www.farmalisto.com.co/90414-large_default/comprar-noraver-garganta-caja-con-12-tabletas-sabor-menta-forte-precio.jpg"
    }
    
]

const getDatos = new Promise((resolve, reject)=>{

    let condition=true
    if(condition){
        setTimeout(()=>{ //simular la asincronía
            resolve(Data)
        },2000);
    }else{
        reject(console.log("No se encontraron datos"))
    }
})

export default getDatos;
