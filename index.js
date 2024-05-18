// const Aishat = (props) => {
//   const theStyle = {
//       height: "200px",
//       width: "200px",
//       borderRadius: "10px",
//       backgroundColor: props.background,
//       color: props.color,
//       display: "flex",
//       fontSize: "40px",
//       alignItems: "center",
//       justifyContent: "center",
//       margin: "10px"
//   }

//   return (
//       <div style={theStyle}>
//            <p>{props.text}</p>
//       </div>
//   )
// };

// function MyApp() {

//   const wrapperStyle = {
//       justifyContent: "center",
//       marginTop: "100px",
//       display: "grid",
//       gridTemplateColumns: "repeat(3, 200px)",
//       gridTemplateRows: "repeat(2, 200px)",
//       gap: "10px"
//     };

//   return (
//       <div style={wrapperStyle}>
//       <Aishat background="skyblue" color="black" text="1"/>
//       <Aishat background="red" color="white" text="2"/>
//       <Aishat background="purple" color="white" text="3"/>
//       <Aishat background="black" color="white" text="4"/>
//       <Aishat background="orange" color="white" text="5"/>
//       <Aishat background="green" color="white" text="6"/>
//       </div>
//   )
// }

// const SingleContainer = (props) => {
//   const containerStyle = {
//     height: "180px",
//     width: "180px",
//     borderRadius: "5px",
//     backgroundColor: props.background,
//     color: props.color,
//     margin: "5px",
//   };

//   const upperContainer = {
//     height: "90px",
//     width: "180px",
//     borderRadius: "5px 5px 0px 0px",
//     backgroundColor: "black",
//   };

//   const lowerContainer = {
//     padding: "5px",
//     fontSize: "15px",
//     fontFamily: "sans-serif",
//     fontWeight: "bold",
//   };

//   return (
//     <>
//       <div style={containerStyle}>
//         <div style={upperContainer}></div>
//         <div style={lowerContainer}>{props.text}</div>
//       </div>
//     </>
//   );
// };

// function MyApp() {
//   const wrapperStyle = {
//     justifyContent: "center",
//     marginTop: "100px",
//     display: "flex",
//     backgroundColor: "#910043",
//     width: "fit-content",
//     padding: "5px",
//   };

//   return (
//     <div style={wrapperStyle}>
//       <SingleContainer
//         background="#280034"
//         color="white"
//         text="The Many Media Mutations of Teenage Mutant Ninja Turtles"
//       />

//       <SingleContainer
//         background="#280034"
//         color="white"
//         text="A Day in the Life of TMNT's Foot Clan"
//       />

//       <SingleContainer
//         background="#280034"
//         color="white"
//         text="Saw X Filmmakers on Going Old School With an Untold Chapter for Jigsaw"
//       />

//       <SingleContainer
//         background="#280034"
//         color="white"
//         text="Honest Game Trailers | Final Fantasy XVI"
//       />

//       <SingleContainer
//         background="#280034"
//         color="white"
//         text="Captain America Sings! How Disney Made Rogers: The Musical a Reality"
//       />
//     </div>
//   );
// }


const SingleBox = (props) => {
  const singleBoxStyle = {
    backgroundColor: "#E68622",
    height: "40px",
    width:"90%",
    border: "3px solid orange",
    display:"flex",
    alignItems : "center",
    justifyContent: "center",
    borderRadius: "5px"

  }

  return (
    <>
      <div style = {singleBoxStyle}>{props.text}</div>
    </>
  )
}

function MyApp(){
  const boxWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    gap:"10px",
    alignItems: "center",
    justifyContent: "center",
    
  }
  return (
    <div style={boxWrapperStyle}>
      <SingleBox text ="Schedule"/>
      <SingleBox text ="Summary"/>
      <SingleBox text ="Recent list"/>
    </div>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
