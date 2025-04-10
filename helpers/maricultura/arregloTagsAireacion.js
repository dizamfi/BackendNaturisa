
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

const arregloTagsPC107AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA107-1","Ant_Stat_Mari_TA107-1"]`
};

const arregloTagsPC107BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA107-2","Ant_Stat_Mari_TA107-2"]`
};

const arregloTagsPC249Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA249-1","Ant_Stat_Mari_TA249-1"]`
};

const arregloTagsPC250Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA250-1","Ant_Stat_Mari_TA250-1"]`
};

const arregloTagsPC251Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA251-1","Ant_Stat_Mari_TA251-1"]`
};

const arregloTagsPC252Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA252-1","Ant_Stat_Mari_TA252-1"]`
};

const arregloTagsPC258Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA258-1","Ant_Stat_Mari_TA258-1"]`
};

const arregloTagsPC259Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA259-1","Ant_Stat_Mari_TA259-1"]`
};

const arregloTagsPC260Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA260-1","Ant_Stat_Mari_TA260-1"]`
};

const arregloTagsPS51Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA51-1","Ant_Stat_Mari_TA51-1","Ant_Pot_Mari_TA51-2","Ant_Stat_Mari_TA51-2"]`
};

const arregloTagsPS52Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA52-1","Ant_Stat_Mari_TA52-1","Ant_Pot_Mari_TA52-2","Ant_Stat_Mari_TA52-2"]`
};

const arregloTagsPS53Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA53-1","Ant_Stat_Mari_TA53-1","Ant_Pot_Mari_TA53-2","Ant_Stat_Mari_TA53-2"]`
};

const arregloTagsPS54Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA54-1","Ant_Stat_Mari_TA54-1","Ant_Pot_Mari_TA54-2","Ant_Stat_Mari_TA54-2"]`
};

const arregloTagsPS55Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA55-1","Ant_Stat_Mari_TA55-1","Ant_Pot_Mari_TA55-2","Ant_Stat_Mari_TA55-2"]`
};

const arregloTagsPC56Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA56-1","Ant_Stat_Mari_TA56-1"]`
};

const arregloTagsPS57Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA57-1","Ant_Stat_Mari_TA57-1","Ant_Pot_Mari_TA57-2","Ant_Stat_Mari_TA57-2"]`
};

const arregloTagsPS58Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA58-1","Ant_Stat_Mari_TA58-1","Ant_Pot_Mari_TA58-2","Ant_Stat_Mari_TA58-2"]`
};

const arregloTagsPS59Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA59-1","Ant_Stat_Mari_TA59-1","Ant_Pot_Mari_TA59-2","Ant_Stat_Mari_TA59-2"]`
};

const arregloTagsPS60Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA60-1","Ant_Stat_Mari_TA60-1","Ant_Pot_Mari_TA60-2","Ant_Stat_Mari_TA60-2"]`
};

const arregloTagsPS61Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA61-1","Ant_Stat_Mari_TA61-1","Ant_Pot_Mari_TA61-2","Ant_Stat_Mari_TA61-2"]`
};

const arregloTagsPS62Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA62-1","Ant_Stat_Mari_TA62-1","Ant_Pot_Mari_TA62-2","Ant_Stat_Mari_TA62-2"]`
};

const arregloTagsPS63AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA63-1","Ant_Stat_Mari_TA63-1"]`
};

const arregloTagsPS63BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA63B-1","Ant_Stat_Mari_TA63B-1"]`
};

const arregloTagsPS64AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA64A-1","Ant_Stat_Mari_TA64A-1"]`
};

const arregloTagsPS64BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA64B-1","Ant_Stat_Mari_TA64B-1"]`
};

const arregloTagsPS65Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA65-1","Ant_Stat_Mari_TA65-1"]`
};

const arregloTagsPS65AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA65A-1","Ant_Stat_Mari_TA65A-1"]`
};

const arregloTagsPS65BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA65B-1","Ant_Stat_Mari_TA65B-1"]`
};

const arregloTagsPS66AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA66A-1","Ant_Stat_Mari_TA66A-1"]`
};

