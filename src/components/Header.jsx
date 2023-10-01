const Header = ({Title}) => {

  const TitleConfg={
    display: "grid",
    justifyContent:"center"
  }
return (
    <>
    <h1 style={TitleConfg}>{Title}</h1>
    </>
    );
  };
  
  export default Header