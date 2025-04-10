
const generarTags = (name, ps) => {
    arreglo = ["Num_Air_On","Algun_Air_On","Hora_Ini_1","Hora_Ini_2","Hora_Fin_1","Hora_Fin_2","Alarm_Adver","Run_Rem","Bloq_Auto_Hora","Ener_Dia","Ener_Tot"]
    arreglo2 = `[`
    arreglo.forEach(element => {
        arreglo2 = arreglo2 + `${`"${name}`.concat("_", `${element}`).concat("_", `${ps}"`).replaceAll("'", '"')},`
    });
    arreglo2 = arreglo2 + "]"
    return `${arreglo2}`
};

const generarTagsTA = (name) => {
    arreglo = ["InputsLN","OUTPUT","Num_Air_On","Horas_Trab_Act","Horas_Trab_Guar","Stat_Comm","Desactiva_TA"]
    arreglo2 = `[`
    for (let index = 0; index < name.length; index++) {
        arreglo.forEach(element => {
            arreglo2 = arreglo2 + `${`"${name[index]}`.concat(".", `${element}"`).replaceAll("'", '"')},`
            
        });
    }
    arreglo2 = arreglo2 + "]"
    return `${arreglo2}`
};

const generarTagsTCP = (name) => {
    arreglo = ["RCV_INPUTS","RCV_Horas_Trab_Act","RCV_Horas_Trab_Guar","RCV_Status_Comm_MB","RCV_Nun_Air_On","RCV_Volt_Trif","RCV_Corrien_Trif","Pot_trif","RCV_Factor_Pot","RCV_Volt_L1L2","RCV_Volt_L2L3","RCV_Volt_L3L1","RCV_Grup_Alarm1","RCV_Grup_Alarm2","RCV_Ener_Consu","RCV_Corriente_L1","RCV_Corriente_L2","RCV_Corriente_L3"]
    arreglo2 = `[`
    for (let index = 0; index < name.length; index++) {
        arreglo.forEach(element => {
            arreglo2 = arreglo2 + `${`"${name[index]}`.concat("_", `${element}"`).replaceAll("'", '"')},`     
        });     
    }
    arreglo2 = arreglo2 + "]"
    return `${arreglo2}`
};

const arregloTagsPS01Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA25","Lan_Ant_Stat_TA25","Lan_Ant_Pot_TA27","Lan_Ant_Stat_TA27"]`
};

const arregloTagsPS02Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA30","Lan_Ant_Stat_TA30","Lan_Ant_Pot_TA31","Lan_Ant_Stat_TA31"]`
};

const arregloTagsPS03Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA29","Lan_Ant_Stat_TA29","Lan_Ant_Pot_TA32","Lan_Ant_Stat_TA32"]`
};

const arregloTagsPS04Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA33","Lan_Ant_Stat_TA33"]`
};

const arregloTagsPS05Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA58","Lan_Ant_Stat_TA58"]`
};

const arregloTagsPS06Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA56","Lan_Ant_Stat_TA56","Lan_Ant_Pot_TA57","Lan_Ant_Stat_TA57"]`
};

const arregloTagsPS07Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA49","Lan_Ant_Stat_TA49","Lan_Ant_Pot_TA50","Lan_Ant_Stat_TA50"]`
};

const arregloTagsPS08Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA51","Lan_Ant_Stat_TA51","Lan_Ant_Pot_TA52","Lan_Ant_Stat_TA52"]`
};

const arregloTagsPS09Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA54","Lan_Ant_Stat_TA54","Lan_Ant_Pot_TA55","Lan_Ant_Stat_TA55"]`
};

const arregloTagsPS11Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA22","Lan_Ant_Stat_TA22","Lan_Ant_Pot_TA23","Lan_Ant_Stat_TA23","Lan_Ant_Pot_TA26","Lan_Ant_Stat_TA26"]`
};

const arregloTagsPS12Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA19","Lan_Ant_Stat_TA19","Lan_Ant_Pot_TA20","Lan_Ant_Stat_TA20"]`
};

const arregloTagsPS13Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA16","Lan_Ant_Stat_TA16","Lan_Ant_Pot_TA18","Lan_Ant_Stat_TA18"]`
};

