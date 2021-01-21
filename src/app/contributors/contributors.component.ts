import { Component, OnInit } from '@angular/core';

//todo. this model type should go to a global file of models
export type Contributor = {
  name: string;
  title: string;
  thumnailSrc: string;
};

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.scss']
})
export class ContributorsComponent implements OnInit {

  private allContributors: Contributor[] = [];//holds all the contribtors from the server
  public visibleContributors: Contributor[] = [];//holds the contribtors being view
  private lastStartIndex: number = 0;
  public bShowMoreButton: boolean = false;
  public maxContributorsToShow: number = 9;//used to show contributors in batches

  public letterRanges: string[][] = [["A", "B"], ["C", "F"], ["G", "J"], ["K", "L"], ["M", "P"], ["R", "S"], ["T", "Z"]];
  public selectedRange: string[] = ["A", "B"];

  constructor() {
    //sort all the contributors in alphabetical order
    this.allContributors = CONTRIBUTORS_LIST.sort((a, b) => a.name.localeCompare(b.name));
    this.viewMoreContributors();
  }

  ngOnInit(): void { }

  public onLetterRangeClick(range: string[]) {
    this.selectedRange = range;
    this.visibleContributors = []; //reset the visible array
    this.lastStartIndex = 0;
    this.viewMoreContributors();
  }//end method

  public viewMoreContributors() {
    let startIndex: number = this.lastStartIndex;
    let index: number;
    let counter: number = 0;
    let lowerLetter: string = this.selectedRange[0];
    let higherLetter: string = this.selectedRange[1];
    let firstLetter: string;

    for (index = startIndex; index < this.allContributors.length; index++) {
      if (counter == this.maxContributorsToShow) {
        break;
      }

      firstLetter = this.allContributors[index].name.substring(0, 1)
      //only add contributors with first letters that match the selected range
      if (firstLetter >= lowerLetter && firstLetter <= higherLetter) {
        this.visibleContributors.push(this.allContributors[index]);
        counter++;
      }

      this.lastStartIndex++; //increment last start index

    }//end for loop

    //set view more button visibility
    this.bShowMoreButton = this.lastStartIndex < this.allContributors.length;
  }



}//end class

