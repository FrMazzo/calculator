Calculator Project from The Odin Project.

It allows several operations, first it takes the value from the text input as a string.

The string is tested for valid input:
  "\*" or "/" at the start or end, any letter, consecutive "*" or "/" and multiple decimals on a number will return "Error". 
It is splitted into an array as follows: 
  number (ex: "123", ".123", "0.123"), sign and number (ex: "-.123", "+1.23", "-123") and mult and div ("*","/").
A loop searches for "*" or "/" and operates on values before and after the operator's index.
The result is stored on the previous index, current index and next index are deleted.
Then the array is reduced to a single number.
The result length is checked and formatted if necessary.


