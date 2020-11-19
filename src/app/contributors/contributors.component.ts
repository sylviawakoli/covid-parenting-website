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

  contributors: Contributor[] = [];//holds all the contribtors from the server
  visibleContributors: Contributor[] = [];//holds the contribtors being view
  showloadMoreButton: boolean = true;
  maxContributorsToShow: number = 9;//used to show contributors in batches

  constructor() {
    this.visibleContributors = CONTRIBUTORS_LIST.sort((a, b) => a.name.localeCompare(b.name));
    // this.viewMoreContributors();
  }

  ngOnInit(): void { }

  public viewMoreContributors() {
    console.log("visibleContributors = " + this.visibleContributors.length + " | contributors = "+ this.contributors.length);
    if (this.visibleContributors.length == 0) {
        this.addElementsToVisibleContributors(0);
      } else if (this.visibleContributors.length > 0) {
        if (this.visibleContributors.length < this.contributors.length) {
          this.addElementsToVisibleContributors(this.contributors.length );
        }
      }
  
      this.showloadMoreButton = this.visibleContributors.length < this.contributors.length;
    }
  
    private addElementsToVisibleContributors(startIndex: number) {
      let index: number;
      let counter: number = 0;
      for (index = startIndex; index < this.contributors.length; index++) {
        if (counter == this.maxContributorsToShow) {
          break;
        }
        this.visibleContributors.push(this.contributors[index]);
        counter++;
      }
    }

}