const arregloTagsPS66BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA66B-1","Ant_Stat_Mari_TA66B-1"]`
};

const arregloTagsPS67Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA67-1","Ant_Stat_Mari_TA67-1"]`
};

const arregloTagsPS68Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA68-1","Ant_Stat_Mari_TA68-1"]`
};

const arregloTagsPS69Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA69-1","Ant_Stat_Mari_TA69-1"]`
};

const arregloTagsPS70Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA70-1","Ant_Stat_Mari_TA70-1"]`
};

const arregloTagsPS71Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA71-1","Ant_Stat_Mari_TA71-1"]`
};

const arregloTagsPS72Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA72-1","Ant_Stat_Mari_TA72-1","Ant_Pot_Mari_TA72-2","Ant_Stat_Mari_TA72-2"]`
};

const arregloTagsPS73Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA73-1","Ant_Stat_Mari_TA73-1"]`
};

const arregloTagsPS75Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA75-1","Ant_Stat_Mari_TA75-1"]`
};

const arregloTagsPS76AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA76A-1","Ant_Stat_Mari_TA76A-1"]`
};

const arregloTagsPS76BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA76B-1","Ant_Stat_Mari_TA76B-1"]`
};

const arregloTagsPS77AAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA77A-1","Ant_Stat_Mari_TA77A-1"]`
};

const arregloTagsPS77BAntenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA77B-1","Ant_Stat_Mari_TA77B-1"]`
};

const arregloTagsPS78Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA78-1","Ant_Stat_Mari_TA78-1","Ant_Pot_Mari_TA78-2","Ant_Stat_Mari_TA78-2"]`
};

const arregloTagsPS79Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA79-1","Ant_Stat_Mari_TA79-1","Ant_Pot_Mari_TA79-2","Ant_Stat_Mari_TA79-2","Ant_Pot_Mari_TA79-3","Ant_Stat_Mari_TA79-3"]`
};

const arregloTagsPS80Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA80-1","Ant_Stat_Mari_TA80-1","Ant_Pot_Mari_TA80-2","Ant_Stat_Mari_TA80-2","Ant_Pot_Mari_TA80-3","Ant_Stat_Mari_TA80-3"]`
};

const arregloTagsPS81Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA81-1","Ant_Stat_Mari_TA81-1","Ant_Pot_Mari_TA81-2","Ant_Stat_Mari_TA81-2","Ant_Pot_Mari_TA81-3","Ant_Stat_Mari_TA81-3"]`
};

const arregloTagsPS82Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA82-1","Ant_Stat_Mari_TA82-1","Ant_Pot_Mari_TA82-2","Ant_Stat_Mari_TA82-2"]`
};

const arregloTagsPS83Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA83-1","Ant_Stat_Mari_TA83-1","Ant_Pot_Mari_TA83-2","Ant_Stat_Mari_TA83-2"]`
};

const arregloTagsPS84Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA84-1","Ant_Stat_Mari_TA84-1"]`
};

const arregloTagsPS85Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA85-1","Ant_Stat_Mari_TA85-1","Ant_Pot_Mari_TA85-2","Ant_Stat_Mari_TA85-2"]`
};

const arregloTagsPS86Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA86-1","Ant_Stat_Mari_TA86-1","Ant_Pot_Mari_TA86-2","Ant_Stat_Mari_TA86-2"]`
};

const arregloTagsPS87Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA87-1","Ant_Stat_Mari_TA87-1","Ant_Pot_Mari_TA87-2","Ant_Stat_Mari_TA87-2"]`
};

const arregloTagsPS88Antenas = () => {
    return arreglo = `["Ant_Pot_Mari_TA88-1","Ant_Stat_Mari_TA88-1","Ant_Pot_Mari_TA88-2","Ant_Stat_Mari_TA88-2"]`
};

