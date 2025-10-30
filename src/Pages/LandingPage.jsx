import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <div>
      {/* landing part */}
      <section style={{width:'100%', height:'100vh',backgroundImage:"url('https://i0.wp.com/www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png?fit=2240%2C1260&ssl=1')",backgroundAttachment:'fixed',
      backgroundPosition:'top',backgroundSize:'cover'}}className='container-fluid row align-items-center'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center"
          style={{backgroundColor:"rgba(255,255,255,0.5)"}}>
            <h3>Designed to get hired.
              <p>Your skills, your story, your next job - all in one.</p>
            </h3>
           <Link to={'/resume'} className=' btn text-white'style={{backgroundColor:'purple'}}>Make your Resume</Link>

          </div>
          <div className="col-md-4"></div>
        </div>

      </section>
      {/* tool */}
      <section className=' m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className='container row align-items-center'>
          <div className="col-md-6">
            <div className="my-3">
              <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards</p>
        </div>
                    <div className="my-3">
              <h4>Cover Letter</h4>
            <p>Easily write professional cover letters.
</p>
        </div>
                    <div className="my-3">
              <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
        </div>
                    <div className="my-3">
              <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner</p>
        </div>

              </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="resume" />
          </div>
        </div>
      </section>
      {/* images */}
      <section style={{height:'500px',width:'100%',backgroundImage:"url('https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg')",
        backgroundAttachment:'fixed',backgroundPosition:'top', backgroundSize:'cover'
      }}></section>
      {/* testimony */}
       <section className='m-5'>
        <h1 className="text-center my-5">Testimony</h1>
        <div className="row container">
          <div className="col-md-5">
            <h3 className='my-5'>Trusted by professionals worldwide.</h3>
            
      <p>At LiveCareer, we don't just help you create résumés — we help you land 
            the job. Whether you're a seasoned professional or just starting out, 
           our tools are designed to get results.</p>

<p>In fact, users who used LiveCareer reported getting hired an average of 
  48 days faster.</p>

<p>Join thousands of job-seekers who’ve fast-tracked their careers with a
   résumé that truly stands out.</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-3">
                <img className='w-100' src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.fq_LK5hSwoQjXOyaIrScuQHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse2.mm.bing.net/th/id/OIP.kf9TvsuxepBOhAV4cTHEoAHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.65cr4DZsNGAvYWUr6Rg5qQHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.u__lnS7VeRD27KDXfxKzBgHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.os7uM5TJXlUufJbHt9t7UAHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse1.mm.bing.net/th/id/OIP.t1-t9FzCErAaW4X93_nIUgHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3">
                <img className='w-100' src="https://tse2.mm.bing.net/th/id/OIP.kf9TvsuxepBOhAV4cTHEoAHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse2.mm.bing.net/th/id/OIP.so5s5QgNUgKSgouiR2R1zQHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse2.mm.bing.net/th/id/OIP.6Z9IzwzFC4Xz0efJrZa7CgHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
              <div className="col-3">
                <img className='w-100' src="https://tse3.mm.bing.net/th/id/OIP.u__lnS7VeRD27KDXfxKzBgHaHa?pid=Api&P=0&h=180" alt="1" />

              </div>
            </div>

          </div>
        </div>

       </section>

    </div>
  )
}

export default Landingpage
