import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormTwoToneIcon from '@mui/icons-material/ThunderstormTwoTone';
import FlareIcon from '@mui/icons-material/Flare';
import AcUnitTwoToneIcon from '@mui/icons-material/AcUnitTwoTone';
import "./InfoBox.css";

export default function InfoBox({info}){
const INIT_URL = "https://images.unsplash.com/photo-1572079756566-f90385aaa371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fERlbGhpJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SG90JTIwZGF5fGVufDB8fDB8fHww";
const COLD_URL = "https://plus.unsplash.com/premium_photo-1680720455757-0440b371f45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMGRheXxlbnwwfHwwfHx8MA%3D%3D";
const RAIN_URL = "https://images.unsplash.com/photo-1626124902047-f3db8b02f740?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjBkYXl8ZW58MHx8MHx8fDA%3D";
    
return(
        <div className="InfoBox">
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
           {
           info.humidity > 80 
           ? <ThunderstormTwoToneIcon/>
           : info.temp > 15 
           ? <FlareIcon/>
           : <AcUnitTwoToneIcon/> 
          }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         {/* span component add kiya h bcz err <p> component cannot apper as a descendant </p> */}
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>Min Temp = {info.tempMin}&deg;C</p>
         <p>Max Temp = {info.tempMax}&deg;C</p>
         <p>The Weather can be described as <i>{info.weather}</i> & Feels Like = {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
};


