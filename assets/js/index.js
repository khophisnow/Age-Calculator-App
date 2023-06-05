const months = [31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculate(){
    let inputDay =document.getElementById("inputDay").value;
    let inputMonth =document.getElementById("inputMonth").value;
    let inputYear =document.getElementById("inputYear").value;

    let today = new Date();
    let currentDate = today.getDate();
    let currentMonth = today.getMonth()+1;
    let currentYear = today.getFullYear();

/*--------------------------------------------------------------
# Empty Error (groups)
--------------------------------------------------------------*/

if(incorrect = (inputDay==null && inputMonth==null && inputYear==null) || (inputDay=='' && inputMonth=='' && inputYear=='') ){
    if (incorrect) {
        // label color   
        document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
        document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
        document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
        // inputs borderColor 
        document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
        document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
        document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
        document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
        document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
        // Error message
        document.getElementById('inputMonthErr').innerHTML = "This field is required";
        document.getElementById('inputDayErr').innerHTML = "This field is required";
        document.getElementById('inputYearErr').innerHTML = "This field is required";
        document.getElementById('years').innerHTML = "- -";
        document.getElementById('months').innerHTML = "- -";
        document.getElementById('days').innerHTML = "- -";
        return false;
    }
    else{
        // removing error messages 
        // label color   
        document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
        document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
        document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
        // inputs borderColor 
        document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
        document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
        document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
        // inputs backgroundColor
        document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
        document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
        document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
        // Error message
        document.getElementById('inputDayErr').innerHTML = "";
        document.getElementById('inputMonthErr').innerHTML = "";
        document.getElementById('inputYearErr').innerHTML = "";

        birthYear = currentYear - inputYear;

        if(currentMonth >= inputMonth){
            birthMonth = currentMonth - inputMonth;
        }
        else{
            birthYear--;
            birthMonth = 12 + currentMonth - inputMonth;
        }

        if(currentDate >= inputDay){
            birthDate = currentDate - inputDay;
        }
        else{
            birthMonth--;
            let days = months[currentMonth - 2];
            birthDate = days + currentDate - inputDay;
            if(birthMonth < 0){
                birthMonth = 11;
                birthYear--;
            }
        }
        displayResult(birthDate,birthMonth,birthYear);
        return true;
    
        function displayResult(bDate,bMonth,bYear){
            document.getElementById("years").innerHTML = bYear;
            document.getElementById("months").innerHTML = bMonth;
            document.getElementById("days").innerHTML = bDate;
        }
    }
}

    else if(incorrect = ((inputDay==null && inputMonth==null) || (inputDay=='' && inputMonth=='')) &&  (inputYear!= null || inputYear!= '')){
            if (incorrect) {
                // label color   
                document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
                document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
                document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
                // inputs borderColor 
                document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
                document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
                // inputs backgroundColor
                document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
                document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
                document.getElementById('inputYear').style.backgroundColor = "hsl(0, 0%, 100%)";
                // Error message
                document.getElementById('inputMonthErr').innerHTML = "This field is required";
                document.getElementById('inputDayErr').innerHTML = "This field is required";
                document.getElementById('inputYearErr').innerHTML = "";
                document.getElementById('years').innerHTML = "- -";
                document.getElementById('months').innerHTML = "- -";
                document.getElementById('days').innerHTML = "- -";
                return false;
            }
            else{
                // removing error messages 
                // label color   
                document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
                document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
                document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
                // inputs borderColor 
                document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
                document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
                // inputs backgroundColor
                document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
                document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
                document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
                // Error message
                document.getElementById('inputDayErr').innerHTML = "";
                document.getElementById('inputMonthErr').innerHTML = "";
                document.getElementById('inputYearErr').innerHTML = "";

                birthYear = currentYear - inputYear;

                if(currentMonth >= inputMonth){
                    birthMonth = currentMonth - inputMonth;
                }
                else{
                    birthYear--;
                    birthMonth = 12 + currentMonth - inputMonth;
                }
        
                if(currentDate >= inputDay){
                    birthDate = currentDate - inputDay;
                }
                else{
                    birthMonth--;
                    let days = months[currentMonth - 2];
                    birthDate = days + currentDate - inputDay;
                    if(birthMonth < 0){
                        birthMonth = 11;
                        birthYear--;
                    }
                }
                displayResult(birthDate,birthMonth,birthYear);
                return true;
            
                function displayResult(bDate,bMonth,bYear){
                    document.getElementById("years").innerHTML = bYear;
                    document.getElementById("months").innerHTML = bMonth;
                    document.getElementById("days").innerHTML = bDate;
                }
            }

        }
    
    else if(incorrect = ((inputDay==null && inputYear==null) || (inputDay=='' && inputYear=='')) &&  (inputMonth!= null || inputMonth!= '')){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "This field is required";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "This field is required";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = ((inputMonth==null && inputYear==null) || (inputMonth=='' && inputYear=='')) &&  (inputDay!= null || inputDay!= '')){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "This field is required";
            document.getElementById('inputYearErr').innerHTML = "This field is required";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

/*--------------------------------------------------------------
# Empty Error (Individual)
--------------------------------------------------------------*/
    else if(incorrect = ((inputDay==null) || (inputDay=='')) && ((inputMonth!= null || inputMonth!= '') && (inputYear!= null || inputYear!= ''))){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "hsl(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "This field is required";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = ((inputMonth==null) || (inputMonth=='')) && ((inputDay!= null || inputDay!= '') && (inputYear!= null || inputYear!= ''))){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsl(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "This field is required";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = ((inputYear==null) || (inputYear=='')) && ((inputDay!= null || inputDay!= '') && (inputMonth!= null || inputMonth!= ''))){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "This field is required";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }
        

/*--------------------------------------------------------------
# Groups Error
--------------------------------------------------------------*/

    else if(incorrect = ((inputDay < 1) || (inputDay > 31)) && ((inputMonth < 1) || (inputMonth > 12)) && (inputYear > currentYear) ){
        if (incorrect) {
                // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "Must be a valid day";
            document.getElementById('inputMonthErr').innerHTML = "Must be a valid month";
            document.getElementById('inputYearErr').innerHTML = "Must be in the past"; 
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = ((inputDay < 1) || (inputDay > 31)) && ((inputMonth < 1) || (inputMonth > 12))){
        if (incorrect) {
                // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "Must be a valid day";
            document.getElementById('inputMonthErr').innerHTML = "Must be a valid month";
            document.getElementById('inputYearErr').innerHTML = ""; 
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = ((inputDay < 1) || (inputDay > 31)) && (inputYear > currentYear)){
        if (incorrect) {
                // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "Must be a valid day";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "Must be in the past"; 
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = ((inputMonth < 1) || (inputMonth > 12)) && (inputYear > currentYear)){
        if (incorrect) {
                // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "Must be a valid month";
            document.getElementById('inputYearErr').innerHTML = "Must be in the past"; 
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }


/*--------------------------------------------------------------
# Individual Error
--------------------------------------------------------------*/
    else if(incorrect = (inputDay < 1) || (inputDay > 31)){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "Must be a valid day";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = (inputMonth < 1) || (inputMonth > 12)){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
             // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
             // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "Must be a valid month";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

    else if(incorrect = inputYear > currentYear ){
        if (incorrect) {
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
             // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
             // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "Must be in the past";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    }

/*--------------------------------------------------------------
# per month Error
--------------------------------------------------------------*/
   // April  
    else if(inputMonth=='4' || inputMonth=='04'){
        if(inputDay > months[3]){   
            // label color    
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor 
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message 
            document.getElementById('inputDayErr').innerHTML = "Must be a valid date";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    
    }

    // june
    else if(inputMonth=='6' || inputMonth=='06'){
        if(inputDay > months[5]){   
            // label color    
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor 
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message 
            document.getElementById('inputDayErr').innerHTML = "Must be a valid date";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    
    }

    // september
    else if(inputMonth=='9' || inputMonth=='09'){
        if(inputDay > months[8]){   
            // label color    
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor 
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message 
            document.getElementById('inputDayErr').innerHTML = "Must be a valid date";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    
    }

    // november
    else if(inputMonth=='11'){
        if(inputDay > months[10]){   
            // label color    
            document.getElementById('label1').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label2').style.color = "hsl(0, 100%, 67%)";
            document.getElementById('label3').style.color = "hsl(0, 100%, 67%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 100%, 67%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 100%, 67%)";
            // inputs backgroundColor 
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputMonth').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputYear').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            document.getElementById('inputDay').style.backgroundColor = "hsla(0, 100%, 67%, 0.015)";
            // Error message 
            document.getElementById('inputDayErr').innerHTML = "Must be a valid date";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            document.getElementById('years').innerHTML = "- -";
            document.getElementById('months').innerHTML = "- -";
            document.getElementById('days').innerHTML = "- -";
            return false;
        }
        else{
            // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "(0, 0%, 100%)";
            // Error message
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";
            birthYear = currentYear - inputYear;

            if(currentMonth >= inputMonth){
                birthMonth = currentMonth - inputMonth;
            }
            else{
                birthYear--;
                birthMonth = 12 + currentMonth - inputMonth;
            }
    
            if(currentDate >= inputDay){
                birthDate = currentDate - inputDay;
            }
            else{
                birthMonth--;
                let days = months[currentMonth - 2];
                birthDate = days + currentDate - inputDay;
                if(birthMonth < 0){
                    birthMonth = 11;
                    birthYear--;
                }
            }
            displayResult(birthDate,birthMonth,birthYear);
            return true;
        
            function displayResult(bDate,bMonth,bYear){
                document.getElementById("years").innerHTML = bYear;
                document.getElementById("months").innerHTML = bMonth;
                document.getElementById("days").innerHTML = bDate;
            }
        }
    
    }

    

else{
        // removing error messages 
            // label color   
            document.getElementById('label1').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label2').style.color = "hsl(0, 1%, 44%)";
            document.getElementById('label3').style.color = "hsl(0, 1%, 44%)";
            // inputs borderColor 
            document.getElementById('inputDay').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputMonth').style.borderColor = "hsl(0, 0%, 86%)";
            document.getElementById('inputYear').style.borderColor = "hsl(0, 0%, 86%)";
            // inputs backgroundColor
            document.getElementById('inputDay').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputMonth').style.backgroundColor = "hsl(0, 0%, 100%)";
            document.getElementById('inputYear').style.backgroundColor = "hsl(0, 0%, 100%)";
            // Error message
            document.getElementById('inputMonthErr').innerHTML = "";
            document.getElementById('inputDayErr').innerHTML = "";
            document.getElementById('inputYearErr').innerHTML = "";

        birthYear = currentYear - inputYear;

        if(currentMonth >= inputMonth){
            birthMonth = currentMonth - inputMonth;
        }
        else{
            birthYear--;
            birthMonth = 12 + currentMonth - inputMonth;
        }

        if(currentDate >= inputDay){
            birthDate = currentDate - inputDay;
        }
        else{
            birthMonth--;
            let days = months[currentMonth - 2];
            birthDate = days + currentDate - inputDay;
            if(birthMonth < 0){
                birthMonth = 11;
                birthYear--;
            }
        }
        displayResult(birthDate,birthMonth,birthYear);
        return true;
    }

        function displayResult(bDate,bMonth,bYear){
            document.getElementById("years").innerHTML = bYear;
            document.getElementById("months").innerHTML = bMonth;
            document.getElementById("days").innerHTML = bDate;
        }

    function leapChecker(year){
        if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
            months[1] = 29;
        }
        else{
            months[1]=28;
        }
    }

}