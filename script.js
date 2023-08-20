let string  = "";
let bt = document.body.getElementsByClassName('b')

Array.from(bt).forEach((value)=>
{
    value.addEventListener('click',(e)=>
    {
        if(e.target.innerHTML == '=')
        {
            string = eval(string)
            document.getElementById('t').value = string
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = ""
            document.getElementById('t').value = string
        }
        else
        {
            console.log(e.target)
            string = string + e.target.innerHTML
            document.getElementById('t').value = string
        }
    })
}) 