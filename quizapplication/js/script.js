const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

const wrapper=document.querySelector(".wrapper");
const quiz_box = document.querySelector(".quiz_box");
const passage_box = document.querySelector(".passage_box");

const show_ans = result_box.querySelector(".buttons .show_ans");
const quit_quiz = result_box.querySelector(".buttons .quit");

const next_btn = document.querySelector("footer .next_btn");
const prev_btn = document.querySelector("footer .prev_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

const answer_box=document.querySelector(".answer_box");
const psg=document.querySelector(".psg");
const ans=document.querySelector(".ans");

const ans_quit=document.querySelector(".ans_quit");
const back=document.querySelector(".back");

var searchParams = new URLSearchParams(document.location.search);
var clas=searchParams.get("class");
console.log(clas);

var cp;
if(clas==1)
{
    cp="I";
}
else if(clas==2)
{
    cp="II";
}


start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let psg_count=0;
let count;
let len=questions[cp].length;
let answ=[];


continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    start_btn.setAttribute("style", "opacity: 0;");
    wrapper.classList.add("activeWrapper");//show wrapper
    passage_box.classList.add("activePassage");//show passage
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showPasssage(psg_count);//calling showPassage function to fetch passage
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing 1 parameter to queCounter
    startTimer(2, 59); //calling startTimer function
    next_btn.classList.add("show"); //show the next button if user selected any option
    prev_btn.classList.add("show");     
}

function showPasssage(a){
    const passage_txt = wrapper.querySelector(".passage_txt");
    let psg_tag='<p>'+passage[cp][a].txt+'</p>';
    passage_txt.innerHTML=psg_tag;
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[cp][index].numb + ". " + questions[cp][index].question +'</span>';
    let option_tag1 = '<div class="option"><span id="option0"'+que_numb+'"><input type="radio" name=`option${que_count}` value="'+ questions[cp][index].options[0] +'">' + questions[cp][index].options[0] +'</span></div>';
    let option_tag2 = '<div class="option"><span  id="option1"'+que_numb+'"><input type="radio" name=`option${que_count}` value="'+ questions[cp][index].options[1] +'">' + questions[cp][index].options[1] +'</span></div>';
    let option_tag3 ='<div class="option" ><span id="option2"'+que_numb+'"><input type="radio" name=`option${que_count}` value="'+ questions[cp][index].options[2] +'">' + questions[cp][index].options[2] +'</span></div>';
    let option_tag4 = '<div class="option"><span  id="option3"'+que_numb+'"><input type="radio" name=`option${que_count}` value="'+ questions[cp][index].options[3] +'">' + questions[cp][index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag1+option_tag2+option_tag3+option_tag4; //adding new div tag inside option_tag
    let option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    let i;
    for(i=0; i < option.length; i++){
        //to select the option that has been clicked
        option[i].setAttribute("onclick", "optionSelected(this)");

        //if some option is already clicked to preserve the choice made earlier
        if(questions[cp].flag==true)
        {
            if(option[i].textContent==answ[que_count])
            {
                option[i].classList.add("tick");//indicating the previous choice
            }
        }
        
    }
   
}


function optionSelected(answer){
    let option = option_list.querySelectorAll(".option");
    let userAns = answer.textContent; //getting user selected option
    /** if the option selected is the very first selection */
    if(questions[cp].flag==false)
    {
        answ[que_count]=userAns;
        answer.classList.add("tick");//adding tick class to the option selected
        //console.log(answ[que_count]);
        questions[cp].flag=true;//to indicate that the option is being chosen
    }
    else/** if one option is already being selected */
    {

        for(i=0; i < option.length; i++)
        {
            if(option[i].textContent==answ[que_count])
            {
                option[i].classList.remove("tick");//to remove the previous tick class
            }            
        }
        answ[que_count]=userAns;//update the array with new answer
        answer.classList.add("tick");//adding tick class to the option selected
        //console.log(answ[que_count]);
        questions[cp].flag=true;//to indicate that the option is being chosen
    }
}


//when user clicks the quit button
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window    
}

