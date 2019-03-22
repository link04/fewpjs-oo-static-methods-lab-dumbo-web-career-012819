class Formatter {
  
  static capitalize(string){
    return string[0].toUpperCase() + string.split('').splice(1).join('');
  }
 
  static sanitize(string){
    return string[0].toUpperCase() + string.split('').splice(1).join('');
  }
 
   static titleize(string){
    return string[0].toUpperCase() + string.split('').splice(1).join('');
  }
 

}