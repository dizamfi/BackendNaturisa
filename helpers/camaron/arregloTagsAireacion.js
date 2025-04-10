
const generarTags = (name) => {
    arreglo = ["Num_Auto","Num_Air_On","Algun_Air_On","Hora_Ini_1","Hora_Ini_2","Hora_Fin_1","Hora_Fin_2","Alarm_Adver","Run_Rem","Bloq_Auto_Hora","Ener_Dia_Act","Ener_Dia_Pas","Ener_Total_Index","Pot_Inst","Hrs_Trab_Dia_Act","Hrs_Trab_Dia_Pas","Sel_Horario"]
    arreglo2 = `[`
    arreglo.forEach(element => {
        arreglo2 = arreglo2 + `${`"${name}`.concat(".", `${element}"`).replaceAll("'", '"')},`
    });
    arreglo2 = arreglo2 + "]"
    return `${arreglo2}`
};

const generarTagsTA = (name) => {
    arreglo = ["Inputs","Outputs","Horas_Trab_Act_Dia","Horas_Trab_Guar_Dia","Stat_Comm","DesactivaGM"]
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
    arreglo = ["Inputs","Outputs","Horas_Trab_Act_Dia","Horas_Trab_Guar_Dia","Stat_Comm_MB","Stat_Comm","V_Avg","I_Tot","P_Tot","PF_Avg","V_12","V_23","V_31","VLL_Avg","THDV_tot","THDI_tot","V_1","I_1","V_2","I_2","V_3","I_3","Alarm1","Alarm2","T1_Imp_Act_Index","Num_Air_On","Pesos_Habilit","Pesos_Acti","DesactivaGM"]
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
    return arreglo = `["Camaron_CAM_Ant_Pot_TA01-1","Camaron_CAM_Ant_Stat_TA01-1","Camaron_CAM_Ant_Pot_TA01-2","Camaron_CAM_Ant_Stat_TA01-2"]`
};

const arregloTagsPS02Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA02-1","Camaron_CAM_Ant_Stat_TA02-1","Camaron_CAM_Ant_Pot_TA02-2","Camaron_CAM_Ant_Stat_TA02-2"]`
};

const arregloTagsPS03Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA03-1","Camaron_CAM_Ant_Stat_TA03-1"]`
};

const arregloTagsPS04Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA04-1","Camaron_CAM_Ant_Stat_TA04-1","Camaron_CAM_Ant_Pot_TA04-2","Camaron_CAM_Ant_Stat_TA04-2"]`
};

const arregloTagsPS05AAntenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA05A-1","Camaron_CAM_Ant_Stat_TA05A-1"]`
};

const arregloTagsPS05BAntenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA05B-1","Camaron_CAM_Ant_Stat_TA05B-1"]`
};

const arregloTagsPS06Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA06-1","Camaron_CAM_Ant_Stat_TA06-1","Camaron_CAM_Ant_Pot_TA06-2","Camaron_CAM_Ant_Stat_TA06-2"]`
};

const arregloTagsPS07AAntenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA07A-1","Camaron_CAM_Ant_Stat_TA07A-1","Camaron_CAM_Ant_Pot_TA07A-2","Camaron_CAM_Ant_Stat_TA07A-2"]`
};

const arregloTagsPS07BAntenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA07B-1","Camaron_CAM_Ant_Stat_TA07B-1","Camaron_CAM_Ant_Pot_TA07B-2","Camaron_CAM_Ant_Stat_TA07B-2"]`
};

const arregloTagsPS08Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA08-1","Camaron_CAM_Ant_Stat_TA08-1","Camaron_CAM_Ant_Pot_TA08-2","Camaron_CAM_Ant_Stat_TA08-2"]`
};

const arregloTagsPS09Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA09-1","Camaron_CAM_Ant_Stat_TA09-1","Camaron_CAM_Ant_Pot_TA09-2","Camaron_CAM_Ant_Stat_TA09-2"]`
};

const arregloTagsPS10Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA10-1","Camaron_CAM_Ant_Stat_TA10-1","Camaron_CAM_Ant_Pot_TA10-2","Camaron_CAM_Ant_Stat_TA10-2"]`
};

const arregloTagsPC103Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA103-1","Camaron_CAM_Ant_Stat_TA103-1"]`
};

const arregloTagsPC104Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA104-1","Camaron_CAM_Ant_Stat_TA104-1"]`
};

