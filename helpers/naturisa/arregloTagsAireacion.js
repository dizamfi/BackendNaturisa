
const generarTags = (name) => {
    arreglo = ["Num_Auto","Num_Air_On","Algun_Air_On","Hora_Ini_1","Hora_Ini_2","Hora_Fin_1","Hora_Fin_2","Alarm_Adver","Run_Rem","Bloq_Auto_Hora","Ener_Mes_Act","Ener_Mes_Pas","Ener_Total_Index","Pot_Inst","Hrs_Trab_Sem","Hrs_Trab_Act"]
    arreglo2 = `[`
    arreglo.forEach(element => {
        arreglo2 = arreglo2 + `${`"${name}`.concat(".", `${element}"`).replaceAll("'", '"')},`
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
    arreglo = ["Inputs","Outputs","Horas_Trab_Act","Horas_Trab_Guar","Stat_Comm_MB","Stat_Comm","V_Avg","I_Tot","P_Tot","PF_Avg","V_12","V_23","V_31","VLL_Avg","THDV_tot","THDI_tot","V_1","I_1","V_2","I_2","V_3","I_3","Alarm1","Alarm2","T1_Imp_Act_Index","T1_Imp_Act_Month","T1_Imp_Act_Prev_Month","T1_Exp_Act_Index","T1_Exp_Act_Month","T1_Exp_Act_Prev_Month","T1_Imp_Act_Day","T1_Imp_Act_Prev_Day"]
    arreglo2 = `[`
    for (let index = 0; index < name.length; index++) {
        arreglo.forEach(element => {
            arreglo2 = arreglo2 + `${`"${name[index]}`.concat(".", `${element}"`).replaceAll("'", '"')},`     
        });     
    }
    arreglo2 = arreglo2 + "]"
    return `${arreglo2}`
};

const arregloTagsPS01Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA01-1","Naturisa_FNTS_Ant_Stat_TA01-1","Naturisa_FNTS_Ant_Pot_TA01-2","Naturisa_FNTS_Ant_Stat_TA01-2"]`
};

const arregloTagsPS02Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA02-1","Naturisa_FNTS_Ant_Stat_TA02-1","Naturisa_FNTS_Ant_Pot_TA02-2","Naturisa_FNTS_Ant_Stat_TA02-2"]`
};

const arregloTagsPS03Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA03-1","Naturisa_FNTS_Ant_Stat_TA03-1","Naturisa_FNTS_Ant_Pot_TA03-2","Naturisa_FNTS_Ant_Stat_TA03-2"]`
};

const arregloTagsPS04Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA04-1","Naturisa_FNTS_Ant_Stat_TA04-1","Naturisa_FNTS_Ant_Pot_TA04-2","Naturisa_FNTS_Ant_Stat_TA04-2"]`
};

const arregloTagsPS05Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA05-1","Naturisa_FNTS_Ant_Stat_TA05-1","Naturisa_FNTS_Ant_Pot_TA05-2","Naturisa_FNTS_Ant_Stat_TA05-2"]`
};

const arregloTagsPS06Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA06-1","Naturisa_FNTS_Ant_Stat_TA06-1","Naturisa_FNTS_Ant_Pot_TA06-2","Naturisa_FNTS_Ant_Stat_TA06-2"]`
};

const arregloTagsPS07Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA07-1","Naturisa_FNTS_Ant_Stat_TA07-1","Naturisa_FNTS_Ant_Pot_TA07-2","Naturisa_FNTS_Ant_Stat_TA07-2"]`
};

const arregloTagsPS08Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA08-1","Naturisa_FNTS_Ant_Stat_TA08-1","Naturisa_FNTS_Ant_Pot_TA08-2","Naturisa_FNTS_Ant_Stat_TA08-2"]`
};

const arregloTagsPS09Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA09-1","Naturisa_FNTS_Ant_Stat_TA09-1"]`
};

const arregloTagsPS10Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA10-1","Naturisa_FNTS_Ant_Stat_TA10-1"]`
};

const arregloTagsPS11Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA11-1","Naturisa_FNTS_Ant_Stat_TA11-1"]`
};

