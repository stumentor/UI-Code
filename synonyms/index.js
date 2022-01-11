var num_clicks=1
async function redir(n)
{
    location.href="synonyms.html";
    localStorage.setItem("cl", n);

}

function showSynonyms()
{
    var num=localStorage.getItem("cl");
    //console.log(num);
    //clicks++;
    document.getElementById("headbar").innerText="CLASS "+num;
    //document.getElementById("day").innerText="DAY "+clicks;
    //btn restcit code
    /*const date=new Date();
    const d=date.getMinutes();
    const h=date.getHours();
   
    localStorage.setItem("nc", clicks);
    localStorage.setItem("date", d);
    localStorage.setItem("hour", h);*/
    //
    if(num==1)
    {
        read_file("classonesyn.txt");
    }
    else if(num==2)
    {
        read_file("classtwosyn.txt");
    }
    else if(num==3)
    {
        read_file("classthreesyn.txt");
    }
    else if(num==4)
    {
        read_file("classfoursyn.txt");
    }
    else if(num==5)
    {
        read_file("classfivesyn.txt");
    }else if(num==6)
    {
        read_file("classsixsyn.txt");
    }
    else if(num==7)
    {
        read_file("classsevensyn.txt");
    }
    else if(num==8)
    {
        read_file("classeightsyn.txt");
    }
}

function exitClass()
{
    localStorage.clear();
    location.href="home.html";
}

var num_clicks=1;
async function read_file(fn){

    var index=0;    
    let response = await fetch(fn);
    let data = await response.text();
    let data_arr=data.split("~")
    //console.log("Data arr: "+data_arr);
    generate_equation(data_arr, num_clicks)

    
    
}


async function generate_equation(arr_data, numberofClicks){
    
    if(numberofClicks>0){

            if(numberofClicks<arr_data.length){
                days_data=arr_data[numberofClicks-1]
                lst_data=days_data.split("|")
                //console.log("Last: "+lst_data);
                var str, i=1;
                document.getElementById("day").innerText="DAY "+numberofClicks;
                lst_data.forEach(function(slide) {
                ele=slide.split("-")  ;
                str=`<h3><small style="font-size:3vh">Word:</small> ${ele[0]}</h3><h5 style="color:red; "><small style="color: black">Synonyms</small><br>${ele[1]}</h5>`;
                document.getElementById(`ext${i}`).innerHTML = str;
                i++;
                });

           
            
            next.addEventListener("click", function(){
            /*const audio = document.getElementById("myAudio"); 
            audio.play();*/
                numberofClicks=numberofClicks+1;
                generate_equation(arr_data, numberofClicks)
            });

            prev.addEventListener("click", function(){
                numberofClicks=numberofClicks-1
                generate_equation(arr_data, numberofClicks)
            }) ;
            
            }
            else{

                numberofClicks=arr_data.length

            }


            }

    else{
    numberofClicks=1

    }
    }


    
      
    //    read_file()
    