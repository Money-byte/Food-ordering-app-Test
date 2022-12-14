import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <Card sx={{ width: '20%' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.hotel}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {product.content}
        </Typography>
      </CardContent>
      <Link to="/menu" style={{textDecoration: 'none'}}>
      <CardActions>
        <Button size="small">Show Menu</Button>
      </CardActions>
      </Link>
    </Card>
  );
}

export default Product;
