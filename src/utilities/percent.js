export class PercentValueConverter {
    toView(value, divided = 100, round = false) {
      if (!value) {
        return value;
      }
      
      let divider = (typeof value === 'string') ? Number(value) : value;
      
      if (typeof divider !== 'number' || isNaN(divider)) {
        return value;
      }
      
      return round ? Math.round((divider / divided) * 100 ) : (divider / divided) * 100;
    }
}