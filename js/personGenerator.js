const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Ксения",
            "id_5": "Вера",
            "id_6": "Наталья",
            "id_7": "Елизавета",
            "id_8": "Ольга",
            "id_9": "Евгения",
            "id_10": "Валентина"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Инженер",
            "id_2": "Монтажник",
            "id_3": "Слесарь",
            "id_4": "Летчик",
            "id_5": "Водитель",
            "id_6": "Шахтер",
            "id_7": "Строитель",
            "id_8": "Пограничник",
            "id_9": "Пожарный",
            "id_10": "Водолаз"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Врач",
            "id_2": "Учитель",
            "id_3": "Продавец",
            "id_4": "Домохозяйка",
            "id_5": "Дизайнер",
            "id_6": "Стюардесса",
            "id_7": "Официантка",
            "id_8": "Воспитатель",
            "id_9": "Парикмахер",
            "id_10": "Танцовщица"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function(){
        if (this.randomIntNumber() == 1){ 
            return this.GENDER_MALE;
        }else{ return this.GENDER_FEMALE}
    }
    ,

    randomFirstName: function(name) {
        if(name == 'Мужчина'){
        return this.randomValue(this.firstNameMaleJson);
        }else {return this.randomValue(this.firstNameFemaleJson)}
    },

    randomSurname: function(surName) {
        if(surName == 'Мужчина'){
        return this.randomValue(this.surnameJson);
        } else {return this.randomValue(this.surnameJson)+ 'a'}
    },

    randomFatherNames: function(fatherName) {

        let nameFathers = this.randomValue(this.firstNameMaleJson);
        console.log('nameFathers= ', nameFathers);
        let lastLetter = nameFathers.length-1;
        console.log('lastLetter= ', lastLetter);
        console.log('nameFathers[lastLetter]=', nameFathers[lastLetter])
        console.log('nameFathers.substring(0, lastLetter)= ', nameFathers.substring(0, lastLetter));

        if(fatherName == 'Мужчина'){
            if (nameFathers[lastLetter] == 'й') {
                console.log('й')
                return nameFathers.substring(0, lastLetter) + 'евич';
            } else if (nameFathers == 'Никита') {
                console.log('а')
                return nameFathers.substring(0, lastLetter) + 'ич';
            } else if (nameFathers == 'Михаил'){
                console.log('Михаил')
                return nameFathers.substring(0, lastLetter-1) + 'йлович';
            }else{
                console.log('все')
                return nameFathers + 'ович'};
        }else {
            if (nameFathers[lastLetter] == 'й') {
                console.log('й')
                return nameFathers.substring(0, lastLetter) + 'евна';
            } else if (nameFathers == 'Никита') {
                console.log('а')
                return nameFathers.substring(0, lastLetter) + 'ична';
            } else if (nameFathers == 'Михаил'){
                console.log('Михаил')
                return nameFathers.substring(0, lastLetter-1) + 'йловна';
            }else{
                console.log('все')
                return nameFathers + 'овна'}
            }
    },

    randomProfession: function(name) {
        if(name == 'Мужчина'){
            return this.randomValue(this.professionMaleJson);
        }else {return this.randomValue(this.professionFemaleJson)}
    },

    randomDay: function(){
        let month = this.randomValue(this.monthJson);
        let day;
        switch (month){
            case 'января':
            case 'марта':
            case 'мая':
            case 'июля':
            case 'августа':
            case 'октября':
            case 'декабря':
                day = this.randomIntNumber(31, 1);
                break;
            case 'апреля':
            case 'июня':
            case 'сентября': 
            case 'ноября': 
                day = this.randomIntNumber(30, 1);
                break; 
            default:
                day = this.randomIntNumber(28, 1);
            }
        return day + ' ' + month + ' ';
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.fatherNames = this.randomFatherNames(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.yearBirth = this.randomDay() + this.randomIntNumber(2004, 1950) + ' года рождения';
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person ;
    }
};