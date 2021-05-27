// Brand icons
import abarth from "../assets/brandIcons/abarth.svg"
import alpha_romeo from "../assets/brandIcons/alfa-romeo.svg"
import aston_martin from "../assets/brandIcons/aston-martin.svg"
import audi from "../assets/brandIcons/audi.svg"
import bentley from "../assets/brandIcons/bentley.svg"
import bmw from "../assets/brandIcons/bmw.svg"
import chevrolet from "../assets/brandIcons/chevrolet.svg"
import citroen from "../assets/brandIcons/citroen.svg"
import corvette from "../assets/brandIcons/corvette.svg"
import dodge from "../assets/brandIcons/dodge.svg"
import ferrari from "../assets/brandIcons/ferrari.svg"
import ford from "../assets/brandIcons/ford.svg"
import honda from "../assets/brandIcons/honda.svg"
import hyundai from "../assets/brandIcons/hyundai.svg"
import infiniti from "../assets/brandIcons/infiniti.svg"
import jaguar from "../assets/brandIcons/jaguar.svg"
import kia from "../assets/brandIcons/kia.svg"
import lamborghini from "../assets/brandIcons/lamborghini.svg"
import land_rover from "../assets/brandIcons/land-rover.svg"
import lexus from "../assets/brandIcons/lexus.svg"
import tesla from "../assets/brandIcons/tesla.svg"
// Photos
// Abarth
import Abarth_124_Spider from "../assets/carPhotos/Abarth_124_Spider.jpg"
import Abarth_695 from "../assets/carPhotos/Abarth_695.jpg"
// Alpha Romeo
import Alpha_Romeo_145 from "../assets/carPhotos/Alpha_Romeo_145.jpeg"
import Alpha_Romeo_8C_Spider from "../assets/carPhotos/Alpha_Romeo_8C_Spider.jpg"
import Alpha_Romeo_GT from "../assets/carPhotos/Alpha_Romeo_GT.jpg"
import Alpha_Romeo_Stelvio from "../assets/carPhotos/Alfa_Romeo_Stelvio.jpg"
// Aston Martin
import Aston_Martin_Vantage from "../assets/carPhotos/Aston_Martin_Vantage.jpg"
import Aston_Martin_Rapide from "../assets/carPhotos/Aston_Martin_Rapide.jpg"
import Aston_Martin_Vanquish from "../assets/carPhotos/Aston_Martin_Vanquish.jpg"
// Audi
import Audi_Q3 from "../assets/carPhotos/Audi_Q3.jpg"
import Audi_R8 from "../assets/carPhotos/Audi_R8.jpg"
import Audi_S1 from "../assets/carPhotos/Audi_S1.jpg"
import Audi_TT_Roadster from "../assets/carPhotos/Audi_TT_Roadster.jpg"
import Audi_80 from "../assets/carPhotos/Audi_80.jpg"
// Bentley
import Bentley_Bentyaga from "../assets/carPhotos/Bentley_Bentyaga.jpg"
import Bentley_Mulsanne from "../assets/carPhotos/Bentley_Mulsanne.jpg"
// BMW
import BMW_X5 from "../assets/carPhotos/BMW_X5.jpg"
import BMW_I3 from "../assets/carPhotos/BMW_I3.jpg"
import BMW_X7 from "../assets/carPhotos/BMW_X7.jpg"
import BMW_I8 from "../assets/carPhotos/BMW_I8.jpg"
// Chevrolet
import Chevrolet_Matiz from "../assets/carPhotos/Chevrolet_Matiz.jpg"
import Chevrolet_Tahoe from "../assets/carPhotos/Chevrolet_Tahoe.jpg"
import Chevrolet_Cruze from "../assets/carPhotos/Chevrolet_Cruze.jpg"
// Citroen
import Citroen_Jumper_33 from "../assets/carPhotos/Citroen_Jumper_33.jpg"
import Citroen_Jumpy from "../assets/carPhotos/Citroen_Jumpy.jpg"
// Corvette
import Corvette_C6_Convertible from "../assets/carPhotos/Corvette_C6_Convertible.jpg"
import Corvette_C6_Coupe from "../assets/carPhotos/Corvette_C6_Coupe.jpg"
// Dodge
import Dodge_Viper from "../assets/carPhotos/Dodge_Viper.jpg"
import Dodge_Nitro from "../assets/carPhotos/Dodge_Nitro.jpg"
// Ferrari
import Ferrari_Roma from "../assets/carPhotos/Ferrari_Roma.jpg"
import Ferrari_GTC4 from "../assets/carPhotos/Ferrari_GTC4.jpg"
// Ford
import Ford_Edge from "../assets/carPhotos/Ford_Edge.jpg"
import Ford_Mustang from "../assets/carPhotos/Ford_Mustang.jpg"
// Honda
import Honda_Civic from "../assets/carPhotos/Honda_Civic.jpg"
import Honda_S2000 from "../assets/carPhotos/Honda_S2000.jpg"
// Hyundai
import Hyundai_Nexo from "../assets/carPhotos/Hyundai_Nexo.jpg"
import Hyundai_Kona from "../assets/carPhotos/Hyundai_Kona.jpg"
// Infiniti
import Infiniti_QX30 from "../assets/carPhotos/Infiniti_QX30.jpg"
import Infiniti_Q70 from "../assets/carPhotos/Infiniti_Q70.jpg"
// Jaguar
import Jaguar_V12 from "../assets/carPhotos/Jaguar_V12.jpg"
import Jaguar_F_Type_Coupe from "../assets/carPhotos/Jaguar_F_Type_Coupe.jpg"
// Kia
import Kia_Rio from "../assets/carPhotos/Kia_Rio.jpeg"
import Kia_Stinger from "../assets/carPhotos/Kia_Stinger.jpg"
// Lamborghini
import Lamborghini_Aventador from "../assets/carPhotos/Lamborghini_Aventador.jpg"
import Lamborghini_Huracan from "../assets/carPhotos/Lamborghini_Huracan.jpg"
// Land-Rover
import Land_Rover_Defender_90 from "../assets/carPhotos/Land_Rover_Defender_90.jpg"
import Land_Rover_RR_Velar from "../assets/carPhotos/Land_Rover_RR_Velar.jpg"
// Lexus
import Lexus_ES from "../assets/carPhotos/Lexus_ES.jpg"
import Lexus_RC from "../assets/carPhotos/Lexus_RC.jpg"
// Tesla
import Tesla_Model_X from "../assets/carPhotos/Tesla_Model_X.jpeg"
import Tesla_Model_Y from "../assets/carPhotos/Tesla_Model_Y.jpg"

