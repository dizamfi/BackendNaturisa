
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
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA01-1","Josefina_FJOS_Ant_Pot_TA01-2","Josefina_FJOS_Ant_Stat_TA01-1","Josefina_FJOS_Ant_Stat_TA01-2"]`
};

const arregloTagsPS02Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA02-1","Josefina_FJOS_Ant_Pot_TA02-2","Josefina_FJOS_Ant_Stat_TA02-1","Josefina_FJOS_Ant_Stat_TA02-2"]`
};

const arregloTagsPS03Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA03-1","Josefina_FJOS_Ant_Stat_TA03-1"]`
};

const arregloTagsPS04Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA04-1","Josefina_FJOS_Ant_Stat_TA04-1"]`
};

const arregloTagsPS05Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA05-1","Josefina_FJOS_Ant_Pot_TA05-2","Josefina_FJOS_Ant_Stat_TA05-1","Josefina_FJOS_Ant_Stat_TA05-2"]`
};

const arregloTagsPS06Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA06-1","Josefina_FJOS_Ant_Stat_TA06-1"]`
};

const arregloTagsPS07Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA07-1","Josefina_FJOS_Ant_Stat_TA07-1"]`
};

const arregloTagsPS08Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA08-1","Josefina_FJOS_Ant_Stat_TA08-1"]`
};

const arregloTagsPS09Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA09-1","Josefina_FJOS_Ant_Stat_TA09-1"]`
};

const arregloTagsPS10Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA10-1","Josefina_FJOS_Ant_Stat_TA10-1"]`
};

const arregloTagsPC101Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA101-1","Josefina_FJOS_Ant_Stat_TA101-1"]`
};

const arregloTagsPC102Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA102-1","Josefina_FJOS_Ant_Stat_TA102-1"]`
};

const arregloTagsPC103Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA103-1","Josefina_FJOS_Ant_Stat_TA103-1"]`
};

const arregloTagsPC104Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA104-1","Josefina_FJOS_Ant_Stat_TA104-1"]`
};

const arregloTagsPC106Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA106-1","Josefina_FJOS_Ant_Stat_TA106-1"]`
};

const arregloTagsPC107Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA107-1","Josefina_FJOS_Ant_Stat_TA107-1"]`
};

const arregloTagsPC108Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA108-1","Josefina_FJOS_Ant_Stat_TA108-1"]`
};

const arregloTagsPS11Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA11-1","Josefina_FJOS_Ant_Stat_TA11-1"]`
};

const arregloTagsPC111Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA111-1","Josefina_FJOS_Ant_Stat_TA111-1"]`
};

const arregloTagsPC113Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA113-1","Josefina_FJOS_Ant_Stat_TA113-1"]`


};

const arregloTagsPC114Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA114-1","Josefina_FJOS_Ant_Stat_TA114-1"]`
};

const arregloTagsPC115Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA115-1","Josefina_FJOS_Ant_Stat_TA115-1"]`
};

const arregloTagsPC116Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA116-1","Josefina_FJOS_Ant_Stat_TA116-1"]`
};

const arregloTagsPC117Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA117-1","Josefina_FJOS_Ant_Stat_TA117-1"]`
};

const arregloTagsPS13Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA13-1","Josefina_FJOS_Ant_Stat_TA13-1"]`
};

const arregloTagsPS14Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA14-1","Josefina_FJOS_Ant_Stat_TA14-1"]`
};

const arregloTagsPS15Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA15-1","Josefina_FJOS_Ant_Stat_TA15-1"]`
};

const arregloTagsPS16Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA16-1","Josefina_FJOS_Ant_Stat_TA16-1"]`
};

const arregloTagsPS17Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA17-1","Josefina_FJOS_Ant_Stat_TA17-1"]`
};

const arregloTagsPS18Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA18-1","Josefina_FJOS_Ant_Stat_TA18-1"]`
};

const arregloTagsPS19Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA19-1","Josefina_FJOS_Ant_Stat_TA19-1"]`
};

const arregloTagsPC20Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA20-1","Josefina_FJOS_Ant_Stat_TA20-1"]`
};

const arregloTagsPS21Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA21-1","Josefina_FJOS_Ant_Stat_TA21-1"]`
};

const arregloTagsPS22Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA22-1","Josefina_FJOS_Ant_Stat_TA22-1"]`
};

const arregloTagsPS23Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA23-1","Josefina_FJOS_Ant_Pot_TA23-2","Josefina_FJOS_Ant_Stat_TA23-1","Josefina_FJOS_Ant_Stat_TA23-2"]`
};

