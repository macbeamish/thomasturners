const keyWords = ["collide","crash","scratch","smash", "bump"]

export const check = (word: string) : boolean =>{
 return  keyWords.findIndex(keyWord => keyWord.includes(word.toLowerCase())) != -1;
  }

 export const findRating = (text: string): number => {
   let wordsArray = text.split(" ");
   let countArray = wordsArray.filter(check);
   let rating = (countArray.length -1);
   if(rating <=5 && rating >= 1){return rating}
   else if(rating>5){rating = 5}
   else{rating = 1}

   return rating;
  }
  

  