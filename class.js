{
  class Counter {
    constructor() {
      this.counter = 0;
    }
    increase() {
      this.counter++;
      console.log(this.counter);
      if (this.counter % 5 === 0) {
        console.log("yo");
      }
    }
  }

  const coolCounter = new Counter();
  coolCounter.increase(); // 1
  coolCounter.increase(); // 2
  coolCounter.increase(); // 3}
  coolCounter.increase(); // 4
  coolCounter.increase(); // 5 yo!
}

{
  class Counter {
    constructor() {
      this.counter = 0;
    }
    increase(ifNumber) {
      this.counter++;
      console.log(this.counter);
      ifNumber();
    }
  }
  const coolCounter = new Counter();
  function print (){
      console.log(yo!)
  }
  coolCounter.increase(print); // 1
  coolCounter.increase(print); // 2
  coolCounter.increase(print); // 3}
  coolCounter.increase(print); // 4
  coolCounter.increase(printy); // 5 yo!
}
