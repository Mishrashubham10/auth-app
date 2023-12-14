import './home.css';

const Home = () => {
  const info = `A versatile and results-driven full-stack developer with a proven track record of designing, implementing, testing, and maintaining innovative and scalable software solutions. Proficient in both front-end and back-end technologies, I bring a comprehensive skill set that spans across HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. With a strong foundation in software engineering principles, I excel in crafting responsive and user-friendly interfaces while seamlessly integrating with robust server-side architectures. Demonstrated ability to collaborate within cross-functional teams, I am adept at translating business requirements into technical solutions, ensuring optimal performance and user experience. Continuously staying abreast of emerging technologies and best practices, I am committed to delivering high-quality code and contributing to the success of dynamic projects.`;

  return (
    <main className="home">
      <div className="container">
        <div className="imgSec">
          <img
            src="https://cdn.pixabay.com/photo/2023/10/11/13/41/ship-8308680_1280.jpg"
            alt=""
            className="image"
          />
          {/* <img
            src="https://cdn.pixabay.com/photo/2023/10/08/14/18/red-stem-8302232_1280.jpg"
            alt=""
            className="Image"
          />
          <img
            src="https://cdn.pixabay.com/photo/2023/10/11/11/42/coast-8308438_1280.jpg"
            alt=""
            className="Image"
          />
          <img
            src="https://cdn.pixabay.com/photo/2023/12/05/01/13/elks-8430545_1280.jpg"
            alt=""
            className="Image"
          />
          <img
            src="https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg"
            alt=""
            className="Image"
          /> */}
        </div>
        <div className="info">
          <div className="infoTitle">
            <h1 className="title">Iam Shubham
            Full-Stack Web Developer</h1>
          </div>
          <div className="desc">
            <p className='description'>{info.substring(0, 250)}...</p>
          </div>
          <button className="btn">Read More</button>
        </div>
      </div>
    </main>
  );
};

export default Home;