const arregloTagsPC105Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA105-1","Camaron_CAM_Ant_Stat_TA105-1"]`
};

const arregloTagsPC106Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA106-1","Camaron_CAM_Ant_Stat_TA106-1"]`
};

const arregloTagsPC107Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA107-1","Camaron_CAM_Ant_Stat_TA107-1"]`
};

const arregloTagsPC109Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA109-1","Camaron_CAM_Ant_Stat_TA109-1"]`
};

const arregloTagsPC110Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA110-1","Camaron_CAM_Ant_Stat_TA110-1"]`
};

const arregloTagsPS11Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA11-1","Camaron_CAM_Ant_Stat_TA11-1","Camaron_CAM_Ant_Pot_TA11-2","Camaron_CAM_Ant_Stat_TA11-2"]`
};

const arregloTagsPC111Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA111-1","Camaron_CAM_Ant_Stat_TA111-1"]`
};

const arregloTagsPC112Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA112-1","Camaron_CAM_Ant_Stat_TA112-1"]`
};

const arregloTagsPC113Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA113-1","Camaron_CAM_Ant_Stat_TA113-1"]`
};

const arregloTagsPS12Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA12-1","Camaron_CAM_Ant_Stat_TA12-1","Camaron_CAM_Ant_Pot_TA12-2","Camaron_CAM_Ant_Stat_TA12-2"]`
};

const arregloTagsPS13Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA13-1","Camaron_CAM_Ant_Stat_TA13-1","Camaron_CAM_Ant_Pot_TA13-2","Camaron_CAM_Ant_Stat_TA13-2"]`
};

const arregloTagsPS14Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA14-1","Camaron_CAM_Ant_Stat_TA14-1","Camaron_CAM_Ant_Pot_TA14-2","Camaron_CAM_Ant_Stat_TA14-2"]`
}

const arregloTagsPS15Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA15-1","Camaron_CAM_Ant_Stat_TA15-1","Camaron_CAM_Ant_Pot_TA15-2","Camaron_CAM_Ant_Stat_TA15-2"]`
}

const arregloTagsPS16AAntenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA16A-1","Camaron_CAM_Ant_Stat_TA16A-1","Camaron_CAM_Ant_Pot_TA16A-2","Camaron_CAM_Ant_Stat_TA16A-2"]`
}

const arregloTagsPS16BAntenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA16B-1","Camaron_CAM_Ant_Stat_TA16B-1","Camaron_CAM_Ant_Pot_TA16B-2","Camaron_CAM_Ant_Stat_TA16B-2"]`
}

const arregloTagsPS17Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA17-1","Camaron_CAM_Ant_Stat_TA17-1","Camaron_CAM_Ant_Pot_TA17-2","Camaron_CAM_Ant_Stat_TA17-2"]`
}

const arregloTagsPS18Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA18-1","Camaron_CAM_Ant_Stat_TA18-1"]`
}

const arregloTagsPS19Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA19-1","Camaron_CAM_Ant_Stat_TA19-1","Camaron_CAM_Ant_Pot_TA19-2","Camaron_CAM_Ant_Stat_TA19-2"]`
}

const arregloTagsPS20Antenas = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA20-1","Camaron_CAM_Ant_Stat_TA20-1","Camaron_CAM_Ant_Pot_TA20-2","Camaron_CAM_Ant_Stat_TA20-2"]`
}

