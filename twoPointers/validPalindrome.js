let s = "A man, a plan, a canal: Panama";

function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return s === s.split('').reverse().join('');
}

isPalindrome(s);