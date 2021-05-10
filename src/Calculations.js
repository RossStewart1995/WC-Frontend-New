import React from 'react';
import firebase from 'firebase';


const Calculations = ({calculation, setString, setAnswerfield, setdbComments}) => {

    const useCalculation = async () => {
        try{
            const db = firebase.firestore();
            const calc = await db.collection('calculations').doc(calculation.id).get();
            console.log(calc.data().string);
            setString(calc.data().string);
            console.log(calc.data().answer);
            setAnswerfield(calc.data().answer);
            setdbComments(`Using ${calc.data().string} from saved results`);
        }catch(err){
            setdbComments('Error, could not find result to use')
        }
    }

    const deleteCalculation = async () => {
        try{
            const db = firebase.firestore();
            await db.collection('calculations').doc(calculation.id).delete();
            setdbComments(`Result deleted: ${calculation.string}`);
        }catch(err){
            setdbComments('Error, could not find result to delete')
        }
    }

    return (
        <>
        <input value={calculation.string} readOnly="1"/>
        <button onClick={useCalculation}>Use</button>
        <button onClick={deleteCalculation}>Delete</button>
        </>
    );
}

export default Calculations
