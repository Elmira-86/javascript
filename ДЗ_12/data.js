"use strict";

function getProductsList() {
  return JSON.parse(json).goods;
}

function getProductsObject() {
  return JSON.parse(json).goods.reduce((acc, product) => {
    return { ...acc, [product.id]: product };
  }, {});
}

const json = `{
  "goods": [
    {
      "id": "04a57766-c599-4366-8dc4-89ff1ccd3b14",
      "img": "img/featured/men_capsule1.jpg",
      "name": "Куртка",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "52.00"
  },
  {
      "id": "61977551-efb2-4f6a-a6ea-da9c3b24798c",
      "img": "img/featured/men_capsule2.jpg",
      "name": "Свитер",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "32.00"
  },
  {
      "id": "5bf21210-6463-49ae-a8c4-4a9ff10002bf",
      "img": "img/featured/men_capsule3.jpg",
      "name": "Футболка",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "15.00"
  },
  {
      "id": "4886ba5c-97d2-4ae4-bcff-b18a86e5cf37",
      "img": "img/featured/women_capsule.png",
      "name": "Модное платье",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "22.00"
  },
  {
      "id": "27bca31f-aac1-4f91-a309-c262046a3d23",
      "img": "img/featured/women_capsule1.png",
      "name": "Женский костюм",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "33.00"
  },
  {
      "id": "f92016c2-5b27-441d-b2e7-b716e2ad63ea",
      "img": "img/featured/women_capsule2.png",
      "name": "Женская рубашка",
      "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
      "price": "18.00"
  }
  ]
}`;