//when user wants to see the answers
show_ans.onclick = ()=>{
    result_box.classList.remove("activeResult");//to remove the result box
    answer_box.classList.add("activeAnswer");//to show the answer box
    showPassageAns(0);
    ans.innerHTML="<h2>Answers:</h2><br>";
    for(i=0; i< len; i++)//len is already been declared at the beginning, it is the length of the questions
    {
    showAnswer(i);//calling showAnswer function
    }
    ans_quit.classList.add("show"); //showing the quit button
    back.classList.add("show");//showing the back button
}


//when user clicks back button
back.onclick = ()=>{
    answer_box.classList.remove("activeAnswer");//hide answers and get back to the result box
    result_box.classList.add("activeResult");  // to show result box  
}


//when user clicks quit
ans_quit.onclick = ()=>{
    window.location.reload(); //reload the current window
}


//function to show Passage for answer box
function showPassageAns(a){
    let ps_tag='<p>'+passage[cp][a].txt+'</p>';
    psg.innerHTML="<h2>Passage:</h2><br>"+ps_tag;//adding content to psg class element
}

//to show the answers of the passage
function showAnswer(b)
{
    let qu_tag=document.createElement("p");//creating a p element 
    let qu=document.createTextNode("Q"+questions[cp][b].numb+". "+questions[cp][b].question);//creating a text node having question
    qu_tag.appendChild(qu);//appending the text node in p element
    let ans_tag=document.createElement("p");//creating a new p element containing answers
    let an=document.createTextNode("Answer: "+questions[cp][b].numb+": "+questions[cp][b].answer);//creating a text node for answer
    ans_tag.appendChild(an);//appending text node in p element of answer's
    ans_tag.setAttribute("style", "margin-bottom: 20px;")//setting some bottom margins after the answer
    ans.appendChild(qu_tag);//appending question element
    ans.appendChild(ans_tag);   //appending answer element
}

//when next button is clicked
next_btn.onclick = ()=>{
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    if(que_numb <= len){ //if question count is less than total question length
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter        
    }else{
        clearInterval(counter); //clear counter
        showResult(); //calling showResult function
    }
}


//if prev ques button clicked
prev_btn.onclick= () =>{
    que_count--;//decrementing que_count by 1
    que_numb--;//decrementing que_numb by 1
    if(que_count >= 0)//only to reach question 1
    {
        showQuetions(que_count);//calling showQuestions function
        queCounter(que_numb);//calling counter
    }
    
}


//when user wants to see the result
function showResult(){
    info_box.classList.remove("activeInfo"); //hide info box
    wrapper.classList.remove("activeWrapper");//hide wrapper
    passage_box.classList.remove("activePassage");//hide passage box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    for(i=0; i< len; i++)
    {
        let correcAns = questions[cp][i].answer;// to get the right answer from the questions array
        if(answ[i]==correcAns)//to check whether the answer being chosen is right or not
        {
            userScore +=1;
        }
       // console.log(answ[i]);
    }
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions[cp].length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions[cp].length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions[cp].length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}


let min=timeCount.querySelector(".min");//to fetch the min class element
let sec=timeCount.querySelector(".sec");//to fetch the sec class element

function startTimer(m, s){    
    counter = setInterval(timer, 1000);//to establish an interval after every second
    function timer(){        
        min.textContent=m;//changing the value of minute
        sec.textContent = s; //changing the value of second
        s--; //decrement the time value
        if(s < 9 && s > -1){ //if timer is less than 9
            //console.log("1 m "+m+" s "+s);
            let addZero = sec.textContent; 
            sec.textContent = "0" + addZero; //add a 0 before time value
            if(s==0)//if sec turns to be 0
            {
                //console.log("2 m "+m+" s "+s);
                s=59;//again initializing with 59
                m=m-1;//and decrementing 1 minute
                if(m < 0)//when minutes ends or time ends
                {
                    //console.log("3 m "+m+" s "+s);
                    //timeText.textContent="Time Off";
                    clearInterval(counter);//clearing the interval                 
                     showResult();//to show result
                }
                else{
                    startTimer(m, s);//to again call the timer if minute is not less than 0
                }
                
            }
         }            
     }
}

//to call the question counter
function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ len +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
    