  
      const Aishat = (props) => {
        const theStyle = {
            height: "200px",
            width: "200px",
            borderRadius: "10px",
            backgroundColor: props.background,
            color: props.color,
            display: "flex",
            fontSize: "40px",
            alignItems: "center",
            justifyContent: "center",
            margin: "10px"
        }
          
        return (
            <div style={theStyle}>
                 <p>{props.text}</p>
            </div>
        )
      };

      function MyApp() {
        
        const wrapperStyle = {
            justifyContent: "center",
            marginTop: "100px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 200px)",
            gridTemplateRows: "repeat(2, 200px)",
            gap: "10px" 
          };

        return (
            <div style={wrapperStyle}>
            <Aishat background="skyblue" color="black" text="1"/>
            <Aishat background="red" color="white" text="2"/>
            <Aishat background="purple" color="white" text="3"/>
            <Aishat background="black" color="white" text="4"/>
            <Aishat background="orange" color="white" text="5"/>
            <Aishat background="green" color="white" text="6"/>
            </div>
        )
      }
    
      ReactDOM.createRoot(document.getElementById("root")).render(
        <MyApp/>
      )


