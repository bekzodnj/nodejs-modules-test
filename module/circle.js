const { PI } = Math;
exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;
exports.sayHello = () => {
  return 'Hello from another module';
};
