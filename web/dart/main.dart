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
    
    //hook button click events
    querySelector("#btnAdd").onClick.listen(btnAdd_Click);
    querySelector("#btnReset").onClick.listen(btnReset_Click);
}

//Add button click event callback
void btnAdd_Click(Event e){
    var protein = int.parse(enteredprot.value, onError: (source) => 0);
    if(protein > 0){
        total += protein;

        //update total
        totalProtein.text = "$total";

        var history = querySelector("#history");
        var newhistory = new LIElement();
        newhistory.text = "$protein protein added. Total protein is $total";
        newhistory.attributes['class'] = "list-group-item list-group-item-info";
        history.children.add(newhistory);
    }
}

//Reset button click event callback
void btnReset_Click(Event e){
    total = 0;

    //Reset values
    enteredprot.value = "0";
    totalProtein.text = "$total";

     var history = querySelector("#history");
     history.children.clear();
}

int intParseError(string value){
    return 0;
}