const arregloTagsPS14Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA14","Lan_Ant_Stat_TA14","Lan_Ant_Pot_TA15","Lan_Ant_Stat_TA15"]`
};

const arregloTagsPS15Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA12","Lan_Ant_Stat_TA12","Lan_Ant_Pot_TA13","Lan_Ant_Stat_TA13"]`
};

const arregloTagsPS16Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA10","Lan_Ant_Stat_TA10","Lan_Ant_Pot_TA11","Lan_Ant_Stat_TA11"]`
};

const arregloTagsPS17Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA34","Lan_Ant_Stat_TA34","Lan_Ant_Pot_TA37","Lan_Ant_Stat_TA37"]`
};

const arregloTagsPS18Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA38","Lan_Ant_Stat_TA38","Lan_Ant_Pot_TA39","Lan_Ant_Stat_TA39"]`
};

const arregloTagsPS19Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA40","Lan_Ant_Stat_TA40","Lan_Ant_Pot_TA42","Lan_Ant_Stat_TA42"]`
};

const arregloTagsPS20Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA41","Lan_Ant_Stat_TA41","Lan_Ant_Pot_TA43","Lan_Ant_Stat_TA43"]`
};

const arregloTagsPS21AAntenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA44","Lan_Ant_Stat_TA44"]`
};

const arregloTagsPS21BAntenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA35","Lan_Ant_Stat_TA35","Lan_Ant_Pot_TA36","Lan_Ant_Stat_TA36","Lan_Ant_Pot_TA92","Lan_Ant_Stat_TA92"]`
};

const arregloTagsPS21CAntenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA53","Lan_Ant_Stat_TA53","Lan_Ant_Pot_TA61","Lan_Ant_Stat_TA61","Lan_Ant_Pot_TA65","Lan_Ant_Stat_TA65","Lan_Ant_Pot_TA66","Lan_Ant_Stat_TA66"]`
};

const arregloTagsPS22Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA63","Lan_Ant_Stat_TA63","Lan_Ant_Pot_TA99","Lan_Ant_Stat_TA99"]`
};

const arregloTagsPS23Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA47","Lan_Ant_Stat_TA47","Lan_Ant_Pot_TA48","Lan_Ant_Stat_TA48"]`
};

const arregloTagsPS24Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA45","Lan_Ant_Stat_TA45"]`
};

const arregloTagsPS25Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA62","Lan_Ant_Stat_TA62"]`
};

const arregloTagsPS26Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA64","Lan_Ant_Stat_TA64","Lan_Ant_Pot_TA67","Lan_Ant_Stat_TA67"]`
};

const arregloTagsPS27Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA69","Lan_Ant_Stat_TA69","Lan_Ant_Pot_TA70","Lan_Ant_Stat_TA70"]`
};

const arregloTagsPS28Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA73","Lan_Ant_Stat_TA73","Lan_Ant_Pot_TA96","Lan_Ant_Stat_TA96"]`
};

const arregloTagsPS29Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA71","Lan_Ant_Stat_TA71","Lan_Ant_Pot_TA97","Lan_Ant_Stat_TA97"]`
};

const arregloTagsPS35Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA02","Lan_Ant_Stat_TA02","Lan_Ant_Pot_TA03","Lan_Ant_Stat_TA03"]`
};

const arregloTagsPS36Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA04","Lan_Ant_Stat_TA04","Lan_Ant_Pot_TA06","Lan_Ant_Stat_TA06"]`
};

const arregloTagsPS37Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA05","Lan_Ant_Stat_TA05","Lan_Ant_Pot_TA07","Lan_Ant_Stat_TA07"]`
};

const arregloTagsPS38Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA76","Lan_Ant_Stat_TA76","Lan_Ant_Pot_TA94","Lan_Ant_Stat_TA94"]`
};

const arregloTagsPS39Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA74","Lan_Ant_Stat_TA74","Lan_Ant_Pot_TA95","Lan_Ant_Stat_TA95"]`
};

const arregloTagsPS40Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA75","Lan_Ant_Stat_TA75","Lan_Ant_Pot_TA98","Lan_Ant_Stat_TA98"]`
};

