import React,{useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Paper,
  Box,
  Grid,
  MenuItem,
} from '@material-ui/core';
// Picker
import MaterialTable, { MTableBodyRow } from "material-table";
import { forwardRef } from 'react';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
 
import Select from '@material-ui/core/Select';
 
import ShareIcon from '@material-ui/icons/Share';
 
 
function DropdownFile() {
  const tableIcons = {
 
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    // Delete: forwardRef((props, ref) => <VisibilityIcon onClick={clickMe} style={{color:"#2d91a7"}} {...props} ref={ref} />),
    // View: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <ShareIcon style={{color:"green"}} {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
     
  };
   
   
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0),
        overflow:"hidden",
        width:"1000px",
         
      },
 
    },
    tableButton: {
        backgroundColor:"#e0e0e0",
        fontWeight:600,
        padding: theme.spacing(1),
        "&:hover": {
          backgroundColor: "#FF0010",
          color:"white"
        },
        height:"27px",
        fontSize: '13px'
         
      },
      icon:{
        fontSize: '13px'
      },
    headerWidth:
    {
        width:"170px"
    }  
  }));
   
   
    const classes = useStyles();
    var columns = [
      {title: "id", field: "id", hidden: true},
      {title: <h4 class = {classes.headerWidth}>Studnet Name</h4>, field: "name",render:(row)=><Box>{row.name}</Box>},
      {title: <h4 class = {classes.headerWidth}>File Size</h4>, field: "lname"},
      {title: <h4 class = {classes.headerWidth}>Upload Date</h4>, field: "email"},
      {title: <h4 class = {classes.headerWidth}>Reference</h4>, field: "phone"},
 ];
 
    const datas = [
      { id: 1, name: 'Shelter', lname: 'Jon', email: '22/03/2021', phone: 'Arjun',   verification: 'Pending',lname: '10 MB',},
      { id: 1, name: 'Johny', lname: 'Jon', email: '29/07/2020', phone: 'Rulap',  verification: 'Processing', lname: '20 MB',},
      { id: 1, name: 'Ajay', lname: 'Jon', email: '12/03/2021', phone: 'Arjun',  verification: 'Completed', lname: '21 KB',},
      { id: 1, name: 'Arjun', lname: 'Jon', email: '12/03/2021', phone: 'Hemant',  verification: 'Pending', lname: '22 KB',},
      { id: 1, name: 'Sethia', lname: 'Jon', email: '12/03/2021', phone: 'Arjun',  verification: 'Pending', lname: '12 KB',},
      { id: 1, name: 'Depad', lname: 'Jon', email: '12/03/2021', phone: 'Arjun',  verification: 'Processing', lname: '20 MB',},
      { id: 1, name: 'Shrpad', lname: 'Jon', email: '12/03/2021', phone: 'Pankaj',  verification: 'Processing', lname: '20 KB',},
      { id: 1, name: 'Hampesh', lname: 'Jon', email: '12/03/2021', phone: 'Deband',  verification: 'Pending', lname: '8 KB',},
    ];
    
    const [data, setData] = useState([]); //table data
  
  // Record Filter on Select Member
  const[filterdata,setFilterdata] = useState(datas);
  const[filter,setFilter] = useState(false);
  const [name, setName] = React.useState('showall');
 
  const handleChange = (event) => {
    setFilter(!filter);
  };
 
  useEffect(() => {
    setFilterdata(name==="showall"?datas:datas.filter(dt=>dt.name===name))
  }, [name])
 
  // Code for share menu dropdown
 
  return (
    <div style={{ padding:26,margintTop:"10px",marginLeft:"100px"}}>
      <Grid container>
        <Grid item xs={11}>
          <div className={classes.root}>
          <Paper elevation={4} style={{marginBottom:"20px"}}>   
            <Box bgcolor="primary.main"  fontWeight="fontWeightBold" p={2}><Typography variant="h6" style={{color:"white"}}>Search Records</Typography></Box>
             
          </Paper>  
           
           <Paper elevation={0} >
             <Grid container  >
               <Grid item xs={12} >
                  <Box mt={2} mb={4}  display="flex"> 
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        style={{marginLeft:"30px"}}
                      > 
                       <MenuItem value="showall">Select Student</MenuItem>
                        <MenuItem value="Johny">Johny</MenuItem>
                        <MenuItem value="Deba">Deba</MenuItem>
                        <MenuItem value="Ranju">Ranju</MenuItem>
                        <MenuItem value="Arjun">Arjun</MenuItem>
                      
                      </Select>
                   </Box>
                  <MaterialTable mt={0}
                      
                    title="Student Details"
                    columns={columns}
                    data={filterdata}
                    icons={tableIcons}
                    
                    options={{
                      headerStyle:{size:'80px'},
                      search: false
                      }}
                  />
         
               </Grid>
              </Grid> 
           </Paper>
          </div>  
        </Grid>   
     </Grid> 
    </div>
  );
}
 
 
export default DropdownFile;