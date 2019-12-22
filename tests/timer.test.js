test("Test to see if timer works and calls function that filters races array properly", () => {
  var countdown = 65;
  const timer = setInterval(() => {
    countdown = countdown - 1;
    if (countdown < 60) {
      const arr = this.onDelete(1);
      expect(arr.length).toEqual(6);
    }
  }, 1000);
});

const onDelete = index => {
  var arr = [1, 2, 3, 4, 5, 6, 7];
  const temp = arr.filter((item, j) => j !== index);
  return temp;
};
