const Hero = ({ data }) => {
  return (
    <section className="restaurant container">
      <div>
        <h1>{data.restaurant.name}</h1>
        <p> {data.restaurant.description}</p>
      </div>
      <div>
        <img src={data.restaurant.picture} alt="pic" />
      </div>
    </section>
  );
};

export default Hero;
