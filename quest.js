function Player() {
    this.quests=[]
    this.completedQuests=[]

}
var player = new Player();

function Quest(Name="Nazwa Zadania", Desc="Opis zadania", Obj="cel", Required=1, Reward) {
    this.questDetails = {"name" : "A Quest", "desc" : "short description", "object":"name", "required" : 0, "completed" : 0, "reward" : 0, "finished" : 0};
    this.questDetails["name"] = Name
    this.questDetails["desc"] = Desc
    this.questDetails["object"] = Obj
    this.questDetails["required"] = Required
    this.questDetails["revard"] = Reward

    this.changeAmount = function(quantity, Player){
      if(!this.questDetails["finished"]){
        this.questDetails["completed"] += quantity;
        if (this.questDetails["completed"] >= this.questDetails["required"]) {
          this.finishQuest(Player);
        }
      }
      else {
        return
      }
    }

    this.finishQuest = function (Player) {
      this.questDetails["finished"] = 1;
      console.log("Quest is Finished");
    }
}

//Prymitywne testy

function kill(enemy){
  if(player.quests.length>=1){
    var curQuest = new Quest()
    for (var i = 0; i < player.quests.length; i++) {
      curQuest = player.quests[i]
      if(curQuest.questDetails["object"] === enemy){
        console.log(curQuest);
        curQuest.changeAmount(1, "player")//Ta linijka

      }
      else {
        console.log("no");
        }
      }
  }
  else {
    console.log(player.quests.length);
  }
}


function newQuest() {
  var myQuest = new Quest(
    Name=prompt("Podaj nazwę Zadania"),
    Desc=prompt("Podaj opis Zadania"),
    Obj=prompt("Podaj nazwę celu"),
    Required=prompt("Podaj ilość"),
    Reward = {"Supa słord":1, "Supa zbroja":2, "Gold":200},
  );
/*  myQuest.questDetails["name"]       = prompt("Podaj nazwę Zadania");
  myQuest.questDetails["desc"]       = prompt("Podaj opis Zadania");
  myQuest.questDetails["object"]          = prompt("Podaj nazwę celu");
  myQuest.questDetails["required"]   = prompt("Podaj ilość");
  var amt = prompt("Podaj ilość złota");
  myQuest.questDetails["reward"]     = {"Supa słord":amt, "Supa zbroja":amt, "Gold":amt};
*/
  player.quests.push(myQuest);
  console.log(player.quests);
}

newQuest()









/*

function quest() {
    this.questRequirements
    this.questDetails = {"name" : "A Quest"}
/*
    function changeAmount(quantity, player){
      if(!this.questDetails["finished"]){
        this.questDetails["completed"] += quantity
        if (this.questDetails["completed"] >= this.questDetails["required"]) {
          this.finishQuest(player)}
      }
      else {
        return
      }
    }
    function finishQuest(player) {
      this.quest_details["finished"] = 1
    }

}
var myQuest = new quest();
myQuest.questRequirements = "Dragon";
var x = myQuest.quest_details["name"]
console.log(x);
myQuest.quest_details["required"]   = 1;
//myQuest.quest_details["reward"]     = {"gold" : 100}
*/



/*
quest
      var
          quest_requirements = list()
          quest_details = list("name" = "A Quest", "finished" = 0, "completed" = 0, "required" = 0, "reward" = list())

      gather
          GET_5_APPLES
              quest_requirements = list(/obj/fruit/apple)
              New()
                  ..()
                  src.quest_details["name"]       = "GET_5_APPLES"
                  src.quest_details["finished"]   = 0
                  src.quest_details["completed"]  = 0
                  src.quest_details["required"]   = 5
                  src.quest_details["reward"]     = list("gold" = 100)
      kill
          SLAY_DRAGON
              quest_requirements = list(/mob/enemy/dragon)

          KILL_5_OGRES
              quest_requirements = list(/mob/enemy/ogre)
      proc
          changeAmount(quantity, mob/player)
              if(!src.quest_details["finished"])
                  src.quest_details["completed"] += quantity
                  if(src.quest_details["completed"] >= src.quest_details["required"])
                      src.finishQuest(player)
              else
                  return
          finishQuest(mob/player)
              src.quest_details["finished"] = 1













*/