const arregloTagsAntenasAllCamaron = () => {
    return arreglo = `["Camaron_CAM_Ant_Pot_TA01-1","Camaron_CAM_Ant_Stat_TA01-1","Camaron_CAM_Ant_Pot_TA01-2","Camaron_CAM_Ant_Stat_TA01-2","Camaron_CAM_Ant_Pot_TA02-1","Camaron_CAM_Ant_Stat_TA02-1","Camaron_CAM_Ant_Pot_TA02-2","Camaron_CAM_Ant_Stat_TA02-2","Camaron_CAM_Ant_Pot_TA03-1","Camaron_CAM_Ant_Stat_TA03-1","Camaron_CAM_Ant_Pot_TA04-1","Camaron_CAM_Ant_Stat_TA04-1","Camaron_CAM_Ant_Pot_TA04-2","Camaron_CAM_Ant_Stat_TA04-2","Camaron_CAM_Ant_Pot_TA05A-1","Camaron_CAM_Ant_Stat_TA05A-1","Camaron_CAM_Ant_Pot_TA05B-1","Camaron_CAM_Ant_Stat_TA05B-1","Camaron_CAM_Ant_Pot_TA06-1","Camaron_CAM_Ant_Stat_TA06-1","Camaron_CAM_Ant_Pot_TA06-2","Camaron_CAM_Ant_Stat_TA06-2","Camaron_CAM_Ant_Pot_TA07A-1","Camaron_CAM_Ant_Stat_TA07A-1","Camaron_CAM_Ant_Pot_TA07A-2","Camaron_CAM_Ant_Stat_TA07A-2","Camaron_CAM_Ant_Pot_TA07B-1","Camaron_CAM_Ant_Stat_TA07B-1","Camaron_CAM_Ant_Pot_TA07B-2","Camaron_CAM_Ant_Stat_TA07B-2","Camaron_CAM_Ant_Pot_TA08-1","Camaron_CAM_Ant_Stat_TA08-1","Camaron_CAM_Ant_Pot_TA08-2","Camaron_CAM_Ant_Stat_TA08-2","Camaron_CAM_Ant_Pot_TA09-1","Camaron_CAM_Ant_Stat_TA09-1","Camaron_CAM_Ant_Pot_TA09-2","Camaron_CAM_Ant_Stat_TA09-2","Camaron_CAM_Ant_Pot_TA10-1","Camaron_CAM_Ant_Stat_TA10-1","Camaron_CAM_Ant_Pot_TA10-2","Camaron_CAM_Ant_Stat_TA10-2","Camaron_CAM_Ant_Pot_TA103-1","Camaron_CAM_Ant_Stat_TA103-1","Camaron_CAM_Ant_Pot_TA104-1","Camaron_CAM_Ant_Stat_TA104-1","Camaron_CAM_Ant_Pot_TA105-1","Camaron_CAM_Ant_Stat_TA105-1","Camaron_CAM_Ant_Pot_TA106-1","Camaron_CAM_Ant_Stat_TA106-1","Camaron_CAM_Ant_Pot_TA107-1","Camaron_CAM_Ant_Stat_TA107-1","Camaron_CAM_Ant_Pot_TA109-1","Camaron_CAM_Ant_Stat_TA109-1","Camaron_CAM_Ant_Pot_TA110-1","Camaron_CAM_Ant_Stat_TA110-1","Camaron_CAM_Ant_Pot_TA11-1","Camaron_CAM_Ant_Stat_TA11-1","Camaron_CAM_Ant_Pot_TA11-2","Camaron_CAM_Ant_Stat_TA11-2","Camaron_CAM_Ant_Pot_TA111-1","Camaron_CAM_Ant_Stat_TA111-1","Camaron_CAM_Ant_Pot_TA112-1","Camaron_CAM_Ant_Stat_TA112-1","Camaron_CAM_Ant_Pot_TA113-1","Camaron_CAM_Ant_Stat_TA113-1","Camaron_CAM_Ant_Pot_TA12-1","Camaron_CAM_Ant_Stat_TA12-1","Camaron_CAM_Ant_Pot_TA12-2","Camaron_CAM_Ant_Stat_TA12-2","Camaron_CAM_Ant_Pot_TA13-1","Camaron_CAM_Ant_Stat_TA13-1","Camaron_CAM_Ant_Pot_TA13-2","Camaron_CAM_Ant_Stat_TA13-2","Camaron_CAM_Ant_Pot_TA14-1","Camaron_CAM_Ant_Stat_TA14-1","Camaron_CAM_Ant_Pot_TA14-2","Camaron_CAM_Ant_Stat_TA14-2","Camaron_CAM_Ant_Pot_TA15-1","Camaron_CAM_Ant_Stat_TA15-1","Camaron_CAM_Ant_Pot_TA15-2","Camaron_CAM_Ant_Stat_TA15-2","Camaron_CAM_Ant_Pot_TA16A-1","Camaron_CAM_Ant_Stat_TA16A-1","Camaron_CAM_Ant_Pot_TA16A-2","Camaron_CAM_Ant_Stat_TA16A-2","Camaron_CAM_Ant_Pot_TA16B-1","Camaron_CAM_Ant_Stat_TA16B-1","Camaron_CAM_Ant_Pot_TA16B-2","Camaron_CAM_Ant_Stat_TA16B-2","Camaron_CAM_Ant_Pot_TA17-1","Camaron_CAM_Ant_Stat_TA17-1","Camaron_CAM_Ant_Pot_TA17-2","Camaron_CAM_Ant_Stat_TA17-2","Camaron_CAM_Ant_Pot_TA18-1","Camaron_CAM_Ant_Stat_TA18-1","Camaron_CAM_Ant_Pot_TA19-1","Camaron_CAM_Ant_Stat_TA19-1","Camaron_CAM_Ant_Pot_TA19-2","Camaron_CAM_Ant_Stat_TA19-2","Camaron_CAM_Ant_Pot_TA20-1","Camaron_CAM_Ant_Stat_TA20-1","Camaron_CAM_Ant_Pot_TA20-2","Camaron_CAM_Ant_Stat_TA20-2","Camaron_CAM_Ant_Pot_AP_CAM","Camaron_CAM_Ant_Stat_AP_CAM","Camaron_CAM_Ant_Pot_AP_EB_CAM","Camaron_CAM_Ant_Stat_AP_EB_CAM","Camaron_CAM_Ant_Pot_EB_CAM","Camaron_CAM_Ant_Stat_EB_CAM","Camaron_CAM_Ant_Pot_PTP_TORRE_CAM","Camaron_CAM_Ant_Stat_PTP_TORRE_CAM"]`
};

