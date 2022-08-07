const Data=[
    {
        "id":"01",
        "title":"Dolex",
        "price":"6.500",
        "pictureUrl":"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/ninos2-jarabe/Ninos_455x455.png?auto=format"
    },
    {
        "id":"02",
        "title":"Advil",
        "price":"10.500",
        "pictureUrl":"https://www.farmalisto.com.co/113836-large_default/comprar-advil-max-caja-con-72-capsulas-precio.jpg"
    },
    {
        "id":"03",
        "title":"Noraver",
        "price":"8.200",
        "pictureUrl":"https://www.farmalisto.com.co/90414-large_default/comprar-noraver-garganta-caja-con-12-tabletas-sabor-menta-forte-precio.jpg"
    },
    {
        "id":"04",
        "title":"Advil Fem",
        "price":"10.200",
        "pictureUrl":"https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/health-professionals/es_CO/pain-relief/packshots/Advil_Fem%20-%20750x421.png?auto=format"
    },
    {
        "id":"05",
        "title":"Alkaseltzet",
        "price":"12.200",
        "pictureUrl":"https://jumbocolombiaio.vtexassets.com/arquivos/ids/190142-1600-1600?v=637813995886670000&width=1600&height=1600&aspect=true"
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