const arregloTagsPS24Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA24-1","Josefina_FJOS_Ant_Pot_TA24-2","Josefina_FJOS_Ant_Stat_TA24-1","Josefina_FJOS_Ant_Stat_TA24-2"]`
};

const arregloTagsPS25Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA25-1","Josefina_FJOS_Ant_Stat_TA25-1"]`
};

const arregloTagsPS26Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA26-1","Josefina_FJOS_Ant_Stat_TA26-1"]`
};

const arregloTagsPS27Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA27-1","Josefina_FJOS_Ant_Pot_TA27-2","Josefina_FJOS_Ant_Stat_TA27-1","Josefina_FJOS_Ant_Stat_TA27-2"]`
};

const arregloTagsPS28Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA28-1","Josefina_FJOS_Ant_Stat_TA28-1"]`
};

const arregloTagsPS29Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA29-1","Josefina_FJOS_Ant_Stat_TA29-1"]`
};

const arregloTagsPS30Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA30-1","Josefina_FJOS_Ant_Pot_TA30-2","Josefina_FJOS_Ant_Stat_TA30-1","Josefina_FJOS_Ant_Stat_TA30-2"]`
};

const arregloTagsPS31Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA31-1","Josefina_FJOS_Ant_Stat_TA31-1"]`
};

const arregloTagsPS32Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA32-1","Josefina_FJOS_Ant_Stat_TA32-1"]`
};

const arregloTagsPS33Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA33-1","Josefina_FJOS_Ant_Stat_TA33-1"]`
};

const arregloTagsPS34Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA34-1","Josefina_FJOS_Ant_Stat_TA34-1"]`
};

const arregloTagsPS35Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA35-1","Josefina_FJOS_Ant_Stat_TA35-1"]`
};

const arregloTagsPS36Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA36-1","Josefina_FJOS_Ant_Stat_TA36-1"]`
};

const arregloTagsPS37Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA37-1","Josefina_FJOS_Ant_Stat_TA37-1"]`
};

const arregloTagsPS38Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA38-1","Josefina_FJOS_Ant_Pot_TA38-2","Josefina_FJOS_Ant_Stat_TA38-1","Josefina_FJOS_Ant_Stat_TA38-2"]`
};

const arregloTagsPS39Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA39-1","Josefina_FJOS_Ant_Pot_TA39-2","Josefina_FJOS_Ant_Stat_TA39-1","Josefina_FJOS_Ant_Stat_TA39-2"]`
};

const arregloTagsPS40Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA40-1","Josefina_FJOS_Ant_Pot_TA40-2","Josefina_FJOS_Ant_Stat_TA40-1","Josefina_FJOS_Ant_Stat_TA40-2"]`
};

const arregloTagsPS41Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA41-1","Josefina_FJOS_Ant_Pot_TA41-2","Josefina_FJOS_Ant_Stat_TA41-1","Josefina_FJOS_Ant_Stat_TA41-2"]`
};

const arregloTagsPS42Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA42-1","Josefina_FJOS_Ant_Pot_TA42-2","Josefina_FJOS_Ant_Stat_TA42-1","Josefina_FJOS_Ant_Stat_TA42-2"]`
};

const arregloTagsPS43Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA43-1","Josefina_FJOS_Ant_Pot_TA43-2","Josefina_FJOS_Ant_Stat_TA43-1","Josefina_FJOS_Ant_Stat_TA43-2"]`
};

const arregloTagsPS44Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA44-1","Josefina_FJOS_Ant_Stat_TA44-1"]`
};

const arregloTagsPS45Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA45-1","Josefina_FJOS_Ant_Stat_TA45-1"]`
};

const arregloTagsPS46Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA46-1","Josefina_FJOS_Ant_Stat_TA46-1"]`
};

const arregloTagsPS47Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA47-1","Josefina_FJOS_Ant_Stat_TA47-1"]`
};

const arregloTagsPS47BAntenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA47B-1","Josefina_FJOS_Ant_Stat_TA47B-1"]`
};

const arregloTagsPS48Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA48-1","Josefina_FJOS_Ant_Stat_TA48-1"]`
};

const arregloTagsPS49Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA49-1","Josefina_FJOS_Ant_Stat_TA49-1"]`
};

const arregloTagsPS50Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA50-1","Josefina_FJOS_Ant_Stat_TA50-1"]`
};

const arregloTagsPS51Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA51-1","Josefina_FJOS_Ant_Stat_TA51-1"]`
};

const arregloTagsPS52Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA52-1","Josefina_FJOS_Ant_Stat_TA52-1"]`
};