const arregloTagsInfoGeneralPSCamaron = () => {
    return arreglo = `["Camaron_FCAM_PS01.Algun_Air_On","Camaron_FCAM_PS01.Num_Air_On","Camaron_FCAM_PS01.Alarm_Adver","Camaron_FCAM_PS02.Algun_Air_On","Camaron_FCAM_PS02.Num_Air_On","Camaron_FCAM_PS02.Alarm_Adver","Camaron_FCAM_PS03.Algun_Air_On","Camaron_FCAM_PS03.Num_Air_On","Camaron_FCAM_PS03.Alarm_Adver","Camaron_FCAM_PS04.Algun_Air_On","Camaron_FCAM_PS04.Num_Air_On","Camaron_FCAM_PS04.Alarm_Adver","Camaron_FCAM_PS06.Algun_Air_On","Camaron_FCAM_PS06.Num_Air_On","Camaron_FCAM_PS06.Alarm_Adver","Camaron_FCAM_PS08.Algun_Air_On","Camaron_FCAM_PS08.Num_Air_On","Camaron_FCAM_PS08.Alarm_Adver","Camaron_FCAM_PS09.Algun_Air_On","Camaron_FCAM_PS09.Num_Air_On","Camaron_FCAM_PS09.Alarm_Adver","Camaron_FCAM_PS10.Algun_Air_On","Camaron_FCAM_PS10.Num_Air_On","Camaron_FCAM_PS10.Alarm_Adver","Camaron_FCAM_PS11.Algun_Air_On","Camaron_FCAM_PS11.Num_Air_On","Camaron_FCAM_PS11.Alarm_Adver","Camaron_FCAM_PS12.Algun_Air_On","Camaron_FCAM_PS12.Num_Air_On","Camaron_FCAM_PS12.Alarm_Adver","Camaron_FCAM_PS13.Algun_Air_On","Camaron_FCAM_PS13.Num_Air_On","Camaron_FCAM_PS13.Alarm_Adver","Camaron_FCAM_PS14.Algun_Air_On","Camaron_FCAM_PS14.Num_Air_On","Camaron_FCAM_PS14.Alarm_Adver","Camaron_FCAM_PS15.Algun_Air_On","Camaron_FCAM_PS15.Num_Air_On","Camaron_FCAM_PS15.Alarm_Adver","Camaron_FCAM_PS17.Algun_Air_On","Camaron_FCAM_PS17.Num_Air_On","Camaron_FCAM_PS17.Alarm_Adver","Camaron_FCAM_PC103.Algun_Air_On","Camaron_FCAM_PC103.Num_Air_On","Camaron_FCAM_PC103.Alarm_Adver","Camaron_FCAM_PC104.Algun_Air_On","Camaron_FCAM_PC104.Num_Air_On","Camaron_FCAM_PC104.Alarm_Adver","Camaron_FCAM_PC105.Algun_Air_On","Camaron_FCAM_PC105.Num_Air_On","Camaron_FCAM_PC105.Alarm_Adver","Camaron_FCAM_PC106.Algun_Air_On","Camaron_FCAM_PC106.Num_Air_On","Camaron_FCAM_PC106.Alarm_Adver","Camaron_FCAM_PC107.Algun_Air_On","Camaron_FCAM_PC107.Num_Air_On","Camaron_FCAM_PC107.Alarm_Adver","Camaron_FCAM_PC109.Algun_Air_On","Camaron_FCAM_PC109.Num_Air_On","Camaron_FCAM_PC109.Alarm_Adver","Camaron_FCAM_PC110.Algun_Air_On","Camaron_FCAM_PC110.Num_Air_On","Camaron_FCAM_PC110.Alarm_Adver","Camaron_FCAM_PC111.Algun_Air_On","Camaron_FCAM_PC111.Num_Air_On","Camaron_FCAM_PC111.Alarm_Adver","Camaron_FCAM_PC112.Algun_Air_On","Camaron_FCAM_PC112.Num_Air_On","Camaron_FCAM_PC112.Alarm_Adver","Camaron_FCAM_PC113.Algun_Air_On","Camaron_FCAM_PC113.Num_Air_On","Camaron_FCAM_PC113.Alarm_Adver","Camaron_FCAM_PS05A.Algun_Air_On","Camaron_FCAM_PS05A.Num_Air_On","Camaron_FCAM_PS05A.Alarm_Adver","Camaron_FCAM_PS05B.Algun_Air_On","Camaron_FCAM_PS05B.Num_Air_On","Camaron_FCAM_PS05B.Alarm_Adver","Camaron_FCAM_PS07A.Algun_Air_On","Camaron_FCAM_PS07A.Num_Air_On","Camaron_FCAM_PS07A.Alarm_Adver","Camaron_FCAM_PS07B.Algun_Air_On","Camaron_FCAM_PS07B.Num_Air_On","Camaron_FCAM_PS07B.Alarm_Adver","Camaron_FCAM_PS16A.Algun_Air_On","Camaron_FCAM_PS16A.Num_Air_On","Camaron_FCAM_PS16A.Alarm_Adver","Camaron_FCAM_PS16B.Algun_Air_On","Camaron_FCAM_PS16B.Num_Air_On","Camaron_FCAM_PS16B.Alarm_Adver","Camaron_FCAM_PS18.Algun_Air_On","Camaron_FCAM_PS18.Num_Air_On","Camaron_FCAM_PS18.Alarm_Adver","Camaron_FCAM_PS19.Algun_Air_On","Camaron_FCAM_PS19.Num_Air_On","Camaron_FCAM_PS19.Alarm_Adver","Camaron_FCAM_PS20.Algun_Air_On","Camaron_FCAM_PS20.Num_Air_On","Camaron_FCAM_PS20.Alarm_Adver"]`
};

