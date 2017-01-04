// this sets up my url generator module
exports.genURL = (link) => {
  // creates a string with random math
  const URLId = 'http://achme.com' +Math.random().toString(32).slice(4);

  // this returns a new url link
  return {URL: URLId};
};
