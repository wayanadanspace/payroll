import Styles from '/styles/AddressDetailsWizard.module.css'

import Layout from '../../Components/layout.js';
const AddressDetailsWizard = () => {
let step = 1;
    return (
        <Layout>
        <div>
            <div class="container-fluid body-card">
  <div className="row">
    <div className="col-lg-12">
      <ul id={Styles.progressbar}>
      <li className={step >=1  ? 'active' : 'inactive'}>Employee Profile<br/></li>
  <li className={step >=1  ? 'active' : 'inactive'}>Employee Profile<br/></li>
  <li className={step >= 2 ? 'active' : 'inactive'}>Examination details/Certification Exam<br/> Details</li>
  <li className={step >= 3 ? 'active' : 'inactive'}>Syllabus<br/> Outline/Examination Mode</li>
  <li className={step >= 4 ? 'active' : 'inactive'}>Question<br/> Details/Examination Syllabus</li>
  <li className={step >= 8 ? 'active' : 'inactive'}>Exam ScoreCard</li>
  <li className={step >= 6 ? 'active' : 'inactive'}>CPE<br/> Mode</li>
  <li className={step >= 7 ? 'active' : 'inactive'}>eCPE<br/> Mode</li>
      </ul>
      <hr></hr>
    </div>
  </div>
</div>
</div>
</Layout>
    )
}
export default AddressDetailsWizard;