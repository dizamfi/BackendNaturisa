
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
    arreglo = ["Inputs","Outputs","Horas_Trab_Act","Horas_Trab_Guar","Status_Comm_MB","Num_Air_On","V_Avg","I_Tot","P_Tot","PF_Avg","V_12","V_23","V_31","VLL_Avg","THDV_tot","THDI_tot","V_1","I_1","V_2","I_2","V_3","I_3","Alarm1","Alarm2","E_Consu","T1_Imp_Act_Month","T1_Imp_Act_Prev_Month","T1_Exp_Act_Index","T1_Exp_Act_Month","T1_Exp_Act_Prev_Month","T1_Imp_Act_Day","T1_Imp_Act_Prev_Day"]
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
    return arreglo = `["Granmar_Ant_Pot_TA01-1","Granmar_Ant_Pot_TA01-2","Granmar_Ant_Stat_TA01-1","Granmar_Ant_Stat_TA01-2"]`
};

const arregloTagsPS02Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA02-1","Granmar_Ant_Stat_TA02-1"]`
};

const arregloTagsPS03Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA03-1","Granmar_Ant_Stat_TA03-1"]`
};

const arregloTagsPS04Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA04-1","Granmar_Ant_Pot_TA04-2","Granmar_Ant_Stat_TA04-1","Granmar_Ant_Stat_TA04-2"]`
};

const arregloTagsPS05Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA05-1","Granmar_Ant_Pot_TA05-2","Granmar_Ant_Stat_TA05-1","Granmar_Ant_Stat_TA05-2"]`
};

const arregloTagsPS09Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA09-1","Granmar_Ant_Pot_TA09-2","Granmar_Ant_Stat_TA09-1","Granmar_Ant_Stat_TA09-2"]`
};

const arregloTagsPS10Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA10-1","Granmar_Ant_Stat_TA10-1"]`
};

const arregloTagsPS11Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA11-1","Granmar_Ant_Stat_TA11-1"]`
};

const arregloTagsPS12Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA12-1","Granmar_Ant_Pot_TA12-2","Granmar_Ant_Stat_TA12-1","Granmar_Ant_Stat_TA12-2"]`
};

const arregloTagsPS14Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA14-1","Granmar_Ant_Stat_TA14-1"]`
};

const arregloTagsPS24Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA24-1","Granmar_Ant_Pot_TA24-2","Granmar_Ant_Stat_TA24-1","Granmar_Ant_Stat_TA24-2"]`
};

const arregloTagsPS25Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA25-1","Granmar_Ant_Pot_TA25-2","Granmar_Ant_Stat_TA25-1","Granmar_Ant_Stat_TA25-2"]`
};

const arregloTagsPS26Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA26-1","Granmar_Ant_Stat_TA26-1"]`
};

const arregloTagsPS27Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA27-1","Granmar_Ant_Stat_TA27-1"]`
};

const arregloTagsPS28Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA28-1","Granmar_Ant_Pot_TA28-2","Granmar_Ant_Stat_TA28-1","Granmar_Ant_Stat_TA28-2"]`
};

const arregloTagsPS29Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA29-1","Granmar_Ant_Pot_TA29-2","Granmar_Ant_Stat_TA29-1","Granmar_Ant_Stat_TA29-2"]`
};

const arregloTagsPS30Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA30-1","Granmar_Ant_Pot_TA30-2","Granmar_Ant_Stat_TA30-1","Granmar_Ant_Stat_TA30-2"]`
};

const arregloTagsPS31Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA31-1","Granmar_Ant_Pot_TA31-2","Granmar_Ant_Stat_TA31-1","Granmar_Ant_Stat_TA31-2"]`
};

const arregloTagsPS32Antenas = () => {
    return arreglo = `["Granmar_Ant_Pot_TA32-1","Granmar_Ant_Stat_TA32-1"]`
};