const arregloTagsPS41Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA77","Lan_Ant_Stat_TA77"]`
};

const arregloTagsPS43Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA83","Lan_Ant_Stat_TA83"]`
};

const arregloTagsPS43BAntenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA82","Lan_Ant_Stat_TA82"]`
};

const arregloTagsPS44Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA80","Lan_Ant_Stat_TA80"]`
};

const arregloTagsPS44BAntenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA81","Lan_Ant_Stat_TA81"]`
};

const arregloTagsPC101Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA59","Lan_Ant_Stat_TA59"]`
};

const arregloTagsPC102Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA28","Lan_Ant_Stat_TA28"]`
};

const arregloTagsPC103Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA46","Lan_Ant_Stat_TA46"]`
};

const arregloTagsPC104Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA93","Lan_Ant_Stat_TA93"]`
};

const arregloTagsPC105Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA21","Lan_Ant_Stat_TA21"]`
};

const arregloTagsPC106Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA24","Lan_Ant_Stat_TA24"]`
};

const arregloTagsPC107Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA01","Lan_Ant_Stat_TA01"]`
};

const arregloTagsPC108Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA08","Lan_Ant_Stat_TA08"]`
};

const arregloTagsPC109Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA60","Lan_Ant_Stat_TA60"]`
};

const arregloTagsPC110Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA17","Lan_Ant_Stat_TA17"]`
};

const arregloTagsPC111Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA09","Lan_Ant_Stat_TA09"]`
};

const arregloTagsPC114Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA79","Lan_Ant_Stat_TA79"]`
};

const arregloTagsPC115Antenas = () => {
    return arreglo = `["Lan_Ant_Pot_TA72","Lan_Ant_Stat_TA72"]`
};

