
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

const arregloTagsPC219Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA219-1","Pesjolla_FPSJ_Ant_Stat_TA219-1"]`
};

const arregloTagsPC220Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA220-1","Pesjolla_FPSJ_Ant_Stat_TA220-1"]`
};

const arregloTagsPC222Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA222-1","Pesjolla_FPSJ_Ant_Stat_TA222-1"]`
};

const arregloTagsPC224Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA224-1","Pesjolla_FPSJ_Ant_Stat_TA224-1"]`
};

const arregloTagsPC225Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA225-1","Pesjolla_FPSJ_Ant_Stat_TA225-1"]`
};

const arregloTagsPC226Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA226-1","Pesjolla_FPSJ_Ant_Stat_TA226-1"]`
};

const arregloTagsPC228Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA228-1","Pesjolla_FPSJ_Ant_Stat_TA228-1"]`
};

const arregloTagsPC232Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA232-1","Pesjolla_FPSJ_Ant_Stat_TA232-1"]`
};

const arregloTagsPS33Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA33-1","Pesjolla_FPSJ_Ant_Stat_TA33-1"]`
};

const arregloTagsPS34AAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA34A-1","Pesjolla_FPSJ_Ant_Stat_TA34A-1"]`
};

const arregloTagsPS34BAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA34B-1","Pesjolla_FPSJ_Ant_Stat_TA34B-1"]`
};

const arregloTagsPS35AAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA35A-1","Pesjolla_FPSJ_Ant_Stat_TA35A-1"]`
};

const arregloTagsPS35BAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA35B-1","Pesjolla_FPSJ_Ant_Stat_TA35B-1"]`
};

const arregloTagsPS36Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA36-1","Pesjolla_FPSJ_Ant_Stat_TA36-1","Pesjolla_FPSJ_Ant_Pot_TA36-2","Pesjolla_FPSJ_Ant_Stat_TA36-2"]`
};

const arregloTagsPS37AAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA37A-1","Pesjolla_FPSJ_Ant_Stat_TA37A-1"]`
};

const arregloTagsPS37BAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA37B-1","Pesjolla_FPSJ_Ant_Stat_TA37B-1"]`
};

const arregloTagsPS38Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA38-1","Pesjolla_FPSJ_Ant_Stat_TA38-1"]`
};

const arregloTagsPS39Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA39-1","Pesjolla_FPSJ_Ant_Stat_TA39-1"]`
};

const arregloTagsPS40Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA40-1","Pesjolla_FPSJ_Ant_Stat_TA40-1"]`
};

const arregloTagsPS41Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA41-1","Pesjolla_FPSJ_Ant_Stat_TA41-1"]`
};

const arregloTagsPS42AAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA42A-1","Pesjolla_FPSJ_Ant_Stat_TA42A-1"]`
};

const arregloTagsPS42BAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA42B-1","Pesjolla_FPSJ_Ant_Stat_TA42B-1"]`
};

const arregloTagsPS43AAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA43A-1","Pesjolla_FPSJ_Ant_Stat_TA43A-1"]`
};

const arregloTagsPS43BAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA43B-1","Pesjolla_FPSJ_Ant_Stat_TA43B-1"]`
};

const arregloTagsPS44Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA44-1","Pesjolla_FPSJ_Ant_Stat_TA44-1"]`
};

const arregloTagsPS45Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA45-1","Pesjolla_FPSJ_Ant_Stat_TA45-1","Pesjolla_FPSJ_Ant_Pot_TA45-2","Pesjolla_FPSJ_Ant_Stat_TA45-2"]`
};

const arregloTagsPS46Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA46-1","Pesjolla_FPSJ_Ant_Stat_TA46-1"]`
};

const arregloTagsPS47AAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA47A-1","Pesjolla_FPSJ_Ant_Stat_TA47A-1"]`
};

const arregloTagsPS47BAntenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA47B-1","Pesjolla_FPSJ_Ant_Stat_TA47B-1"]`
};

const arregloTagsPS48Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA48-1","Pesjolla_FPSJ_Ant_Stat_TA48-1","Pesjolla_FPSJ_Ant_Pot_TA48-2","Pesjolla_FPSJ_Ant_Stat_TA48-2"]`
};

const arregloTagsPS49Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA49-1","Pesjolla_FPSJ_Ant_Stat_TA49-1","Pesjolla_FPSJ_Ant_Pot_TA49-2","Pesjolla_FPSJ_Ant_Stat_TA49-2"]`
};

