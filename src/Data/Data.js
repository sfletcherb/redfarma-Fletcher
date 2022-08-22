/*
const Data = [
    {
        "id": "01",
        "title": "Dolex",
        "category":"medicamentos",
        "description":"Alivio del dolor y la fiebre con rápida acción x 24 Tabletas recubiertas",
        "price": "6.500",
        "pictureUrl": "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/panadol/es_CO/dolex-products/ninos2-jarabe/Ninos_455x455.png?auto=format"
    },
    {
        "id": "02",
        "title": "Advil",
        "category":"medicamentos",
        "description": "Alivio del dolor severo y prolongado x 10 Caps",
        "price": "10.500",
        "pictureUrl": "https://www.farmalisto.com.co/113836-large_default/comprar-advil-max-caja-con-72-capsulas-precio.jpg"
    },
    {
        "id": "03",
        "title": "Elvive",
        "category":"cuidadopersonal",
        "description":"Shampoo con Ácido Hialurónico y efecto anti-sal para cabello deshidratado",
        "price": "8.200",
        "pictureUrl": "https://lh3.googleusercontent.com/VPtgxJm4lvp1C9s_kdQ-scgJAc996XKWwJ7d5B8DPDb7BAuFIgT1rNu4NgL91vx_Tz4e13QNyun8B1n5ubFTB0GsST7Z8NL6e7wKJH_-ljlmSWs=s360"
    },
    {
        "id": "04",
        "title": "Max Factor",
        "category":"belleza",
        "description": "Lipfinity Esse Mf Starglow #80 x 4,2gr",
        "price": "10.200",
        "pictureUrl": "https://lh3.googleusercontent.com/ABUUs0fa4mt0HXE35rTCx7Ot9VsDLbXcTFKOLP6idrvZZoRRZdSmVitvrQ1GGQ_R7J6wJY0xkkUisG5Yzs_KG9Dg644glSSyMLSvJYNGp_Gn7d2z=s360"
    },
    {
        "id": "05",
        "title": "Nutribela",
        "category":"cuidadopersonal",
        "description":"Tratamiento con Células Madres x450 ml",
        "price": "12.200",
        "pictureUrl": "https://lh3.googleusercontent.com/27DEyYj5xctkTJrNU1edBBRB-FG1JE28aOkuOsiJAe_LIcXg9-AzwJy9zEZoHZFQd2qFeOwEvc3Y0h59TMaUWQtYR_0-Sgj3_nt4yps72dUcPq_y=s360"
    }

]

const getData = new Promise((resolve, reject) => {

    let condition = true
    if (condition) {
        setTimeout(() => { //simular la asincronía
            resolve(Data)
        }, 2000);
    } else {
        reject(console.log("No se encontraron datos"))
    }
})

export default getData;


export const getCategory = (categoryId) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve(Data.filter(item => item.category === categoryId))
        },2000)
    })


}

console.log(getCategory())


export const getItem = (id) =>{

    return new Promise ((resolve, reject)=>{

        setTimeout(()=>{
            resolve(Data.find(item => item.id === id))
        },100)

    })

}

console.log(getItem())

*/