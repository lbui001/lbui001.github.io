function makeList() {
    let listData = [
        "Standard American Eskimo Dog",
        "Bichon Frise",
        "Boston Terrier",
        "Bulldog",
        "Chinese Shar-Pei",
        "Chow Chow",
        "Coton de Tulear",
        "Dalmatian",
        "Finnish Spitz",
        "French Bulldog",
        "Keeshond",
        "Lhasa Apso",
        "Lowchen",
        "Norwegian Lundehund",
        "Standard Poodle",
        "Schipperke",
        "Shiba Inu",
        "Tibetan Spaniel",
        "Tibetan Terrier",
        "Standard Xoloitzcuintli"
    ],
    listContainer = document.createElement('div'),
    listElement = document.createElement('ul'),
    numberOfListItems = listData.length,
    listItem,
    i;
    
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        listItem = document.createElement('li');
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }
}
makeList();

function addItem(){
	var ul = document.getElementById("dog-breed");
  var dog = document.getElementById("dog");
  var li = document.createElement("li");
  li.setAttribute('id',dog.value);
  li.appendChild(document.createTextNode(dog.value));
  ul.appendChild(li);
}
