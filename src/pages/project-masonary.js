import Breadcrumb from "@/components/common/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import React from "react";

function ProjectMasonaryPage() {
  return (
    <Layout>
      <Breadcrumb
        pageList="Projects Masonary"
        title="Our Complited Projects"
        pageName="PROJECTS MASONARY"
      />
      <div className="portfolio-masonary-page sec-mar">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <ul className="isotope-menu">
          <li className="active" data-filter="*">All</li>
          <li data-filter=".ui">UI/UX</li>
          <li data-filter=".web">Web Design</li>
          <li data-filter=".developing">Developing</li>
          <li data-filter=".graphic">Graphic Design</li>
        </ul>
      </div>
    </div>
    <div className="row g-4 project-items mb-55">
      <div className="col-lg-5 col-sm-6 single-item ui">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-01.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Streamlining IT Infrastructure</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-7 col-sm-6 single-item web">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-02.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Transforming Customer Experience</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 single-item developing">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-03.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Scaling Agile Development</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-6 single-item graphic">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-04.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Optimizing IT Operations</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 single-item graphic">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-05.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Maximizing Efficiency With DevOps</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 single-item ui">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-06.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Implementing Robotic Process Automation</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 single-item developing">
        <div className="single-work magnetic-item">
          <div className="work-img">
            <img className="img-fluid" src="assets/img/home-4/work-07.png" alt="" />
          </div>
          <div className="work-content">
            <h3><Link legacyBehavior href="/project-details"><a>Scaling Agile Development</a></Link></h3>
            <span>Web development</span>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 d-flex justify-content-center">
        <div className="load-more-btn">
          <Link legacyBehavior href="/project-masonary"><a className="primary-btn3">Load More</a></Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
}

export default ProjectMasonaryPage;
