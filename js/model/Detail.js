function Detail(){
    this.name;
    this.type;
    this.desc;
    this.docs;
    this.version;
    this.publication
    this.contact;
    this.link;

    this.construct = function (name,type,desc,docs,version,publication,contact,link){
        this.setName(name);
        this.setType(type)
        this.setDesc(desc);
        this.setDocs(docs);
        this.setVersion(version);
        this.setPublication(publication);
        this.setContact(contact);
        this.setLink(link);
    }

    //Setters
    this.setName = function (name) {this.name = name;}
    this.setType = function (type) {this.type = type;}
    this.setDesc = function (desc){this.desc = desc;}
    this.setDocs = function (docs){this.docs = docs;}
    this.setVersion = function (version){this.version = version;}
    this.setPublication = function (publication){this.publication = publication;}
    this.setContact = function (contact){this.contact = contact;}
    this.setLink = function (link){this.link = link;}

    //Getters
    this.getName = function () {return this.name;}
    this.getType = function () {return this.type;}
    this.getDesc = function () {return this.desc;}
    this.getDocs = function () {return this.docs;}
    this.getVersion = function () {return this.version;}
    this.getPublication = function () {return this.publication;}
    this.getContact = function () {return this.contact;}
    this.getLink = function () {return this.link;}
}