const CONTRIBUTORS_LIST: Contributor[] = [
  { name: "Abraham Likhy",title: "", thumnailSrc: "/" },
  { name: "Adejola Awosanya",title: "", thumnailSrc: "/" },
  { name: "Ah Suhn Ghoemeh",title: "Member, Akha Language and Culture Committee", thumnailSrc: "/" },
  { name: "Alexis Rinckenbach", title: "", thumnailSrc: "/" },
  { name: "Anabela Araújo Pedrosa", title: "", thumnailSrc: "/" },
  { name: "Ani Jokhadze",title: "", thumnailSrc: "/" },
  { name: "Ani Movsisyan", title: "", thumnailSrc: "/" },
  { name: "Anja Goena", title: "", thumnailSrc: "/" },
  { name: "Anna Booij", title: "", thumnailSrc: "/" },
  { name: "Anton Putilin", title: "", thumnailSrc: "/" },
  { name: "Aye Aye Yee", title: "Education Specialist, UNICEF", thumnailSrc: "/" },
  { name: "Ashin Vonnisara, Dhammasariya", title: "Advisor, Tai Lay Language and culture committee", thumnailSrc: "/" },
  { name: "Barbara Ruegger", title: "", thumnailSrc: "/" },
  { name: "Bernice Landoy", title: "", thumnailSrc: "/" },
  { name: "Brenda May", title: "", thumnailSrc: "/" },
  { name: "Brigitte de Hulsters", title: "", thumnailSrc: "/" },
  { name: "Bumblebee Graphics", title: "", thumnailSrc: "/" },
  { name: "Cai Lon", title: "Treasurer & Office manager, Language and Culture Convention", thumnailSrc: "/" },
  { name: "Carolyn Namutebi", title: "", thumnailSrc: "/" },
  { name: "Cassia Carvalho", title: "Global Partnership to End Violence Against Children", thumnailSrc: "/" },
  { name: "Catia Magalhaes", title: "", thumnailSrc: "/" },
  { name: "Christian Kubb", title: "", thumnailSrc: "/" },
  { name: "Crous M. Hlungwani", title: "University of Venda", thumnailSrc: "/" },
  { name: "Dani Sadatun", title: "", thumnailSrc: "/" },
  { name: "Debbie Harvey", title: "", thumnailSrc: "/" },
  { name: "Deo Mputu",title: "", thumnailSrc: "/" },
  { name: "Diketso",title: "", thumnailSrc: "/" },
  { name: "Dora Jurjević",title: "Croatian Association on Early Childhood intervention", thumnailSrc: "/" },
    { name: "Educo Bangladesh",title: "", thumnailSrc: "/" },
  { name: "Elona Toska",title: "UKRI GCRF Accelerate Hub; Department of Sociology, University of Cape Town", thumnailSrc: "/" },
  { name: "Emily Vargas",title: "Baron", thumnailSrc: "/" },
  { name: "Esther Kimokoti",title: "", thumnailSrc: "/" },
  { name: "Euni Motsa",title: "", thumnailSrc: "/" },
  { name: "Fatuma Abdullahi",title: "Danish Refugee Council, Somalia", thumnailSrc: "/" },
  { name: "Filipa Laureano",title: "", thumnailSrc: "/" },
  { name: "Foundation for Disaster Forum", title: "", thumnailSrc: "/" },
  { name: "Fundiswa Menziwa", title: "", thumnailSrc: "/" },
  { name: "Gauri Divan",title: "", thumnailSrc: "/" },
  { name: "Gillian Mupotsa",title: "", thumnailSrc: "/" },
  { name: "Gilmon",title: "Secretary 2, Lahu Language and Culture Convention", thumnailSrc: "/" },
  { name: "Godfrey Siu",title: "CHDC School of Medicine, Makerere University College of Health Sciences", thumnailSrc: "/" },
  { name: "Hanna Heikkilä",title: "", thumnailSrc: "/" },
  { name: "Hjördís Eva Þórðardóttir",title: "", thumnailSrc: "/" },
  { name: "Hoi Ching Wong",title: "", thumnailSrc: "/" },
  { name: "Ida Ferdinandi",title: "UNICEF Country Office in Montenegro", thumnailSrc: "/" },
  { name: "Imaad Ahmed",title: "", thumnailSrc: "/" },
  { name: "Ingrid Danila",title: "", thumnailSrc: "/" },
  { name: "Ivo Kunovski",title: "", thumnailSrc: "/" },
  { name: "Jaan Aalam",title: "", thumnailSrc: "/" },
  { name: "Jitendra Jaiswal",title: "Webdunia.com", thumnailSrc: "/" },
  { name: "Joel Kubwimana",title: "John Isaac", thumnailSrc: "/" },
  { name: "John Kjobli",title: "", thumnailSrc: "/" },
  { name: "Joseph Osafo",title: "", thumnailSrc: "/" },
  { name: "Joyce Wamoyi",title: "National Institute for Medical Research in Tanzania", thumnailSrc: "/" },
  { name: "József Cser",title: "", thumnailSrc: "/" },
  { name: "Ju Hee Lee",title: "", thumnailSrc: "/" },
  { name: "Karolina Stępniewska",title: "mamotoja.pl", thumnailSrc: "/" },
  { name: "Khin May Tun Chit",title: "National Consultant, Myanmar, UNICEF", thumnailSrc: "/" },
  { name: "Khin Myint Khine",title: "UNICEF", thumnailSrc: "/" },
  { name: "Khong Ba Aung",title: "Khong So Chin Language and Culture Committee", thumnailSrc: "/" },
  { name: "Lena Godfrey",title: "", thumnailSrc: "/" },
  { name: "Lokwang Apaloryonokodos",title: "", thumnailSrc: "/" },
  { name: "Lenssa Teklu",title: "", thumnailSrc: "/" },
  { name: "Lia York",title: "University of Freiburg", thumnailSrc: "/" },
  { name: "Liane Alampay",title: "", thumnailSrc: "/" },
  { name: "Linda Beijer",title: "", thumnailSrc: "/" },
  { name: "Loredana Aramă",title: "", thumnailSrc: "/" },
  { name: "Macgerald Mujuru",title: "", thumnailSrc: "/" },
  { name: "Margiad williams",title: "", thumnailSrc: "/" },
  { name: "Maria Barbara C. de Menezes",title: "National Programme for Infant and Youth Health", thumnailSrc: "/" },
  { name: "Marina Banko",title: "", thumnailSrc: "/" },
  { name: "Marsha Habib",title: "", thumnailSrc: "/" },
  { name: "Massarwa ​Adeem",title: "", thumnailSrc: "/" },
  { name: "May Thet Thet Oo",title: "Education Officer, UNICEF", thumnailSrc: "/" },
  { name: "Melissa Gail Pancoast",title: "", thumnailSrc: "/" },
  { name: "Naeem Zafar",title: "Protection and Help of Children Against Abuse and Neglect (PAHCHAAN)", thumnailSrc: "/" },
  { name: "Naghmeh Firouz",title: "", thumnailSrc: "/" },
  { name: "Nang Sue Nge",title: "Teacher,  Tai Lay Language and culture committee", thumnailSrc: "/" },
  { name: "Naoko Imoto",title: "UNICEF Regional Office for Europe and Central Asia", thumnailSrc: "/" },
  { name: "Natalie McCauley",title: "", thumnailSrc: "/" },
  { name: "Nayomi Silva",title: "", thumnailSrc: "/" },
  { name: "Nelia Matinhure",title: "", thumnailSrc: "/" },
  { name: "Noel Kya heh",title: "Chairman, Literature department of Akha Baptist Convention", thumnailSrc: "/" },
  { name: "Ntsoaki Khosi",title: "Catholic Relief Service", thumnailSrc: "/" },
  { name: "Özge Dinç",title: "", thumnailSrc: "/" },
  { name: "Petra Brnić",title: "", thumnailSrc: "/" },
  { name: "Phil Green",title: "World Without Orphans", thumnailSrc: "/" },
  { name: "Priyanka Handa Ram",title: "", thumnailSrc: "/" },
  { name: "Priyanka Suryawanshi",title: "", thumnailSrc: "/" },
  { name: "Raghu Balachandran",title: "", thumnailSrc: "/" },
  { name: "Rasan Baqi",title: "UNICEF", thumnailSrc: "/" },
  { name: "Rocco Briganti",title: "Specchio Magico - Porcospini Project & CISMAI", thumnailSrc: "/" },
  { name: "Roe Nwe Wai",title: "Program Manager, The Leprosy Mission Myanmar", thumnailSrc: "/" },
  { name: "Rosanne Jocson",title: "", thumnailSrc: "/" },
  { name: "Rumaya Juhari",title: "", thumnailSrc: "/" },
  { name: "Rusudan Bochorishvili",title: "", thumnailSrc: "/" },
  { name: "Samuel Bojo",title: "", thumnailSrc: "/" },
  { name: "Sanjana Guha Roy",title: "", thumnailSrc: "/" },
  { name: "Sara Vargas",title: "", thumnailSrc: "/" },
  { name: "Say Sokpheap",title: "", thumnailSrc: "/" },
  { name: "Sergey Prokhorov",title: "", thumnailSrc: "/" },
  { name: "Seunghun J. Lee",title: "", thumnailSrc: "/" },
  { name: "Shepherd Sue",title: "", thumnailSrc: "/" },
  { name: "Sina Urmas",title: "", thumnailSrc: "/" },
  { name: "Sombat Tapanya",title: "", thumnailSrc: "/" },
  { name: "Sorcha Ní Cheilleachair",title: "", thumnailSrc: "/" },
  { name: "Susan Hillis",title: "", thumnailSrc: "/" },
  { name: "Tek Prasad and Milan Rijal",title: "", thumnailSrc: "/" },
  { name: "Tekonnang Timee",title: "Kiribati Teachers College", thumnailSrc: "/" },
  { name: "Terre des Hommes Netherlands Bangladesh ",title: "", thumnailSrc: "/" },
  { name: "Thein Tun Oo",title: "Computer person, Language and Culture Convention", thumnailSrc: "/" },
  { name: "Thi Thu Hien Nguyen",title: "", thumnailSrc: "/" },
  { name: "U Ohng Lwin",title: "Member of Akha Language and Culture Committee", thumnailSrc: "/" },
  { name: "Viorel Babii",title: "", thumnailSrc: "/" },
  { name: "William Iamasore Nasak",title: "", thumnailSrc: "/" },
  { name: "Wilmi Dippenaar",title: "", thumnailSrc: "/" },
  { name: "Yasmeen Abdullahi",title: "Danish Refugee Council, Somalia", thumnailSrc: "/" },
  { name: "Young Joo Lee",title: "", thumnailSrc: "/" },
  { name: "Zin Mar Theint",title: "PT (Rehabilitation Manager, The Leprosy Mission Myanmar)", thumnailSrc: "/" },
  { name: "Zuyi Fang",title: "Zuzana Kosmályová", thumnailSrc: "/" }]; 