const arregloTagsPS50Antenas = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA50-1","Pesjolla_FPSJ_Ant_Stat_TA50-1"]`
};

const arregloTagsAntenasAllPesjolla = () => {
    return arreglo = `["Pesjolla_FPSJ_Ant_Pot_TA219-1","Pesjolla_FPSJ_Ant_Stat_TA219-1","Pesjolla_FPSJ_Ant_Pot_TA220-1","Pesjolla_FPSJ_Ant_Stat_TA220-1","Pesjolla_FPSJ_Ant_Pot_TA222-1","Pesjolla_FPSJ_Ant_Stat_TA222-1","Pesjolla_FPSJ_Ant_Pot_TA224-1","Pesjolla_FPSJ_Ant_Stat_TA224-1","Pesjolla_FPSJ_Ant_Pot_TA225-1","Pesjolla_FPSJ_Ant_Stat_TA225-1","Pesjolla_FPSJ_Ant_Pot_TA226-1","Pesjolla_FPSJ_Ant_Stat_TA226-1","Pesjolla_FPSJ_Ant_Pot_TA228-1","Pesjolla_FPSJ_Ant_Stat_TA228-1","Pesjolla_FPSJ_Ant_Pot_TA232-1","Pesjolla_FPSJ_Ant_Stat_TA232-1","Pesjolla_FPSJ_Ant_Pot_TA33-1","Pesjolla_FPSJ_Ant_Stat_TA33-1","Pesjolla_FPSJ_Ant_Pot_TA34A-1","Pesjolla_FPSJ_Ant_Stat_TA34A-1","Pesjolla_FPSJ_Ant_Pot_TA34B-1","Pesjolla_FPSJ_Ant_Stat_TA34B-1","Pesjolla_FPSJ_Ant_Pot_TA35A-1","Pesjolla_FPSJ_Ant_Stat_TA35A-1","Pesjolla_FPSJ_Ant_Pot_TA35B-1","Pesjolla_FPSJ_Ant_Stat_TA35B-1","Pesjolla_FPSJ_Ant_Pot_TA36-1","Pesjolla_FPSJ_Ant_Stat_TA36-1","Pesjolla_FPSJ_Ant_Pot_TA36-2","Pesjolla_FPSJ_Ant_Stat_TA36-2","Pesjolla_FPSJ_Ant_Pot_TA37A-1","Pesjolla_FPSJ_Ant_Stat_TA37A-1","Pesjolla_FPSJ_Ant_Pot_TA37B-1","Pesjolla_FPSJ_Ant_Stat_TA37B-1","Pesjolla_FPSJ_Ant_Pot_TA38-1","Pesjolla_FPSJ_Ant_Stat_TA38-1","Pesjolla_FPSJ_Ant_Pot_TA39-1","Pesjolla_FPSJ_Ant_Stat_TA39-1","Pesjolla_FPSJ_Ant_Pot_TA40-1","Pesjolla_FPSJ_Ant_Stat_TA40-1","Pesjolla_FPSJ_Ant_Pot_TA41-1","Pesjolla_FPSJ_Ant_Stat_TA41-1","Pesjolla_FPSJ_Ant_Pot_TA42A-1","Pesjolla_FPSJ_Ant_Stat_TA42A-1","Pesjolla_FPSJ_Ant_Pot_TA42B-1","Pesjolla_FPSJ_Ant_Stat_TA42B-1","Pesjolla_FPSJ_Ant_Pot_TA43A-1","Pesjolla_FPSJ_Ant_Stat_TA43A-1","Pesjolla_FPSJ_Ant_Pot_TA43B-1","Pesjolla_FPSJ_Ant_Stat_TA43B-1","Pesjolla_FPSJ_Ant_Pot_TA44-1","Pesjolla_FPSJ_Ant_Stat_TA44-1","Pesjolla_FPSJ_Ant_Pot_TA45-1","Pesjolla_FPSJ_Ant_Stat_TA45-1","Pesjolla_FPSJ_Ant_Pot_TA45-2","Pesjolla_FPSJ_Ant_Stat_TA45-2","Pesjolla_FPSJ_Ant_Pot_TA46-1","Pesjolla_FPSJ_Ant_Stat_TA46-1","Pesjolla_FPSJ_Ant_Pot_TA47A-1","Pesjolla_FPSJ_Ant_Stat_TA47A-1","Pesjolla_FPSJ_Ant_Pot_TA47B-1","Pesjolla_FPSJ_Ant_Stat_TA47B-1","Pesjolla_FPSJ_Ant_Pot_TA48-1","Pesjolla_FPSJ_Ant_Stat_TA48-1","Pesjolla_FPSJ_Ant_Pot_TA48-2","Pesjolla_FPSJ_Ant_Stat_TA48-2","Pesjolla_FPSJ_Ant_Pot_TA49-1","Pesjolla_FPSJ_Ant_Stat_TA49-1","Pesjolla_FPSJ_Ant_Pot_TA49-2","Pesjolla_FPSJ_Ant_Stat_TA49-2","Pesjolla_FPSJ_Ant_Pot_TA50-1","Pesjolla_FPSJ_Ant_Stat_TA50-1","Pesjolla_FPSJ_Ant_Pot_PESJOLLA1","Pesjolla_FPSJ_Ant_Stat_PESJOLLA1","Pesjolla_FPSJ_Ant_Pot_PESJOLLA2","Pesjolla_FPSJ_Ant_Stat_PESJOLLA2"]`
};

