    let result = "";
    for (let i = 1; i <= 100; i++)
     {   if (i % 3 == 0 && i % 5 == 0)
            {
           result = "CracklePop";
            }
         else if (i % 3 == 0)
            {
           result = "Crackle";
            }
        else if (i % 5 == 0)
            {
            result = "Pop";
            }
        else {result = i;}

    console.log(result);
    }
