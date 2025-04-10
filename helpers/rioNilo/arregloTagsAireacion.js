
const generarTags = (name) => {
    arreglo = ["Num_Auto","Num_Air_On","Algun_Air_On","Hora_Ini_1","Hora_Ini_2","Hora_Fin_1","Hora_Fin_2","Alarm_Adver","Run_Rem","Bloq_Auto_Hora","Ener_Mes_Act","Ener_Mes_Pas","Ener_Total_Index","Pot_Inst","Hrs_Trab_Sem","Hrs_Trab_Act"]
    arreglo2 = `[`
    arreglo.forEach(element => {
        arreglo2 = arreglo2 + `${`"${name}`.concat(".", `${element}"`).replaceAll("'", '"')},`
    });
    arreglo2 = arreglo2 + "]"
    return `${arreglo2}`
};

const generarTagsSur = (name) => {
    arreglo = ["Num_Auto","Num_Air_On","Algun_Air_On","Hora_Ini_1","Hora_Ini_2","Hora_Fin_1","Hora_Fin_2","Alarm_Adver","Run_Rem","Bloq_Auto_Hora","Ener_Dia_Act","Ener_Dia_Pas","Ener_Total_Index","Pot_Inst","Hrs_Trab_Sem_Pas","Hrs_Trab_Sem_Act","Hrs_Trab_Dia_Act","Hrs_Trab_Dia_Pas","Sel_Horario"]
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

const generarTagsTCPSur = (name) => {
    arreglo = ["Inputs","Outputs","Horas_Trab_Act","Horas_Trab_Guar","Horas_Trab_Act_Dia","Horas_Trab_Guar_Dia","Stat_Comm_MB","Stat_Comm","V_Avg","I_Tot","P_Tot","PF_Avg","V_12","V_23","V_31","VLL_Avg","THDV_tot","THDI_tot","V_1","I_1","V_2","I_2","V_3","I_3","Alarm1","Alarm2","T1_Imp_Act_Index","Num_Air_On","Desactiva"]
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
    return arreglo = `["Ant_Pot_TA01-1","Ant_Stat_TA01-1","Ant_Pot_TA01-2","Ant_Stat_TA01-2"]`
};

const arregloTagsPS02Antenas = () => {
    return arreglo = `["Ant_Pot_TA02-1","Ant_Stat_TA02-1","Ant_Pot_TA02-2","Ant_Stat_TA02-2"]`
};

const arregloTagsPS03Antenas = () => {
    return arreglo = `["Ant_Pot_TA03-1","Ant_Stat_TA03-1","Ant_Pot_TA03-2","Ant_Stat_TA03-2"]`
};

const arregloTagsPS04Antenas = () => {
    return arreglo = `["Ant_Pot_TA04-1","Ant_Stat_TA04-1","Ant_Pot_TA04-2","Ant_Stat_TA04-2","Ant_Pot_TA04-3","Ant_Stat_TA04-3"]`
};

const arregloTagsPS05Antenas = () => {
    return arreglo = `["Ant_Pot_TA05-1","Ant_Stat_TA05-1","Ant_Pot_TA05-2","Ant_Stat_TA05-2"]`
};

const arregloTagsPS06Antenas = () => {
    return arreglo = `["Ant_Pot_TA06-1","Ant_Stat_TA06-1","Ant_Pot_TA06-2","Ant_Stat_TA06-2"]`
};

const arregloTagsPS07Antenas = () => {
    return arreglo = `["Ant_Pot_TA07-1","Ant_Stat_TA07-1","Ant_Pot_TA07-2","Ant_Stat_TA07-2","Ant_Pot_TA07-3","Ant_Stat_TA07-3"]`
};

const arregloTagsPS08Antenas = () => {
    return arreglo = `["Ant_Pot_TA08-1","Ant_Stat_TA08-1","Ant_Pot_TA08-2","Ant_Stat_TA08-2"]`
};

const arregloTagsPS09Antenas = () => {
    return arreglo = `["Ant_Pot_TA09-1","Ant_Stat_TA09-1","Ant_Pot_TA09-2","Ant_Stat_TA09-2"]`
};

const arregloTagsPS10Antenas = () => {
    return arreglo = `["Ant_Pot_TA10-1","Ant_Stat_TA10-1"]`
};

const arregloTagsPC101Antenas = () => {
    return arreglo = `["Ant_Pot_TA101-1","Ant_Stat_TA101-1"]`
};

const arregloTagsPC102Antenas = () => {
    return arreglo = `["Ant_Pot_TA102-1","Ant_Stat_TA102-1"]`
};

const arregloTagsPC103Antenas = () => {
    return arreglo = `["Ant_Pot_TA103-1","Ant_Stat_TA103-1"]`
};

const arregloTagsPC104Antenas = () => {
    return arreglo = `["Ant_Pot_TA104-1","Ant_Stat_TA104-1"]`
};

const arregloTagsPC105Antenas = () => {
    return arreglo = `["Ant_Pot_TA105-1","Ant_Stat_TA105-1"]`
};

const arregloTagsPC106Antenas = () => {
    return arreglo = `["Ant_Pot_TA106-1","Ant_Stat_TA106-1"]`
};

const arregloTagsPC107Antenas = () => {
    return arreglo = `["Ant_Pot_TA107-1","Ant_Stat_TA107-1"]`
};

const arregloTagsPC108Antenas = () => {
    return arreglo = `["Ant_Pot_TA108-1","Ant_Stat_TA108-1"]`
};

const arregloTagsPC109Antenas = () => {
    return arreglo = `["Ant_Pot_TA109-1","Ant_Stat_TA109-1"]`
};

const arregloTagsPC110Antenas = () => {
    return arreglo = `["Ant_Pot_TA110-1","Ant_Stat_TA110-1"]`
};

const arregloTagsPS11Antenas = () => {
    return arreglo = `["Ant_Pot_TA11-1","Ant_Stat_TA11-1","Ant_Pot_TA11-2","Ant_Stat_TA11-2"]`
};

const arregloTagsPC111Antenas = () => {
    return arreglo = `["Ant_Pot_TA111-1","Ant_Stat_TA111-1"]`
};

const arregloTagsPC112Antenas = () => {
    return arreglo = `["Ant_Pot_TA112-1","Ant_Stat_TA112-1"]`
};

const arregloTagsPC113Antenas = () => {
    return arreglo = `["Ant_Pot_TA113-1","Ant_Stat_TA113-1"]`
};

const arregloTagsPC114Antenas = () => {
    return arreglo = `["Ant_Pot_TA114-1","Ant_Stat_TA114-1"]`
};

const arregloTagsPC118Antenas = () => {
    return arreglo = `["Ant_Pot_TA118-1","Ant_Stat_TA118-1"]`
};

const arregloTagsPC119Antenas = () => {
    return arreglo = `["Ant_Pot_TA119-1","Ant_Stat_TA119-1"]`
};

const arregloTagsPC120Antenas = () => {
    return arreglo = `["Ant_Pot_TA120-1","Ant_Stat_TA120-1"]`
};

const arregloTagsPC121Antenas = () => {
    return arreglo = `["Ant_Pot_TA121-1","Ant_Stat_TA121-1"]`
};

const arregloTagsPC122Antenas = () => {
    return arreglo = `["Ant_Pot_TA122-1","Ant_Stat_TA122-1"]`
};

const arregloTagsPC123Antenas = () => {
    return arreglo = `["Ant_Pot_TA123-1","Ant_Stat_TA123-1"]`
};

const arregloTagsPC124Antenas = () => {
    return arreglo = `["Ant_Pot_TA124-1","Ant_Stat_TA124-1"]`
};

const arregloTagsPC125Antenas = () => {
    return arreglo = `["Ant_Pot_TA125-1","Ant_Stat_TA125-1"]`
};

const arregloTagsPC126Antenas = () => {
    return arreglo = `["Ant_Pot_TA126-1","Ant_Stat_TA126-1"]`
};

const arregloTagsPC127Antenas = () => {
    return arreglo = `["Ant_Pot_TA127-1","Ant_Stat_TA127-1"]`
};

const arregloTagsPC128Antenas = () => {
    return arreglo = `["Ant_Pot_TA128-1","Ant_Stat_TA128-1"]`
};

const arregloTagsPC129Antenas = () => {
    return arreglo = `["Ant_Pot_TA129-1","Ant_Stat_TA129-1"]`
};

const arregloTagsPS12Antenas = () => {
    return arreglo = `["Ant_Pot_TA12-A1","Ant_Stat_TA12-A1","Ant_Pot_TA12-A2","Ant_Stat_TA12-A2"]`
};

const arregloTagsPS12BAntenas = () => {
    return arreglo = `["Ant_Pot_TA12-B1","Ant_Stat_TA12-B1"]`
};

const arregloTagsPC130Antenas = () => {
    return arreglo = `["Ant_Pot_TA130-1","Ant_Stat_TA130-1"]`
};

const arregloTagsPS13Antenas = () => {
    return arreglo = `["Ant_Pot_TA13-1","Ant_Stat_TA13-1"]`
};

const arregloTagsPC131Antenas = () => {
    return arreglo = `["Ant_Pot_TA131-1","Ant_Stat_TA131-1"]`
};

const arregloTagsPC132Antenas = () => {
    return arreglo = `["Ant_Pot_TA132-1","Ant_Stat_TA132-1"]`
};

const arregloTagsPC133Antenas = () => {
    return arreglo = `["Ant_Pot_TA133-1","Ant_Stat_TA133-1"]`
};

const arregloTagsPC134Antenas = () => {
    return arreglo = `["Ant_Pot_TA134-1","Ant_Stat_TA134-1"]`
};

const arregloTagsPC135Antenas = () => {
    return arreglo = `["Ant_Pot_TA135-1","Ant_Stat_TA135-1"]`
};

const arregloTagsPC136Antenas = () => {
    return arreglo = `["Ant_Pot_TA136-1","Ant_Stat_TA136-1"]`
};

const arregloTagsPC137Antenas = () => {
    return arreglo = `["Ant_Pot_TA137-1","Ant_Stat_TA137-1"]`
};

const arregloTagsPC138Antenas = () => {
    return arreglo = `["Ant_Pot_TA138-1","Ant_Stat_TA138-1"]`
};

const arregloTagsPC139Antenas = () => {
    return arreglo = `["Ant_Pot_TA139-1","Ant_Stat_TA139-1"]`
};

const arregloTagsPC140Antenas = () => {
    return arreglo = `["Ant_Pot_TA140-1","Ant_Stat_TA140-1"]`
};

const arregloTagsPS14Antenas = () => {
    return arreglo = `["Ant_Pot_TA14-1","Ant_Stat_TA14-1","Ant_Pot_TA14-2","Ant_Stat_TA14-2"]`
};

const arregloTagsPC141Antenas = () => {
    return arreglo = `["Ant_Pot_TA141-1","Ant_Stat_TA141-1"]`
};

const arregloTagsPC142Antenas = () => {
    return arreglo = `["Ant_Pot_TA142-1","Ant_Stat_TA142-1"]`
};

const arregloTagsPC143Antenas = () => {
    return arreglo = `["Ant_Pot_TA143-1","Ant_Stat_TA143-1"]`
};

const arregloTagsPC144Antenas = () => {
    return arreglo = `["Ant_Pot_TA144-1","Ant_Stat_TA144-1"]`
};

const arregloTagsPS15Antenas = () => {
    return arreglo = `["Ant_Pot_TA15-1","Ant_Stat_TA15-1","Ant_Pot_TA15-2","Ant_Stat_TA15-2"]`
};

const arregloTagsPS16Antenas = () => {
    return arreglo = `["Ant_Pot_TA16-1","Ant_Stat_TA16-1","Ant_Pot_TA16-2","Ant_Stat_TA16-2"]`
};

const arregloTagsPS17Antenas = () => {
    return arreglo = `["Ant_Pot_TA17-1","Ant_Stat_TA17-1","Ant_Pot_TA17-2","Ant_Stat_TA17-2"]`
};

const arregloTagsPS18Antenas = () => {
    return arreglo = `["Ant_Pot_TA18-1","Ant_Stat_TA18-1","Ant_Pot_TA18-2","Ant_Stat_TA18-2"]`
};

const arregloTagsPS19Antenas = () => {
    return arreglo = `["Ant_Pot_TA19-1","Ant_Stat_TA19-1","Ant_Pot_TA19-2","Ant_Stat_TA19-2"]`
};

const arregloTagsPS20Antenas = () => {
    return arreglo = `["Ant_Pot_TA20-1","Ant_Stat_TA20-1","Ant_Pot_TA20-2","Ant_Stat_TA20-2","Ant_Pot_TA20-3","Ant_Stat_TA20-3"]`
};

const arregloTagsPS21Antenas = () => {
    return arreglo = `["Ant_Pot_TA21-1","Ant_Stat_TA21-1","Ant_Pot_TA21-2","Ant_Stat_TA21-2","Ant_Pot_TA21-3","Ant_Stat_TA21-3"]`
};

const arregloTagsPS22Antenas = () => {
    return arreglo = `["Ant_Pot_TA22-1","Ant_Stat_TA22-1","Ant_Pot_TA22-2","Ant_Stat_TA22-2","Ant_Pot_TA22-3","Ant_Stat_TA22-3"]`
};

const arregloTagsPS23Antenas = () => {
    return arreglo = `["Ant_Pot_TA23-1","Ant_Stat_TA23-1","Ant_Pot_TA23-2","Ant_Stat_TA23-2"]`
};

const arregloTagsPS24Antenas = () => {
    return arreglo = `["Ant_Pot_TA24-1","Ant_Stat_TA24-1","Ant_Pot_TA24-2","Ant_Stat_TA24-2"]`
};

const arregloTagsPS25Antenas = () => {
    return arreglo = `["Ant_Pot_TA25-1","Ant_Stat_TA25-1","Ant_Pot_TA25-2","Ant_Stat_TA25-2"]`
};

const arregloTagsPS26Antenas = () => {
    return arreglo = `["Ant_Pot_TA26-1","Ant_Stat_TA26-1","Ant_Pot_TA26-2","Ant_Stat_TA26-2"]`
};

const arregloTagsPS27Antenas = () => {
    return arreglo = `["Ant_Pot_TA27-1","Ant_Stat_TA27-1","Ant_Pot_TA27-2","Ant_Stat_TA27-2"]`
};

const arregloTagsPS28Antenas = () => {
    return arreglo = `["Ant_Pot_TA28-1","Ant_Stat_TA28-1","Ant_Pot_TA28-2","Ant_Stat_TA28-2"]`
};

const arregloTagsPS29Antenas = () => {
    return arreglo = `["Ant_Pot_TA29-1","Ant_Stat_TA29-1","Ant_Pot_TA29-2","Ant_Stat_TA29-2"]`
};

const arregloTagsPS30Antenas = () => {
    return arreglo = `["Ant_Pot_TA30-1","Ant_Stat_TA30-1","Ant_Pot_TA30-2","Ant_Stat_TA30-2"]`
};

const arregloTagsPS31Antenas = () => {
    return arreglo = `["Ant_Pot_TA31-1","Ant_Stat_TA31-1","Ant_Pot_TA31-2","Ant_Stat_TA31-2"]`
};

const arregloTagsPS32Antenas = () => {
    return arreglo = `["Ant_Pot_TA32-1","Ant_Stat_TA32-1","Ant_Pot_TA32-2","Ant_Stat_TA32-2"]`
};

const arregloTagsPS33Antenas = () => {
    return arreglo = `["Ant_Pot_TA33-1","Ant_Stat_TA33-1","Ant_Pot_TA33-2","Ant_Stat_TA33-2"]`
};

const arregloTagsPS34Antenas = () => {
    return arreglo = `["Ant_Pot_TA34-1","Ant_Stat_TA34-1","Ant_Pot_TA34-2","Ant_Stat_TA34-2"]`
};

const arregloTagsPS35Antenas = () => {
    return arreglo = `["Ant_Pot_TA35-1","Ant_Stat_TA35-1","Ant_Pot_TA35-2","Ant_Stat_TA35-2"]`
};

const arregloTagsPS36Antenas = () => {
    return arreglo = `["Ant_Pot_TA36-1","Ant_Stat_TA36-1","Ant_Pot_TA36-2","Ant_Stat_TA36-2"]`
};

const arregloTagsPS37Antenas = () => {
    return arreglo = `["Ant_Pot_TA37-1","Ant_Stat_TA37-1","Ant_Pot_TA37-2","Ant_Stat_TA37-2"]`
};

const arregloTagsPS38Antenas = () => {
    return arreglo = `["Ant_Pot_TA38-1","Ant_Stat_TA38-1","Ant_Pot_TA38-2","Ant_Stat_TA38-2"]`
};

const arregloTagsPS39Antenas = () => {
    return arreglo = `["Ant_Pot_TA39-1","Ant_Stat_TA39-1","Ant_Pot_TA39-2","Ant_Stat_TA39-2"]`
};

const arregloTagsPS40Antenas = () => {
    return arreglo = `["Ant_Pot_TA40-1","Ant_Stat_TA40-1","Ant_Pot_TA40-2","Ant_Stat_TA40-2"]`
};

const arregloTagsPS41Antenas = () => {
    return arreglo = `["Ant_Pot_TA41-1","Ant_Stat_TA41-1","Ant_Pot_TA41-2","Ant_Stat_TA41-2"]`
};

const arregloTagsPS42Antenas = () => {
    return arreglo = `["Ant_Pot_TA42-1","Ant_Stat_TA42-1","Ant_Pot_TA42-2","Ant_Stat_TA42-2"]`
};

const arregloTagsPS43Antenas = () => {
    return arreglo = `["Ant_Pot_TA43-1","Ant_Stat_TA43-1","Ant_Pot_TA43-2","Ant_Stat_TA43-2"]`
};

const arregloTagsPS44Antenas = () => {
    return arreglo = `["Ant_Pot_TA44-1","Ant_Stat_TA44-1","Ant_Pot_TA44-2","Ant_Stat_TA44-2"]`
};

const arregloTagsPS45Antenas = () => {
    return arreglo = `["Ant_Pot_TA45-1","Ant_Stat_TA45-1","Ant_Pot_TA45-2","Ant_Stat_TA45-2","Ant_Pot_TA45-3","Ant_Stat_TA45-3","Ant_Pot_TA45-4","Ant_Stat_TA45-4","Ant_Pot_TA45-5","Ant_Stat_TA45-5","Ant_Pot_TA45-6","Ant_Stat_TA45-6","Ant_Pot_TA45-7","Ant_Stat_TA45-7"]`
};

const arregloTagsPS46Antenas = () => {
    return arreglo = `["Ant_Pot_TA46-1","Ant_Stat_TA46-1","Ant_Pot_TA46-2","Ant_Stat_TA46-2"]`
};

const arregloTagsPS47Antenas = () => {
    return arreglo = `["Ant_Pot_TA47-1","Ant_Stat_TA47-1","Ant_Pot_TA47-2","Ant_Stat_TA47-2","Ant_Pot_TA47-3","Ant_Stat_TA47-3"]`
};

const arregloTagsPS48Antenas = () => {
    return arreglo = `["Ant_Pot_TA48-1","Ant_Stat_TA48-1","Ant_Pot_TA48-2","Ant_Stat_TA48-2"]`
};

const arregloTagsPS49Antenas = () => {
    return arreglo = `["Ant_Pot_TA49-1","Ant_Stat_TA49-1","Ant_Pot_TA49-2","Ant_Stat_TA49-2"]`
};

const arregloTagsPS50Antenas = () => {
    return arreglo = `["Ant_Pot_TA50-1","Ant_Stat_TA50-1","Ant_Pot_TA50-2","Ant_Stat_TA50-2"]`
};

const arregloTagsPS51Antenas = () => {
    return arreglo = `["Ant_Pot_TA51-1","Ant_Stat_TA51-1","Ant_Pot_TA51-2","Ant_Stat_TA51-2"]`
};

const arregloTagsPS53Antenas = () => {
    return arreglo = `["Ant_Pot_TA53-1","Ant_Stat_TA53-1"]`
};

const arregloTagsPS54Antenas = () => {
    return arreglo = `["Ant_Pot_TA54-1","Ant_Stat_TA54-1"]`
};

const arregloTagsPS55Antenas = () => {
    return arreglo = `["Ant_Pot_TA55-1","Ant_Stat_TA55-1"]`
};

const arregloTagsPS56Antenas = () => {
    return arreglo = `["Ant_Pot_TA56-1","Ant_Stat_TA56-1"]`
};

const arregloTagsAntenasAllRioNilo = () => {
    return arreglo = `["Ant_Pot_TA01-1","Ant_Stat_TA01-1","Ant_Pot_TA01-2","Ant_Stat_TA01-2","Ant_Pot_TA02-1","Ant_Stat_TA02-1","Ant_Pot_TA02-2","Ant_Stat_TA02-2","Ant_Pot_TA03-1","Ant_Stat_TA03-1","Ant_Pot_TA03-2","Ant_Stat_TA03-2","Ant_Pot_TA04-1","Ant_Stat_TA04-1","Ant_Pot_TA04-2","Ant_Stat_TA04-2","Ant_Pot_TA04-3","Ant_Stat_TA04-3","Ant_Pot_TA05-1","Ant_Stat_TA05-1","Ant_Pot_TA05-2","Ant_Stat_TA05-2","Ant_Pot_TA06-1","Ant_Stat_TA06-1","Ant_Pot_TA06-2","Ant_Stat_TA06-2","Ant_Pot_TA07-1","Ant_Stat_TA07-1","Ant_Pot_TA07-2","Ant_Stat_TA07-2","Ant_Pot_TA07-3","Ant_Stat_TA07-3","Ant_Pot_TA08-1","Ant_Stat_TA08-1","Ant_Pot_TA08-2","Ant_Stat_TA08-2","Ant_Pot_TA09-1","Ant_Stat_TA09-1","Ant_Pot_TA09-2","Ant_Stat_TA09-2","Ant_Pot_TA10-1","Ant_Stat_TA10-1","Ant_Pot_TA101-1","Ant_Stat_TA101-1","Ant_Pot_TA102-1","Ant_Stat_TA102-1","Ant_Pot_TA103-1","Ant_Stat_TA103-1","Ant_Pot_TA104-1","Ant_Stat_TA104-1","Ant_Pot_TA105-1","Ant_Stat_TA105-1","Ant_Pot_TA106-1","Ant_Stat_TA106-1","Ant_Pot_TA107-1","Ant_Stat_TA107-1","Ant_Pot_TA108-1","Ant_Stat_TA108-1","Ant_Pot_TA109-1","Ant_Stat_TA109-1","Ant_Pot_TA110-1","Ant_Stat_TA110-1","Ant_Pot_TA11-1","Ant_Stat_TA11-1","Ant_Pot_TA11-2","Ant_Stat_TA11-2","Ant_Pot_TA111-1","Ant_Stat_TA111-1","Ant_Pot_TA112-1","Ant_Stat_TA112-1","Ant_Pot_TA113-1","Ant_Stat_TA113-1","Ant_Pot_TA114-1","Ant_Stat_TA114-1","Ant_Pot_TA118-1","Ant_Stat_TA118-1","Ant_Pot_TA119-1","Ant_Stat_TA119-1","Ant_Pot_TA120-1","Ant_Stat_TA120-1","Ant_Pot_TA121-1","Ant_Stat_TA121-1","Ant_Pot_TA122-1","Ant_Stat_TA122-1","Ant_Pot_TA123-1","Ant_Stat_TA123-1","Ant_Pot_TA124-1","Ant_Stat_TA124-1","Ant_Pot_TA125-1","Ant_Stat_TA125-1","Ant_Pot_TA126-1","Ant_Stat_TA126-1","Ant_Pot_TA127-1","Ant_Stat_TA127-1","Ant_Pot_TA128-1","Ant_Stat_TA128-1","Ant_Pot_TA129-1","Ant_Stat_TA129-1","Ant_Pot_TA12-A1","Ant_Stat_TA12-A1","Ant_Pot_TA12-A2","Ant_Stat_TA12-A2","Ant_Pot_TA12-B1","Ant_Stat_TA12-B1","Ant_Pot_TA130-1","Ant_Stat_TA130-1","Ant_Pot_TA13-1","Ant_Stat_TA13-1","Ant_Pot_TA131-1","Ant_Stat_TA131-1","Ant_Pot_TA132-1","Ant_Stat_TA132-1","Ant_Pot_TA133-1","Ant_Stat_TA133-1","Ant_Pot_TA134-1","Ant_Stat_TA134-1","Ant_Pot_TA135-1","Ant_Stat_TA135-1","Ant_Pot_TA136-1","Ant_Stat_TA136-1","Ant_Pot_TA137-1","Ant_Stat_TA137-1","Ant_Pot_TA138-1","Ant_Stat_TA138-1","Ant_Pot_TA139-1","Ant_Stat_TA139-1","Ant_Pot_TA140-1","Ant_Stat_TA140-1","Ant_Pot_TA14-1","Ant_Stat_TA14-1","Ant_Pot_TA14-2","Ant_Stat_TA14-2","Ant_Pot_TA141-1","Ant_Stat_TA141-1","Ant_Pot_TA142-1","Ant_Stat_TA142-1","Ant_Pot_TA143-1","Ant_Stat_TA143-1","Ant_Pot_TA144-1","Ant_Stat_TA144-1","Ant_Pot_TA15-1","Ant_Stat_TA15-1","Ant_Pot_TA15-2","Ant_Stat_TA15-2","Ant_Pot_TA16-1","Ant_Stat_TA16-1","Ant_Pot_TA16-2","Ant_Stat_TA16-2","Ant_Pot_TA17-1","Ant_Stat_TA17-1","Ant_Pot_TA17-2","Ant_Stat_TA17-2","Ant_Pot_TA18-1","Ant_Stat_TA18-1","Ant_Pot_TA18-2","Ant_Stat_TA18-2","Ant_Pot_TA19-1","Ant_Stat_TA19-1","Ant_Pot_TA19-2","Ant_Stat_TA19-2","Ant_Pot_TA20-1","Ant_Stat_TA20-1","Ant_Pot_TA20-2","Ant_Stat_TA20-2","Ant_Pot_TA20-3","Ant_Stat_TA20-3","Ant_Pot_TA22-1","Ant_Stat_TA22-1","Ant_Pot_TA22-2","Ant_Stat_TA22-2","Ant_Pot_TA22-3","Ant_Stat_TA22-3","Ant_Pot_TA23-1","Ant_Stat_TA23-1","Ant_Pot_TA23-2","Ant_Stat_TA23-2","Ant_Pot_TA24-1","Ant_Stat_TA24-1","Ant_Pot_TA24-2","Ant_Stat_TA24-2","Ant_Pot_TA25-1","Ant_Stat_TA25-1","Ant_Pot_TA25-2","Ant_Stat_TA25-2","Ant_Pot_TA26-1","Ant_Stat_TA26-1","Ant_Pot_TA26-2","Ant_Stat_TA26-2","Ant_Pot_TA27-1","Ant_Stat_TA27-1","Ant_Pot_TA27-2","Ant_Stat_TA27-2","Ant_Pot_TA28-1","Ant_Stat_TA28-1","Ant_Pot_TA28-2","Ant_Stat_TA28-2","Ant_Pot_TA29-1","Ant_Stat_TA29-1","Ant_Pot_TA29-2","Ant_Stat_TA29-2","Ant_Pot_TA30-1","Ant_Stat_TA30-1","Ant_Pot_TA30-2","Ant_Stat_TA30-2","Ant_Pot_TA31-1","Ant_Stat_TA31-1","Ant_Pot_TA31-2","Ant_Stat_TA31-2","Ant_Pot_TA32-1","Ant_Stat_TA32-1","Ant_Pot_TA32-2","Ant_Stat_TA32-2","Ant_Pot_TA33-1","Ant_Stat_TA33-1","Ant_Pot_TA33-2","Ant_Stat_TA33-2","Ant_Pot_TA34-1","Ant_Stat_TA34-1","Ant_Pot_TA34-2","Ant_Stat_TA34-2","Ant_Pot_TA35-1","Ant_Stat_TA35-1","Ant_Pot_TA35-2","Ant_Stat_TA35-2","Ant_Pot_TA36-1","Ant_Stat_TA36-1","Ant_Pot_TA36-2","Ant_Stat_TA36-2","Ant_Pot_TA37-1","Ant_Stat_TA37-1","Ant_Pot_TA37-2","Ant_Stat_TA37-2","Ant_Pot_TA38-1","Ant_Stat_TA38-1","Ant_Pot_TA38-2","Ant_Stat_TA38-2","Ant_Pot_TA39-1","Ant_Stat_TA39-1","Ant_Pot_TA39-2","Ant_Stat_TA39-2","Ant_Pot_TA40-1","Ant_Stat_TA40-1","Ant_Pot_TA40-2","Ant_Stat_TA40-2","Ant_Pot_TA41-1","Ant_Stat_TA41-1","Ant_Pot_TA41-2","Ant_Stat_TA41-2","Ant_Pot_TA42-1","Ant_Stat_TA42-1","Ant_Pot_TA42-2","Ant_Stat_TA42-2","Ant_Pot_TA43-1","Ant_Stat_TA43-1","Ant_Pot_TA43-2","Ant_Stat_TA43-2","Ant_Pot_TA44-1","Ant_Stat_TA44-1","Ant_Pot_TA44-2","Ant_Stat_TA44-2","Ant_Pot_TA45-1","Ant_Stat_TA45-1","Ant_Pot_TA45-2","Ant_Stat_TA45-2","Ant_Pot_TA45-3","Ant_Stat_TA45-3","Ant_Pot_TA45-4","Ant_Stat_TA45-4","Ant_Pot_TA45-5","Ant_Stat_TA45-5","Ant_Pot_TA45-6","Ant_Stat_TA45-6","Ant_Pot_TA45-7","Ant_Stat_TA45-7","Ant_Pot_TA46-1","Ant_Stat_TA46-1","Ant_Pot_TA46-2","Ant_Stat_TA46-2","Ant_Pot_TA47-1","Ant_Stat_TA47-1","Ant_Pot_TA47-2","Ant_Stat_TA47-2","Ant_Pot_TA47-3","Ant_Stat_TA47-3","Ant_Pot_TA48-1","Ant_Stat_TA48-1","Ant_Pot_TA48-2","Ant_Stat_TA48-2","Ant_Pot_TA49-1","Ant_Stat_TA49-1","Ant_Pot_TA49-2","Ant_Stat_TA49-2","Ant_Pot_TA50-1","Ant_Stat_TA50-1","Ant_Pot_TA50-2","Ant_Stat_TA50-2","Ant_Pot_TA51-1","Ant_Stat_TA51-1","Ant_Pot_TA51-2","Ant_Stat_TA51-2","Ant_Pot_TA53-1","Ant_Stat_TA53-1","Ant_Pot_TA54-1","Ant_Stat_TA54-1","Ant_Pot_TA55-1","Ant_Stat_TA55-1","Ant_Pot_TA56-1","Ant_Stat_TA56-1"]`
};

const arregloTagsInfoGeneralPSRioNilo = () => {
    return arreglo = `["RioNilo_FRNL_PC108.Algun_Air_On","RioNilo_FRNL_PC108.Num_Air_On","RioNilo_FRNL_PC108.Alarm_Adver","RioNilo_FRNL_PC109.Algun_Air_On","RioNilo_FRNL_PC109.Num_Air_On","RioNilo_FRNL_PC109.Alarm_Adver","RioNilo_FRNL_PC110.Algun_Air_On","RioNilo_FRNL_PC110.Num_Air_On","RioNilo_FRNL_PC110.Alarm_Adver","RioNilo_FRNL_PC111.Algun_Air_On","RioNilo_FRNL_PC111.Num_Air_On","RioNilo_FRNL_PC111.Alarm_Adver","RioNilo_FRNL_PC112.Algun_Air_On","RioNilo_FRNL_PC112.Num_Air_On","RioNilo_FRNL_PC112.Alarm_Adver","RioNilo_FRNL_PC113.Algun_Air_On","RioNilo_FRNL_PC113.Num_Air_On","RioNilo_FRNL_PC113.Alarm_Adver","RioNilo_FRNL_PC114.Algun_Air_On","RioNilo_FRNL_PC114.Num_Air_On","RioNilo_FRNL_PC114.Alarm_Adver","RioNilo_FRNL_PC118.Algun_Air_On","RioNilo_FRNL_PC118.Num_Air_On","RioNilo_FRNL_PC118.Alarm_Adver","RioNilo_FRNL_PC119.Algun_Air_On","RioNilo_FRNL_PC119.Num_Air_On","RioNilo_FRNL_PC119.Alarm_Adver","RioNilo_FRNL_PC120.Algun_Air_On","RioNilo_FRNL_PC120.Num_Air_On","RioNilo_FRNL_PC120.Alarm_Adver","RioNilo_FRNL_PC121.Algun_Air_On","RioNilo_FRNL_PC121.Num_Air_On","RioNilo_FRNL_PC121.Alarm_Adver","RioNilo_FRNL_PC122.Algun_Air_On","RioNilo_FRNL_PC122.Num_Air_On","RioNilo_FRNL_PC122.Alarm_Adver","RioNilo_FRNL_PC123.Algun_Air_On","RioNilo_FRNL_PC123.Num_Air_On","RioNilo_FRNL_PC123.Alarm_Adver","RioNilo_FRNL_PC124.Algun_Air_On","RioNilo_FRNL_PC124.Num_Air_On","RioNilo_FRNL_PC124.Alarm_Adver","RioNilo_FRNL_PC125.Algun_Air_On","RioNilo_FRNL_PC125.Num_Air_On","RioNilo_FRNL_PC125.Alarm_Adver","RioNilo_FRNL_PC126.Algun_Air_On","RioNilo_FRNL_PC126.Num_Air_On","RioNilo_FRNL_PC126.Alarm_Adver","RioNilo_FRNL_PC127.Algun_Air_On","RioNilo_FRNL_PC127.Num_Air_On","RioNilo_FRNL_PC127.Alarm_Adver","RioNilo_FRNL_PC141.Algun_Air_On","RioNilo_FRNL_PC141.Num_Air_On","RioNilo_FRNL_PC141.Alarm_Adver","RioNilo_FRNL_PC144.Algun_Air_On","RioNilo_FRNL_PC144.Num_Air_On","RioNilo_FRNL_PC144.Alarm_Adver","RioNilo_FRNL_PS23.Algun_Air_On","RioNilo_FRNL_PS23.Num_Air_On","RioNilo_FRNL_PS23.Alarm_Adver","RioNilo_FRNL_PS24.Algun_Air_On","RioNilo_FRNL_PS24.Num_Air_On","RioNilo_FRNL_PS24.Alarm_Adver","RioNilo_FRNL_PS25.Algun_Air_On","RioNilo_FRNL_PS25.Num_Air_On","RioNilo_FRNL_PS25.Alarm_Adver","RioNilo_FRNL_PS26.Algun_Air_On","RioNilo_FRNL_PS26.Num_Air_On","RioNilo_FRNL_PS26.Alarm_Adver","RioNilo_FRNL_PS27.Algun_Air_On","RioNilo_FRNL_PS27.Num_Air_On","RioNilo_FRNL_PS27.Alarm_Adver","RioNilo_FRNL_PS28.Algun_Air_On","RioNilo_FRNL_PS28.Num_Air_On","RioNilo_FRNL_PS28.Alarm_Adver","RioNilo_FRNL_PS29.Algun_Air_On","RioNilo_FRNL_PS29.Num_Air_On","RioNilo_FRNL_PS29.Alarm_Adver","RioNilo_FRNL_PS30.Algun_Air_On","RioNilo_FRNL_PS30.Num_Air_On","RioNilo_FRNL_PS30.Alarm_Adver","RioNilo_FRNL_PS31.Algun_Air_On","RioNilo_FRNL_PS31.Num_Air_On","RioNilo_FRNL_PS31.Alarm_Adver","RioNilo_FRNL_PS32.Algun_Air_On","RioNilo_FRNL_PS32.Num_Air_On","RioNilo_FRNL_PS32.Alarm_Adver","RioNilo_FRNL_PS33.Algun_Air_On","RioNilo_FRNL_PS33.Num_Air_On","RioNilo_FRNL_PS33.Alarm_Adver","RioNilo_FRNL_PS34.Algun_Air_On","RioNilo_FRNL_PS34.Num_Air_On","RioNilo_FRNL_PS34.Alarm_Adver","RioNilo_FRNL_PS35.Algun_Air_On","RioNilo_FRNL_PS35.Num_Air_On","RioNilo_FRNL_PS35.Alarm_Adver","RioNilo_FRNL_PS36.Algun_Air_On","RioNilo_FRNL_PS36.Num_Air_On","RioNilo_FRNL_PS36.Alarm_Adver","RioNilo_FRNL_PS37.Algun_Air_On","RioNilo_FRNL_PS37.Num_Air_On","RioNilo_FRNL_PS37.Alarm_Adver","RioNilo_FRNL_PS38.Algun_Air_On","RioNilo_FRNL_PS38.Num_Air_On","RioNilo_FRNL_PS38.Alarm_Adver","RioNilo_FRNL_PS39.Algun_Air_On","RioNilo_FRNL_PS39.Num_Air_On","RioNilo_FRNL_PS39.Alarm_Adver","RioNilo_FRNL_PS40.Algun_Air_On","RioNilo_FRNL_PS40.Num_Air_On","RioNilo_FRNL_PS40.Alarm_Adver","RioNilo_FRNL_PS41.Algun_Air_On","RioNilo_FRNL_PS41.Num_Air_On","RioNilo_FRNL_PS41.Alarm_Adver","RioNilo_FRNL_PS42.Algun_Air_On","RioNilo_FRNL_PS42.Num_Air_On","RioNilo_FRNL_PS42.Alarm_Adver","RioNilo_FRNL_PS43.Algun_Air_On","RioNilo_FRNL_PS43.Num_Air_On","RioNilo_FRNL_PS43.Alarm_Adver","RioNilo_FRNL_PS44.Algun_Air_On","RioNilo_FRNL_PS44.Num_Air_On","RioNilo_FRNL_PS44.Alarm_Adver","RioNilo_FRNL_PS45.Algun_Air_On","RioNilo_FRNL_PS45.Num_Air_On","RioNilo_FRNL_PS45.Alarm_Adver","RioNilo_FRNL_PS55.Algun_Air_On","RioNilo_FRNL_PS55.Num_Air_On","RioNilo_FRNL_PS55.Alarm_Adver","RioNilo_FRNL_PS56.Algun_Air_On","RioNilo_FRNL_PS56.Num_Air_On","RioNilo_FRNL_PS56.Alarm_Adver","Rnl_Sur_PC101.Algun_Air_On","Rnl_Sur_PC101.Num_Air_On","Rnl_Sur_PC101.Alarm_Adver","Rnl_Sur_PC102.Algun_Air_On","Rnl_Sur_PC102.Num_Air_On","Rnl_Sur_PC102.Alarm_Adver","Rnl_Sur_PC103.Algun_Air_On","Rnl_Sur_PC103.Num_Air_On","Rnl_Sur_PC103.Alarm_Adver","Rnl_Sur_PC104.Algun_Air_On","Rnl_Sur_PC104.Num_Air_On","Rnl_Sur_PC104.Alarm_Adver","Rnl_Sur_PC105.Algun_Air_On","Rnl_Sur_PC105.Num_Air_On","Rnl_Sur_PC105.Alarm_Adver","Rnl_Sur_PC106.Algun_Air_On","Rnl_Sur_PC106.Num_Air_On","Rnl_Sur_PC106.Alarm_Adver","Rnl_Sur_PC107.Algun_Air_On","Rnl_Sur_PC107.Num_Air_On","Rnl_Sur_PC107.Alarm_Adver","Rnl_Sur_PC128.Algun_Air_On","Rnl_Sur_PC128.Num_Air_On","Rnl_Sur_PC128.Alarm_Adver","Rnl_Sur_PC129.Algun_Air_On","Rnl_Sur_PC129.Num_Air_On","Rnl_Sur_PC129.Alarm_Adver","Rnl_Sur_PC130.Algun_Air_On","Rnl_Sur_PC130.Num_Air_On","Rnl_Sur_PC130.Alarm_Adver","Rnl_Sur_PC131.Algun_Air_On","Rnl_Sur_PC131.Num_Air_On","Rnl_Sur_PC131.Alarm_Adver","Rnl_Sur_PC132.Algun_Air_On","Rnl_Sur_PC132.Num_Air_On","Rnl_Sur_PC132.Alarm_Adver","Rnl_Sur_PC133.Algun_Air_On","Rnl_Sur_PC133.Num_Air_On","Rnl_Sur_PC133.Alarm_Adver","Rnl_Sur_PC134.Algun_Air_On","Rnl_Sur_PC134.Num_Air_On","Rnl_Sur_PC134.Alarm_Adver","Rnl_Sur_PC135.Algun_Air_On","Rnl_Sur_PC135.Num_Air_On","Rnl_Sur_PC135.Alarm_Adver","Rnl_Sur_PC136.Algun_Air_On","Rnl_Sur_PC136.Num_Air_On","Rnl_Sur_PC136.Alarm_Adver","Rnl_Sur_PC137.Algun_Air_On","Rnl_Sur_PC137.Num_Air_On","Rnl_Sur_PC137.Alarm_Adver","Rnl_Sur_PC138.Algun_Air_On","Rnl_Sur_PC138.Num_Air_On","Rnl_Sur_PC138.Alarm_Adver","Rnl_Sur_PC139.Algun_Air_On","Rnl_Sur_PC139.Num_Air_On","Rnl_Sur_PC139.Alarm_Adver","Rnl_Sur_PC140.Algun_Air_On","Rnl_Sur_PC140.Num_Air_On","Rnl_Sur_PC140.Alarm_Adver","Rnl_Sur_PC142.Algun_Air_On","Rnl_Sur_PC142.Num_Air_On","Rnl_Sur_PC142.Alarm_Adver","Rnl_Sur_PC143.Algun_Air_On","Rnl_Sur_PC143.Num_Air_On","Rnl_Sur_PC143.Alarm_Adver","Rnl_Sur_PS01.Algun_Air_On","Rnl_Sur_PS01.Num_Air_On","Rnl_Sur_PS01.Alarm_Adver","Rnl_Sur_PS02.Algun_Air_On","Rnl_Sur_PS02.Num_Air_On","Rnl_Sur_PS02.Alarm_Adver","Rnl_Sur_PS03.Algun_Air_On","Rnl_Sur_PS03.Num_Air_On","Rnl_Sur_PS03.Alarm_Adver","Rnl_Sur_PS04.Algun_Air_On","Rnl_Sur_PS04.Num_Air_On","Rnl_Sur_PS04.Alarm_Adver","Rnl_Sur_PS05.Algun_Air_On","Rnl_Sur_PS05.Num_Air_On","Rnl_Sur_PS05.Alarm_Adver","Rnl_Sur_PS06.Algun_Air_On","Rnl_Sur_PS06.Num_Air_On","Rnl_Sur_PS06.Alarm_Adver","Rnl_Sur_PS07.Algun_Air_On","Rnl_Sur_PS07.Num_Air_On","Rnl_Sur_PS07.Alarm_Adver","Rnl_Sur_PS08.Algun_Air_On","Rnl_Sur_PS08.Num_Air_On","Rnl_Sur_PS08.Alarm_Adver","Rnl_Sur_PS09.Algun_Air_On","Rnl_Sur_PS09.Num_Air_On","Rnl_Sur_PS09.Alarm_Adver","Rnl_Sur_PS10.Algun_Air_On","Rnl_Sur_PS10.Num_Air_On","Rnl_Sur_PS10.Alarm_Adver","Rnl_Sur_PS11.Algun_Air_On","Rnl_Sur_PS11.Num_Air_On","Rnl_Sur_PS11.Alarm_Adver","Rnl_Sur_PS12.Algun_Air_On","Rnl_Sur_PS12.Num_Air_On","Rnl_Sur_PS12.Alarm_Adver","Rnl_Sur_PS12B.Algun_Air_On","Rnl_Sur_PS12B.Num_Air_On","Rnl_Sur_PS12B.Alarm_Adver","Rnl_Sur_PS13.Algun_Air_On","Rnl_Sur_PS13.Num_Air_On","Rnl_Sur_PS13.Alarm_Adver","Rnl_Sur_PS14.Algun_Air_On","Rnl_Sur_PS14.Num_Air_On","Rnl_Sur_PS14.Alarm_Adver","Rnl_Sur_PS15.Algun_Air_On","Rnl_Sur_PS15.Num_Air_On","Rnl_Sur_PS15.Alarm_Adver","Rnl_Sur_PS16.Algun_Air_On","Rnl_Sur_PS16.Num_Air_On","Rnl_Sur_PS16.Alarm_Adver","Rnl_Sur_PS17.Algun_Air_On","Rnl_Sur_PS17.Num_Air_On","Rnl_Sur_PS17.Alarm_Adver","Rnl_Sur_PS18.Algun_Air_On","Rnl_Sur_PS18.Num_Air_On","Rnl_Sur_PS18.Alarm_Adver","Rnl_Sur_PS19.Algun_Air_On","Rnl_Sur_PS19.Num_Air_On","Rnl_Sur_PS19.Alarm_Adver","Rnl_Sur_PS20.Algun_Air_On","Rnl_Sur_PS20.Num_Air_On","Rnl_Sur_PS20.Alarm_Adver","Rnl_Sur_PS21.Algun_Air_On","Rnl_Sur_PS21.Num_Air_On","Rnl_Sur_PS21.Alarm_Adver","Rnl_Sur_PS22.Algun_Air_On","Rnl_Sur_PS22.Num_Air_On","Rnl_Sur_PS22.Alarm_Adver","Rnl_Sur_PS46.Algun_Air_On","Rnl_Sur_PS46.Num_Air_On","Rnl_Sur_PS46.Alarm_Adver","Rnl_Sur_PS47.Algun_Air_On","Rnl_Sur_PS47.Num_Air_On","Rnl_Sur_PS47.Alarm_Adver","Rnl_Sur_PS48.Algun_Air_On","Rnl_Sur_PS48.Num_Air_On","Rnl_Sur_PS48.Alarm_Adver","Rnl_Sur_PS49.Algun_Air_On","Rnl_Sur_PS49.Num_Air_On","Rnl_Sur_PS49.Alarm_Adver","Rnl_Sur_PS50.Algun_Air_On","Rnl_Sur_PS50.Num_Air_On","Rnl_Sur_PS50.Alarm_Adver","Rnl_Sur_PS51.Algun_Air_On","Rnl_Sur_PS51.Num_Air_On","Rnl_Sur_PS51.Alarm_Adver","Rnl_Sur_PS53.Algun_Air_On","Rnl_Sur_PS53.Num_Air_On","Rnl_Sur_PS53.Alarm_Adver","Rnl_Sur_PS54.Algun_Air_On","Rnl_Sur_PS54.Num_Air_On","Rnl_Sur_PS54.Alarm_Adver"]`
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
    arregloTagsPS11Antenas,
    arregloTagsPC111Antenas,
    arregloTagsPC112Antenas,
    arregloTagsPC113Antenas,
    arregloTagsPC114Antenas,
    arregloTagsPC118Antenas,
    arregloTagsPC119Antenas,
    arregloTagsPC120Antenas,
    arregloTagsPC121Antenas,
    arregloTagsPC122Antenas,
    arregloTagsPC123Antenas,
    arregloTagsPC124Antenas,
    arregloTagsPC125Antenas,
    arregloTagsPC126Antenas,
    arregloTagsPC127Antenas,
    arregloTagsPC128Antenas,
    arregloTagsPC129Antenas,
    arregloTagsPS12Antenas,
    arregloTagsPS12BAntenas,
    arregloTagsPC130Antenas,
    arregloTagsPS13Antenas,
    arregloTagsPC131Antenas,
    arregloTagsPC132Antenas,
    arregloTagsPC133Antenas,
    arregloTagsPC134Antenas,
    arregloTagsPC135Antenas,
    arregloTagsPC136Antenas,
    arregloTagsPC137Antenas,
    arregloTagsPC138Antenas,
    arregloTagsPC139Antenas,
    arregloTagsPC140Antenas,
    arregloTagsPS14Antenas,
    arregloTagsPC141Antenas,
    arregloTagsPC142Antenas,
    arregloTagsPC143Antenas,
    arregloTagsPC144Antenas,
    arregloTagsPS15Antenas,
    arregloTagsPS16Antenas,
    arregloTagsPS17Antenas,
    arregloTagsPS18Antenas,
    arregloTagsPS19Antenas,
    arregloTagsPS20Antenas,
    arregloTagsPS21Antenas,
    arregloTagsPS22Antenas,
    arregloTagsPS23Antenas,
    arregloTagsPS24Antenas,
    arregloTagsPS25Antenas,
    arregloTagsPS26Antenas,
    arregloTagsPS27Antenas,
    arregloTagsPS28Antenas,
    arregloTagsPS29Antenas,
    arregloTagsPS30Antenas,
    arregloTagsPS31Antenas,
    arregloTagsPS32Antenas,
    arregloTagsPS33Antenas,
    arregloTagsPS34Antenas,
    arregloTagsPS35Antenas,
    arregloTagsPS36Antenas,
    arregloTagsPS37Antenas,
    arregloTagsPS38Antenas,
    arregloTagsPS39Antenas,
    arregloTagsPS40Antenas,
    arregloTagsPS41Antenas,
    arregloTagsPS42Antenas,
    arregloTagsPS43Antenas,
    arregloTagsPS44Antenas,
    arregloTagsPS45Antenas,
    arregloTagsPS46Antenas,
    arregloTagsPS47Antenas,
    arregloTagsPS48Antenas,
    arregloTagsPS49Antenas,
    arregloTagsPS50Antenas,
    arregloTagsPS51Antenas,
    arregloTagsPS53Antenas,
    arregloTagsPS54Antenas,
    arregloTagsPS55Antenas,
    arregloTagsPS56Antenas,
    arregloTagsAntenasAllRioNilo,
    arregloTagsInfoGeneralPSRioNilo,
    generarTags,
    generarTagsTCP,
    generarTagsSur,
    generarTagsTCPSur
}