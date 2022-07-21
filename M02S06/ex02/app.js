console.log(process.argv);
const [a, b, ...parameters] = process.argv;
// normal
// const a = process.argv[0];
// const b = process.argv[1];
// const params = process.argv.slice(2);

console.log(parameters);

const width = parameters[0];
const height = parameters[1];

// normal
// const [width, height] = parameters;

console.log(width * height);