const arregloTagsPS53Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA53-1","Josefina_FJOS_Ant_Stat_TA53-1"]`
};

const arregloTagsPS54Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA54-1","Josefina_FJOS_Ant_Stat_TA54-1"]`
};

const arregloTagsPS55Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA55-1","Josefina_FJOS_Ant_Stat_TA55-1"]`
};

const arregloTagsPS56Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA56-1","Josefina_FJOS_Ant_Stat_TA56-1"]`
};

const arregloTagsPS57Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA57-1","Josefina_FJOS_Ant_Stat_TA57-1"]`
};

const arregloTagsPS58Antenas = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA58-1","Josefina_FJOS_Ant_Stat_TA58-1"]`
};

const arregloTagsAntenasAllJosefina = () => {
    return arreglo = `["Josefina_FJOS_Ant_Pot_TA01-1","Josefina_FJOS_Ant_Pot_TA01-2","Josefina_FJOS_Ant_Stat_TA01-1","Josefina_FJOS_Ant_Stat_TA01-2","Josefina_FJOS_Ant_Pot_TA02-1","Josefina_FJOS_Ant_Pot_TA02-2","Josefina_FJOS_Ant_Stat_TA02-1","Josefina_FJOS_Ant_Stat_TA02-2","Josefina_FJOS_Ant_Pot_TA03-1","Josefina_FJOS_Ant_Stat_TA03-1","Josefina_FJOS_Ant_Pot_TA04-1","Josefina_FJOS_Ant_Stat_TA04-1","Josefina_FJOS_Ant_Pot_TA05-1","Josefina_FJOS_Ant_Pot_TA05-2","Josefina_FJOS_Ant_Stat_TA05-1","Josefina_FJOS_Ant_Stat_TA05-2","Josefina_FJOS_Ant_Pot_TA06-1","Josefina_FJOS_Ant_Stat_TA06-1","Josefina_FJOS_Ant_Pot_TA07-1","Josefina_FJOS_Ant_Stat_TA07-1","Josefina_FJOS_Ant_Pot_TA08-1","Josefina_FJOS_Ant_Stat_TA08-1","Josefina_FJOS_Ant_Pot_TA09-1","Josefina_FJOS_Ant_Stat_TA09-1","Josefina_FJOS_Ant_Pot_TA10-1","Josefina_FJOS_Ant_Stat_TA10-1","Josefina_FJOS_Ant_Pot_TA101-1","Josefina_FJOS_Ant_Stat_TA101-1","Josefina_FJOS_Ant_Pot_TA102-1","Josefina_FJOS_Ant_Stat_TA102-1","Josefina_FJOS_Ant_Pot_TA103-1","Josefina_FJOS_Ant_Stat_TA103-1","Josefina_FJOS_Ant_Pot_TA104-1","Josefina_FJOS_Ant_Stat_TA104-1","Josefina_FJOS_Ant_Pot_TA106-1","Josefina_FJOS_Ant_Stat_TA106-1","Josefina_FJOS_Ant_Pot_TA107-1","Josefina_FJOS_Ant_Stat_TA107-1","Josefina_FJOS_Ant_Pot_TA108-1","Josefina_FJOS_Ant_Stat_TA108-1","Josefina_FJOS_Ant_Pot_TA11-1","Josefina_FJOS_Ant_Stat_TA11-1","Josefina_FJOS_Ant_Pot_TA111-1","Josefina_FJOS_Ant_Stat_TA111-1","Josefina_FJOS_Ant_Pot_TA113-1","Josefina_FJOS_Ant_Stat_TA113-1","Josefina_FJOS_Ant_Pot_TA114-1","Josefina_FJOS_Ant_Stat_TA114-1","Josefina_FJOS_Ant_Pot_TA115-1","Josefina_FJOS_Ant_Stat_TA115-1","Josefina_FJOS_Ant_Pot_TA116-1","Josefina_FJOS_Ant_Stat_TA116-1","Josefina_FJOS_Ant_Pot_TA117-1","Josefina_FJOS_Ant_Stat_TA117-1","Josefina_FJOS_Ant_Pot_TA13-1","Josefina_FJOS_Ant_Stat_TA13-1","Josefina_FJOS_Ant_Pot_TA14-1","Josefina_FJOS_Ant_Stat_TA14-1","Josefina_FJOS_Ant_Pot_TA15-1","Josefina_FJOS_Ant_Stat_TA15-1","Josefina_FJOS_Ant_Pot_TA16-1","Josefina_FJOS_Ant_Stat_TA16-1","Josefina_FJOS_Ant_Pot_TA17-1","Josefina_FJOS_Ant_Stat_TA17-1","Josefina_FJOS_Ant_Pot_TA18-1","Josefina_FJOS_Ant_Stat_TA18-1","Josefina_FJOS_Ant_Pot_TA19-1","Josefina_FJOS_Ant_Stat_TA19-1","Josefina_FJOS_Ant_Pot_TA20-1","Josefina_FJOS_Ant_Stat_TA20-1","Josefina_FJOS_Ant_Pot_TA21-1","Josefina_FJOS_Ant_Stat_TA21-1","Josefina_FJOS_Ant_Pot_TA22-1","Josefina_FJOS_Ant_Stat_TA22-1","Josefina_FJOS_Ant_Pot_TA23-1","Josefina_FJOS_Ant_Pot_TA23-2","Josefina_FJOS_Ant_Stat_TA23-1","Josefina_FJOS_Ant_Stat_TA23-2","Josefina_FJOS_Ant_Pot_TA24-1","Josefina_FJOS_Ant_Pot_TA24-2","Josefina_FJOS_Ant_Stat_TA24-1","Josefina_FJOS_Ant_Stat_TA24-2","Josefina_FJOS_Ant_Pot_TA25-1","Josefina_FJOS_Ant_Stat_TA25-1","Josefina_FJOS_Ant_Pot_TA26-1","Josefina_FJOS_Ant_Stat_TA26-1","Josefina_FJOS_Ant_Pot_TA27-1","Josefina_FJOS_Ant_Pot_TA27-2","Josefina_FJOS_Ant_Stat_TA27-1","Josefina_FJOS_Ant_Stat_TA27-2","Josefina_FJOS_Ant_Pot_TA28-1","Josefina_FJOS_Ant_Stat_TA28-1","Josefina_FJOS_Ant_Pot_TA29-1","Josefina_FJOS_Ant_Stat_TA29-1","Josefina_FJOS_Ant_Pot_TA30-1","Josefina_FJOS_Ant_Pot_TA30-2","Josefina_FJOS_Ant_Stat_TA30-1","Josefina_FJOS_Ant_Stat_TA30-2","Josefina_FJOS_Ant_Pot_TA31-1","Josefina_FJOS_Ant_Stat_TA31-1","Josefina_FJOS_Ant_Pot_TA32-1","Josefina_FJOS_Ant_Stat_TA32-1","Josefina_FJOS_Ant_Pot_TA33-1","Josefina_FJOS_Ant_Stat_TA33-1","Josefina_FJOS_Ant_Pot_TA34-1","Josefina_FJOS_Ant_Stat_TA34-1","Josefina_FJOS_Ant_Pot_TA35-1","Josefina_FJOS_Ant_Stat_TA35-1","Josefina_FJOS_Ant_Pot_TA36-1","Josefina_FJOS_Ant_Stat_TA36-1","Josefina_FJOS_Ant_Pot_TA37-1","Josefina_FJOS_Ant_Stat_TA37-1","Josefina_FJOS_Ant_Pot_TA38-1","Josefina_FJOS_Ant_Pot_TA38-2","Josefina_FJOS_Ant_Stat_TA38-1","Josefina_FJOS_Ant_Stat_TA38-2","Josefina_FJOS_Ant_Pot_TA39-1","Josefina_FJOS_Ant_Pot_TA39-2","Josefina_FJOS_Ant_Stat_TA39-1","Josefina_FJOS_Ant_Stat_TA39-2","Josefina_FJOS_Ant_Pot_TA40-1","Josefina_FJOS_Ant_Pot_TA40-2","Josefina_FJOS_Ant_Stat_TA40-1","Josefina_FJOS_Ant_Stat_TA40-2","Josefina_FJOS_Ant_Pot_TA41-1","Josefina_FJOS_Ant_Pot_TA41-2","Josefina_FJOS_Ant_Stat_TA41-1","Josefina_FJOS_Ant_Stat_TA41-2","Josefina_FJOS_Ant_Pot_TA42-1","Josefina_FJOS_Ant_Pot_TA42-2","Josefina_FJOS_Ant_Stat_TA42-1","Josefina_FJOS_Ant_Stat_TA42-2","Josefina_FJOS_Ant_Pot_TA43-1","Josefina_FJOS_Ant_Pot_TA43-2","Josefina_FJOS_Ant_Stat_TA43-1","Josefina_FJOS_Ant_Stat_TA43-2","Josefina_FJOS_Ant_Pot_TA44-1","Josefina_FJOS_Ant_Stat_TA44-1","Josefina_FJOS_Ant_Pot_TA45-1","Josefina_FJOS_Ant_Stat_TA45-1","Josefina_FJOS_Ant_Pot_TA46-1","Josefina_FJOS_Ant_Stat_TA46-1","Josefina_FJOS_Ant_Pot_TA47-1","Josefina_FJOS_Ant_Stat_TA47-1","Josefina_FJOS_Ant_Pot_TA47B-1","Josefina_FJOS_Ant_Stat_TA47B-1","Josefina_FJOS_Ant_Pot_TA48-1","Josefina_FJOS_Ant_Stat_TA48-1","Josefina_FJOS_Ant_Pot_TA49-1","Josefina_FJOS_Ant_Stat_TA49-1","Josefina_FJOS_Ant_Pot_TA50-1","Josefina_FJOS_Ant_Stat_TA50-1","Josefina_FJOS_Ant_Pot_TA51-1","Josefina_FJOS_Ant_Stat_TA51-1","Josefina_FJOS_Ant_Pot_TA52-1","Josefina_FJOS_Ant_Stat_TA52-1","Josefina_FJOS_Ant_Pot_TA53-1","Josefina_FJOS_Ant_Stat_TA53-1","Josefina_FJOS_Ant_Pot_TA54-1","Josefina_FJOS_Ant_Stat_TA54-1","Josefina_FJOS_Ant_Pot_TA55-1","Josefina_FJOS_Ant_Stat_TA55-1","Josefina_FJOS_Ant_Pot_TA56-1","Josefina_FJOS_Ant_Stat_TA56-1","Josefina_FJOS_Ant_Pot_TA57-1","Josefina_FJOS_Ant_Stat_TA57-1","Josefina_FJOS_Ant_Pot_TA58-1","Josefina_FJOS_Ant_Stat_TA58-1","Josefina_FJOS_Ant_Pot_AP1-B","Josefina_FJOS_Ant_Pot_Camp-PTP-Mari","Josefina_FJOS_Ant_Pot_EB_G1","Josefina_FJOS_Ant_Pot_EB_G2","Josefina_FJOS_Ant_Pot_PTP-Camp-T1","Josefina_FJOS_Ant_Pot_PTP-Camp-T2","Josefina_FJOS_Ant_Pot_PTP-Camp-T3","Josefina_FJOS_Ant_Pot_PTP-Mari","Josefina_FJOS_Ant_Pot_PTP-T1","Josefina_FJOS_Ant_Pot_PTP-T2","Josefina_FJOS_Ant_Pot_PTP-T3","Josefina_FJOS_Ant_Stat_AP1","Josefina_FJOS_Ant_Pot-AP1","Josefina_FJOS_Ant_Stat_AP1-B","Josefina_FJOS_Ant_Stat_AP2","Josefina_FJOS_Ant_Stat_AP3","Josefina_FJOS_Ant_Stat_Camp-PTP-Mari","Josefina_FJOS_Ant_Stat_PTP-T1","Josefina_FJOS_Ant_Stat_PTP-T2","Josefina_FJOS_Ant_Stat_PTP-T3","Josefina_FJOS_Ant_Stat_EB_G1","Josefina_FJOS_Ant_Stat_EB_G2","Josefina_FJOS_Ant_Stat_PTP-Camp-T1","Josefina_FJOS_Ant_Stat_PTP-Camp-T2","Josefina_FJOS_Ant_Stat_PTP-Camp-T3","Josefina_FJOS_Ant_Pot-AP2","Josefina_FJOS_Ant_Pot-AP3","Josefina_FJOS_Ant_Stat_PTP-Mari"]`
};

