function message(props) {
    if (props.age < 18) {
        return <h1>youre minorr</h1>;
        
    } else {
        if (props.age >=  18 && props.age <= 60){ 
            return <h1>youre adult</h1>;
        }else{
            return <h1>youre senior</h1>;
    }
    
}


}

function app() {
    const userage = 25;
    return <message age={userage}/>;
    
}