const arregloTagsPS12AAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA12A-1","Naturisa_FNTS_Ant_Stat_TA12A-1"]`
};

const arregloTagsPS12BAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA12B-1","Naturisa_FNTS_Ant_Stat_TA12B-1"]`
};

const arregloTagsPS13AAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA13A-1","Naturisa_FNTS_Ant_Stat_TA13A-1"]`
};

const arregloTagsPS13BAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA13B-1","Naturisa_FNTS_Ant_Stat_TA13B-1"]`
};

const arregloTagsPS14Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA14-1","Naturisa_FNTS_Ant_Stat_TA14-1","Naturisa_FNTS_Ant_Pot_TA14-2","Naturisa_FNTS_Ant_Stat_TA14-2"]`
};

const arregloTagsPS15Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA15-1","Naturisa_FNTS_Ant_Stat_TA15-1","Naturisa_FNTS_Ant_Pot_TA15-2","Naturisa_FNTS_Ant_Stat_TA15-2"]`
};

const arregloTagsPS16AAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA16A-1","Naturisa_FNTS_Ant_Stat_TA16A-1"]`
};

const arregloTagsPS16BAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA16B-1","Naturisa_FNTS_Ant_Stat_TA16B-1"]`
};

const arregloTagsPS17Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA17-1","Naturisa_FNTS_Ant_Stat_TA17-1","Naturisa_FNTS_Ant_Pot_TA17-2","Naturisa_FNTS_Ant_Stat_TA17-2"]`
};

const arregloTagsPS18Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA18-1","Naturisa_FNTS_Ant_Stat_TA18-1","Naturisa_FNTS_Ant_Pot_TA18-2","Naturisa_FNTS_Ant_Stat_TA18-2"]`
};

const arregloTagsPS19Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA19-1","Naturisa_FNTS_Ant_Stat_TA19-1"]`
};

const arregloTagsPS20Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA20-1","Naturisa_FNTS_Ant_Stat_TA20-1"]`
};

const arregloTagsPC202Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA202-1","Naturisa_FNTS_Ant_Stat_TA202-1"]`
};

const arregloTagsPC206Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA206-1","Naturisa_FNTS_Ant_Stat_TA206-1"]`
};

const arregloTagsPC207Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA207-1","Naturisa_FNTS_Ant_Stat_TA207-1"]`
};

const arregloTagsPC208Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA208-1","Naturisa_FNTS_Ant_Stat_TA208-1"]`
};

const arregloTagsPC209Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA209-1","Naturisa_FNTS_Ant_Stat_TA209-1"]`
};

const arregloTagsPC210Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA210-1","Naturisa_FNTS_Ant_Stat_TA210-1"]`
};

const arregloTagsPS21Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA21-1","Naturisa_FNTS_Ant_Stat_TA21-1"]`
};

const arregloTagsPC211Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA211-1","Naturisa_FNTS_Ant_Stat_TA211-1"]`
};

const arregloTagsPC212Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA212-1","Naturisa_FNTS_Ant_Stat_TA212-1"]`
};

const arregloTagsPC214Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA214-1","Naturisa_FNTS_Ant_Stat_TA214-1"]`
};

const arregloTagsPC215Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA215-1","Naturisa_FNTS_Ant_Stat_TA215-1"]`
};

const arregloTagsPC216Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA216-1","Naturisa_FNTS_Ant_Stat_TA216-1"]`
};

const arregloTagsPC217Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA217-1","Naturisa_FNTS_Ant_Stat_TA217-1"]`
};

const arregloTagsPC218Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA218-1","Naturisa_FNTS_Ant_Stat_TA218-1"]`
};

const arregloTagsPS22AAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA22A-1","Naturisa_FNTS_Ant_Stat_TA22A-1"]`
};

const arregloTagsPS22BAntenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA22B-1","Naturisa_FNTS_Ant_Stat_TA22B-1"]`
};

const arregloTagsPS23Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA23-1","Naturisa_FNTS_Ant_Stat_TA23-1"]`
};

