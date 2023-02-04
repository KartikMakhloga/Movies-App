function MainPage(){
    fetch("./user.json").then((res)=>{
        return res.json()
    }).then((json=>{
        
    }))
    return <h1>MainPage</h1>
}

export default MainPage;