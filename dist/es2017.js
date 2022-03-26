function work() {
    return new Promise((res) => setImmediate(() => res(1)));
}
async function doWait() {
    return await work();
}
async function dontWait() {
    return work();
}
function justReturn() {
    return work();
}
module.exports = {
    doWait,
    dontWait,
    justReturn
};
