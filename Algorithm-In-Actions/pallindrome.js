//* 3. Find palindromic words in user comments or posts

//* 👉 Scenario: A content moderation or analytics feature that detects palindromic words (for fun insights).

// * Solve it in two pointer method...

const comment = "Wow level stats are racecar fast quick";

function findPalindromicWord(text){
    const words = text.toLowerCase().split(/\s+/);
    // console.log(words);
    const palindromes = [];

    for(let word of words){
       if (word.length > 1 && isPalindrome(word)){
            palindromes.push(word)
       }
    }
    return palindromes;
};

function isPalindrome(word){
     let left = 0;
     let right = word.length - 1;

        while(left < right){
            if (word[left] !== word[right]){
                return false;
            }
            left++
            right--;
        }
        return true
}

console.log(findPalindromicWord(comment));