const arregloTagsPS25Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA25-1","Naturisa_FNTS_Ant_Stat_TA25-1"]`
};

const arregloTagsPS26Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA26-1","Naturisa_FNTS_Ant_Stat_TA26-1"]`
};

const arregloTagsPS27Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA27-1","Naturisa_FNTS_Ant_Stat_TA27-1"]`
};

const arregloTagsPS28Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA28-1","Naturisa_FNTS_Ant_Stat_TA28-1"]`
};

const arregloTagsPS29Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA29-1","Naturisa_FNTS_Ant_Stat_TA29-1"]`
};

const arregloTagsPS30Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA30-1","Naturisa_FNTS_Ant_Stat_TA30-1","Naturisa_FNTS_Ant_Pot_TA30-2","Naturisa_FNTS_Ant_Stat_TA30-2"]`
};

const arregloTagsPS31Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA31-1","Naturisa_FNTS_Ant_Stat_TA31-1"]`
};

const arregloTagsPS32Antenas = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA32-1","Naturisa_FNTS_Ant_Stat_TA32-1"]`
};

const arregloTagsAntenasAllNaturisa = () => {
    return arreglo = `["Naturisa_FNTS_Ant_Pot_TA01-1","Naturisa_FNTS_Ant_Stat_TA01-1","Naturisa_FNTS_Ant_Pot_TA01-2","Naturisa_FNTS_Ant_Stat_TA01-2","Naturisa_FNTS_Ant_Pot_TA02-1","Naturisa_FNTS_Ant_Stat_TA02-1","Naturisa_FNTS_Ant_Pot_TA02-2","Naturisa_FNTS_Ant_Stat_TA02-2","Naturisa_FNTS_Ant_Pot_TA03-1","Naturisa_FNTS_Ant_Stat_TA03-1","Naturisa_FNTS_Ant_Pot_TA03-2","Naturisa_FNTS_Ant_Stat_TA03-2","Naturisa_FNTS_Ant_Pot_TA04-1","Naturisa_FNTS_Ant_Stat_TA04-1","Naturisa_FNTS_Ant_Pot_TA04-2","Naturisa_FNTS_Ant_Stat_TA04-2","Naturisa_FNTS_Ant_Pot_TA05-1","Naturisa_FNTS_Ant_Stat_TA05-1","Naturisa_FNTS_Ant_Pot_TA05-2","Naturisa_FNTS_Ant_Stat_TA05-2","Naturisa_FNTS_Ant_Pot_TA06-1","Naturisa_FNTS_Ant_Stat_TA06-1","Naturisa_FNTS_Ant_Pot_TA06-2","Naturisa_FNTS_Ant_Stat_TA06-2","Naturisa_FNTS_Ant_Pot_TA07-1","Naturisa_FNTS_Ant_Stat_TA07-1","Naturisa_FNTS_Ant_Pot_TA07-2","Naturisa_FNTS_Ant_Stat_TA07-2","Naturisa_FNTS_Ant_Pot_TA08-1","Naturisa_FNTS_Ant_Stat_TA08-1","Naturisa_FNTS_Ant_Pot_TA08-2","Naturisa_FNTS_Ant_Stat_TA08-2","Naturisa_FNTS_Ant_Pot_TA09-1","Naturisa_FNTS_Ant_Stat_TA09-1","Naturisa_FNTS_Ant_Pot_TA10-1","Naturisa_FNTS_Ant_Stat_TA10-1","Naturisa_FNTS_Ant_Pot_TA11-1","Naturisa_FNTS_Ant_Stat_TA11-1","Naturisa_FNTS_Ant_Pot_TA12A-1","Naturisa_FNTS_Ant_Stat_TA12A-1","Naturisa_FNTS_Ant_Pot_TA12B-1","Naturisa_FNTS_Ant_Stat_TA12B-1","Naturisa_FNTS_Ant_Pot_TA13A-1","Naturisa_FNTS_Ant_Stat_TA13A-1","Naturisa_FNTS_Ant_Pot_TA13B-1","Naturisa_FNTS_Ant_Stat_TA13B-1","Naturisa_FNTS_Ant_Pot_TA14-1","Naturisa_FNTS_Ant_Stat_TA14-1","Naturisa_FNTS_Ant_Pot_TA14-2","Naturisa_FNTS_Ant_Stat_TA14-2","Naturisa_FNTS_Ant_Pot_TA15-1","Naturisa_FNTS_Ant_Stat_TA15-1","Naturisa_FNTS_Ant_Pot_TA15-2","Naturisa_FNTS_Ant_Stat_TA15-2","Naturisa_FNTS_Ant_Pot_TA16A-1","Naturisa_FNTS_Ant_Stat_TA16A-1","Naturisa_FNTS_Ant_Pot_TA16B-1","Naturisa_FNTS_Ant_Stat_TA16B-1","Naturisa_FNTS_Ant_Pot_TA17-1","Naturisa_FNTS_Ant_Stat_TA17-1","Naturisa_FNTS_Ant_Pot_TA17-2","Naturisa_FNTS_Ant_Stat_TA17-2","Naturisa_FNTS_Ant_Pot_TA18-1","Naturisa_FNTS_Ant_Stat_TA18-1","Naturisa_FNTS_Ant_Pot_TA18-2","Naturisa_FNTS_Ant_Stat_TA18-2","Naturisa_FNTS_Ant_Pot_TA19-1","Naturisa_FNTS_Ant_Stat_TA19-1","Naturisa_FNTS_Ant_Pot_TA20-1","Naturisa_FNTS_Ant_Stat_TA20-1","Naturisa_FNTS_Ant_Pot_TA202-1","Naturisa_FNTS_Ant_Stat_TA202-1","Naturisa_FNTS_Ant_Pot_TA206-1","Naturisa_FNTS_Ant_Stat_TA206-1","Naturisa_FNTS_Ant_Pot_TA207-1","Naturisa_FNTS_Ant_Stat_TA207-1","Naturisa_FNTS_Ant_Pot_TA208-1","Naturisa_FNTS_Ant_Stat_TA208-1","Naturisa_FNTS_Ant_Pot_TA209-1","Naturisa_FNTS_Ant_Stat_TA209-1","Naturisa_FNTS_Ant_Pot_TA210-1","Naturisa_FNTS_Ant_Stat_TA210-1","Naturisa_FNTS_Ant_Pot_TA21-1","Naturisa_FNTS_Ant_Stat_TA21-1","Naturisa_FNTS_Ant_Pot_TA211-1","Naturisa_FNTS_Ant_Stat_TA211-1","Naturisa_FNTS_Ant_Pot_TA212-1","Naturisa_FNTS_Ant_Stat_TA212-1","Naturisa_FNTS_Ant_Pot_TA214-1","Naturisa_FNTS_Ant_Stat_TA214-1","Naturisa_FNTS_Ant_Pot_TA215-1","Naturisa_FNTS_Ant_Stat_TA215-1","Naturisa_FNTS_Ant_Pot_TA216-1","Naturisa_FNTS_Ant_Stat_TA216-1","Naturisa_FNTS_Ant_Pot_TA217-1","Naturisa_FNTS_Ant_Stat_TA217-1","Naturisa_FNTS_Ant_Pot_TA218-1","Naturisa_FNTS_Ant_Stat_TA218-1","Naturisa_FNTS_Ant_Pot_TA22A-1","Naturisa_FNTS_Ant_Stat_TA22A-1","Naturisa_FNTS_Ant_Pot_TA22B-1","Naturisa_FNTS_Ant_Stat_TA22B-1","Naturisa_FNTS_Ant_Pot_TA23-1","Naturisa_FNTS_Ant_Stat_TA23-1","Naturisa_FNTS_Ant_Pot_TA25-1","Naturisa_FNTS_Ant_Stat_TA25-1","Naturisa_FNTS_Ant_Pot_TA26-1","Naturisa_FNTS_Ant_Stat_TA26-1","Naturisa_FNTS_Ant_Pot_TA27-1","Naturisa_FNTS_Ant_Stat_TA27-1","Naturisa_FNTS_Ant_Pot_TA28-1","Naturisa_FNTS_Ant_Stat_TA28-1","Naturisa_FNTS_Ant_Pot_TA29-1","Naturisa_FNTS_Ant_Stat_TA29-1","Naturisa_FNTS_Ant_Pot_TA30-1","Naturisa_FNTS_Ant_Stat_TA30-1","Naturisa_FNTS_Ant_Pot_TA30-2","Naturisa_FNTS_Ant_Stat_TA30-2","Naturisa_FNTS_Ant_Pot_TA31-1","Naturisa_FNTS_Ant_Stat_TA31-1","Naturisa_FNTS_Ant_Pot_TA32-1","Naturisa_FNTS_Ant_Stat_TA32-1","Naturisa_FNTS_Ant_Pot_AP1","Naturisa_FNTS_Ant_Stat_AP1","Naturisa_FNTS_Ant_Pot_AP2","Naturisa_FNTS_Ant_Stat_AP2","Naturisa_FNTS_Ant_Pot_NA_CAMP_PTP_MARI","Naturisa_FNTS_Ant_Stat_NA_CAMP_PTP_MARI","Naturisa_FNTS_Ant_Pot_NA_PTP_CAMP_T1","Naturisa_FNTS_Ant_Stat_NA_PTP_CAMP_T1","Naturisa_FNTS_Ant_Pot_NA_PTP_MARI","Naturisa_FNTS_Ant_Stat_NA_PTP_MARI","Naturisa_FNTS_Ant_Pot_NA_PTP_T1","Naturisa_FNTS_Ant_Stat_NA_PTP_T1"]`
};