const arregloTagsAntenasAllLanconor = () => {
    return arreglo = `["Lan_Ant_Pot_TA25","Lan_Ant_Stat_TA25","Lan_Ant_Pot_TA27","Lan_Ant_Stat_TA27","Lan_Ant_Pot_TA30","Lan_Ant_Stat_TA30","Lan_Ant_Pot_TA31","Lan_Ant_Stat_TA31","Lan_Ant_Pot_TA29","Lan_Ant_Stat_TA29","Lan_Ant_Pot_TA32","Lan_Ant_Stat_TA32","Lan_Ant_Pot_TA33","Lan_Ant_Stat_TA33","Lan_Ant_Pot_TA58","Lan_Ant_Stat_TA58","Lan_Ant_Pot_TA56","Lan_Ant_Stat_TA56","Lan_Ant_Pot_TA57","Lan_Ant_Stat_TA57","Lan_Ant_Pot_TA49","Lan_Ant_Stat_TA49","Lan_Ant_Pot_TA50","Lan_Ant_Stat_TA50","Lan_Ant_Pot_TA51","Lan_Ant_Stat_TA51","Lan_Ant_Pot_TA52","Lan_Ant_Stat_TA52","Lan_Ant_Pot_TA54","Lan_Ant_Stat_TA54","Lan_Ant_Pot_TA55","Lan_Ant_Stat_TA55","Lan_Ant_Pot_TA22","Lan_Ant_Stat_TA22","Lan_Ant_Pot_TA23","Lan_Ant_Stat_TA23","Lan_Ant_Pot_TA26","Lan_Ant_Stat_TA26","Lan_Ant_Pot_TA19","Lan_Ant_Stat_TA19","Lan_Ant_Pot_TA20","Lan_Ant_Stat_TA20","Lan_Ant_Pot_TA16","Lan_Ant_Stat_TA16","Lan_Ant_Pot_TA18","Lan_Ant_Stat_TA18","Lan_Ant_Pot_TA14","Lan_Ant_Stat_TA14","Lan_Ant_Pot_TA15","Lan_Ant_Stat_TA15","Lan_Ant_Pot_TA12","Lan_Ant_Stat_TA12","Lan_Ant_Pot_TA13","Lan_Ant_Stat_TA13","Lan_Ant_Pot_TA10","Lan_Ant_Stat_TA10","Lan_Ant_Pot_TA11","Lan_Ant_Stat_TA11","Lan_Ant_Pot_TA34","Lan_Ant_Stat_TA34","Lan_Ant_Pot_TA37","Lan_Ant_Stat_TA37","Lan_Ant_Pot_TA38","Lan_Ant_Stat_TA38","Lan_Ant_Pot_TA39","Lan_Ant_Stat_TA39","Lan_Ant_Pot_TA40","Lan_Ant_Stat_TA40","Lan_Ant_Pot_TA42","Lan_Ant_Stat_TA42","Lan_Ant_Pot_TA41","Lan_Ant_Stat_TA41","Lan_Ant_Pot_TA43","Lan_Ant_Stat_TA43","Lan_Ant_Pot_TA44","Lan_Ant_Stat_TA44","Lan_Ant_Pot_TA35","Lan_Ant_Stat_TA35","Lan_Ant_Pot_TA36","Lan_Ant_Stat_TA36","Lan_Ant_Pot_TA92","Lan_Ant_Stat_TA92","Lan_Ant_Pot_TA53","Lan_Ant_Stat_TA53","Lan_Ant_Pot_TA61","Lan_Ant_Stat_TA61","Lan_Ant_Pot_TA65","Lan_Ant_Stat_TA65","Lan_Ant_Pot_TA66","Lan_Ant_Stat_TA66","Lan_Ant_Pot_TA63","Lan_Ant_Stat_TA63","Lan_Ant_Pot_TA99","Lan_Ant_Stat_TA99","Lan_Ant_Pot_TA47","Lan_Ant_Stat_TA47","Lan_Ant_Pot_TA48","Lan_Ant_Stat_TA48","Lan_Ant_Pot_TA45","Lan_Ant_Stat_TA45","Lan_Ant_Pot_TA62","Lan_Ant_Stat_TA62","Lan_Ant_Pot_TA64","Lan_Ant_Stat_TA64","Lan_Ant_Pot_TA67","Lan_Ant_Stat_TA67","Lan_Ant_Pot_TA69","Lan_Ant_Stat_TA69","Lan_Ant_Pot_TA70","Lan_Ant_Stat_TA70","Lan_Ant_Pot_TA73","Lan_Ant_Stat_TA73","Lan_Ant_Pot_TA96","Lan_Ant_Stat_TA96","Lan_Ant_Pot_TA71","Lan_Ant_Stat_TA71","Lan_Ant_Pot_TA97","Lan_Ant_Stat_TA97","Lan_Ant_Pot_TA02","Lan_Ant_Stat_TA02","Lan_Ant_Pot_TA03","Lan_Ant_Stat_TA03","Lan_Ant_Pot_TA04","Lan_Ant_Stat_TA04","Lan_Ant_Pot_TA06","Lan_Ant_Stat_TA06","Lan_Ant_Pot_TA05","Lan_Ant_Stat_TA05","Lan_Ant_Pot_TA07","Lan_Ant_Stat_TA07","Lan_Ant_Pot_TA76","Lan_Ant_Stat_TA76","Lan_Ant_Pot_TA94","Lan_Ant_Stat_TA94","Lan_Ant_Pot_TA74","Lan_Ant_Stat_TA74","Lan_Ant_Pot_TA95","Lan_Ant_Stat_TA95","Lan_Ant_Pot_TA75","Lan_Ant_Stat_TA75","Lan_Ant_Pot_TA98","Lan_Ant_Stat_TA98","Lan_Ant_Pot_TA77","Lan_Ant_Stat_TA77","Lan_Ant_Pot_TA83","Lan_Ant_Stat_TA83","Lan_Ant_Pot_TA82","Lan_Ant_Stat_TA82","Lan_Ant_Pot_TA80","Lan_Ant_Stat_TA80","Lan_Ant_Pot_TA81","Lan_Ant_Stat_TA81","Lan_Ant_Pot_TA59","Lan_Ant_Stat_TA59","Lan_Ant_Pot_TA28","Lan_Ant_Stat_TA28","Lan_Ant_Pot_TA46","Lan_Ant_Stat_TA46","Lan_Ant_Pot_TA93","Lan_Ant_Stat_TA93","Lan_Ant_Pot_TA21","Lan_Ant_Stat_TA21","Lan_Ant_Pot_TA24","Lan_Ant_Stat_TA24","Lan_Ant_Pot_TA01","Lan_Ant_Stat_TA01","Lan_Ant_Pot_TA08","Lan_Ant_Stat_TA08","Lan_Ant_Pot_TA60","Lan_Ant_Stat_TA60","Lan_Ant_Pot_TA17","Lan_Ant_Stat_TA17","Lan_Ant_Pot_TA09","Lan_Ant_Stat_TA09","Lan_Ant_Pot_TA79","Lan_Ant_Stat_TA79","Lan_Ant_Pot_TA72","Lan_Ant_Stat_TA72","Lan_Ant_Pot_AP_Camp","Lan_Ant_Stat_AP_Camp","Lan_Ant_Pot_AP1","Lan_Ant_Stat_AP1","Lan_Ant_Pot_AP2","Lan_Ant_Stat_AP2","Lan_Ant_Pot_AP3","Lan_Ant_Stat_AP3","Lan_Ant_Pot_AP4","Lan_Ant_Stat_AP4","Lan_Ant_Pot_AP5","Lan_Ant_Stat_AP5","Lan_Ant_Pot_AP6","Lan_Ant_Stat_AP6","Lan_Ant_Pot_AP7","Lan_Ant_Stat_AP7","Lan_Ant_Pot_AP8","Lan_Ant_Stat_AP8","Lan_Ant_Pot_AP9","Lan_Ant_Stat_AP9","Lan_Ant_Pot_Camp","Lan_Ant_Stat_Camp","Lan_Ant_Pot_Crt_Elec","Lan_Ant_Stat_Crt_Elec","Lan_Ant_Pot_EB","Lan_Ant_Stat_EB","Lan_Ant_Pot_PtP_AP4","Lan_Ant_Stat_PtP_AP4","Lan_Ant_Pot_PtP_Camp_1","Lan_Ant_Stat_PtP_Camp_1","Lan_Ant_Pot_PtP_Camp_2","Lan_Ant_Stat_PtP_Camp_2"]`
};