const arregloTagsAntenasAllMaricultura = () => {
    return arreglo = `["Ant_Pot_Mari_TA107-1","Ant_Stat_Mari_TA107-1","Ant_Pot_Mari_TA107-2","Ant_Stat_Mari_TA107-2","Ant_Pot_Mari_TA249-1","Ant_Stat_Mari_TA249-1","Ant_Pot_Mari_TA250-1","Ant_Stat_Mari_TA250-1","Ant_Pot_Mari_TA251-1","Ant_Stat_Mari_TA251-1","Ant_Pot_Mari_TA252-1","Ant_Stat_Mari_TA252-1","Ant_Pot_Mari_TA258-1","Ant_Stat_Mari_TA258-1","Ant_Pot_Mari_TA259-1","Ant_Stat_Mari_TA259-1","Ant_Pot_Mari_TA260-1","Ant_Stat_Mari_TA260-1","Ant_Pot_Mari_TA51-1","Ant_Stat_Mari_TA51-1","Ant_Pot_Mari_TA51-2","Ant_Stat_Mari_TA51-2","Ant_Pot_Mari_TA52-1","Ant_Stat_Mari_TA52-1","Ant_Pot_Mari_TA52-2","Ant_Stat_Mari_TA52-2","Ant_Pot_Mari_TA53-1","Ant_Stat_Mari_TA53-1","Ant_Pot_Mari_TA53-2","Ant_Stat_Mari_TA53-2","Ant_Pot_Mari_TA54-1","Ant_Stat_Mari_TA54-1","Ant_Pot_Mari_TA54-2","Ant_Stat_Mari_TA54-2","Ant_Pot_Mari_TA55-1","Ant_Stat_Mari_TA55-1","Ant_Pot_Mari_TA55-2","Ant_Stat_Mari_TA55-2","Ant_Pot_Mari_TA56-1","Ant_Stat_Mari_TA56-1","Ant_Pot_Mari_TA57-1","Ant_Stat_Mari_TA57-1","Ant_Pot_Mari_TA57-2","Ant_Stat_Mari_TA57-2","Ant_Pot_Mari_TA58-1","Ant_Stat_Mari_TA58-1","Ant_Pot_Mari_TA58-2","Ant_Stat_Mari_TA58-2","Ant_Pot_Mari_TA59-1","Ant_Stat_Mari_TA59-1","Ant_Pot_Mari_TA59-2","Ant_Stat_Mari_TA59-2","Ant_Pot_Mari_TA60-1","Ant_Stat_Mari_TA60-1","Ant_Pot_Mari_TA60-2","Ant_Stat_Mari_TA60-2","Ant_Pot_Mari_TA61-1","Ant_Stat_Mari_TA61-1","Ant_Pot_Mari_TA61-2","Ant_Stat_Mari_TA61-2","Ant_Pot_Mari_TA62-1","Ant_Stat_Mari_TA62-1","Ant_Pot_Mari_TA62-2","Ant_Stat_Mari_TA62-2","Ant_Pot_Mari_TA63-1","Ant_Stat_Mari_TA63-1","Ant_Pot_Mari_TA63B-1","Ant_Stat_Mari_TA63B-1","Ant_Pot_Mari_TA64A-1","Ant_Stat_Mari_TA64A-1","Ant_Pot_Mari_TA64B-1","Ant_Stat_Mari_TA64B-1","Ant_Pot_Mari_TA65-1","Ant_Stat_Mari_TA65-1","Ant_Pot_Mari_TA65A-1","Ant_Stat_Mari_TA65A-1","Ant_Pot_Mari_TA65B-1","Ant_Stat_Mari_TA65B-1","Ant_Pot_Mari_TA66A-1","Ant_Stat_Mari_TA66A-1","Ant_Pot_Mari_TA66B-1","Ant_Stat_Mari_TA66B-1","Ant_Pot_Mari_TA67-1","Ant_Stat_Mari_TA67-1","Ant_Pot_Mari_TA68-1","Ant_Stat_Mari_TA68-1","Ant_Pot_Mari_TA69-1","Ant_Stat_Mari_TA69-1","Ant_Pot_Mari_TA70-1","Ant_Stat_Mari_TA70-1","Ant_Pot_Mari_TA71-1","Ant_Stat_Mari_TA71-1","Ant_Pot_Mari_TA72-1","Ant_Stat_Mari_TA72-1","Ant_Pot_Mari_TA73-1","Ant_Stat_Mari_TA73-1","Ant_Pot_Mari_TA75-1","Ant_Stat_Mari_TA75-1","Ant_Pot_Mari_TA76A-1","Ant_Stat_Mari_TA76A-1","Ant_Pot_Mari_TA76B-1","Ant_Stat_Mari_TA76B-1","Ant_Pot_Mari_TA77A-1","Ant_Stat_Mari_TA77A-1","Ant_Pot_Mari_TA77B-1","Ant_Stat_Mari_TA77B-1","Ant_Pot_Mari_TA78-1","Ant_Stat_Mari_TA78-1","Ant_Pot_Mari_TA78-2","Ant_Stat_Mari_TA78-2","Ant_Pot_Mari_TA79-1","Ant_Stat_Mari_TA79-1","Ant_Pot_Mari_TA79-2","Ant_Stat_Mari_TA79-2","Ant_Pot_Mari_TA79-3","Ant_Stat_Mari_TA79-3","Ant_Pot_Mari_TA80-1","Ant_Stat_Mari_TA80-1","Ant_Pot_Mari_TA80-2","Ant_Stat_Mari_TA80-2","Ant_Pot_Mari_TA80-3","Ant_Stat_Mari_TA80-3","Ant_Pot_Mari_TA81-1","Ant_Stat_Mari_TA81-1","Ant_Pot_Mari_TA81-2","Ant_Stat_Mari_TA81-2","Ant_Pot_Mari_TA81-3","Ant_Stat_Mari_TA81-3","Ant_Pot_Mari_TA82-1","Ant_Stat_Mari_TA82-1","Ant_Pot_Mari_TA82-2","Ant_Stat_Mari_TA82-2","Ant_Pot_Mari_TA83-1","Ant_Stat_Mari_TA83-1","Ant_Pot_Mari_TA83-2","Ant_Stat_Mari_TA83-2","Ant_Pot_Mari_TA84-1","Ant_Stat_Mari_TA84-1","Ant_Pot_Mari_TA85-1","Ant_Stat_Mari_TA85-1","Ant_Pot_Mari_TA85-2","Ant_Stat_Mari_TA85-2","Ant_Pot_Mari_TA86-1","Ant_Stat_Mari_TA86-1","Ant_Pot_Mari_TA86-2","Ant_Stat_Mari_TA86-2","Ant_Pot_Mari_TA87-1","Ant_Stat_Mari_TA87-1","Ant_Pot_Mari_TA87-2","Ant_Stat_Mari_TA87-2","Ant_Pot_Mari_TA88-1","Ant_Stat_Mari_TA88-1","Ant_Pot_Mari_TA88-2","Ant_Stat_Mari_TA88-2","Ant_Pot_Mari_ACU-AP1","Ant_Stat_Mari_ACU-AP1","Ant_Pot_Mari_ACU-AP2","Ant_Stat_Mari_ACU-AP2","Ant_Pot_Mari_ACU-PTP-CAM-T1","Ant_Stat_Mari_ACU-PTP-CAM-T1","Ant_Pot_Mari_ACU-PTP-T1","Ant_Stat_Mari_ACU-PTP-T1","Ant_Pot_Mari_EB","Ant_Stat_Mari_EB","Ant_Pot_Mari_MARI-AP1","Ant_Stat_Mari_MARI-AP1","Ant_Pot_Mari_MARI-AP2","Ant_Stat_Mari_MARI-AP2","Ant_Pot_Mari_MARI-AP3","Ant_Stat_Mari_MARI-AP3","Ant_Pot_Mari_PTP_CAMP_MAR","Ant_Stat_Mari_PTP_CAMP_MAR","Ant_Pot_Mari_PTP_CAMP_T3","Ant_Stat_Mari_PTP_CAMP_T3","Ant_Pot_Mari_PTP_EB","Ant_Stat_Mari_PTP_EB","Ant_Pot_Mari_PTP_MAR","Ant_Stat_Mari_PTP_MAR","Ant_Pot_Mari_PTP_T3","Ant_Stat_Mari_PTP_T3"]`
};