const arregloTagsInfoGeneralPSPesjolla = () => {
    return arreglo = `["Pesjolla_FPSJ_PC219.Algun_Air_On","Pesjolla_FPSJ_PC219.Num_Air_On","Pesjolla_FPSJ_PC219.Alarm_Adver","Pesjolla_FPSJ_PC220-221.Algun_Air_On","Pesjolla_FPSJ_PC220-221.Num_Air_On","Pesjolla_FPSJ_PC220-221.Alarm_Adver","Pesjolla_FPSJ_PC222-223.Algun_Air_On","Pesjolla_FPSJ_PC222-223.Num_Air_On","Pesjolla_FPSJ_PC222-223.Alarm_Adver","Pesjolla_FPSJ_PC224.Algun_Air_On","Pesjolla_FPSJ_PC224.Num_Air_On","Pesjolla_FPSJ_PC224.Alarm_Adver","Pesjolla_FPSJ_PC225.Algun_Air_On","Pesjolla_FPSJ_PC225.Num_Air_On","Pesjolla_FPSJ_PC225.Alarm_Adver","Pesjolla_FPSJ_PC226-227.Algun_Air_On","Pesjolla_FPSJ_PC226-227.Num_Air_On","Pesjolla_FPSJ_PC226-227.Alarm_Adver","Pesjolla_FPSJ_PC228-229.Algun_Air_On","Pesjolla_FPSJ_PC228-229.Num_Air_On","Pesjolla_FPSJ_PC228-229.Alarm_Adver","Pesjolla_FPSJ_PC230-231-232.Algun_Air_On","Pesjolla_FPSJ_PC230-231-232.Num_Air_On","Pesjolla_FPSJ_PC230-231-232.Alarm_Adver","Pesjolla_FPSJ_PS33.Algun_Air_On","Pesjolla_FPSJ_PS33.Num_Air_On","Pesjolla_FPSJ_PS33.Alarm_Adver","Pesjolla_FPSJ_PS34A.Algun_Air_On","Pesjolla_FPSJ_PS34A.Num_Air_On","Pesjolla_FPSJ_PS34A.Alarm_Adver","Pesjolla_FPSJ_PS34B.Algun_Air_On","Pesjolla_FPSJ_PS34B.Num_Air_On","Pesjolla_FPSJ_PS34B.Alarm_Adver","Pesjolla_FPSJ_PS35A.Algun_Air_On","Pesjolla_FPSJ_PS35A.Num_Air_On","Pesjolla_FPSJ_PS35A.Alarm_Adver","Pesjolla_FPSJ_PS35B.Algun_Air_On","Pesjolla_FPSJ_PS35B.Num_Air_On","Pesjolla_FPSJ_PS35B.Alarm_Adver","Pesjolla_FPSJ_PS36.Algun_Air_On","Pesjolla_FPSJ_PS36.Num_Air_On","Pesjolla_FPSJ_PS36.Alarm_Adver","Pesjolla_FPSJ_PS37A.Algun_Air_On","Pesjolla_FPSJ_PS37A.Num_Air_On","Pesjolla_FPSJ_PS37A.Alarm_Adver","Pesjolla_FPSJ_PS37B.Algun_Air_On","Pesjolla_FPSJ_PS37B.Num_Air_On","Pesjolla_FPSJ_PS37B.Alarm_Adver","Pesjolla_FPSJ_PS38.Algun_Air_On","Pesjolla_FPSJ_PS38.Num_Air_On","Pesjolla_FPSJ_PS38.Alarm_Adver","Pesjolla_FPSJ_PS39.Algun_Air_On","Pesjolla_FPSJ_PS39.Num_Air_On","Pesjolla_FPSJ_PS39.Alarm_Adver","Pesjolla_FPSJ_PS40.Algun_Air_On","Pesjolla_FPSJ_PS40.Num_Air_On","Pesjolla_FPSJ_PS40.Alarm_Adver","Pesjolla_FPSJ_PS41.Algun_Air_On","Pesjolla_FPSJ_PS41.Num_Air_On","Pesjolla_FPSJ_PS41.Alarm_Adver","Pesjolla_FPSJ_PS42A.Algun_Air_On","Pesjolla_FPSJ_PS42A.Num_Air_On","Pesjolla_FPSJ_PS42A.Alarm_Adver","Pesjolla_FPSJ_PS42B.Algun_Air_On","Pesjolla_FPSJ_PS42B.Num_Air_On","Pesjolla_FPSJ_PS42B.Alarm_Adver","Pesjolla_FPSJ_PS43A.Algun_Air_On","Pesjolla_FPSJ_PS43A.Num_Air_On","Pesjolla_FPSJ_PS43A.Alarm_Adver","Pesjolla_FPSJ_PS43B.Algun_Air_On","Pesjolla_FPSJ_PS43B.Num_Air_On","Pesjolla_FPSJ_PS43B.Alarm_Adver","Pesjolla_FPSJ_PS44.Algun_Air_On","Pesjolla_FPSJ_PS44.Num_Air_On","Pesjolla_FPSJ_PS44.Alarm_Adver","Pesjolla_FPSJ_PS45.Algun_Air_On","Pesjolla_FPSJ_PS45.Num_Air_On","Pesjolla_FPSJ_PS45.Alarm_Adver","Pesjolla_FPSJ_PS46.Algun_Air_On","Pesjolla_FPSJ_PS46.Num_Air_On","Pesjolla_FPSJ_PS46.Alarm_Adver","Pesjolla_FPSJ_PS47A.Algun_Air_On","Pesjolla_FPSJ_PS47A.Num_Air_On","Pesjolla_FPSJ_PS47A.Alarm_Adver","Pesjolla_FPSJ_PS47B.Algun_Air_On","Pesjolla_FPSJ_PS47B.Num_Air_On","Pesjolla_FPSJ_PS47B.Alarm_Adver","Pesjolla_FPSJ_PS48.Algun_Air_On","Pesjolla_FPSJ_PS48.Num_Air_On","Pesjolla_FPSJ_PS48.Alarm_Adver","Pesjolla_FPSJ_PS49.Algun_Air_On","Pesjolla_FPSJ_PS49.Num_Air_On","Pesjolla_FPSJ_PS49.Alarm_Adver","Pesjolla_FPSJ_PS50.Algun_Air_On","Pesjolla_FPSJ_PS50.Num_Air_On","Pesjolla_FPSJ_PS50.Alarm_Adver"]`
};