const arregloTagsInfoGeneralPSLanconor = () => {
    return arreglo = `["PS01_DATA_PROCESS_Alarm_Air_On_PIS01","PS01_DATA_PROCESS_Num_Air_On_PIS01","PS01_DATA_PROCESS_Alarm_Adver_PIS_1","PS02_DATA_PROCESS_Alarm_Air_On_PIS02","PS02_DATA_PROCESS_Num_Air_On_PIS02","PS02_DATA_PROCESS_Alarm_Adver_PIS_2","PS03_DATA_PROCESS_Alarm_Air_On_PIS03","PS03_DATA_PROCESS_Num_Air_On_PIS03","PS03_DATA_PROCESS_Alarm_Adver_PIS_3","PS04_DATA_PROCESS_Alarm_Air_On_PIS04","PS04_DATA_PROCESS_Num_Air_On_PIS04","PS04_DATA_PROCESS_Alarm_Adver_PIS_4","PS05_DATA_PROCESS_Alarm_Air_On_PIS05","PS05_DATA_PROCESS_Num_Air_On_PIS05","PS05_DATA_PROCESS_Alarm_Adver_PIS_5","PS06_DATA_PROCESS_Alarm_Air_On_PIS06","PS06_DATA_PROCESS_Num_Air_On_PIS06","PS06_DATA_PROCESS_Alarm_Adver_PIS_6","PS07_DATA_PROCESS_Alarm_Air_On_PIS07","PS07_DATA_PROCESS_Num_Air_On_PIS07","PS07_DATA_PROCESS_Alarm_Adver_PIS_7","PS08_DATA_PROCESS_Alarm_Air_On_PIS08","PS08_DATA_PROCESS_Num_Air_On_PIS08","PS08_DATA_PROCESS_Alarm_Adver_PIS_8","PS09_DATA_PROCESS_Alarm_Air_On_PIS09","PS09_DATA_PROCESS_Num_Air_On_PIS09","PS09_DATA_PROCESS_Alarm_Adver_PIS_9","PS11_DATA_PROCESS_Alarm_Air_On_PIS11","PS11_DATA_PROCESS_Num_Air_On_PIS11","PS11_DATA_PROCESS_Alarm_Adver_PIS_11","PS12_DATA_PROCESS_Alarm_Air_On_PIS12","PS12_DATA_PROCESS_Num_Air_On_PIS12","PS12_DATA_PROCESS_Alarm_Adver_PIS_12","PS13_DATA_PROCESS_Alarm_Air_On_PIS13","PS13_DATA_PROCESS_Num_Air_On_PIS13","PS13_DATA_PROCESS_Alarm_Adver_PIS_13","PS14_DATA_PROCESS_Alarm_Air_On_PIS14","PS14_DATA_PROCESS_Num_Air_On_PIS14","PS14_DATA_PROCESS_Alarm_Adver_PIS_14","PS15_DATA_PROCESS_Alarm_Air_On_PIS15","PS15_DATA_PROCESS_Num_Air_On_PIS15","PS15_DATA_PROCESS_Alarm_Adver_PIS_15","PS16_DATA_PROCESS_Alarm_Air_On_PIS16","PS16_DATA_PROCESS_Num_Air_On_PIS16","PS16_DATA_PROCESS_Alarm_Adver_PIS_16","PS17_DATA_PROCESS_Alarm_Air_On_PIS17","PS17_DATA_PROCESS_Num_Air_On_PIS17","PS17_DATA_PROCESS_Alarm_Adver_PIS_17","PS18_DATA_PROCESS_Alarm_Air_On_PIS18","PS18_DATA_PROCESS_Num_Air_On_PIS18","PS18_DATA_PROCESS_Alarm_Adver_PIS_18","PS19_DATA_PROCESS_Alarm_Air_On_PIS19","PS19_DATA_PROCESS_Num_Air_On_PIS19","PS19_DATA_PROCESS_Alarm_Adver_PIS_19","PS20_DATA_PROCESS_Alarm_Air_On_PIS20","PS20_DATA_PROCESS_Num_Air_On_PIS20","PS20_DATA_PROCESS_Alarm_Adver_PIS_20","PS21A_DATA_PROCESS_Alarm_Air_On_PIS21","PS21A_DATA_PROCESS_Num_Air_On_PIS21","PS21A_DATA_PROCESS_Alarm_Adver_PIS_21","PS21B_DATA_PROCESS_Alarm_Air_On_PIS21B","PS21B_DATA_PROCESS_Num_Air_On_PIS21B","PS21B_DATA_PROCESS_Alarm_Adver_PIS_21B","PS21C_DATA_PROCESS_Alarm_Air_On_PIS21C","PS21C_DATA_PROCESS_Num_Air_On_PIS21C","PS21C_DATA_PROCESS_Alarm_Adver_PIS_21C","PS22_DATA_PROCESS_Alarm_Air_On_PIS22","PS22_DATA_PROCESS_Num_Air_On_PIS22","PS22_DATA_PROCESS_Alarm_Adver_PIS_22","PS23_DATA_PROCESS_Alarm_Air_On_PIS23","PS23_DATA_PROCESS_Num_Air_On_PIS23","PS23_DATA_PROCESS_Alarm_Adver_PIS_23","PS24_DATA_PROCESS_Alarm_Air_On_PIS24","PS24_DATA_PROCESS_Num_Air_On_PIS24","PS24_DATA_PROCESS_Alarm_Adver_PIS_24","PS25_DATA_PROCESS_Alarm_Air_On_PIS25","PS25_DATA_PROCESS_Num_Air_On_PIS25","PS25_DATA_PROCESS_Alarm_Adver_PIS_25","PS26_DATA_PROCESS_Alarm_Air_On_PIS26","PS26_DATA_PROCESS_Num_Air_On_PIS26","PS26_DATA_PROCESS_Alarm_Adver_PIS_26","PS27_DATA_PROCESS_Alarm_Air_On_PIS27","PS27_DATA_PROCESS_Num_Air_On_PIS27","PS27_DATA_PROCESS_Alarm_Adver_PIS_27","PS28_DATA_PROCESS_Alarm_Air_On_PIS28","PS28_DATA_PROCESS_Num_Air_On_PIS28","PS28_DATA_PROCESS_Alarm_Adver_PIS_28","PS29_DATA_PROCESS_Alarm_Air_On_PIS29","PS29_DATA_PROCESS_Num_Air_On_PIS29","PS29_DATA_PROCESS_Alarm_Adver_PIS_29","PS35_DATA_PROCESS_Alarm_Air_On_PIS35","PS35_DATA_PROCESS_Num_Air_On_PIS35","PS35_DATA_PROCESS_Alarm_Adver_PIS_35","PS36_DATA_PROCESS_Alarm_Air_On_PIS36","PS36_DATA_PROCESS_Num_Air_On_PIS36","PS36_DATA_PROCESS_Alarm_Adver_PIS_36","PS37_DATA_PROCESS_Alarm_Air_On_PIS37","PS37_DATA_PROCESS_Num_Air_On_PIS37","PS37_DATA_PROCESS_Alarm_Adver_PIS_37","PS38_DATA_PROCESS_Alarm_Air_On_PIS38","PS38_DATA_PROCESS_Num_Air_On_PIS38","PS38_DATA_PROCESS_Alarm_Adver_PIS_38","PS39_DATA_PROCESS_Alarm_Air_On_PIS39","PS39_DATA_PROCESS_Num_Air_On_PIS39","PS39_DATA_PROCESS_Alarm_Adver_PIS_39","PS40_DATA_PROCESS_Alarm_Air_On_PIS40","PS40_DATA_PROCESS_Num_Air_On_PIS40","PS40_DATA_PROCESS_Alarm_Adver_PIS_40","PS41_DATA_PROCESS_Alarm_Air_On_PIS41","PS41_DATA_PROCESS_Num_Air_On_PIS41","PS41_DATA_PROCESS_Alarm_Adver_PIS_41","PS44A_DATA_PROCESS_Alarm_Air_On_PIS44","PS44A_DATA_PROCESS_Num_Air_On_PIS44","PS44A_DATA_PROCESS_Alarm_Adver_PIS_44","PS44B_DATA_PROCESS_Alarm_Air_On_PIS44B","PS44B_DATA_PROCESS_Num_Air_On_PIS44B","PS44B_DATA_PROCESS_Alarm_Adver_PIS_44B","PREC43A_DATA_PROCESS_Alarm_Air_On_PREC43","PREC43A_DATA_PROCESS_Num_Air_On_PREC43","PREC43A_DATA_PROCESS_Alarm_Adver_PREC43","PREC43B_DATA_PROCESS_Alarm_Air_On_PREC43B","PREC43B_DATA_PROCESS_Num_Air_On_PREC43B","PREC43B_DATA_PROCESS_Alarm_Adver_PREC43B","PREC101_DATA_PROCESS_Alarm_Air_On_PREC101","PREC101_DATA_PROCESS_Num_Air_On_PREC101","PREC101_DATA_PROCESS_Alarm_Adver_PREC101","PREC102_DATA_PROCESS_Alarm_Air_On_PREC_102","PREC102_DATA_PROCESS_Num_Air_On_PREC_102","PREC102_DATA_PROCESS_Alarm_Adver_PREC_102","PREC103_DATA_PROCESS_Alarm_Air_On_PREC103","PREC103_DATA_PROCESS_Num_Air_On_PREC103","PREC103_DATA_PROCESS_Alarm_Adver_PREC103","PREC104_DATA_PROCESS_Alarm_Air_On_PREC104","PREC104_DATA_PROCESS_Num_Air_On_PREC104","PREC104_DATA_PROCESS_Alarm_Adver_PREC104","PREC105_DATA_PROCESS_Alarm_Air_On_PREC_105","PREC105_DATA_PROCESS_Num_Air_On_PREC_105","PREC105_DATA_PROCESS_Alarm_Adver_PREC_105","PREC106_DATA_PROCESS_Alarm_Air_On_PREC_106","PREC106_DATA_PROCESS_Num_Air_On_PREC_106","PREC106_DATA_PROCESS_Alarm_Adver_PREC_106","PREC107_DATA_PROCESS_Alarm_Air_On_PREC_107","PREC107_DATA_PROCESS_Num_Air_On_PREC_107","PREC107_DATA_PROCESS_Alarm_Adver_PREC_107","PREC108_DATA_PROCESS_Alarm_Air_On_PREC_108","PREC108_DATA_PROCESS_Num_Air_On_PREC_108","PREC108_DATA_PROCESS_Alarm_Adver_PREC_108","PREC109_DATA_PROCESS_Alarm_Air_On_PREC109","PREC109_DATA_PROCESS_Num_Air_On_PREC109","PREC109_DATA_PROCESS_Alarm_Adver_PREC109","PREC110_DATA_PROCESS_Alarm_Air_On_PREC_110","PREC110_DATA_PROCESS_Num_Air_On_PREC_110","PREC110_DATA_PROCESS_Alarm_Adver_PREC_110","PREC111_DATA_PROCESS_Alarm_Air_On_PREC_111","PREC111_DATA_PROCESS_Num_Air_On_PREC_111","PREC111_DATA_PROCESS_Alarm_Adver_PREC_111","PREC114_DATA_PROCESS_Alarm_Air_On_PREC114","PREC114_DATA_PROCESS_Num_Air_On_PREC114","PREC114_DATA_PROCESS_Alarm_Adver_PREC114","PREC115_DATA_PROCESS_Alarm_Air_On_PREC115","PREC115_DATA_PROCESS_Num_Air_On_PREC115","PREC115_DATA_PROCESS_Alarm_Adver_PREC115"]`
};

