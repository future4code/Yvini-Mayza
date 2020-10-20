const countries = [
   {
      "id": 0,
      "name": "África do Sul",
      "capital": "Pretória",
      "continent": "África"
   },
   {
      "id": 1,
      "name": "Angola",
      "capital": "Luanda",
      "continent": "África"
   },
   {
      "id": 2,
      "name": "Argélia",
      "capital": "Argel",
      "continent": "África"
   },
   {
      "id": 3,
      "name": "Benim",
      "capital": "Porto Novo",
      "continent": "África"
   },
   {
      "id": 4,
      "name": "Botsuana",
      "capital": "Gaborone",
      "continent": "África"
   },
   {
      "id": 5,
      "name": "Burquina Faso",
      "capital": "Uagadugu",
      "continent": "África"
   },
   {
      "id": 6,
      "name": "Burúndi",
      "capital": "Bujumbura",
      "continent": "África"
   },
   {
      "id": 7,
      "name": "Cabo Verde",
      "capital": "Praia",
      "continent": "África"
   },
   {
      "id": 8,
      "name": "Camarões",
      "capital": "Iaundé",
      "continent": "África"
   },
   {
      "id": 9,
      "name": "Chade",
      "capital": "Jamena",
      "continent": "África"
   },
   {
      "id": 10,
      "name": "Comores",
      "capital": "Moroni",
      "continent": "África"
   },
   {
      "id": 11,
      "name": "Congo-Brazzaville",
      "capital": "Brazavile",
      "continent": "África"
   },
   {
      "id": 12,
      "name": "Costa do Marfim",
      "capital": "Iamussucro",
      "continent": "África"
   },
   {
      "id": 13,
      "name": "Egito",
      "capital": "Cairo",
      "continent": "África"
   },
   {
      "id": 14,
      "name": "Eritreia",
      "capital": "Asmara",
      "continent": "África"
   },
   {
      "id": 15,
      "name": "Etiópia",
      "capital": "Adis Abeba",
      "continent": "África"
   },
   {
      "id": 16,
      "name": "Gabão",
      "capital": "Libreville",
      "continent": "África"
   },
   {
      "id": 17,
      "name": "Gâmbia",
      "capital": "Banjul",
      "continent": "África"
   },
   {
      "id": 18,
      "name": "Gana",
      "capital": "Acra",
      "continent": "África"
   },
   {
      "id": 19,
      "name": "Guiné",
      "capital": "Conacri",
      "continent": "África"
   },
   {
      "id": 20,
      "name": "Guiné Equatorial",
      "capital": "Malabo",
      "continent": "África"
   },
   {
      "id": 21,
      "name": "Guiné-Bissau",
      "capital": "Bissau",
      "continent": "África"
   },
   {
      "id": 22,
      "name": "Jibuti",
      "capital": "Jibuti",
      "continent": "África"
   },
   {
      "id": 23,
      "name": "Lesoto",
      "capital": "Maseru",
      "continent": "África"
   },
   {
      "id": 24,
      "name": "Libéria",
      "capital": "Monróvia",
      "continent": "África"
   },
   {
      "id": 25,
      "name": "Líbia",
      "capital": "Trípoli",
      "continent": "África"
   },
   {
      "id": 26,
      "name": "Madagáscar",
      "capital": "Antananarivo",
      "continent": "África"
   },
   {
      "id": 27,
      "name": "Maláui",
      "capital": "Lilôngue",
      "continent": "África"
   },
   {
      "id": 28,
      "name": "Mali",
      "capital": "Bamaco",
      "continent": "África"
   },
   {
      "id": 29,
      "name": "Marrocos",
      "capital": "Rebate",
      "continent": "África"
   },
   {
      "id": 30,
      "name": "Maurícia",
      "capital": "Porto Luís",
      "continent": "África"
   },
   {
      "id": 31,
      "name": "Mauritânia",
      "capital": "Nuaquechote",
      "continent": "África"
   },
   {
      "id": 32,
      "name": "Moçambique",
      "capital": "Maputo",
      "continent": "África"
   },
   {
      "id": 33,
      "name": "Namíbia",
      "capital": "Vinduque",
      "continent": "África"
   },
   {
      "id": 34,
      "name": "Níger",
      "capital": "Niamei",
      "continent": "África"
   },
   {
      "id": 35,
      "name": "Nigéria",
      "capital": "Abuja",
      "continent": "África"
   },
   {
      "id": 36,
      "name": "Quénia",
      "capital": "Nairóbi",
      "continent": "África"
   },
   {
      "id": 37,
      "name": "República Centro-Africana",
      "capital": "Bangui",
      "continent": "África"
   },
   {
      "id": 38,
      "name": "República Democrática do Congo",
      "capital": "Quinxassa",
      "continent": "África"
   },
   {
      "id": 39,
      "name": "Ruanda",
      "capital": "Quigali",
      "continent": "África"
   },
   {
      "id": 40,
      "name": "São Tomé e Príncipe",
      "capital": "São Tomé",
      "continent": "África"
   },
   {
      "id": 41,
      "name": "Seicheles",
      "capital": "Vitória",
      "continent": "África"
   },
   {
      "id": 42,
      "name": "Senegal",
      "capital": "Dacar",
      "continent": "África"
   },
   {
      "id": 43,
      "name": "Serra Leoa",
      "capital": "Freetown",
      "continent": "África"
   },
   {
      "id": 44,
      "name": "Somália",
      "capital": "Mogadíscio",
      "continent": "África"
   },
   {
      "id": 45,
      "name": "Suazilândia",
      "capital": "Lobamba",
      "continent": "África"
   },
   {
      "id": 46,
      "name": "Sudão",
      "capital": "Cartum",
      "continent": "África"
   },
   {
      "id": 47,
      "name": "Sudão do Sul",
      "capital": "Juba",
      "continent": "África"
   },
   {
      "id": 48,
      "name": "Tanzânia",
      "capital": "Dodoma",
      "continent": "África"
   },
   {
      "id": 49,
      "name": "Togo",
      "capital": "Lomé",
      "continent": "África"
   },
   {
      "id": 50,
      "name": "Tunísia",
      "capital": "Tunes",
      "continent": "África"
   },
   {
      "id": 51,
      "name": "Uganda",
      "capital": "Campala",
      "continent": "África"
   },
   {
      "id": 52,
      "name": "Zâmbia",
      "capital": "Lusaca",
      "continent": "África"
   },
   {
      "id": 53,
      "name": "Zimbábue",
      "capital": "Harare",
      "continent": "África"
   },
   {
      "id": 54,
      "name": "Antiga e Barbuda",
      "capital": "São João",
      "continent": "América"
   },
   {
      "id": 55,
      "name": "Argentina",
      "capital": "Buenos Aires",
      "continent": "América"
   },
   {
      "id": 56,
      "name": "Bahamas",
      "capital": "Nassau",
      "continent": "América"
   },
   {
      "id": 57,
      "name": "Barbados",
      "capital": "Bridgetown",
      "continent": "América"
   },
   {
      "id": 58,
      "name": "Belize",
      "capital": "Belmopã",
      "continent": "América"
   },
   {
      "id": 59,
      "name": "Bolívia",
      "capital": "Sucre",
      "continent": "América"
   },
   {
      "id": 60,
      "name": "Brasil",
      "capital": "Brasília",
      "continent": "América"
   },
   {
      "id": 61,
      "name": "Canadá",
      "capital": "Otava",
      "continent": "América"
   },
   {
      "id": 62,
      "name": "Chile",
      "capital": "Santiago",
      "continent": "América"
   },
   {
      "id": 63,
      "name": "Colômbia",
      "capital": "Bogotá",
      "continent": "América"
   },
   {
      "id": 64,
      "name": "Costa Rica",
      "capital": "São José",
      "continent": "América"
   },
   {
      "id": 65,
      "name": "Cuba",
      "capital": "Havana",
      "continent": "América"
   },
   {
      "id": 66,
      "name": "Dominica",
      "capital": "Roseau",
      "continent": "América"
   },
   {
      "id": 67,
      "name": "Equador",
      "capital": "Quito",
      "continent": "América"
   },
   {
      "id": 68,
      "name": "Estados Unidos",
      "capital": "Washington, D.C.",
      "continent": "América"
   },
   {
      "id": 69,
      "name": "Granada",
      "capital": "São Jorge",
      "continent": "América"
   },
   {
      "id": 70,
      "name": "Guatemala",
      "capital": "Cidade da Guatemala",
      "continent": "América"
   }
   ]

module.exports = countries