const CONTRIBUTORS_LIST: Contributor[] = [
  { name: "Abhay Kulkarni", title: "", thumnailSrc: "/" },
  { name: "Abraham Likhy", title: "", thumnailSrc: "/" },
  { name: "Adejola Awosanya", title: "", thumnailSrc: "/" },
  { name: "Andreia Frazão", title: "", thumnailSrc: "/" },
  { name: "Adriana Pequeno", title: "", thumnailSrc: "/" },
  { name: "Agnes Moinet", title: "", thumnailSrc: "/" },
  { name: "Ah Suhn Ghoemeh", title: "Member, Akha Language and Culture Committee", thumnailSrc: "/" },
  { name: "Akanksha Joshi", title: "", thumnailSrc: "/" },
  { name: "Alexis Rinckenbach", title: "", thumnailSrc: "/" },
  { name: "Anabela Araújo Pedrosa", title: "", thumnailSrc: "/" },
  { name: "Andrey Pogorelov", title: "", thumnailSrc: "/" },
  { name: "Ani Jokhadze", title: "", thumnailSrc: "/" },
  { name: "Ani Movsisyan", title: "", thumnailSrc: "/" },
  { name: "Anja Goena", title: "", thumnailSrc: "/" },
  { name: "Anna Booij", title: "", thumnailSrc: "/" },
  { name: "Anna Wiman", title: "", thumnailSrc: "/" },
  { name: "Annick Masson", title: "", thumnailSrc: "/" },
  { name: "Anton Putilin", title: "", thumnailSrc: "/" },
  { name: "Anzet du Plessis", title: "", thumnailSrc: "/" },
  { name: "Arthur Silva", title: "", thumnailSrc: "/" },
  { name: "Aye Aye Yee", title: "Education Specialist, UNICEF", thumnailSrc: "/" },
  { name: "Ashin Vonnisara, Dhammasariya", title: "Advisor, Tai Lay Language and culture committee", thumnailSrc: "/" },
  { name: "Barbara Ruegger", title: "", thumnailSrc: "/" },
  { name: "Bernice Landoy", title: "", thumnailSrc: "/" },
  { name: "Brenda May", title: "", thumnailSrc: "/" },
  { name: "Brigitte de Hulsters", title: "", thumnailSrc: "/" },
  { name: "Bumblebee Graphics", title: "", thumnailSrc: "/" },
  { name: "Cai Lon", title: "Treasurer & Office manager, Language and Culture Convention", thumnailSrc: "/" },
  { name: "Carolyn Namutebi", title: "", thumnailSrc: "/" },
  { name: "Carlota Palacín Jordán", title: "", thumnailSrc: "/" },
  { name: "Cassia Carvalho", title: "Global Partnership to End Violence Against Children", thumnailSrc: "/" },
  { name: "Catia Magalhaes", title: "", thumnailSrc: "/" },
  { name: "Cecilia Sousa", title: "", thumnailSrc: "/" },
  { name: "Chinthanie Dissanayake", title: "", thumnailSrc: "/" },
  { name: "Christian Kubb", title: "", thumnailSrc: "/" },
  { name: "Cláudia Pinheiro Pereira", title: "", thumnailSrc: "/" },
  { name: "Crous M. Hlungwani", title: "University of Venda", thumnailSrc: "/" },
  { name: "Dani Sadatun", title: "", thumnailSrc: "/" },
  { name: "Dayana Guzman", title: "", thumnailSrc: "/" },
  { name: "Debbie Harvey", title: "", thumnailSrc: "/" },
  { name: "Deo Mputu", title: "", thumnailSrc: "/" },
  { name: "Diketso", title: "", thumnailSrc: "/" },
  { name: "Dora Jurjević", title: "Croatian Association on Early Childhood intervention", thumnailSrc: "/" },
  { name: "Elena Rodríguez Linares", title: "Baron", thumnailSrc: "/" },
  { name: "Elona Toska", title: "UKRI GCRF Accelerate Hub; Department of Sociology, University of Cape Town", thumnailSrc: "/" },
  { name: "Emily Vargas", title: "Baron", thumnailSrc: "/" },
  { name: "Emma Eriksson", title: "Baron", thumnailSrc: "/" },
  { name: "Emmanuel Edlet", title: "Baron", thumnailSrc: "/" },
  { name: "Esther Kimokoti", title: "", thumnailSrc: "/" },
  { name: "Euni Motsa", title: "", thumnailSrc: "/" },
  { name: "Fabiana Zuccatto", title: "", thumnailSrc: "/" },
  { name: "Fatuma Abdullahi", title: "Danish Refugee Council, Somalia", thumnailSrc: "/" },
  { name: "Filipa Laureano", title: "", thumnailSrc: "/" },
  { name: "Found nation for Disaster Forum", title: "", thumnailSrc: "/" },
  { name: "Fundiswa Menziwa", title: "", thumnailSrc: "/" },
  { name: "Gabriela Garrido", title: "", thumnailSrc: "/" },
  { name: "Gauri Divan", title: "", thumnailSrc: "/" },
  { name: "Gerli Sirk", title: "", thumnailSrc: "/" },
  { name: "Gillian Mupotsa", title: "", thumnailSrc: "/" },
  { name: "Gilmon", title: "Secretary 2, Lahu Language and Culture Convention", thumnailSrc: "/" },
  { name: "Godfrey Siu", title: "CHDC School of Medicine, Makerere University College of Health Sciences", thumnailSrc: "/" },
  { name: "Hanna Heikkilä", title: "", thumnailSrc: "/" },
  { name: "Hjördís Eva Þórðardóttir", title: "", thumnailSrc: "/" },
  { name: "Hoi Ching Wong", title: "", thumnailSrc: "/" },
  { name: "Hussain Jafari", title: "", thumnailSrc: "/" },
  { name: "Ida Ferdinandi", title: "UNICEF Country Office in Montenegro", thumnailSrc: "/" },
  { name: "Imaad Ahmed", title: "", thumnailSrc: "/" },
  { name: "Ingrid Danila", title: "", thumnailSrc: "/" },
  { name: "Isabelle Beaumont", title: "", thumnailSrc: "/" },
  { name: "Ivo Kunovski", title: "", thumnailSrc: "/" },
  { name: "Jaan Aalam", title: "", thumnailSrc: "/" },
  { name: "Jean Heber Bellefleur", title: "", thumnailSrc: "/" },
  { name: "Jitendra Jaiswal", title: "Webdunia.com", thumnailSrc: "/" },
  { name: "Joel Kubwimana", title: "John Isaac", thumnailSrc: "/" },
  { name: "John Kjobli", title: "", thumnailSrc: "/" },
  { name: "Jonathan Vannieuwkerke", title: "", thumnailSrc: "/" },
  { name: "Joseph Osafo", title: "", thumnailSrc: "/" },
  { name: "Josphine Joseph", title: "", thumnailSrc: "/" },
  { name: "Joyce Wamoyi", title: "National Institute for Medical Research in Tanzania", thumnailSrc: "/" },
  { name: "József Cser", title: "", thumnailSrc: "/" },
  { name: "Ju Hee Lee", title: "", thumnailSrc: "/" },
  { name: "Julia Yada", title: "", thumnailSrc: "/" },
  { name: "Kamal Abdulhadi ibrahim", title: "", thumnailSrc: "/" },
  { name: "Karolina Stępniewska", title: "mamotoja.pl", thumnailSrc: "/" },
  { name: "Ketu Shah", title: "", thumnailSrc: "/" },
  { name: "Kingson Forestal", title: "", thumnailSrc: "/" },
  { name: "Khin May Tun Chit", title: "National Consultant, Myanmar, UNICEF", thumnailSrc: "/" },
  { name: "Khin Myint Khine", title: "UNICEF", thumnailSrc: "/" },
  { name: "Khong Ba Aung", title: "Khong So Chin Language and Culture Committee", thumnailSrc: "/" },
  { name: "Lena Godfrey", title: "", thumnailSrc: "/" },
  { name: "Lokwang Apaloryonokodos", title: "", thumnailSrc: "/" },
  { name: "Lenssa Teklu", title: "", thumnailSrc: "/" },
  { name: "Lia York", title: "University of Freiburg", thumnailSrc: "/" },
  { name: "Liane Alampay", title: "", thumnailSrc: "/" },
  { name: "Linda Beijer", title: "", thumnailSrc: "/" },
  { name: "Loredana Aramă", title: "", thumnailSrc: "/" },
  { name: "Lucia Sosa", title: "", thumnailSrc: "/" },
  { name: "Luxshika Kannan", title: "", thumnailSrc: "/" },
  { name: "Mabel Carvalho", title: "", thumnailSrc: "/" },
  { name: "Macgerald Mujuru", title: "", thumnailSrc: "/" },
  { name: "Margiad williams", title: "", thumnailSrc: "/" },
  { name: "Maria Barbara C. de Menezes", title: "National Programme for Infant and Youth Health", thumnailSrc: "/" },
  { name: "Marina Banko", title: "", thumnailSrc: "/" },
  { name: "Marina Hennies", title: "", thumnailSrc: "/" },
  { name: "Marsha Habib", title: "", thumnailSrc: "/" },
  { name: "Maryam Ardakani", title: "", thumnailSrc: "/" },
  { name: "Maryam Ardakani", title: "", thumnailSrc: "/" },  
  { name: "Massarwa ​Adeem", title: "", thumnailSrc: "/" },
  { name: "Mathilde Bapsères", title: "", thumnailSrc: "/" },
  { name: "May Thet Thet Oo", title: "Education Officer, UNICEF", thumnailSrc: "/" },
  { name: "Melissa Gail Pancoast", title: "", thumnailSrc: "/" },
  { name: "Meti Debela", title: "", thumnailSrc: "/" },
  { name: "Mir Shamsullah Beghash", title: "", thumnailSrc: "/" },
  { name: "Moa Schafer", title: "", thumnailSrc: "/" },
  { name: "Mohamed Aberzak", title: "", thumnailSrc: "/" },
  { name: "Mohammad Arif Fazli", title: "", thumnailSrc: "/" },
   { name: "Mohammedsham Harun", title: "", thumnailSrc: "/" },
  { name: "Monika Saraf", title: "", thumnailSrc: "/" },
  { name: "Monique Bovet", title: "", thumnailSrc: "/" },
  { name: "Muskan Yadav", title: "", thumnailSrc: "/" },
  { name: "Nadia Baranovska", title: "", thumnailSrc: "/" },
  { name: "Nádia Oliveira", title: "", thumnailSrc: "/" },
  { name: "Nadine Watson", title: "", thumnailSrc: "/" },
  { name: "Naeem Zafar", title: "Protection and Help of Children Against Abuse and Neglect (PAHCHAAN)", thumnailSrc: "/" },
  { name: "Naghmeh Firouz", title: "", thumnailSrc: "/" },
  { name: "Nang Sue Nge", title: "Teacher,  Tai Lay Language and culture committee", thumnailSrc: "/" },
  { name: "Naoko Imoto", title: "UNICEF Regional Office for Europe and Central Asia", thumnailSrc: "/" },
  { name: "Natalia Micaela Moreno", title: "", thumnailSrc: "/" },
  { name: "Natalie McCauley", title: "", thumnailSrc: "/" },
  { name: "Nayomi Silva", title: "", thumnailSrc: "/" },
  { name: "Nelia Matinhure", title: "", thumnailSrc: "/" },
  { name: "Noel Kya heh", title: "Chairman, Literature department of Akha Baptist Convention", thumnailSrc: "/" },
  { name: "Noxolo Khanyile", title: "Chairman, Literature department of Akha Baptist Convention", thumnailSrc: "/" },
  { name: "Ntsoaki Khosi", title: "Catholic Relief Service", thumnailSrc: "/" },
  { name: "Olesya Price", title: "", thumnailSrc: "/" },
  { name: "Özge Dinç", title: "", thumnailSrc: "/" },
  { name: "Palak Vora", title: "", thumnailSrc: "/" },
  { name: "Parastoo Khoshpasand", title: "", thumnailSrc: "/" },
  { name: "Parvaneh Keivanfar", title: "", thumnailSrc: "/" },
  { name: "Patricia Martinez", title: "", thumnailSrc: "/" },
  { name: "Patricio Pacios", title: "", thumnailSrc: "/" },
  { name: "Patrick Hoffmann", title: "", thumnailSrc: "/" },
  { name: "Paula Santos", title: "", thumnailSrc: "/" },
  { name: "Petra Brnić", title: "", thumnailSrc: "/" },
  { name: "Phil Green", title: "World Without Orphans", thumnailSrc: "/" },
  { name: "Priyanka Handa Ram", title: "", thumnailSrc: "/" },
  { name: "Priyanka Suryawanshi", title: "", thumnailSrc: "/" },
  { name: "Rafael Cerutti Aguiar", title: "", thumnailSrc: "/" },
  { name: "Raghu Balachandran", title: "", thumnailSrc: "/" },
  { name: "Rasan Baqi", title: "UNICEF", thumnailSrc: "/" },
  { name: "Rocco Briganti", title: "Specchio Magico - Porcospini Project & CISMAI", thumnailSrc: "/" },
  { name: "Rocío Pozo", title: "", thumnailSrc: "/" },
  { name: "Roe Nwe Wai", title: "Program Manager, The Leprosy Mission Myanmar", thumnailSrc: "/" },
  { name: "Rosanne Jocson", title: "", thumnailSrc: "/" },
  { name: "Rumaya Juhari", title: "", thumnailSrc: "/" },
  { name: "Rusudan Bochorishvili", title: "", thumnailSrc: "/" },
  { name: "Samuele Ugazio", title: "", thumnailSrc: "/" },
  { name: "Samuel Bojo", title: "", thumnailSrc: "/" },
  { name: "Sanjana Guha Roy", title: "", thumnailSrc: "/" },
  { name: "Sara Vargas", title: "", thumnailSrc: "/" },
  { name: "Sarthak Goel", title: "", thumnailSrc: "/" },
  { name: "Saujanya Samant", title: "", thumnailSrc: "/" },
  { name: "Say Sokpheap", title: "", thumnailSrc: "/" },
  { name: "Sergey Prokhorov", title: "", thumnailSrc: "/" },
  { name: "Seunghun J. Lee", title: "", thumnailSrc: "/" },
  { name: "Sheila Ngake", title: "", thumnailSrc: "/" },
  { name: "Shepherd Sue", title: "", thumnailSrc: "/" },
  { name: "Silvia Cardoso Tratnik", title: "", thumnailSrc: "/" },
  { name: "Sina Urmas", title: "", thumnailSrc: "/" },
  { name: "Sombat Tapanya", title: "", thumnailSrc: "/" },
  { name: "Sorcha Ní Cheilleachair", title: "", thumnailSrc: "/" },
  { name: "Susan Hillis", title: "", thumnailSrc: "/" },
  { name: "Tamanna Arora", title: "", thumnailSrc: "/" },
  { name: "Tek Prasad and Milan Rijal", title: "", thumnailSrc: "/" },
  { name: "Tekonnang Timee", title: "Kiribati Teachers College", thumnailSrc: "/" },
  { name: "Thein Tun Oo", title: "Computer person, Language and Culture Convention", thumnailSrc: "/" },
  { name: "Thi Thu Hien Nguyen", title: "", thumnailSrc: "/" },
  { name: "U Ohng Lwin", title: "Member of Akha Language and Culture Committee", thumnailSrc: "/" },
  { name: "Venance Alwende Francois", title: "", thumnailSrc: "/" },
  { name: "Viorel Babii", title: "", thumnailSrc: "/" },
  { name: "William Iamasore Nasak", title: "", thumnailSrc: "/" },
  { name: "Willie Senanayake", title: "", thumnailSrc: "/" },
  { name: "Wilmi Dippenaar", title: "", thumnailSrc: "/" },
  { name: "Yamini Khare", title: "", thumnailSrc: "/" },
  { name: "Yasmeen Abdullahi", title: "Danish Refugee Council, Somalia", thumnailSrc: "/" },
  { name: "Young Joo Lee", title: "", thumnailSrc: "/" },
  { name: "Zin Mar Theint", title: "PT (Rehabilitation Manager, The Leprosy Mission Myanmar)", thumnailSrc: "/" },
  { name: "Zuyi Fang", title: "Zuzana Kosmályová", thumnailSrc: "/" }];



