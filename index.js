function work() {
  return new Promise((res) => setImmediate(() => res(1)));
}

// function work(): Promise<any>;

// Is this a good idea?
async function doWait() {
  return await work();
}

// Isn't this the same thing?
async function dontWait() {
  return work();
}

// Which one is actually better or faster? 
function justReturn() {
  return work();
}

module.exports = {
  doWait,
  dontWait,
  justReturn
};
