var userInput= prompt("Do You want to quit? ");
var prompt2 = prompt("Are You Sure? ");
var prompt3 = prompt("Are you really sure? ");
var prompt4 = prompt("Are you really really sure?");


function question() {
    if (userInput!="y"|userInput=="yes")
    {
        prompt2
        if (prompt2=="n"|prompt2=="no"){
            prompt3
            if (prompt3=="n"| prompt3=="no"){
                prompt4
                if (prompt4=="y"|prompt4=="yes")
                {
                    alert("you are logged out!")
                }


            }

        }
    }

}
question();