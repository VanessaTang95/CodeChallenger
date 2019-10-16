  import React from 'react';
  import AppBar from "@material-ui/core/AppBar";
  import Toolbar from "@material-ui/core/Toolbar";



  class Header extends React.Component{
    
       render(){
        return(
          <AppBar
            position="fixed"
            style={
              {
                backgroundColor:"transparent",
                boxShadow:"none",
                padding:'10px 0px'
              }
            }
            >
            <Toolbar>
              <div className="header_logo">
                <div className="font_righteous header_logo_venue">Birthday Countdown</div>
                <div className="header_logo_title">生日倒数</div>
              </div>


            </Toolbar>
          </AppBar>
        )
      }
  }

  export default Header;
