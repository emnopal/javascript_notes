const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

const VeganCoffeeStock = {
    arabica: 200,
    robusta: 300,
    liberica: 400
};

// import one module only
// module.exports = coffeeStock; // import only for coffeeStock, original JS syntax
// keyword: `export default` dapat dipastikan hanya satu nilai yang diekspor pada satu berkas JavaScript.
// export default coffeeStock; // import only for coffeeStock, ES6 Syntax, change type in package.json to module

// import multiple module
// module.exports = {coffeeStock, VeganCoffeeStock}; // import only for coffeeStock, original JS syntax
export {coffeeStock, VeganCoffeeStock}; // import only for coffeeStock, ES6 Syntax, change type in package.json to module