const arregloTagsInfoGeneralPSMaricultura = () => {
    return arreglo = `["Maricultura_FMARC_PC56.Algun_Air_On","Maricultura_FMARC_PC56.Num_Air_On","Maricultura_FMARC_PC56.Alarm_Adver","Maricultura_FMARC_PC107A.Algun_Air_On","Maricultura_FMARC_PC107A.Num_Air_On","Maricultura_FMARC_PC107A.Alarm_Adver","Maricultura_FMARC_PC107B.Algun_Air_On","Maricultura_FMARC_PC107B.Num_Air_On","Maricultura_FMARC_PC107B.Alarm_Adver","Maricultura_FMARC_PC249.Algun_Air_On","Maricultura_FMARC_PC249.Num_Air_On","Maricultura_FMARC_PC249.Alarm_Adver","Maricultura_FMARC_PC250.Algun_Air_On","Maricultura_FMARC_PC250.Num_Air_On","Maricultura_FMARC_PC250.Alarm_Adver","Maricultura_FMARC_PC251.Algun_Air_On","Maricultura_FMARC_PC251.Num_Air_On","Maricultura_FMARC_PC251.Alarm_Adver","Maricultura_FMARC_PC252.Algun_Air_On","Maricultura_FMARC_PC252.Num_Air_On","Maricultura_FMARC_PC252.Alarm_Adver","Maricultura_FMARC_PC258.Algun_Air_On","Maricultura_FMARC_PC258.Num_Air_On","Maricultura_FMARC_PC258.Alarm_Adver","Maricultura_FMARC_PC259.Algun_Air_On","Maricultura_FMARC_PC259.Num_Air_On","Maricultura_FMARC_PC259.Alarm_Adver","Maricultura_FMARC_PC260.Algun_Air_On","Maricultura_FMARC_PC260.Num_Air_On","Maricultura_FMARC_PC260.Alarm_Adver","Maricultura_FMARC_PS51.Algun_Air_On","Maricultura_FMARC_PS51.Num_Air_On","Maricultura_FMARC_PS51.Alarm_Adver","Maricultura_FMARC_PS52.Algun_Air_On","Maricultura_FMARC_PS52.Num_Air_On","Maricultura_FMARC_PS52.Alarm_Adver","Maricultura_FMARC_PS53.Algun_Air_On","Maricultura_FMARC_PS53.Num_Air_On","Maricultura_FMARC_PS53.Alarm_Adver","Maricultura_FMARC_PS54.Algun_Air_On","Maricultura_FMARC_PS54.Num_Air_On","Maricultura_FMARC_PS54.Alarm_Adver","Maricultura_FMARC_PS55.Algun_Air_On","Maricultura_FMARC_PS55.Num_Air_On","Maricultura_FMARC_PS55.Alarm_Adver","Maricultura_FMARC_PS57.Algun_Air_On","Maricultura_FMARC_PS57.Num_Air_On","Maricultura_FMARC_PS57.Alarm_Adver","Maricultura_FMARC_PS58.Algun_Air_On","Maricultura_FMARC_PS58.Num_Air_On","Maricultura_FMARC_PS58.Alarm_Adver","Maricultura_FMARC_PS59.Algun_Air_On","Maricultura_FMARC_PS59.Num_Air_On","Maricultura_FMARC_PS59.Alarm_Adver","Maricultura_FMARC_PS60.Algun_Air_On","Maricultura_FMARC_PS60.Num_Air_On","Maricultura_FMARC_PS60.Alarm_Adver","Maricultura_FMARC_PS61.Algun_Air_On","Maricultura_FMARC_PS61.Num_Air_On","Maricultura_FMARC_PS61.Alarm_Adver","Maricultura_FMARC_PS62.Algun_Air_On","Maricultura_FMARC_PS62.Num_Air_On","Maricultura_FMARC_PS62.Alarm_Adver","Maricultura_FMARC_PS63A.Algun_Air_On","Maricultura_FMARC_PS63A.Num_Air_On","Maricultura_FMARC_PS63A.Alarm_Adver","Maricultura_FMARC_PS63B.Algun_Air_On","Maricultura_FMARC_PS63B.Num_Air_On","Maricultura_FMARC_PS63B.Alarm_Adver","Maricultura_FMARC_PS64A.Algun_Air_On","Maricultura_FMARC_PS64A.Num_Air_On","Maricultura_FMARC_PS64A.Alarm_Adver","Maricultura_FMARC_PS64B.Algun_Air_On","Maricultura_FMARC_PS64B.Num_Air_On","Maricultura_FMARC_PS64B.Alarm_Adver","Maricultura_FMARC_PS65.Algun_Air_On","Maricultura_FMARC_PS65.Num_Air_On","Maricultura_FMARC_PS65.Alarm_Adver","Maricultura_FMARC_PS65A.Algun_Air_On","Maricultura_FMARC_PS65A.Num_Air_On","Maricultura_FMARC_PS65A.Alarm_Adver","Maricultura_FMARC_PS65B.Algun_Air_On","Maricultura_FMARC_PS65B.Num_Air_On","Maricultura_FMARC_PS65B.Alarm_Adver","Maricultura_FMARC_PS66A.Algun_Air_On","Maricultura_FMARC_PS66A.Num_Air_On","Maricultura_FMARC_PS66A.Alarm_Adver","Maricultura_FMARC_PS66B.Algun_Air_On","Maricultura_FMARC_PS66B.Num_Air_On","Maricultura_FMARC_PS66B.Alarm_Adver","Maricultura_FMARC_PS67.Algun_Air_On","Maricultura_FMARC_PS67.Num_Air_On","Maricultura_FMARC_PS67.Alarm_Adver","Maricultura_FMARC_PS68.Algun_Air_On","Maricultura_FMARC_PS68.Num_Air_On","Maricultura_FMARC_PS68.Alarm_Adver","Maricultura_FMARC_PS69.Algun_Air_On","Maricultura_FMARC_PS69.Num_Air_On","Maricultura_FMARC_PS69.Alarm_Adver","Maricultura_FMARC_PS70.Algun_Air_On","Maricultura_FMARC_PS70.Num_Air_On","Maricultura_FMARC_PS70.Alarm_Adver","Maricultura_FMARC_PS71.Algun_Air_On","Maricultura_FMARC_PS71.Num_Air_On","Maricultura_FMARC_PS71.Alarm_Adver","Maricultura_FMARC_PS72.Algun_Air_On","Maricultura_FMARC_PS72.Num_Air_On","Maricultura_FMARC_PS72.Alarm_Adver","Maricultura_FMARC_PS73.Algun_Air_On","Maricultura_FMARC_PS73.Num_Air_On","Maricultura_FMARC_PS73.Alarm_Adver","Maricultura_FMARC_PS75.Algun_Air_On","Maricultura_FMARC_PS75.Num_Air_On","Maricultura_FMARC_PS75.Alarm_Adver","Maricultura_FMARC_PS76A.Algun_Air_On","Maricultura_FMARC_PS76A.Num_Air_On","Maricultura_FMARC_PS76A.Alarm_Adver","Maricultura_FMARC_PS76B.Algun_Air_On","Maricultura_FMARC_PS76B.Num_Air_On","Maricultura_FMARC_PS76B.Alarm_Adver","Maricultura_FMARC_PS77A.Algun_Air_On","Maricultura_FMARC_PS77A.Num_Air_On","Maricultura_FMARC_PS77A.Alarm_Adver","Maricultura_FMARC_PS77B.Algun_Air_On","Maricultura_FMARC_PS77B.Num_Air_On","Maricultura_FMARC_PS77B.Alarm_Adver","Maricultura_FMARC_PS78.Algun_Air_On","Maricultura_FMARC_PS78.Num_Air_On","Maricultura_FMARC_PS78.Alarm_Adver","Maricultura_FMARC_PS79.Algun_Air_On","Maricultura_FMARC_PS79.Num_Air_On","Maricultura_FMARC_PS79.Alarm_Adver","Maricultura_FMARC_PS80.Algun_Air_On","Maricultura_FMARC_PS80.Num_Air_On","Maricultura_FMARC_PS80.Alarm_Adver","Maricultura_FMARC_PS81.Algun_Air_On","Maricultura_FMARC_PS81.Num_Air_On","Maricultura_FMARC_PS81.Alarm_Adver","Maricultura_FMARC_PS82.Algun_Air_On","Maricultura_FMARC_PS82.Num_Air_On","Maricultura_FMARC_PS82.Alarm_Adver","Maricultura_FMARC_PS83.Algun_Air_On","Maricultura_FMARC_PS83.Num_Air_On","Maricultura_FMARC_PS83.Alarm_Adver","Maricultura_FMARC_PS84.Algun_Air_On","Maricultura_FMARC_PS84.Num_Air_On","Maricultura_FMARC_PS84.Alarm_Adver","Maricultura_FMARC_PS85.Algun_Air_On","Maricultura_FMARC_PS85.Num_Air_On","Maricultura_FMARC_PS85.Alarm_Adver","Maricultura_FMARC_PS86.Algun_Air_On","Maricultura_FMARC_PS86.Num_Air_On","Maricultura_FMARC_PS86.Alarm_Adver","Maricultura_FMARC_PS87.Algun_Air_On","Maricultura_FMARC_PS87.Num_Air_On","Maricultura_FMARC_PS87.Alarm_Adver","Maricultura_FMARC_PS88.Algun_Air_On","Maricultura_FMARC_PS88.Num_Air_On","Maricultura_FMARC_PS88.Alarm_Adver"]`
};

