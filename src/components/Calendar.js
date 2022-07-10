import React, { useEffect, useState } from 'react';
import moment from 'moment';
import "./calendar.css";
import makeCalendar from '../reuseFunctions/makeCalender';
import dayStyle from '../reuseFunctions/makestyle';
import {curMonth,curYear} from "../reuseFunctions/yearandmonth";
import { useParams } from 'react-router-dom';

function Calendar() {
    let { y,m } = useParams();
    const Days = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const [calender , setcalender] = useState([]);
    const [value , setvalue] = useState(moment())
    const [month , setmonth] = useState("")
    const [year , setyear] = useState("");
    
    useEffect(()=>{
        if(!y && !m){
            return;
        }
        if(y.length !== 4 || m > 12){
            alert("plz chose valid year and month")
            return;
        }else{
            if(y && !m){
                setvalue(moment(`${y}-${1}`))
            }else if(m && !y){
                setvalue(moment(`${year}-${m}`))
            }else{
                setvalue(moment(`${y}-${m}`))
            }
        }
        return ()=>{
            console.log("cleaned up");
        }
    },[y,m,year])
    
    useEffect(()=>{
        setcalender(makeCalendar(value))
        setmonth(curMonth(value));
        setyear(curYear(value))
        return ()=>{
            console.log("cleaned up10");
        }
    },[value])
    
    function handlenext(){
        let x = value.get('month');
        let y = value.get('year');
        if(x === 11 ){
            setvalue(moment(`${y+1}-${1}`))
        }else{
            setvalue(moment(`${y}-${x+2}`))
        }
    }
    function handleprevious(){
        let x = value.get('month');
        let y = value.get('year');
        if(x === 0 ){
            setvalue(moment(`${y-1}-${12}`))
        }else{
            setvalue(moment(`${y}-${x}`))
        }
    }
    
  return (
    <div className='mainDiv'>
        <h1 className='name'>KHAGESWAR CALENDER</h1>
        <div className='header'>
                <div onClick={()=>{setvalue(moment())}} style={{cursor:"pointer"}}>Today</div>
                <div className='next'><div onClick={handleprevious}>{String.fromCharCode(171)}</div> <div onClick={handlenext}>{String.fromCharCode(187)}</div></div>
                <div>{month} {year}</div>
                <div>Help</div>
        </div>
        <div className='daysDiv'>{Days.map((d,index)=>{
            return <h5 key={index}>{d}</h5>
        })}</div>
            <div className='calendarDiv'>
             {
                calender.map((week , i)=>{
                    return (<div className='weekDiv' key={i}>
                        {
                            week.map((day,index)=>{
                                return <div className='dayDiv' onClick={()=>{setvalue(day)}} key={index}>
                                    <div className={dayStyle(day,value)}><div>{day.format("D").toString()}</div></div></div>
                            })
                        }
                    </div>)
                })
             }
    </div>
    </div>
  )
}

export default Calendar