module.exports = {
    arregloTagsPC219Antenas,
    arregloTagsPC220Antenas,
    arregloTagsPC222Antenas,
    arregloTagsPC224Antenas,
    arregloTagsPC225Antenas,
    arregloTagsPC226Antenas,
    arregloTagsPC228Antenas,
    arregloTagsPC232Antenas,
    arregloTagsPS33Antenas,
    arregloTagsPS34AAntenas,
    arregloTagsPS34BAntenas,
    arregloTagsPS35AAntenas,
    arregloTagsPS35BAntenas,
    arregloTagsPS36Antenas,
    arregloTagsPS37AAntenas,
    arregloTagsPS37BAntenas,
    arregloTagsPS38Antenas,
    arregloTagsPS39Antenas,
    arregloTagsPS40Antenas,
    arregloTagsPS41Antenas,
    arregloTagsPS42AAntenas,
    arregloTagsPS42BAntenas,
    arregloTagsPS43AAntenas,
    arregloTagsPS43BAntenas,
    arregloTagsPS44Antenas,
    arregloTagsPS45Antenas,
    arregloTagsPS46Antenas,
    arregloTagsPS47AAntenas,
    arregloTagsPS47BAntenas,
    arregloTagsPS48Antenas,
    arregloTagsPS49Antenas,
    arregloTagsPS50Antenas,
    arregloTagsAntenasAllPesjolla,
    arregloTagsInfoGeneralPSPesjolla,
    generarTags,
    generarTagsTCP
}