module.exports = {
    arregloTagsPC107AAntenas,
    arregloTagsPC107BAntenas,
    arregloTagsPC249Antenas,
    arregloTagsPC250Antenas,
    arregloTagsPC251Antenas,
    arregloTagsPC252Antenas,
    arregloTagsPC258Antenas,
    arregloTagsPC259Antenas,
    arregloTagsPC260Antenas,
    arregloTagsPS51Antenas,
    arregloTagsPS52Antenas,
    arregloTagsPS53Antenas,
    arregloTagsPS54Antenas,
    arregloTagsPS55Antenas,
    arregloTagsPC56Antenas,
    arregloTagsPS57Antenas,
    arregloTagsPS58Antenas,
    arregloTagsPS59Antenas,
    arregloTagsPS60Antenas,
    arregloTagsPS61Antenas,
    arregloTagsPS62Antenas,
    arregloTagsPS63AAntenas,
    arregloTagsPS63BAntenas,
    arregloTagsPS64AAntenas,
    arregloTagsPS64BAntenas,
    arregloTagsPS65Antenas,
    arregloTagsPS65AAntenas,
    arregloTagsPS65BAntenas,
    arregloTagsPS66AAntenas,
    arregloTagsPS66BAntenas,
    arregloTagsPS67Antenas,
    arregloTagsPS68Antenas,
    arregloTagsPS69Antenas,
    arregloTagsPS70Antenas,
    arregloTagsPS71Antenas,
    arregloTagsPS72Antenas,
    arregloTagsPS73Antenas,
    arregloTagsPS75Antenas,
    arregloTagsPS76AAntenas,
    arregloTagsPS76BAntenas,
    arregloTagsPS77AAntenas,
    arregloTagsPS77BAntenas,
    arregloTagsPS78Antenas,
    arregloTagsPS79Antenas,
    arregloTagsPS80Antenas,
    arregloTagsPS81Antenas,
    arregloTagsPS82Antenas,
    arregloTagsPS83Antenas,
    arregloTagsPS84Antenas,
    arregloTagsPS85Antenas,
    arregloTagsPS86Antenas,
    arregloTagsPS87Antenas,
    arregloTagsPS88Antenas,
    arregloTagsAntenasAllMaricultura,
    arregloTagsInfoGeneralPSMaricultura,
    generarTags,
    generarTagsTCP
}