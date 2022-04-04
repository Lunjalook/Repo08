var sum = 0;

function addThree() {
    sum = sum + 3;
    console.log("sum from addThree: " + sum);
}
console.log(addThree());
function addFive() {
    sum = sum + 5;
    console.log("sum from addFive: " + sum);
}
console.log(addFive());

module.exports = {
    addThree,
    addFive
};