const arregloTagsInfoGeneralPSJosefina = () => {
    return arreglo = `["Josefina_FJOS_PC20.Algun_Air_On","Josefina_FJOS_PC20.Num_Air_On","Josefina_FJOS_PC20.Alarm_Adver","Josefina_FJOS_PC101.Algun_Air_On","Josefina_FJOS_PC101.Num_Air_On","Josefina_FJOS_PC101.Alarm_Adver","Josefina_FJOS_PC102.Algun_Air_On","Josefina_FJOS_PC102.Num_Air_On","Josefina_FJOS_PC102.Alarm_Adver","Josefina_FJOS_PC103.Algun_Air_On","Josefina_FJOS_PC103.Num_Air_On","Josefina_FJOS_PC103.Alarm_Adver","Josefina_FJOS_PC104.Algun_Air_On","Josefina_FJOS_PC104.Num_Air_On","Josefina_FJOS_PC104.Alarm_Adver","Josefina_FJOS_PC106.Algun_Air_On","Josefina_FJOS_PC106.Num_Air_On","Josefina_FJOS_PC106.Alarm_Adver","Josefina_FJOS_PC107.Algun_Air_On","Josefina_FJOS_PC107.Num_Air_On","Josefina_FJOS_PC107.Alarm_Adver","Josefina_FJOS_PC108.Algun_Air_On","Josefina_FJOS_PC108.Num_Air_On","Josefina_FJOS_PC108.Alarm_Adver","Josefina_FJOS_PC111.Algun_Air_On","Josefina_FJOS_PC111.Num_Air_On","Josefina_FJOS_PC111.Alarm_Adver","Josefina_FJOS_PC113.Algun_Air_On","Josefina_FJOS_PC113.Num_Air_On","Josefina_FJOS_PC113.Alarm_Adver","Josefina_FJOS_PC114.Algun_Air_On","Josefina_FJOS_PC114.Num_Air_On","Josefina_FJOS_PC114.Alarm_Adver","Josefina_FJOS_PC115.Algun_Air_On","Josefina_FJOS_PC115.Num_Air_On","Josefina_FJOS_PC115.Alarm_Adver","Josefina_FJOS_PC116.Algun_Air_On","Josefina_FJOS_PC116.Num_Air_On","Josefina_FJOS_PC116.Alarm_Adver","Josefina_FJOS_PC117.Algun_Air_On","Josefina_FJOS_PC117.Num_Air_On","Josefina_FJOS_PC117.Alarm_Adver","Josefina_FJOS_PS01.Algun_Air_On","Josefina_FJOS_PS01.Num_Air_On","Josefina_FJOS_PS01.Alarm_Adver","Josefina_FJOS_PS02.Algun_Air_On","Josefina_FJOS_PS02.Num_Air_On","Josefina_FJOS_PS02.Alarm_Adver","Josefina_FJOS_PS03.Algun_Air_On","Josefina_FJOS_PS03.Num_Air_On","Josefina_FJOS_PS03.Alarm_Adver","Josefina_FJOS_PS04.Algun_Air_On","Josefina_FJOS_PS04.Num_Air_On","Josefina_FJOS_PS04.Alarm_Adver","Josefina_FJOS_PS05.Algun_Air_On","Josefina_FJOS_PS05.Num_Air_On","Josefina_FJOS_PS05.Alarm_Adver","Josefina_FJOS_PS06.Algun_Air_On","Josefina_FJOS_PS06.Num_Air_On","Josefina_FJOS_PS06.Alarm_Adver","Josefina_FJOS_PS07.Algun_Air_On","Josefina_FJOS_PS07.Num_Air_On","Josefina_FJOS_PS07.Alarm_Adver","Josefina_FJOS_PS08.Algun_Air_On","Josefina_FJOS_PS08.Num_Air_On","Josefina_FJOS_PS08.Alarm_Adver","Josefina_FJOS_PS09.Algun_Air_On","Josefina_FJOS_PS09.Num_Air_On","Josefina_FJOS_PS09.Alarm_Adver","Josefina_FJOS_PS10.Algun_Air_On","Josefina_FJOS_PS10.Num_Air_On","Josefina_FJOS_PS10.Alarm_Adver","Josefina_FJOS_PS11.Algun_Air_On","Josefina_FJOS_PS11.Num_Air_On","Josefina_FJOS_PS11.Alarm_Adver","Josefina_FJOS_PS13.Algun_Air_On","Josefina_FJOS_PS13.Num_Air_On","Josefina_FJOS_PS13.Alarm_Adver","Josefina_FJOS_PS14.Algun_Air_On","Josefina_FJOS_PS14.Num_Air_On","Josefina_FJOS_PS14.Alarm_Adver","Josefina_FJOS_PS15.Algun_Air_On","Josefina_FJOS_PS15.Num_Air_On","Josefina_FJOS_PS15.Alarm_Adver","Josefina_FJOS_PS16.Algun_Air_On","Josefina_FJOS_PS16.Num_Air_On","Josefina_FJOS_PS16.Alarm_Adver","Josefina_FJOS_PS17.Algun_Air_On","Josefina_FJOS_PS17.Num_Air_On","Josefina_FJOS_PS17.Alarm_Adver","Josefina_FJOS_PS18.Algun_Air_On","Josefina_FJOS_PS18.Num_Air_On","Josefina_FJOS_PS18.Alarm_Adver","Josefina_FJOS_PS19.Algun_Air_On","Josefina_FJOS_PS19.Num_Air_On","Josefina_FJOS_PS19.Alarm_Adver","Josefina_FJOS_PS21.Algun_Air_On","Josefina_FJOS_PS21.Num_Air_On","Josefina_FJOS_PS21.Alarm_Adver","Josefina_FJOS_PS22.Algun_Air_On","Josefina_FJOS_PS22.Num_Air_On","Josefina_FJOS_PS22.Alarm_Adver","Josefina_FJOS_PS23.Algun_Air_On","Josefina_FJOS_PS23.Num_Air_On","Josefina_FJOS_PS23.Alarm_Adver","Josefina_FJOS_PS24.Algun_Air_On","Josefina_FJOS_PS24.Num_Air_On","Josefina_FJOS_PS24.Alarm_Adver","Josefina_FJOS_PS25.Algun_Air_On","Josefina_FJOS_PS25.Num_Air_On","Josefina_FJOS_PS25.Alarm_Adver","Josefina_FJOS_PS26.Algun_Air_On","Josefina_FJOS_PS26.Num_Air_On","Josefina_FJOS_PS26.Alarm_Adver","Josefina_FJOS_PS27.Algun_Air_On","Josefina_FJOS_PS27.Num_Air_On","Josefina_FJOS_PS27.Alarm_Adver","Josefina_FJOS_PS28.Algun_Air_On","Josefina_FJOS_PS28.Num_Air_On","Josefina_FJOS_PS28.Alarm_Adver","Josefina_FJOS_PS29.Algun_Air_On","Josefina_FJOS_PS29.Num_Air_On","Josefina_FJOS_PS29.Alarm_Adver","Josefina_FJOS_PS30.Algun_Air_On","Josefina_FJOS_PS30.Num_Air_On","Josefina_FJOS_PS30.Alarm_Adver","Josefina_FJOS_PS31.Algun_Air_On","Josefina_FJOS_PS31.Num_Air_On","Josefina_FJOS_PS31.Alarm_Adver","Josefina_FJOS_PS32.Algun_Air_On","Josefina_FJOS_PS32.Num_Air_On","Josefina_FJOS_PS32.Alarm_Adver","Josefina_FJOS_PS33.Algun_Air_On","Josefina_FJOS_PS33.Num_Air_On","Josefina_FJOS_PS33.Alarm_Adver","Josefina_FJOS_PS34.Algun_Air_On","Josefina_FJOS_PS34.Num_Air_On","Josefina_FJOS_PS34.Alarm_Adver","Josefina_FJOS_PS35.Algun_Air_On","Josefina_FJOS_PS35.Num_Air_On","Josefina_FJOS_PS35.Alarm_Adver","Josefina_FJOS_PS36.Algun_Air_On","Josefina_FJOS_PS36.Num_Air_On","Josefina_FJOS_PS36.Alarm_Adver","Josefina_FJOS_PS37.Algun_Air_On","Josefina_FJOS_PS37.Num_Air_On","Josefina_FJOS_PS37.Alarm_Adver","Josefina_FJOS_PS38.Algun_Air_On","Josefina_FJOS_PS38.Num_Air_On","Josefina_FJOS_PS38.Alarm_Adver","Josefina_FJOS_PS39.Algun_Air_On","Josefina_FJOS_PS39.Num_Air_On","Josefina_FJOS_PS39.Alarm_Adver","Josefina_FJOS_PS40.Algun_Air_On","Josefina_FJOS_PS40.Num_Air_On","Josefina_FJOS_PS40.Alarm_Adver","Josefina_FJOS_PS41.Algun_Air_On","Josefina_FJOS_PS41.Num_Air_On","Josefina_FJOS_PS41.Alarm_Adver","Josefina_FJOS_PS42.Algun_Air_On","Josefina_FJOS_PS42.Num_Air_On","Josefina_FJOS_PS42.Alarm_Adver","Josefina_FJOS_PS43.Algun_Air_On","Josefina_FJOS_PS43.Num_Air_On","Josefina_FJOS_PS43.Alarm_Adver","Josefina_FJOS_PS44.Algun_Air_On","Josefina_FJOS_PS44.Num_Air_On","Josefina_FJOS_PS44.Alarm_Adver","Josefina_FJOS_PS45.Algun_Air_On","Josefina_FJOS_PS45.Num_Air_On","Josefina_FJOS_PS45.Alarm_Adver","Josefina_FJOS_PS46.Algun_Air_On","Josefina_FJOS_PS46.Num_Air_On","Josefina_FJOS_PS46.Alarm_Adver","Josefina_FJOS_PS47.Algun_Air_On","Josefina_FJOS_PS47.Num_Air_On","Josefina_FJOS_PS47.Alarm_Adver","Josefina_FJOS_PS47B.Algun_Air_On","Josefina_FJOS_PS47B.Num_Air_On","Josefina_FJOS_PS47B.Alarm_Adver","Josefina_FJOS_PS48.Algun_Air_On","Josefina_FJOS_PS48.Num_Air_On","Josefina_FJOS_PS48.Alarm_Adver","Josefina_FJOS_PS49.Algun_Air_On","Josefina_FJOS_PS49.Num_Air_On","Josefina_FJOS_PS49.Alarm_Adver","Josefina_FJOS_PS50.Algun_Air_On","Josefina_FJOS_PS50.Num_Air_On","Josefina_FJOS_PS50.Alarm_Adver","Josefina_FJOS_PS51.Algun_Air_On","Josefina_FJOS_PS51.Num_Air_On","Josefina_FJOS_PS51.Alarm_Adver","Josefina_FJOS_PS52.Algun_Air_On","Josefina_FJOS_PS52.Num_Air_On","Josefina_FJOS_PS52.Alarm_Adver","Josefina_FJOS_PS53.Algun_Air_On","Josefina_FJOS_PS53.Num_Air_On","Josefina_FJOS_PS53.Alarm_Adver","Josefina_FJOS_PS54.Algun_Air_On","Josefina_FJOS_PS54.Num_Air_On","Josefina_FJOS_PS54.Alarm_Adver","Josefina_FJOS_PS55.Algun_Air_On","Josefina_FJOS_PS55.Num_Air_On","Josefina_FJOS_PS55.Alarm_Adver","Josefina_FJOS_PS56.Algun_Air_On","Josefina_FJOS_PS56.Num_Air_On","Josefina_FJOS_PS56.Alarm_Adver","Josefina_FJOS_PS57.Algun_Air_On","Josefina_FJOS_PS57.Num_Air_On","Josefina_FJOS_PS57.Alarm_Adver","Josefina_FJOS_PS58.Algun_Air_On","Josefina_FJOS_PS58.Num_Air_On","Josefina_FJOS_PS58.Alarm_Adver","Josefina_PLC1_UDT_DATA_GLOB_Hora_Fin_1_GLOB","Josefina_PLC1_UDT_DATA_GLOB_Hora_Fin_2_GLOB","Josefina_PLC1_UDT_DATA_GLOB_Hora_Ini_1_GLOB","Josefina_PLC1_UDT_DATA_GLOB_Hora_Ini_2_GLOB"]`
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
    arregloTagsPC106Antenas,
    arregloTagsPC107Antenas,
    arregloTagsPC108Antenas,
    arregloTagsPS11Antenas,
    arregloTagsPC111Antenas,
    arregloTagsPC113Antenas,
    arregloTagsPC114Antenas,
    arregloTagsPC115Antenas,
    arregloTagsPC116Antenas,
    arregloTagsPC117Antenas,
    arregloTagsPS13Antenas,
    arregloTagsPS14Antenas,
    arregloTagsPS15Antenas,
    arregloTagsPS16Antenas,
    arregloTagsPS17Antenas,
    arregloTagsPS18Antenas,
    arregloTagsPS19Antenas,
    arregloTagsPC20Antenas,
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
    arregloTagsPS47BAntenas,
    arregloTagsPS48Antenas,
    arregloTagsPS49Antenas,
    arregloTagsPS50Antenas,
    arregloTagsPS51Antenas,
    arregloTagsPS52Antenas,
    arregloTagsPS53Antenas,
    arregloTagsPS54Antenas,
    arregloTagsPS55Antenas,
    arregloTagsPS56Antenas,
    arregloTagsPS57Antenas,
    arregloTagsPS58Antenas,
    generarTags,
    generarTagsTCP,
    arregloTagsAntenasAllJosefina,
    arregloTagsInfoGeneralPSJosefina
}