const arregloTagsAntenasAllGranmar = () => {
    return arreglo = `["Granmar_Ant_Pot_TA01-1","Granmar_Ant_Pot_TA01-2","Granmar_Ant_Stat_TA01-1","Granmar_Ant_Stat_TA01-2","Granmar_Ant_Pot_TA02-1","Granmar_Ant_Stat_TA02-1","Granmar_Ant_Pot_TA03-1","Granmar_Ant_Stat_TA03-1","Granmar_Ant_Pot_TA04-1","Granmar_Ant_Pot_TA04-2","Granmar_Ant_Stat_TA04-1","Granmar_Ant_Stat_TA04-2","Granmar_Ant_Pot_TA05-1","Granmar_Ant_Pot_TA05-2","Granmar_Ant_Stat_TA05-1","Granmar_Ant_Stat_TA05-2","Granmar_Ant_Pot_TA09-1","Granmar_Ant_Pot_TA09-2","Granmar_Ant_Stat_TA09-1","Granmar_Ant_Stat_TA09-2","Granmar_Ant_Pot_TA10-1","Granmar_Ant_Stat_TA10-1","Granmar_Ant_Pot_TA11-1","Granmar_Ant_Stat_TA11-1","Granmar_Ant_Pot_TA12-1","Granmar_Ant_Pot_TA12-2","Granmar_Ant_Stat_TA12-1","Granmar_Ant_Stat_TA12-2","Granmar_Ant_Pot_TA14-1","Granmar_Ant_Stat_TA14-1","Granmar_Ant_Pot_TA24-1","Granmar_Ant_Pot_TA24-2","Granmar_Ant_Stat_TA24-1","Granmar_Ant_Stat_TA24-2","Granmar_Ant_Pot_TA25-1","Granmar_Ant_Pot_TA25-2","Granmar_Ant_Stat_TA25-1","Granmar_Ant_Stat_TA25-2","Granmar_Ant_Pot_TA26-1","Granmar_Ant_Stat_TA26-1","Granmar_Ant_Pot_TA27-1","Granmar_Ant_Stat_TA27-1","Granmar_Ant_Pot_TA28-1","Granmar_Ant_Pot_TA28-2","Granmar_Ant_Stat_TA28-1","Granmar_Ant_Stat_TA28-2","Granmar_Ant_Pot_TA29-1","Granmar_Ant_Pot_TA29-2","Granmar_Ant_Stat_TA29-1","Granmar_Ant_Stat_TA29-2","Granmar_Ant_Pot_TA30-1","Granmar_Ant_Pot_TA30-2","Granmar_Ant_Stat_TA30-1","Granmar_Ant_Stat_TA30-2","Granmar_Ant_Pot_TA31-1","Granmar_Ant_Pot_TA31-2","Granmar_Ant_Stat_TA31-1","Granmar_Ant_Stat_TA31-2","Granmar_Ant_Pot_TA32-1","Granmar_Ant_Stat_TA32-1","Granmar_Ant_Pot_CE","Granmar_Ant_Stat_CE","Granmar_Ant_Pot_EB_Cosumisa","Granmar_Ant_Stat_EB_Cosumisa","Granmar_Ant_Pot_EB_Cosumisa_Granmar","Granmar_Ant_Stat_EB_Cosumisa_Granmar","Granmar_Ant_Pot_EB_Granmar","Granmar_Ant_Stat_EB_Granmar","Granmar_Ant_Pot_Sectorial_1","Granmar_Ant_Stat_Sectorial_1","Granmar_Ant_Pot_Sectorial_2","Granmar_Ant_Stat_Sectorial_2"]`
};

