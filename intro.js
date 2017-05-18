function fizzBuzz()
{
    var count;
    for (count = 1; count < 100; count++)
    {
        if(count % 3 == 0 && count % 5 == 0)
        {
            document.write("fizzBuzz ");
        }
        else if(count % 3 == 0)
        {
            document.write("fizz ");
        }
        else if(count % 5 == 0)
        {
            document.write("buzz ");
        }
        else document.write(count + " ");
    }
}