let initialState = {
  carData: [
    {
      brand: "Abarth",
      brand_icon: abarth,
      model: "124 Spiders",
      year: 2016,
      fuel: "Бензин",
      body_type: "Кабриолет",
      price: "40000$",
      photo: Abarth_124_Spider 
    },
    {
      brand: "Abarth",
      brand_icon: abarth,
      model: "695",
      year: 2017,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "40000$",
      photo: Abarth_695 
    },
    {
      brand: "Alfa Romeo",
      brand_icon: alpha_romeo,
      model: "145",
      year: 1994,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "13000$",
      photo: Alpha_Romeo_145 
    },
    {
      brand: "Alfa Romeo",
      brand_icon: alpha_romeo,
      model: "8C Spider",
      year: 2010,
      fuel: "Бензин",
      body_type: "Купе",
      price: "350000$",
      photo: Alpha_Romeo_8C_Spider 
    },
    {
      brand: "Alfa Romeo",
      brand_icon: alpha_romeo,
      model: "GT",
      year: 2007,
      fuel: "Бензин",
      body_type: "Купе",
      price: "33000$",
      photo: Alpha_Romeo_GT 
    },
    {
      brand: "Alfa Romeo",
      brand_icon: alpha_romeo,
      model: "Stelvio",
      year: 2020,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "75000$",
      photo: Alpha_Romeo_Stelvio 
    },
    {
      brand: "Aston Martin",
      brand_icon: aston_martin,
      model: "Vantage",
      year: 2018,
      fuel: "Бензин",
      body_type: "Купе",
      price: "200000$",
      photo: Aston_Martin_Vantage 
    },
    {
      brand: "Aston Martin",
      brand_icon: aston_martin,
      model: "Rapide",
      year: 2010,
      fuel: "Бензин",
      body_type: "Седан",
      price: "250000$",
      photo: Aston_Martin_Rapide 
    },
    {
      brand: "Aston Martin",
      brand_icon: aston_martin,
      model: "Vanquish",
      year: 2012,
      fuel: "Бензин",
      body_type: "Купе",
      price: "300000$",
      photo: Aston_Martin_Vanquish 
    },
    {
      brand: "Audi",
      brand_icon: audi,
      model: "Q3",
      year: 2019,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "60000$",
      photo: Audi_Q3 
    },
    {
      brand: "Audi",
      brand_icon: audi,
      model: "R8",
      year: 2012,
      fuel: "Бензин",
      body_type: "Купе",
      price: "180000$",
      photo: Audi_R8
    },
    {
      brand: "Audi",
      brand_icon: audi,
      model: "S1",
      year: 2015,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "42000$",
      photo: Audi_S1
    },
    {
      brand: "Audi",
      brand_icon: audi,
      model: "TT Roadster",
      year: 2018,
      fuel: "Бензин",
      body_type: "Кабриолет",
      price: "52000$",
      photo: Audi_TT_Roadster
    },
    {
      brand: "Audi",
      brand_icon: audi,
      model: "80",
      year: 1995,
      fuel: "Дизель",
      body_type: "Седан",
      price: "20000$",
      photo: Audi_80
    },
    {
      brand: "Bentley",
      brand_icon: bentley,
      model: "Bentyaga",
      year: 2018,
      fuel: "Биоэтанол",
      body_type: "Кроссовер",
      price: "280000$",
      photo: Bentley_Bentyaga
    },
    {
      brand: "Bentley",
      brand_icon: bentley,
      model: "Bentyaga",
      year: 2016,
      fuel: "Дизель",
      body_type: "Кроссовер",
      price: "250000$",
      photo: Bentley_Bentyaga
    },
    {
      brand: "Bentley",
      brand_icon: bentley,
      model: "Mulsanne",
      year: 2017,
      fuel: "Бензин",
      body_type: "Седан",
      price: "420000$",
      photo: Bentley_Mulsanne
    },
    {
      brand: "BMW",
      brand_icon: bmw,
      model: "X5",
      year: 2018,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "100000$",
      photo: BMW_X5
    },
    {
      brand: "BMW",
      brand_icon: bmw,
      model: "X5",
      year: 2018,
      fuel: "Дизель",
      body_type: "Кроссовер",
      price: "95000$",
      photo: BMW_X5
    },
    {
      brand: "BMW",
      brand_icon: bmw,
      model: "I3",
      year: 2017,
      fuel: "Электро",
      body_type: "Хэтчбек",
      price: "38000$",
      photo: BMW_I3
    },
    {
      brand: "BMW",
      brand_icon: bmw,
      model: "X7",
      year: 2019,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "150000$",
      photo: BMW_X7
    },
    {
      brand: "BMW",
      brand_icon: bmw,
      model: "X7",
      year: 2017,
      fuel: "Дизель",
      body_type: "Кроссовер",
      price: "130000$",
      photo: BMW_X7
    },
    {
      brand: "BMW",
      brand_icon: bmw,
      model: "I8",
      year: 2014,
      fuel: "Гибрид",
      body_type: "Купе",
      price: "150000$",
      photo: BMW_I8
    },
    {
      brand: "Chevrolet",
      brand_icon: chevrolet,
      model: "Matiz",
      year: 2005,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "5000$",
      photo: Chevrolet_Matiz
    },
    {
      brand: "Chevrolet",
      brand_icon: chevrolet,
      model: "Tahoe",
      year: 2000,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "60000$",
      photo: Chevrolet_Tahoe
    },
    {
      brand: "Chevrolet",
      brand_icon: chevrolet,
      model: "Cruze",
      year: 2009,
      fuel: "Бензин",
      body_type: "Седан",
      price: "18000$",
      photo: Chevrolet_Cruze
    },
    {
      brand: "Citroen",
      brand_icon: citroen,
      model: "Jumper 33",
      year: 2014,
      fuel: "Дизель",
      body_type: "Вэн",
      price: "22000$",
      photo: Citroen_Jumper_33
    },
    {
      brand: "Citroen",
      brand_icon: citroen,
      model: "Jumpy",
      year: 2017,
      fuel: "Дизель",
      body_type: "Вэн",
      price: "15000$",
      photo: Citroen_Jumpy
    },
    {
      brand: "Corvette",
      brand_icon: corvette,
      model: "C6 Convertible",
      year: 2007,
      fuel: "Бензин",
      body_type: "Кабриолет",
      price: "102000$",
      photo: Corvette_C6_Convertible
    },
    {
      brand: "Corvette",
      brand_icon: corvette,
      model: "C6 Coupe",
      year: 2009,
      fuel: "Бензин",
      body_type: "Купе",
      price: "98000$",
      photo: Corvette_C6_Coupe
    },
    {
      brand: "Dodge",
      brand_icon: dodge,
      model: "Viper",
      year: 2008,
      fuel: "Бензин",
      body_type: "Кабриолет",
      price: "152000$",
      photo: Dodge_Viper
    },
    {
      brand: "Dodge",
      brand_icon: dodge,
      model: "Nitro",
      year: 2007,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "42000$",
      photo: Dodge_Nitro
    },
    {
      brand: "Ferrari",
      brand_icon: ferrari,
      model: "Roma",
      year: 2020,
      fuel: "Бензин",
      body_type: "Купе",
      price: "200000$",
      photo: Ferrari_Roma
    },
    {
      brand: "Ferrari",
      brand_icon: ferrari,
      model: "GTC4",
      year: 2016,
      fuel: "Бензин",
      body_type: "Купе",
      price: "380000$",
      photo: Ferrari_GTC4
    },
    {
      brand: "Ford",
      brand_icon: ford,
      model: "Edge",
      year: 2019,
      fuel: "Дизель",
      body_type: "Кроссовер",
      price: "80000$",
      photo: Ford_Edge
    },
    {
      brand: "Ford",
      brand_icon: ford,
      model: "Mustang",
      year: 2018,
      fuel: "Бензин",
      body_type: "Купе",
      price: "70000$",
      photo: Ford_Mustang
    },
    {
      brand: "Honda",
      brand_icon: honda,
      model: "Civic",
      year: 2009,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "25000$",
      photo: Honda_Civic
    },
    {
      brand: "Honda",
      brand_icon: honda,
      model: "S2000",
      year: 2009,
      fuel: "Бензин",
      body_type: "Кабриолет",
      price: "60000$",
      photo: Honda_S2000
    },
    {
      brand: "Hyundai",
      brand_icon: hyundai,
      model: "Nexo",
      year: 2009,
      fuel: "Гибрид",
      body_type: "Кроссовер",
      price: "85000$",
      photo: Hyundai_Nexo
    },
    {
      brand: "Hyundai",
      brand_icon: hyundai,
      model: "Kona",
      year: 2019,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "25000$",
      photo: Hyundai_Kona
    },
    {
      brand: "Hyundai",
      brand_icon: hyundai,
      model: "Kona",
      year: 2019,
      fuel: "Электро",
      body_type: "Хэтчбек",
      price: "45000$",
      photo: Hyundai_Kona
    },
    {
      brand: "Infiniti",
      brand_icon: infiniti,
      model: "QX30",
      year: 2018,
      fuel: "Дизель",
      body_type: "Хэтчбек",
      price: "55000$",
      photo: Infiniti_QX30
    },
    {
      brand: "Infiniti",
      brand_icon: infiniti,
      model: "Q70",
      year: 2019,
      fuel: "Гибрид",
      body_type: "Седан",
      price: "85000$",
      photo: Infiniti_Q70
    },
    {
      brand: "Jaguar",
      brand_icon: jaguar,
      model: "V12",
      year: 1990,
      fuel: "Бензин",
      body_type: "Седан",
      price: "85000$",
      photo: Jaguar_V12
    },
    {
      brand: "Jaguar",
      brand_icon: jaguar,
      model: "F Type Coupe",
      year: 2020,
      fuel: "Бензин",
      body_type: "Купе",
      price: "92000$",
      photo: Jaguar_F_Type_Coupe
    },
    {
      brand: "Kia",
      brand_icon: kia,
      model: "Rio",
      year: 2015,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "18000$",
      photo: Kia_Rio
    },
    {
      brand: "Kia",
      brand_icon: kia,
      model: "Stinger",
      year: 2017,
      fuel: "Бензин",
      body_type: "Хэтчбек",
      price: "75000$",
      photo: Kia_Stinger
    },
    {
      brand: "Kia",
      brand_icon: kia,
      model: "Stinger",
      year: 2017,
      fuel: "Дизель",
      body_type: "Хэтчбек",
      price: "70000$",
      photo: Kia_Stinger
    },
    {
      brand: "Lamborghini",
      brand_icon: lamborghini,
      model: "Huracan",
      year: 2017,
      fuel: "Бензин",
      body_type: "Купе",
      price: "320000$",
      photo: Lamborghini_Huracan
    },
    {
      brand: "Lamborghini",
      brand_icon: lamborghini,
      model: "Aventador",
      year: 2013,
      fuel: "Бензин",
      body_type: "Купе",
      price: "450000$",
      photo: Lamborghini_Aventador
    },
    {
      brand: "Land Rover",
      brand_icon: land_rover,
      model: "Defender 90",
      year: 2007,
      fuel: "Дизель",
      body_type: "Кроссовер",
      price: "70000$",
      photo: Land_Rover_Defender_90
    },
    {
      brand: "Land Rover",
      brand_icon: land_rover,
      model: "RR Velar",
      year: 2020,
      fuel: "Бензин",
      body_type: "Кроссовер",
      price: "95000$",
      photo: Land_Rover_RR_Velar
    },
    {
      brand: "Lexus",
      brand_icon: lexus,
      model: "ES",
      year: 2018,
      fuel: "Гибрид",
      body_type: "Седан",
      price: "70000$",
      photo: Lexus_ES
    },
    {
      brand: "Lexus",
      brand_icon: lexus,
      model: "RC",
      year: 2018,
      fuel: "Гибрид",
      body_type: "Купе",
      price: "65000$",
      photo: Lexus_RC
    },
    {
      brand: "Tesla",
      brand_icon: tesla,
      model: "X",
      year: 2018,
      fuel: "Электро",
      body_type: "Кроссовер",
      price: "93000$",
      photo: Tesla_Model_X
    },
    {
      brand: "Tesla",
      brand_icon: tesla,
      model: "Y",
      year: 2021,
      fuel: "Электро",
      body_type: "Седан",
      price: "73000$",
      photo: Tesla_Model_Y
    },
  ]
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default appReducer;