const arregloTagsInfoGeneralPSGranmar = () => {
    return arreglo = `["Granmar_PS01_DATA_PROCESS_Algun_Air_On_PIS1","Granmar_PS01_DATA_PROCESS_Num_Air_On_PIS1","Granmar_PS01_DATA_PROCESS_Alarm_Adver_PIS1","Granmar_PS02_DATA_PROCESS_Algun_Air_On_PIS2","Granmar_PS02_DATA_PROCESS_Num_Air_On_PIS2","Granmar_PS02_DATA_PROCESS_Alarm_Adver_PIS2","Granmar_PS03_DATA_PROCESS_Algun_Air_On_PIS3","Granmar_PS03_DATA_PROCESS_Num_Air_On_PIS3","Granmar_PS03_DATA_PROCESS_Alarm_Adver_PIS3","Granmar_PS04_DATA_PROCESS_Algun_Air_On_PIS4","Granmar_PS04_DATA_PROCESS_Num_Air_On_PIS4","Granmar_PS04_DATA_PROCESS_Alarm_Adver_PIS4","Granmar_PS05_DATA_PROCESS_Algun_Air_On_PIS5","Granmar_PS05_DATA_PROCESS_Num_Air_On_PIS5","Granmar_PS05_DATA_PROCESS_Alarm_Adver_PIS5","Granmar_PS09_DATA_PROCESS_Algun_Air_On_PIS9","Granmar_PS09_DATA_PROCESS_Num_Air_On_PIS9","Granmar_PS09_DATA_PROCESS_Alarm_Adver_PIS9","Granmar_PS10_DATA_PROCESS_Algun_Air_On_PIS10","Granmar_PS10_DATA_PROCESS_Num_Air_On_PIS10","Granmar_PS10_DATA_PROCESS_Alarm_Adver_PIS10","Granmar_PS11_DATA_PROCESS_Algun_Air_On_PIS11","Granmar_PS11_DATA_PROCESS_Num_Air_On_PIS11","Granmar_PS11_DATA_PROCESS_Alarm_Adver_PIS11","Granmar_PS12_DATA_PROCESS_Algun_Air_On_PIS12","Granmar_PS12_DATA_PROCESS_Num_Air_On_PIS12","Granmar_PS12_DATA_PROCESS_Alarm_Adver_PIS12","Granmar_PS14_DATA_PROCESS_Algun_Air_On_PIS14","Granmar_PS14_DATA_PROCESS_Num_Air_On_PIS14","Granmar_PS14_DATA_PROCESS_Alarm_Adver_PIS14","Granmar_PS24_DATA_PROCESS_Algun_Air_On_PIS24","Granmar_PS24_DATA_PROCESS_Num_Air_On_PIS24","Granmar_PS24_DATA_PROCESS_Alarm_Adver_PIS24","Granmar_PS25_DATA_PROCESS_Algun_Air_On_PIS25","Granmar_PS25_DATA_PROCESS_Num_Air_On_PIS25","Granmar_PS25_DATA_PROCESS_Alarm_Adver_PIS25","Granmar_PS26_DATA_PROCESS_Algun_Air_On_PIS26","Granmar_PS26_DATA_PROCESS_Num_Air_On_PIS26","Granmar_PS26_DATA_PROCESS_Alarm_Adver_PIS26","Granmar_PS27_DATA_PROCESS_Algun_Air_On_PIS27","Granmar_PS27_DATA_PROCESS_Num_Air_On_PIS27","Granmar_PS27_DATA_PROCESS_Alarm_Adver_PIS27","Granmar_PS28_DATA_PROCESS_Algun_Air_On_PIS28","Granmar_PS28_DATA_PROCESS_Num_Air_On_PIS28","Granmar_PS28_DATA_PROCESS_Alarm_Adver_PIS28","Granmar_PS29_DATA_PROCESS_Algun_Air_On_PIS29","Granmar_PS29_DATA_PROCESS_Num_Air_On_PIS29","Granmar_PS29_DATA_PROCESS_Alarm_Adver_PIS29","Granmar_PS30_DATA_PROCESS_Algun_Air_On_PIS30","Granmar_PS30_DATA_PROCESS_Num_Air_On_PIS30","Granmar_PS30_DATA_PROCESS_Alarm_Adver_PIS30","Granmar_PS31_DATA_PROCESS_Algun_Air_On_PIS31","Granmar_PS31_DATA_PROCESS_Num_Air_On_PIS31","Granmar_PS31_DATA_PROCESS_Alarm_Adver_PIS31","Granmar_PS32_DATA_PROCESS_Algun_Air_On_PIS32","Granmar_PS32_DATA_PROCESS_Num_Air_On_PIS32","Granmar_PS32_DATA_PROCESS_Alarm_Adver_PIS32"]`
};

module.exports = {
    arregloTagsPS01Antenas,
    arregloTagsPS02Antenas,
    arregloTagsPS03Antenas,
    arregloTagsPS04Antenas,
    arregloTagsPS05Antenas,
    arregloTagsPS09Antenas,
    arregloTagsPS10Antenas,
    arregloTagsPS11Antenas,
    arregloTagsPS12Antenas,
    arregloTagsPS14Antenas,
    arregloTagsPS24Antenas,
    arregloTagsPS25Antenas,
    arregloTagsPS26Antenas,
    arregloTagsPS27Antenas,
    arregloTagsPS28Antenas,
    arregloTagsPS29Antenas,
    arregloTagsPS30Antenas,
    arregloTagsPS31Antenas,
    arregloTagsPS32Antenas,
    generarTags,
    generarTagsTCP,
    arregloTagsAntenasAllGranmar,
    arregloTagsInfoGeneralPSGranmar
}