const arregloTagsInfoGeneralPSNaturisa = () => {
    return arreglo = `["Naturisa_FNTS_PC202.Algun_Air_On","Naturisa_FNTS_PC202.Num_Air_On","Naturisa_FNTS_PC202.Alarm_Adver","Naturisa_FNTS_PC206.Algun_Air_On","Naturisa_FNTS_PC206.Num_Air_On","Naturisa_FNTS_PC206.Alarm_Adver","Naturisa_FNTS_PC207.Algun_Air_On","Naturisa_FNTS_PC207.Num_Air_On","Naturisa_FNTS_PC207.Alarm_Adver","Naturisa_FNTS_PC208.Algun_Air_On","Naturisa_FNTS_PC208.Num_Air_On","Naturisa_FNTS_PC208.Alarm_Adver","Naturisa_FNTS_PC209.Algun_Air_On","Naturisa_FNTS_PC209.Num_Air_On","Naturisa_FNTS_PC209.Alarm_Adver","Naturisa_FNTS_PC210.Algun_Air_On","Naturisa_FNTS_PC210.Num_Air_On","Naturisa_FNTS_PC210.Alarm_Adver","Naturisa_FNTS_PC211.Algun_Air_On","Naturisa_FNTS_PC211.Num_Air_On","Naturisa_FNTS_PC211.Alarm_Adver","Naturisa_FNTS_PC212.Algun_Air_On","Naturisa_FNTS_PC212.Num_Air_On","Naturisa_FNTS_PC212.Alarm_Adver","Naturisa_FNTS_PC214.Algun_Air_On","Naturisa_FNTS_PC214.Num_Air_On","Naturisa_FNTS_PC214.Alarm_Adver","Naturisa_FNTS_PC215.Algun_Air_On","Naturisa_FNTS_PC215.Num_Air_On","Naturisa_FNTS_PC215.Alarm_Adver","Naturisa_FNTS_PC216.Algun_Air_On","Naturisa_FNTS_PC216.Num_Air_On","Naturisa_FNTS_PC216.Alarm_Adver","Naturisa_FNTS_PC217.Algun_Air_On","Naturisa_FNTS_PC217.Num_Air_On","Naturisa_FNTS_PC217.Alarm_Adver","Naturisa_FNTS_PC218.Algun_Air_On","Naturisa_FNTS_PC218.Num_Air_On","Naturisa_FNTS_PC218.Alarm_Adver","Naturisa_FNTS_PS01.Algun_Air_On","Naturisa_FNTS_PS01.Num_Air_On","Naturisa_FNTS_PS01.Alarm_Adver","Naturisa_FNTS_PS02.Algun_Air_On","Naturisa_FNTS_PS02.Num_Air_On","Naturisa_FNTS_PS02.Alarm_Adver","Naturisa_FNTS_PS03.Algun_Air_On","Naturisa_FNTS_PS03.Num_Air_On","Naturisa_FNTS_PS03.Alarm_Adver","Naturisa_FNTS_PS04.Algun_Air_On","Naturisa_FNTS_PS04.Num_Air_On","Naturisa_FNTS_PS04.Alarm_Adver","Naturisa_FNTS_PS05.Algun_Air_On","Naturisa_FNTS_PS05.Num_Air_On","Naturisa_FNTS_PS05.Alarm_Adver","Naturisa_FNTS_PS06.Algun_Air_On","Naturisa_FNTS_PS06.Num_Air_On","Naturisa_FNTS_PS06.Alarm_Adver","Naturisa_FNTS_PS07.Algun_Air_On","Naturisa_FNTS_PS07.Num_Air_On","Naturisa_FNTS_PS07.Alarm_Adver","Naturisa_FNTS_PS08.Algun_Air_On","Naturisa_FNTS_PS08.Num_Air_On","Naturisa_FNTS_PS08.Alarm_Adver","Naturisa_FNTS_PS09.Algun_Air_On","Naturisa_FNTS_PS09.Num_Air_On","Naturisa_FNTS_PS09.Alarm_Adver","Naturisa_FNTS_PS10.Algun_Air_On","Naturisa_FNTS_PS10.Num_Air_On","Naturisa_FNTS_PS10.Alarm_Adver","Naturisa_FNTS_PS11.Algun_Air_On","Naturisa_FNTS_PS11.Num_Air_On","Naturisa_FNTS_PS11.Alarm_Adver","Naturisa_FNTS_PS12A.Algun_Air_On","Naturisa_FNTS_PS12A.Num_Air_On","Naturisa_FNTS_PS12A.Alarm_Adver","Naturisa_FNTS_PS12B.Algun_Air_On","Naturisa_FNTS_PS12B.Num_Air_On","Naturisa_FNTS_PS12B.Alarm_Adver","Naturisa_FNTS_PS13A.Algun_Air_On","Naturisa_FNTS_PS13A.Num_Air_On","Naturisa_FNTS_PS13A.Alarm_Adver","Naturisa_FNTS_PS13B.Algun_Air_On","Naturisa_FNTS_PS13B.Num_Air_On","Naturisa_FNTS_PS13B.Alarm_Adver","Naturisa_FNTS_PS14.Algun_Air_On","Naturisa_FNTS_PS14.Num_Air_On","Naturisa_FNTS_PS14.Alarm_Adver","Naturisa_FNTS_PS15.Algun_Air_On","Naturisa_FNTS_PS15.Num_Air_On","Naturisa_FNTS_PS15.Alarm_Adver","Naturisa_FNTS_PS16A.Algun_Air_On","Naturisa_FNTS_PS16A.Num_Air_On","Naturisa_FNTS_PS16A.Alarm_Adver","Naturisa_FNTS_PS16B.Algun_Air_On","Naturisa_FNTS_PS16B.Num_Air_On","Naturisa_FNTS_PS16B.Alarm_Adver","Naturisa_FNTS_PS17.Algun_Air_On","Naturisa_FNTS_PS17.Num_Air_On","Naturisa_FNTS_PS17.Alarm_Adver","Naturisa_FNTS_PS18.Algun_Air_On","Naturisa_FNTS_PS18.Num_Air_On","Naturisa_FNTS_PS18.Alarm_Adver","Naturisa_FNTS_PS19.Algun_Air_On","Naturisa_FNTS_PS19.Num_Air_On","Naturisa_FNTS_PS19.Alarm_Adver","Naturisa_FNTS_PS20.Algun_Air_On","Naturisa_FNTS_PS20.Num_Air_On","Naturisa_FNTS_PS20.Alarm_Adver","Naturisa_FNTS_PS21.Algun_Air_On","Naturisa_FNTS_PS21.Num_Air_On","Naturisa_FNTS_PS21.Alarm_Adver","Naturisa_FNTS_PS22A.Algun_Air_On","Naturisa_FNTS_PS22A.Num_Air_On","Naturisa_FNTS_PS22A.Alarm_Adver","Naturisa_FNTS_PS22B.Algun_Air_On","Naturisa_FNTS_PS22B.Num_Air_On","Naturisa_FNTS_PS22B.Alarm_Adver","Naturisa_FNTS_PS23.Algun_Air_On","Naturisa_FNTS_PS23.Num_Air_On","Naturisa_FNTS_PS23.Alarm_Adver","Naturisa_FNTS_PS25.Algun_Air_On","Naturisa_FNTS_PS25.Num_Air_On","Naturisa_FNTS_PS25.Alarm_Adver","Naturisa_FNTS_PS26.Algun_Air_On","Naturisa_FNTS_PS26.Num_Air_On","Naturisa_FNTS_PS26.Alarm_Adver","Naturisa_FNTS_PS27.Algun_Air_On","Naturisa_FNTS_PS27.Num_Air_On","Naturisa_FNTS_PS27.Alarm_Adver","Naturisa_FNTS_PS28.Algun_Air_On","Naturisa_FNTS_PS28.Num_Air_On","Naturisa_FNTS_PS28.Alarm_Adver","Naturisa_FNTS_PS29.Algun_Air_On","Naturisa_FNTS_PS29.Num_Air_On","Naturisa_FNTS_PS29.Alarm_Adver","Naturisa_FNTS_PS30.Algun_Air_On","Naturisa_FNTS_PS30.Num_Air_On","Naturisa_FNTS_PS30.Alarm_Adver","Naturisa_FNTS_PS31.Algun_Air_On","Naturisa_FNTS_PS31.Num_Air_On","Naturisa_FNTS_PS31.Alarm_Adver","Naturisa_FNTS_PS32.Algun_Air_On","Naturisa_FNTS_PS32.Num_Air_On","Naturisa_FNTS_PS32.Alarm_Adver"]`
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
    arregloTagsPS10Antenas,
    arregloTagsPS11Antenas,
    arregloTagsPS12AAntenas,
    arregloTagsPS12BAntenas,
    arregloTagsPS13AAntenas,
    arregloTagsPS13BAntenas,
    arregloTagsPS14Antenas,
    arregloTagsPS15Antenas,
    arregloTagsPS16AAntenas,
    arregloTagsPS16BAntenas,
    arregloTagsPS17Antenas,
    arregloTagsPS18Antenas,
    arregloTagsPS19Antenas,
    arregloTagsPS20Antenas,
    arregloTagsPC202Antenas,
    arregloTagsPC206Antenas,
    arregloTagsPC207Antenas,
    arregloTagsPC208Antenas,
    arregloTagsPC209Antenas,
    arregloTagsPC210Antenas,
    arregloTagsPS21Antenas,
    arregloTagsPC211Antenas,
    arregloTagsPC212Antenas,
    arregloTagsPC214Antenas,
    arregloTagsPC215Antenas,
    arregloTagsPC216Antenas,
    arregloTagsPC217Antenas,
    arregloTagsPC218Antenas,
    arregloTagsPS22AAntenas,
    arregloTagsPS22BAntenas,
    arregloTagsPS23Antenas,
    arregloTagsPS25Antenas,
    arregloTagsPS26Antenas,
    arregloTagsPS27Antenas,
    arregloTagsPS28Antenas,
    arregloTagsPS29Antenas,
    arregloTagsPS30Antenas,
    arregloTagsPS31Antenas,
    arregloTagsPS32Antenas,
    arregloTagsAntenasAllNaturisa,
    arregloTagsInfoGeneralPSNaturisa,
    generarTags,
    generarTagsTCP
}