module.exports = {
    arregloTagsPS01Antenas,
    arregloTagsPS02Antenas,
    arregloTagsPS03Antenas,
    arregloTagsPS04Antenas,
    arregloTagsPS05AAntenas,
    arregloTagsPS05BAntenas,
    arregloTagsPS06Antenas,
    arregloTagsPS07AAntenas,
    arregloTagsPS07BAntenas,
    arregloTagsPS08Antenas,
    arregloTagsPS09Antenas,
    arregloTagsPS10Antenas,
    arregloTagsPC103Antenas,
    arregloTagsPC104Antenas,
    arregloTagsPC105Antenas,
    arregloTagsPC106Antenas,
    arregloTagsPC107Antenas,
    arregloTagsPC109Antenas,
    arregloTagsPC110Antenas,
    arregloTagsPS11Antenas,
    arregloTagsPC111Antenas,
    arregloTagsPC112Antenas,
    arregloTagsPC113Antenas,
    arregloTagsPS12Antenas,
    arregloTagsPS13Antenas,
    arregloTagsPS14Antenas,
    arregloTagsPS15Antenas,
    arregloTagsPS16AAntenas,
    arregloTagsPS16BAntenas,
    arregloTagsPS17Antenas,
    arregloTagsPS18Antenas,
    arregloTagsPS19Antenas,
    arregloTagsPS20Antenas,
    arregloTagsAntenasAllCamaron,
    arregloTagsInfoGeneralPSCamaron,
    generarTags,
    generarTagsTCP,
    generarTagsTA
}