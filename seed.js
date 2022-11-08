const { green, red } = require("chalk");
const { db, products } = require("./server/db");

//Start of seed data

const products = [
  {
    name: "10 oz. Ringneck",
    color: "Black",
    price: 12.99,
    size: 10,
    description: "This is a description",
    imageUrl:
      "https://res.cloudinary.com/business-products/image/upload/v1667199533/products/images/large/LTM7102--d57bb153-85be-47fe-9574-b315a56bef6d.webp",
  },
  {
    name: "10 oz. Ringneck",
    color: "Navy Blue",
    price: 12.99,
    size: 10,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM7111.png",
  },
  {
    name: "12 oz. Wine example",
    color: "Black",
    price: 9.99,
    size: 12,
    description: "This is a description",
    imageUrl:
      "https://res.cloudinary.com/business-products/image/upload/v1667199718/products/images/large/LTM852--62e32c27-7287-404b-9e05-d77b251940a1.webp",
  },
  {
    name: "12 oz. Wine example",
    color: "Green",
    price: 9.99,
    size: 12,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM865.png",
  },
  {
    name: "15 oz. Camp Mug",
    color: "Black",
    price: 11.99,
    size: 15,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LCM102.png",
  },
  {
    name: "15 oz. Camp Mug",
    color: "Maroon",
    price: 11.99,
    size: 15,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LCM113.png",
  },
  {
    name: "15 oz. Camp Mug",
    color: "Orange",
    price: 11.99,
    size: 15,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LCM112.png",
  },
  {
    name: "20 oz. Ringneck",
    color: "Black",
    price: 13.99,
    size: 20,
    description: "This is a description",
    imageUrl:
      "https://res.cloudinary.com/business-products/image/upload/v1667199582/products/images/large/LTM7216--d45636af-814c-4834-931e-a8bfa9866940.webp",
  },
  {
    name: "20 oz. Ringneck",
    color: "Olive Green",
    price: 13.99,
    size: 20,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM7219.png",
  },
  {
    name: "20 oz. Ringneck",
    color: "White",
    price: 13.99,
    size: 20,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM7214.png",
  },
  {
    name: "30 oz. Ringneck",
    color: "Black",
    price: 16.99,
    size: 30,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM7316.png",
  },
  {
    name: "30 oz. Ringneck",
    color: "Yellow",
    price: 16.99,
    size: 30,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM7317.png",
  },
  {
    name: "30 oz. Ringneck",
    color: "Coral",
    price: 16.99,
    size: 30,
    description: "This is a description",
    imageUrl: "https://shop.jdsindustries.com/site_images/small/LTM7318.png",
  },
];

//End of Seed Data

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      products.map((product) => {
        return product.create(product);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)

async function runSeed() {
  try {
    await seed();
    console.log(green("Seeding success!"));
  } catch (err) {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
  } finally {
    db.close();
  }
}

if (require.main === module) {
  runSeed();
}
