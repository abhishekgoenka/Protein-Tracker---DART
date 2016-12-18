import 'dart:html';

InputElement enteredprot;
DivElement totalProtein;
int total = 0;

void main(){

    //set default values and events
    initDefaultData();
    initDefaultEvents();
}

//initialize default values
void initDefaultData(){
    enteredprot = querySelector("#enterprotein");
    enteredprot.value = "0";

    totalProtein = querySelector("#totalProtein");
    totalProtein.text = "$total";

    var goal = querySelector("#goal");
    goal.value = 0;   
} 

void initDefaultEvents(){
    //hook add button click
    querySelector("#btnAdd").onClick.listen(addAmount);
}

//Add button click event callback
void addAmount(Event e){
    var amount = enteredprot.value;
    total += int.parse(amount);

    //update total
    totalProtein.text = "$total";
}