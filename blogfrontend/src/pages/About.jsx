import AboutHeader from '../components/aboutheader';
import Footer from '../components/Footer';
import Nav from '../components/navBar';

function About() {
  return(
    <>
    <Nav/>
    <AboutHeader/>
        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>I am a Computer Science student currently learning MERN Stack Development, JavaScript, and Robotic Process Automation using Automation Anywhere. I enjoy building web applications, exploring new technologies, and solving coding problems. I regularly practice and work on projects to improve my skills.
                        </p>
                        <p>
                        My goal is to become a skilled software developer who can create efficient and user-friendly applications. I focus on teamwork, problem-solving, and continuous learning. I like writing clean code and developing solutions for real-world problems.
                       </p>
                        <p>
                        In my free time, I learn new programming concepts, practice DSA problems, and explore the latest tech trends. I am always ready to improve my knowledge and take on new challenges.</p>
                    </div>
                    <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a></div>
            
                </div>
            </div>
        </main>
      <Footer/>
    </>
  )
}

export default About;