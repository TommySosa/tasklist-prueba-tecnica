

export function Forms(props) {

    const {task,handleSubmit, handleChange} = props;
    return(
        <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Introduce la tarea" 
                    onChange={handleChange} value={task}/>
                
                    <input type="submit" className="btn" value="AGREGAR" 
                    onClick={handleSubmit}/>
                
        </form>
    );

}