module.exports = {
    arregloTagsPS01Antenas,
    arregloTagsPS02Antenas,
    arregloTagsPS03Antenas,
    arregloTagsPS04Antenas,
    arregloTagsPS05Antenas,
    arregloTagsPS06Antenas,
    arregloTagsPS07Antenas,
    arregloTagsPS08Antenas,
    arregloTagsPS09Antenas,
    arregloTagsPS11Antenas,
    arregloTagsPS12Antenas,
    arregloTagsPS13Antenas,
    arregloTagsPS14Antenas,
    arregloTagsPS15Antenas,
    arregloTagsPS16Antenas,
    arregloTagsPS17Antenas,
    arregloTagsPS18Antenas,
    arregloTagsPS19Antenas,
    arregloTagsPS20Antenas,
    arregloTagsPS21AAntenas,
    arregloTagsPS21BAntenas,
    arregloTagsPS21CAntenas,
    arregloTagsPS22Antenas,
    arregloTagsPS23Antenas,
    arregloTagsPS24Antenas,
    arregloTagsPS25Antenas,
    arregloTagsPS26Antenas,
    arregloTagsPS27Antenas,
    arregloTagsPS28Antenas,
    arregloTagsPS29Antenas,
    arregloTagsPS35Antenas,
    arregloTagsPS36Antenas,
    arregloTagsPS37Antenas,
    arregloTagsPS38Antenas,
    arregloTagsPS39Antenas,
    arregloTagsPS40Antenas,
    arregloTagsPS41Antenas,
    arregloTagsPS43Antenas,
    arregloTagsPS43BAntenas,
    arregloTagsPS44Antenas,
    arregloTagsPS44BAntenas,
    arregloTagsPC101Antenas,
    arregloTagsPC102Antenas,
    arregloTagsPC103Antenas,
    arregloTagsPC104Antenas,
    arregloTagsPC105Antenas,
    arregloTagsPC106Antenas,
    arregloTagsPC107Antenas,
    arregloTagsPC108Antenas,
    arregloTagsPC109Antenas,
    arregloTagsPC110Antenas,
    arregloTagsPC111Antenas,
    arregloTagsPC114Antenas,
    arregloTagsPC115Antenas,
    generarTags,
    generarTagsTCP,
    arregloTagsAntenasAllLanconor,
    arregloTagsInfoGeneralPSLanconor
}