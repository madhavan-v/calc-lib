// test comment
class CalcLib {
  public static chainAdd(...args: number[]){
    let sum: number = 0;
    args.forEach(element => {
      sum += element;
    });
    return sum;
  }

  public static chainSub(...args: number[]){
    let result: number = args[0];
    args.slice(1).forEach(element => {
      result -= element
    });
    return result;
  }
}

export default CalcLib;
