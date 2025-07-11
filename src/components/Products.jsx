import '../styles/Products.css';
import ProductCard from "./ProductCard";

function Products() {
  const productos = [
    {
      nombre: "Botella M&G",
      precio: "$12.000",
      descripcion: "Botella térmica capacidad 500 mls",
      imagen: "../img/botella-m&g.png",
    },
    {
      nombre: "Buzo Pink MG",
      precio: "$33.000",
      descripcion: "Buzo tela algodón, talles XS al XXXL",
      imagen: "../img/Buzo-rosa.png",
    },
    {
      nombre: "Portacosméticos MG",
      precio: "$20.000",
      descripcion: "Portacosméticos de tela rígido",
      imagen: "../img/cartuchera-m&g.png",
    },
    {
      nombre: "Llavero Smash",
      precio: "$4.000",
      descripcion: "Llavero de paleta con adicional M&G",
      imagen: "../img/Llavero-m&g.png",
    },
    {
      nombre: "Vaso Match",
      precio: "$4.000",
      descripcion: "Vaso plástico capacidad 500 mls",
      imagen: "../img/vaso-m&g.png",
    },
    {
      nombre: "Visera MG",
      precio: "$22.000",
      descripcion: "Visera de tela con abrojo regulable",
      imagen: "../img/visera-m&g.png",
    },
    {
      nombre: "Medias Heart",
      precio: "$8.000",
      descripcion: "Medias media caña de algodón",
      imagen: "../img/medias-heart.png",
    },
    {
      nombre: "Medias Ball",
      precio: "$8.000",
      descripcion: "Medias media caña de algodón",
      imagen: "../img/medias-ball.png",
    },
    {
      nombre: "Medias MG",
      precio: "$8.000",
      descripcion: "Medias media caña de algodón",
      imagen: "../img/medias-mg.png",
    },
    {
      nombre: "Musculosa Ball",
      precio: "$22.000",
      descripcion: "Musculosa de lycra talles XS al XXXL",
      imagen: "../img/musculosa-ball.png",
    },
    {
      nombre: "Musculosa Heart",
      precio: "$22.000",
      descripcion: "Musculosa de lycra talles XS al XXXL",
      imagen: "../img/musculosa-heart.png",
    },
    {
      nombre: "Musculosa MG",
      precio: "$22.000",
      descripcion: "Musculosa de lycra talles XS al XXXL",
      imagen: "../img/musculosa-mg.png",
    },

    
  ];

 return (
    <section className="productos">
      <div className="container-productos">
        {productos.map((producto, index) => (
          <ProductCard
            key={index}
            imagen={producto.imagen}
            nombre={producto.nombre}
            precio={producto.precio}
            descripcion={producto.descripcion}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
